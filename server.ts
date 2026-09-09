import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { createServer as createHttpServer } from "http";
import { WebSocketServer, WebSocket } from "ws";
import net from "net";
import url from "url";
import mineflayer from "mineflayer";
import { Vec3 } from "vec3";

// Helper function to scan blocks around a position and stream to web client
function streamBlocksAround(
  bot: any,
  ws: WebSocket,
  center: { x: number; y: number; z: number },
  radius: number = 14
) {
  if (ws.readyState !== WebSocket.OPEN) return;
  const blocks: { x: number; y: number; z: number; type: string }[] = [];
  const cx = Math.floor(center.x);
  const cy = Math.floor(center.y);
  const cz = Math.floor(center.z);

  const minY = Math.max(-64, cy - 12);
  const maxY = Math.min(320, cy + 12);

  const vec = new Vec3(0, 0, 0);
  const neighborVec = new Vec3(0, 0, 0);
  const neighborOffsets = [
    [0, 1, 0],
    [0, -1, 0],
    [1, 0, 0],
    [-1, 0, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];

  for (let x = cx - radius; x <= cx + radius; x++) {
    for (let z = cz - radius; z <= cz + radius; z++) {
      for (let y = minY; y <= maxY; y++) {
        vec.set(x, y, z);
        const b = bot.blockAt(vec);
        if (!b || !b.name || b.name === "air" || b.name === "cave_air" || b.name === "void_air") {
          continue;
        }
        // Voxel surface culling: only stream blocks exposed to air or transparent blocks
        let isExposed = false;
        for (const [dx, dy, dz] of neighborOffsets) {
          neighborVec.set(x + dx, y + dy, z + dz);
          const nb = bot.blockAt(neighborVec);
          if (
            !nb ||
            !nb.name ||
            nb.name === "air" ||
            nb.name === "cave_air" ||
            nb.name === "void_air" ||
            nb.transparent
          ) {
            isExposed = true;
            break;
          }
        }
        if (isExposed) {
          blocks.push({ x, y, z, type: b.name });
        }
      }
    }
  }

  // Stream in batches of 1000 blocks to prevent WebSocket buffer saturation
  for (let i = 0; i < blocks.length; i += 1000) {
    const batch = blocks.slice(i, i + 1000);
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(
        JSON.stringify({
          type: "blocks",
          blocks: batch,
          isInitial: i === 0,
          total: blocks.length,
        })
      );
    }
  }
}

// Helper function to stream a single chunk column (16x16)
function streamChunkColumn(bot: any, ws: WebSocket, chunkStartX: number, chunkStartZ: number) {
  if (ws.readyState !== WebSocket.OPEN) return;
  const blocks: { x: number; y: number; z: number; type: string }[] = [];
  const playerY = bot.entity ? Math.floor(bot.entity.position.y) : 64;
  const minY = Math.max(-64, playerY - 12);
  const maxY = Math.min(320, playerY + 12);

  const vec = new Vec3(0, 0, 0);
  const neighborVec = new Vec3(0, 0, 0);
  const neighborOffsets = [
    [0, 1, 0],
    [0, -1, 0],
    [1, 0, 0],
    [-1, 0, 0],
    [0, 0, 1],
    [0, 0, -1],
  ];

  for (let x = chunkStartX; x < chunkStartX + 16; x++) {
    for (let z = chunkStartZ; z < chunkStartZ + 16; z++) {
      for (let y = minY; y <= maxY; y++) {
        vec.set(x, y, z);
        const b = bot.blockAt(vec);
        if (!b || !b.name || b.name === "air" || b.name === "cave_air" || b.name === "void_air") {
          continue;
        }
        let isExposed = false;
        for (const [dx, dy, dz] of neighborOffsets) {
          neighborVec.set(x + dx, y + dy, z + dz);
          const nb = bot.blockAt(neighborVec);
          if (
            !nb ||
            !nb.name ||
            nb.name === "air" ||
            nb.name === "cave_air" ||
            nb.name === "void_air" ||
            nb.transparent
          ) {
            isExposed = true;
            break;
          }
        }
        if (isExposed) {
          blocks.push({ x, y, z, type: b.name });
        }
      }
    }
  }

  if (blocks.length > 0 && ws.readyState === WebSocket.OPEN) {
    ws.send(
      JSON.stringify({
        type: "blocks",
        blocks,
        isInitial: false,
      })
    );
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API health
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", version: "1.21.4", timestamp: Date.now() });
  });

  // Real Minecraft server status ping endpoint (SLP + API query + TCP fallback)
  app.get("/api/ping", async (req, res) => {
    const host = (req.query.host as string) || "localhost";
    const port = parseInt((req.query.port as string) || "25565", 10);
    const startTime = Date.now();

    // 1. Try public Minecraft server status API for real MOTD, player counts & 64x64 icon
    if (host !== "localhost" && host !== "127.0.0.1") {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 3200);

        const response = await fetch(
          `https://api.mcstatus.io/v2/status/java/${encodeURIComponent(host)}:${port}`,
          { signal: controller.signal }
        );
        clearTimeout(timeout);

        if (response.ok) {
          const data: any = await response.json();
          if (data && data.online) {
            return res.json({
              online: true,
              ping:
                typeof data.round_trip_latency === "number"
                  ? Math.round(data.round_trip_latency)
                  : Date.now() - startTime,
              host,
              port,
              version: data.version?.name_clean || "Minecraft 1.21.4",
              motd: data.motd?.clean || data.motd?.raw || "A Minecraft Server",
              playersOnline: data.players?.online ?? 1,
              maxPlayers: data.players?.max ?? 20,
              icon: data.icon || undefined,
            });
          }
        }
      } catch (err) {
        // Fallback to direct TCP ping if external API is unreachable
      }
    }

    // 2. Direct TCP Socket Ping (Fallback for local or direct servers)
    const socket = new net.Socket();
    socket.setTimeout(2500);

    socket.on("connect", () => {
      const ping = Date.now() - startTime;
      socket.destroy();
      res.json({
        online: true,
        ping,
        host,
        port,
        version: "Minecraft 1.21.4",
        motd: `${host} Minecraft Sunucusu`,
        playersOnline: 1,
        maxPlayers: 100,
        icon: undefined,
      });
    });

    socket.on("timeout", () => {
      socket.destroy();
      res.json({
        online: false,
        ping: -1,
        error: "Zaman Aşımı (Timeout)",
        host,
        port,
        motd: "Sunucuya ulaşılamıyor (Kapalı)",
        playersOnline: 0,
        maxPlayers: 0,
      });
    });

    socket.on("error", (err) => {
      socket.destroy();
      res.json({
        online: false,
        ping: -1,
        error: err.message,
        host,
        port,
        motd: "Sunucu kapalı veya ulaşılamıyor",
        playersOnline: 0,
        maxPlayers: 0,
      });
    });

    socket.connect(port, host);
  });

  const httpServer = createHttpServer(app);

  // WebSocket Server for Minecraft Protocol Bridge & Proxy
  const wss = new WebSocketServer({ noServer: true });

  httpServer.on("upgrade", (request, socket, head) => {
    const parsedUrl = url.parse(request.url || "", true);
    if (parsedUrl.pathname === "/ws-proxy") {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request);
      });
    } else {
      socket.destroy();
    }
  });

  wss.on("connection", (ws, req) => {
    const parsedUrl = url.parse(req.url || "", true);
    const host = (parsedUrl.query.host as string) || "127.0.0.1";
    const port = parseInt((parsedUrl.query.port as string) || "25565", 10);
    const username =
      (parsedUrl.query.username as string) ||
      `Player_${Math.floor(Math.random() * 8999 + 1000)}`;
    const mode = (parsedUrl.query.mode as string) || "protocol";

    console.log(
      `[MC Bridge] New client connection request for ${host}:${port} (${username}) [mode=${mode}]`
    );

    if (mode === "raw") {
      // Raw TCP Socket Fallback
      const tcpSocket = new net.Socket();
      tcpSocket.connect(port, host, () => {
        ws.send(JSON.stringify({ type: "connected", host, port }));
      });
      tcpSocket.on("data", (data) => {
        if (ws.readyState === WebSocket.OPEN) ws.send(data);
      });
      tcpSocket.on("close", () => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: "closed" }));
          ws.close();
        }
      });
      tcpSocket.on("error", (err) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: "error", message: err.message }));
          ws.close();
        }
      });
      ws.on("message", (msg) => tcpSocket.write(msg as Buffer));
      ws.on("close", () => tcpSocket.destroy());
      return;
    }

    // ==========================================
    // FULL MINECRAFT JAVA PROTOCOL CLIENT BRIDGE
    // ==========================================
    let bot: any = null;
    let isCleanedUp = false;
    let lastPlayerChunkX = 999999;
    let lastPlayerChunkZ = 999999;

    const cleanup = () => {
      if (isCleanedUp) return;
      isCleanedUp = true;
      console.log(`[MC Bridge] Cleaning up bot for ${host}:${port} (${username})`);
      if (bot) {
        try {
          bot.quit();
        } catch {
          // ignore
        }
        bot = null;
      }
    };

    ws.on("close", cleanup);
    ws.on("error", cleanup);

    try {
      ws.send(
        JSON.stringify({
          type: "status",
          status: "connecting",
          message: `${host}:${port} sunucusuna Minecraft Java Protokolü ile bağlanılıyor...`,
        })
      );

      // Create full-featured Mineflayer bot
      bot = mineflayer.createBot({
        host,
        port,
        username,
        auth: "offline",
        checkTimeoutInterval: 45000,
        hideErrors: false,
        skipValidation: true,
      });

      bot.on("login", () => {
        console.log(`[MC Bridge] Bot logged into ${host}:${port} as ${bot.username}`);
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(
            JSON.stringify({
              type: "login",
              username: bot.username,
              message: `Minecraft sunucusuna giriş yapıldı (${bot.username})`,
            })
          );
        }
      });

      bot.on("spawn", () => {
        console.log(`[MC Bridge] Bot spawned at`, bot.entity?.position);
        if (ws.readyState === WebSocket.OPEN && bot.entity) {
          const pos = bot.entity.position;
          lastPlayerChunkX = Math.floor(pos.x / 16);
          lastPlayerChunkZ = Math.floor(pos.z / 16);

          ws.send(
            JSON.stringify({
              type: "spawn",
              x: pos.x,
              y: pos.y,
              z: pos.z,
              yaw: bot.entity.yaw ?? 0,
              pitch: bot.entity.pitch ?? 0,
              health: bot.health ?? 20,
              food: bot.food ?? 20,
              gameMode: bot.game?.gameMode ?? "survival",
              dimension: bot.game?.dimension ?? "overworld",
            })
          );

          // Stream real initial blocks surrounding spawn
          setTimeout(() => {
            if (bot && bot.entity) {
              streamBlocksAround(bot, ws, bot.entity.position, 14);
            }
          }, 300);
        }
      });

      bot.on("health", () => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(
            JSON.stringify({
              type: "health",
              health: bot.health,
              food: bot.food,
            })
          );
        }
      });

      bot.on("chat", (author: string, text: string) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(
            JSON.stringify({
              type: "chat",
              sender: author,
              text,
            })
          );
        }
      });

      bot.on("message", (jsonMsg: any) => {
        if (ws.readyState === WebSocket.OPEN) {
          const text = jsonMsg.toString ? jsonMsg.toString() : String(jsonMsg);
          if (text.trim()) {
            ws.send(
              JSON.stringify({
                type: "chat",
                sender: "Sunucu",
                text,
              })
            );
          }
        }
      });

      bot.on("blockUpdate", (oldBlock: any, newBlock: any) => {
        if (ws.readyState === WebSocket.OPEN && newBlock && newBlock.position) {
          ws.send(
            JSON.stringify({
              type: "blockUpdate",
              x: newBlock.position.x,
              y: newBlock.position.y,
              z: newBlock.position.z,
              blockType: newBlock.name,
            })
          );
        }
      });

      bot.on("chunkColumnLoad", (point: any) => {
        if (bot && bot.entity && ws.readyState === WebSocket.OPEN) {
          const dx = Math.abs(point.x - bot.entity.position.x);
          const dz = Math.abs(point.z - bot.entity.position.z);
          if (dx <= 40 && dz <= 40) {
            streamChunkColumn(bot, ws, point.x, point.z);
          }
        }
      });

      bot.on("kicked", (reason: any) => {
        console.warn(`[MC Bridge] Bot kicked:`, reason);
        if (ws.readyState === WebSocket.OPEN) {
          const reasonStr =
            typeof reason === "string" ? reason : JSON.stringify(reason);
          ws.send(
            JSON.stringify({
              type: "kicked",
              reason: reasonStr,
            })
          );
        }
      });

      bot.on("error", (err: any) => {
        console.error(`[MC Bridge error]:`, err.message);
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(
            JSON.stringify({
              type: "error",
              message: err.message || "Minecraft Protocol bağlantı hatası",
            })
          );
        }
      });

      bot.on("end", (reason: any) => {
        console.log(`[MC Bridge] Bot disconnected:`, reason);
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(
            JSON.stringify({
              type: "closed",
              reason: typeof reason === "string" ? reason : "Sunucu bağlantısı kapandı",
            })
          );
        }
      });

      // Browser client packets handling
      ws.on("message", (rawMsg) => {
        if (!bot) return;
        try {
          const msg = JSON.parse(rawMsg.toString());
          if (msg.type === "move" && bot.entity) {
            bot.entity.position.set(msg.x, msg.y, msg.z);
            bot.entity.yaw = msg.yaw;
            bot.entity.pitch = msg.pitch;

            // Check if player moved to another chunk
            const curChunkX = Math.floor(msg.x / 16);
            const curChunkZ = Math.floor(msg.z / 16);
            if (
              Math.abs(curChunkX - lastPlayerChunkX) >= 1 ||
              Math.abs(curChunkZ - lastPlayerChunkZ) >= 1
            ) {
              lastPlayerChunkX = curChunkX;
              lastPlayerChunkZ = curChunkZ;
              streamBlocksAround(bot, ws, { x: msg.x, y: msg.y, z: msg.z }, 12);
            }
          } else if (msg.type === "chat" && msg.text) {
            bot.chat(msg.text);
          } else if (msg.type === "dig") {
            const b = bot.blockAt(new Vec3(msg.x, msg.y, msg.z));
            if (b) {
              bot.dig(b).catch(() => {});
            }
          } else if (msg.type === "place") {
            const ref = bot.blockAt(new Vec3(msg.x, msg.y, msg.z));
            if (ref) {
              const face = msg.face || { x: 0, y: 1, z: 0 };
              bot
                .placeBlock(ref, new Vec3(face.x, face.y, face.z))
                .catch(() => {});
            }
          } else if (msg.type === "requestChunks" && bot.entity) {
            streamBlocksAround(bot, ws, bot.entity.position, 14);
          }
        } catch {
          // ignore invalid JSON
        }
      });
    } catch (err: any) {
      console.error(`[MC Bridge] Failed to init bot:`, err);
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: "error", message: err.message }));
      }
    }
  });

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(
      `Minecraft Java 1.21.4 Web Client server running on http://localhost:${PORT}`
    );
  });
}

startServer();
