import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { createServer as createHttpServer } from "http";
import { WebSocketServer, WebSocket } from "ws";
import net from "net";
import url from "url";
import mineflayer from "mineflayer";
import { Vec3 } from "vec3";

// Helper function to clean Minecraft text, strip formatting codes (§a, §c, etc.) and parse JSON components safely
function cleanMinecraftText(raw: any): string {
  if (raw == null) return "";
  try {
    if (typeof raw === "string") {
      const trimmed = raw.trim();
      // Handle potential JSON string format from modern servers
      if ((trimmed.startsWith("{") && trimmed.endsWith("}")) || (trimmed.startsWith("[") && trimmed.endsWith("]"))) {
        try {
          const parsed = JSON.parse(trimmed);
          return cleanMinecraftText(parsed);
        } catch {
          // not JSON, continue
        }
      }
      return trimmed.replace(/§[0-9a-fk-or]/gi, "").trim();
    }
    if (typeof raw === "number" || typeof raw === "boolean") {
      return String(raw);
    }
    // Mineflayer ChatMessage instance support
    if (typeof raw.toString === "function" && raw.toString !== Object.prototype.toString) {
      const str = raw.toString();
      if (str && typeof str === "string" && !str.startsWith("[object ")) {
        return str.replace(/§[0-9a-fk-or]/gi, "").trim();
      }
    }
    let result = "";
    if (raw.text) result += raw.text;
    if (raw.translate) {
      result += raw.translate;
    }
    if (Array.isArray(raw.extra)) {
      for (const item of raw.extra) {
        result += cleanMinecraftText(item);
      }
    }
    if (Array.isArray(raw.with)) {
      for (const item of raw.with) {
        result += " " + cleanMinecraftText(item);
      }
    }
    if (raw.value != null) {
      result += cleanMinecraftText(raw.value);
    }
    if (raw.content != null) {
      result += cleanMinecraftText(raw.content);
    }
    if (raw.body && raw.body.content != null) {
      result += cleanMinecraftText(raw.body.content);
    }
    return result.replace(/§[0-9a-fk-or]/gi, "").trim();
  } catch {
    return "";
  }
}

// Extract hologram text or display name from entity metadata (DecentHolograms, HolographicDisplays, text_display)
function extractEntityCustomName(entity: any): string {
  if (!entity) return "";
  try {
    if (entity.customName) {
      const c = cleanMinecraftText(entity.customName);
      if (c && c.length > 0) return c;
    }
    if (entity.displayName) {
      const c = cleanMinecraftText(entity.displayName);
      if (c && c.length > 0 && c !== entity.name) return c;
    }
    // Scan metadata array for text display or armor stand name
    if (Array.isArray(entity.metadata)) {
      for (const entry of entity.metadata) {
        if (entry == null) continue;
        if (typeof entry === "string" || typeof entry === "object") {
          const c = cleanMinecraftText(entry);
          if (c && c.length > 0 && c !== entity.name && !c.startsWith("[object") && c.length < 250) {
            return c;
          }
        }
      }
    } else if (entity.metadata && typeof entity.metadata === "object") {
      for (const key of Object.keys(entity.metadata)) {
        const val = entity.metadata[key];
        if (val == null) continue;
        if (typeof val === "string" || typeof val === "object") {
          const c = cleanMinecraftText(val);
          if (c && c.length > 0 && c !== entity.name && !c.startsWith("[object") && c.length < 250) {
            return c;
          }
        }
      }
    }
  } catch {}
  return "";
}

// Serialize Minecraft entity into client payload with Hologram detection
function serializeEntity(entity: any) {
  if (!entity || !entity.position) return null;
  const rawName = (entity.name || entity.mobType || entity.type || "entity").toLowerCase();
  const cName = extractEntityCustomName(entity);
  
  const isHologram = 
    rawName === "text_display" || 
    rawName === "interaction" || 
    rawName === "area_effect_cloud" || 
    rawName === "marker" ||
    (rawName === "armor_stand" && !!cName);

  return {
    id: entity.id,
    name: isHologram && cName ? cName : (entity.name || entity.mobType || entity.type || "entity"),
    type: entity.type || "mob",
    username: entity.username || undefined,
    customName: cName || undefined,
    isHologram,
    x: entity.position.x,
    y: entity.position.y,
    z: entity.position.z,
    yaw: entity.yaw || 0,
    pitch: entity.pitch || 0,
    width: entity.width || 0.6,
    height: entity.height || 1.8,
    health: entity.health,
  };
}

// Helper to extract inventory and hotbar slots
function getInventoryPayload(bot: any) {
  if (!bot || !bot.inventory || !bot.inventory.slots) return null;
  const hotbar: { slot: number; type: string; name: string; count: number }[] = [];
  // Slots 36 to 44 correspond to hotbar indices 0 to 8
  for (let i = 0; i < 9; i++) {
    const item = bot.inventory.slots[36 + i];
    if (item && item.name && item.count > 0) {
      hotbar.push({
        slot: i,
        type: item.name,
        name: item.displayName || item.name,
        count: item.count,
      });
    } else {
      hotbar.push({
        slot: i,
        type: "air",
        name: "Boş",
        count: 0,
      });
    }
  }

  const inventory: { slot: number; type: string; name: string; count: number }[] = [];
  // Slots 9 to 35 correspond to the 3x9 main inventory
  for (let i = 9; i < 36; i++) {
    const item = bot.inventory.slots[i];
    if (item && item.name && item.count > 0) {
      inventory.push({
        slot: i,
        type: item.name,
        name: item.displayName || item.name,
        count: item.count,
      });
    } else {
      inventory.push({
        slot: i,
        type: "air",
        name: "Boş",
        count: 0,
      });
    }
  }

  return {
    type: "inventory",
    hotbar,
    inventory,
    selectedSlot: bot.quickBarSlot ?? 0,
  };
}

// Fast heightmap & surface block extractor for a 16x16 chunk column
function extractChunkColumnBlocks(bot: any, chunkStartX: number, chunkStartZ: number) {
  const blocks: { x: number; y: number; z: number; type: string }[] = [];
  const playerY = bot.entity ? Math.floor(bot.entity.position.y) : 64;
  const vec = new Vec3(0, 0, 0);

  const startY = Math.min(256, Math.max(90, playerY + 36));
  const bottomY = Math.max(-60, playerY - 45);

  for (let x = chunkStartX; x < chunkStartX + 16; x++) {
    for (let z = chunkStartZ; z < chunkStartZ + 16; z++) {
      let consecutiveSolid = 0;

      for (let y = startY; y >= bottomY; y--) {
        vec.set(x, y, z);
        const b = bot.blockAt(vec);
        const isAir = !b || !b.name || b.name === "air" || b.name === "cave_air" || b.name === "void_air";

        if (isAir) {
          consecutiveSolid = 0;
          continue;
        }

        consecutiveSolid++;

        // Keep top 3 layers of each surface (plus transparent/liquid blocks like water, leaves, glass)
        if (consecutiveSolid <= 3 || b.transparent || b.name === "water" || b.name === "lava") {
          blocks.push({ x, y, z, type: b.name });
        } else if (consecutiveSolid > 7) {
          // deep solid stone/dirt underneath - skip until next air gap
          continue;
        }
      }
    }
  }

  return blocks;
}

// Stream a single chunk column to the web client
function streamChunkColumn(
  bot: any,
  ws: WebSocket,
  chunkStartX: number,
  chunkStartZ: number,
  isInitial = false
) {
  if (ws.readyState !== WebSocket.OPEN) return;
  const blocks = extractChunkColumnBlocks(bot, chunkStartX, chunkStartZ);
  if (blocks.length > 0) {
    ws.send(
      JSON.stringify({
        type: "blocks",
        chunkX: Math.floor(chunkStartX / 16),
        chunkZ: Math.floor(chunkStartZ / 16),
        blocks,
        isInitial,
      })
    );
  }
}

// Helper function to stream all chunks in a radius around the player
function streamChunksAround(
  bot: any,
  ws: WebSocket,
  playerChunkX: number,
  playerChunkZ: number,
  chunkRadius = 2,
  sentChunks?: Set<string>
) {
  if (ws.readyState !== WebSocket.OPEN || !bot) return;

  for (let dx = -chunkRadius; dx <= chunkRadius; dx++) {
    for (let dz = -chunkRadius; dz <= chunkRadius; dz++) {
      const cx = playerChunkX + dx;
      const cz = playerChunkZ + dz;
      const key = `${cx},${cz}`;
      if (sentChunks && sentChunks.has(key)) continue;

      const chunkStartX = cx * 16;
      const chunkStartZ = cz * 16;
      const blocks = extractChunkColumnBlocks(bot, chunkStartX, chunkStartZ);
      if (blocks.length > 0) {
        if (sentChunks) sentChunks.add(key);
        ws.send(
          JSON.stringify({
            type: "blocks",
            chunkX: cx,
            chunkZ: cz,
            blocks,
            isInitial: false,
          })
        );
      }
    }
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
      } catch {
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
    const sentChunks = new Set<string>();

    // Chat message deduplication cache (500ms sliding window)
    const recentMessages = new Map<string, number>();
    const sendChatMessage = (sender: string, text: string, isSystem = false) => {
      if (ws.readyState !== WebSocket.OPEN) return;
      const clean = cleanMinecraftText(text);
      if (!clean) return;

      const cacheKey = `${sender}:${clean}`;
      const now = Date.now();
      const lastSent = recentMessages.get(cacheKey);
      if (lastSent && now - lastSent < 600) {
        return; // Deduplicate
      }
      recentMessages.set(cacheKey, now);

      // Prune old entries
      if (recentMessages.size > 100) {
        for (const [k, t] of recentMessages.entries()) {
          if (now - t > 5000) recentMessages.delete(k);
        }
      }

      ws.send(
        JSON.stringify({
          type: "chat",
          sender: sender || "Sunucu",
          text: clean,
          isSystem,
        })
      );
    };

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
        sendChatMessage("Sistem", `Sunucuya ${bot.username} olarak giriş yapıldı!`, true);
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

          // Send initial inventory
          const invPayload = getInventoryPayload(bot);
          if (invPayload && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(invPayload));
          }

          // Send existing visible entities
          if (bot.entities) {
            const entitiesList: any[] = [];
            for (const id in bot.entities) {
              const e = bot.entities[id];
              if (e && e.id !== bot.entity.id) {
                const s = serializeEntity(e);
                if (s) entitiesList.push(s);
              }
            }
            if (entitiesList.length > 0 && ws.readyState === WebSocket.OPEN) {
              ws.send(JSON.stringify({ type: "entitiesSync", entities: entitiesList }));
            }
          }

          // Stream real initial chunks surrounding spawn (5x5 chunk grid)
          setTimeout(() => {
            if (bot && bot.entity) {
              const pcx = Math.floor(bot.entity.position.x / 16);
              const pcz = Math.floor(bot.entity.position.z / 16);
              streamChunksAround(bot, ws, pcx, pcz, 2, sentChunks);
            }
          }, 200);
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

      // Handle server teleport / forced movement
      bot.on("forcedMove", () => {
        if (ws.readyState === WebSocket.OPEN && bot.entity && bot.entity.position) {
          const pos = bot.entity.position;
          ws.send(
            JSON.stringify({
              type: "teleport",
              x: pos.x,
              y: pos.y,
              z: pos.z,
              yaw: bot.entity.yaw ?? 0,
              pitch: bot.entity.pitch ?? 0,
            })
          );
        }
      });

      // ==========================================
      // FULL CHAT & MESSAGE SYSTEM
      // ==========================================
      bot.on("chat", (author: string, text: string) => {
        sendChatMessage(author, text);
      });

      bot.on("messagestr", (msg: string, pos: string) => {
        sendChatMessage(pos === "game_info" ? "Eylem" : "Sunucu", msg, pos === "system");
      });

      bot.on("message", (jsonMsg: any, pos: string) => {
        const clean = cleanMinecraftText(jsonMsg);
        if (clean) {
          sendChatMessage(pos === "game_info" ? "Eylem" : "Sunucu", clean, pos === "system");
        }
      });

      bot.on("actionBar", (msg: any) => {
        const clean = cleanMinecraftText(msg);
        if (clean && ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: "actionBar", text: clean }));
        }
      });

      bot.on("title", (text: any) => {
        const clean = cleanMinecraftText(text);
        if (clean && ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: "title", text: clean }));
        }
      });

      bot.on("playerJoined", (player: any) => {
        if (player && player.username) {
          sendChatMessage("Sistem", `${player.username} oyuna katıldı`, true);
        }
      });

      bot.on("playerLeft", (player: any) => {
        if (player && player.username) {
          sendChatMessage("Sistem", `${player.username} oyundan ayrıldı`, true);
        }
      });

      bot.on("death", () => {
        sendChatMessage("Sistem", "Öldünüz!", true);
      });

      // Raw Protocol Chat Packets (Catches 1.19+ Paper / Spigot / Velocity packets safely)
      if (bot._client) {
        const rawChatHandler = (data: any, metaName: string) => {
          try {
            let text = "";
            let sender = "Sunucu";
            if (data.formattedMessage) text = cleanMinecraftText(data.formattedMessage);
            else if (data.plainMessage) text = cleanMinecraftText(data.plainMessage);
            else if (data.message) text = cleanMinecraftText(data.message);
            else if (data.content) text = cleanMinecraftText(data.content);
            else if (data.unsignedContent) text = cleanMinecraftText(data.unsignedContent);
            else if (data.body && data.body.content) text = cleanMinecraftText(data.body.content);

            if (data.senderName) {
              sender = cleanMinecraftText(data.senderName) || sender;
            }

            if (text && text.trim().length > 0) {
              sendChatMessage(sender, text, metaName.includes("system"));
            }
          } catch (err: any) {
            console.warn(`[MC Bridge] Chat packet parse warning:`, err?.message);
          }
        };

        bot._client.on("system_chat", (d: any) => rawChatHandler(d, "system_chat"));
        bot._client.on("player_chat", (d: any) => rawChatHandler(d, "player_chat"));
        bot._client.on("disguised_chat", (d: any) => rawChatHandler(d, "disguised_chat"));
        bot._client.on("profileless_chat", (d: any) => rawChatHandler(d, "profileless_chat"));
        bot._client.on("chat", (d: any) => rawChatHandler(d, "chat"));
        bot._client.on("systemChat", (d: any) => rawChatHandler(d, "systemChat"));
        bot._client.on("playerChat", (d: any) => rawChatHandler(d, "playerChat"));
      }

      // ==========================================
      // DYNAMIC CHUNKS & BLOCKS
      // ==========================================
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
          const chunkX = Math.floor(point.x / 16);
          const chunkZ = Math.floor(point.z / 16);
          const key = `${chunkX},${chunkZ}`;

          const curChunkX = Math.floor(bot.entity.position.x / 16);
          const curChunkZ = Math.floor(bot.entity.position.z / 16);

          // Only stream if within 3 chunks of player
          if (
            Math.abs(chunkX - curChunkX) <= 3 &&
            Math.abs(chunkZ - curChunkZ) <= 3 &&
            !sentChunks.has(key)
          ) {
            sentChunks.add(key);
            streamChunkColumn(bot, ws, point.x, point.z);
          }
        }
      });

      // ==========================================
      // MOBS, NPCS & PLAYERS (ENTITIES)
      // ==========================================
      bot.on("entitySpawn", (entity: any) => {
        if (!entity || !bot.entity || entity.id === bot.entity.id) return;
        if (ws.readyState === WebSocket.OPEN) {
          const s = serializeEntity(entity);
          if (s) {
            ws.send(JSON.stringify({ type: "entitySpawn", entity: s }));
          }
        }
      });

      bot.on("entityMoved", (entity: any) => {
        if (!entity || !bot.entity || entity.id === bot.entity.id) return;
        if (ws.readyState === WebSocket.OPEN && entity.position) {
          ws.send(
            JSON.stringify({
              type: "entityMove",
              entity: {
                id: entity.id,
                x: entity.position.x,
                y: entity.position.y,
                z: entity.position.z,
                yaw: entity.yaw || 0,
                pitch: entity.pitch || 0,
              },
            })
          );
        }
      });

      bot.on("entityGone", (entity: any) => {
        if (!entity) return;
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: "entityDespawn", id: entity.id }));
        }
      });

      // Periodic entity synchronization (every 2.5 seconds)
      const entitySyncInterval = setInterval(() => {
        if (ws.readyState !== WebSocket.OPEN || !bot || !bot.entities || !bot.entity) return;
        const list: any[] = [];
        for (const id in bot.entities) {
          const e = bot.entities[id];
          if (e && e.id !== bot.entity.id && e.position) {
            const dist = bot.entity.position.distanceTo(e.position);
            if (dist <= 64) {
              const s = serializeEntity(e);
              if (s) list.push(s);
            }
          }
        }
        if (list.length > 0) {
          ws.send(JSON.stringify({ type: "entitiesSync", entities: list }));
        }
      }, 2500);

      ws.on("close", () => clearInterval(entitySyncInterval));

      // ==========================================
      // INVENTORY & SLOTS
      // ==========================================
      const handleInventoryChange = () => {
        if (ws.readyState === WebSocket.OPEN) {
          const payload = getInventoryPayload(bot);
          if (payload) ws.send(JSON.stringify(payload));
        }
      };

      if (bot.inventory) {
        bot.inventory.on("updateSlot", handleInventoryChange);
      }
      bot.on("setSlot", handleInventoryChange);
      bot.on("heldItemChanged", handleInventoryChange);

      bot.on("kicked", (reason: any) => {
        console.warn(`[MC Bridge] Bot kicked:`, reason);
        if (ws.readyState === WebSocket.OPEN) {
          const reasonStr = cleanMinecraftText(reason) || "Sunucudan atıldınız";
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
              reason: cleanMinecraftText(reason) || "Sunucu bağlantısı kapandı",
            })
          );
        }
      });

      // ==========================================
      // BROWSER CLIENT PACKETS HANDLING
      // ==========================================
      ws.on("message", (rawMsg) => {
        if (!bot) return;
        try {
          const msg = JSON.parse(rawMsg.toString());

          // 1. Move & Rotate (CRUCIAL: update bot AND send position packets to server)
          if (msg.type === "move" && bot.entity) {
            bot.entity.position.set(msg.x, msg.y, msg.z);
            bot.entity.yaw = msg.yaw;
            bot.entity.pitch = msg.pitch;

            // Send player movement packet to Minecraft server so server loads chunks and syncs entities!
            if (bot._client) {
              const degYaw = ((msg.yaw * 180) / Math.PI) % 360;
              const degPitch = ((msg.pitch * 180) / Math.PI) % 360;
              try {
                bot._client.write("position_look", {
                  x: msg.x,
                  y: msg.y,
                  z: msg.z,
                  yaw: degYaw,
                  pitch: degPitch,
                  onGround: !!msg.onGround,
                });
              } catch {
                try {
                  bot._client.write("position", {
                    x: msg.x,
                    y: msg.y,
                    z: msg.z,
                    onGround: !!msg.onGround,
                  });
                } catch {}
              }
            }

            // Check if player moved into another chunk
            const curChunkX = Math.floor(msg.x / 16);
            const curChunkZ = Math.floor(msg.z / 16);
            if (
              Math.abs(curChunkX - lastPlayerChunkX) >= 1 ||
              Math.abs(curChunkZ - lastPlayerChunkZ) >= 1
            ) {
              lastPlayerChunkX = curChunkX;
              lastPlayerChunkZ = curChunkZ;
              streamChunksAround(bot, ws, curChunkX, curChunkZ, 2, sentChunks);
            }
          }

          // 2. Chat & Commands
          else if (msg.type === "chat" && msg.text) {
            const text = msg.text.trim();
            if (!text) return;
            console.log(`[MC Bridge] Client sending chat/command: "${text}"`);
            try {
              if (typeof bot.chat === "function") {
                bot.chat(text);
              }
            } catch (err: any) {
              console.warn(`[MC Bridge] bot.chat warning:`, err?.message);
              // Fallback only if bot.chat threw and bot._client exists
              try {
                if (text.startsWith("/")) {
                  if (bot._client && typeof bot._client.write === "function") {
                    bot._client.write("chat_command", {
                      command: text.slice(1),
                      timestamp: BigInt(Date.now()),
                      salt: 0n,
                      argumentSignatures: [],
                      signedPreview: false,
                      messageCount: 0,
                      acknowledged: Buffer.alloc(3),
                      previousMessages: [],
                    });
                  }
                } else if (bot._client && typeof bot._client.write === "function") {
                  bot._client.write("chat_message", {
                    message: text,
                    timestamp: BigInt(Date.now()),
                    salt: 0n,
                    offset: 0,
                    acknowledged: Buffer.alloc(3),
                  });
                }
              } catch (fallbackErr: any) {
                console.warn(`[MC Bridge] Chat fallback warning:`, fallbackErr?.message);
              }
            }
          }

          // 3. Dig Block
          else if (msg.type === "dig") {
            const b = bot.blockAt(new Vec3(msg.x, msg.y, msg.z));
            if (b) {
              bot.dig(b).catch(() => {
                // Fallback direct dig packet
                if (bot._client) {
                  try {
                    bot._client.write("block_dig", {
                      status: 0,
                      location: { x: msg.x, y: msg.y, z: msg.z },
                      direction: 1,
                      sequence: 0,
                    });
                    bot._client.write("block_dig", {
                      status: 2,
                      location: { x: msg.x, y: msg.y, z: msg.z },
                      direction: 1,
                      sequence: 0,
                    });
                  } catch {}
                }
              });
            }
            try {
              bot.swingArm("right");
            } catch {}
          }

          // 4. Place Block
          else if (msg.type === "place") {
            const ref = bot.blockAt(new Vec3(msg.x, msg.y, msg.z));
            if (ref) {
              const face = msg.face || { x: 0, y: 1, z: 0 };
              const faceVec = new Vec3(face.x, face.y, face.z);
              bot.placeBlock(ref, faceVec).catch(() => {
                bot.activateBlock(ref, faceVec).catch(() => {});
              });
            }
            try {
              bot.swingArm("right");
            } catch {}
          }

          // 5. Select Hotbar Slot
          else if (msg.type === "selectSlot" && typeof msg.slot === "number") {
            if (msg.slot >= 0 && msg.slot <= 8) {
              try {
                bot.setQuickBarSlot(msg.slot);
              } catch {}
            }
          }

          // 6. Request chunks manually
          else if (msg.type === "requestChunks" && bot.entity) {
            const curChunkX = Math.floor(bot.entity.position.x / 16);
            const curChunkZ = Math.floor(bot.entity.position.z / 16);
            streamChunksAround(bot, ws, curChunkX, curChunkZ, 2, sentChunks);
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
