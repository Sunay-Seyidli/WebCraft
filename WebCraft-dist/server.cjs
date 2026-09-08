var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_http = require("http");
var import_ws = require("ws");
var import_net = __toESM(require("net"), 1);
var import_url = __toESM(require("url"), 1);
var import_minecraft_protocol = __toESM(require("minecraft-protocol"), 1);
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", version: "1.21.4", timestamp: Date.now() });
  });
  app.get("/api/ping", async (req, res) => {
    const host = req.query.host || "localhost";
    const port = parseInt(req.query.port || "25565", 10);
    const startTime = Date.now();
    if (host !== "localhost" && host !== "127.0.0.1") {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 3200);
        const response = await fetch(`https://api.mcstatus.io/v2/status/java/${encodeURIComponent(host)}:${port}`, {
          signal: controller.signal
        });
        clearTimeout(timeout);
        if (response.ok) {
          const data = await response.json();
          if (data && data.online) {
            return res.json({
              online: true,
              ping: typeof data.round_trip_latency === "number" ? Math.round(data.round_trip_latency) : Date.now() - startTime,
              host,
              port,
              version: data.version?.name_clean || "Minecraft 1.21.4",
              motd: data.motd?.clean || data.motd?.raw || "A Minecraft Server",
              playersOnline: data.players?.online ?? 1,
              maxPlayers: data.players?.max ?? 20,
              icon: data.icon || void 0
            });
          }
        }
      } catch (err) {
      }
    }
    const socket = new import_net.default.Socket();
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
        playersOnline: Math.floor(Math.random() * 20) + 1,
        maxPlayers: 100,
        icon: void 0
      });
    });
    socket.on("timeout", () => {
      socket.destroy();
      res.json({
        online: false,
        ping: -1,
        error: "Zaman A\u015F\u0131m\u0131 (Timeout)",
        host,
        port,
        motd: "Sunucuya ula\u015F\u0131lam\u0131yor (Kapal\u0131)",
        playersOnline: 0,
        maxPlayers: 0
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
        motd: "Sunucu kapal\u0131 veya ula\u015F\u0131lam\u0131yor",
        playersOnline: 0,
        maxPlayers: 0
      });
    });
    socket.connect(port, host);
  });
  const httpServer = (0, import_http.createServer)(app);
  const wss = new import_ws.WebSocketServer({ noServer: true });
  httpServer.on("upgrade", (request, socket, head) => {
    const parsedUrl = import_url.default.parse(request.url || "", true);
    if (parsedUrl.pathname === "/ws-proxy") {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request);
      });
    } else {
      socket.destroy();
    }
  });
  wss.on("connection", (ws, req) => {
    const parsedUrl = import_url.default.parse(req.url || "", true);
    const host = parsedUrl.query.host || "127.0.0.1";
    const port = parseInt(parsedUrl.query.port || "25565", 10);
    const rawUsername = parsedUrl.query.username || "Player";
    const username = rawUsername.replace(/[^A-Za-z0-9_]/g, "").slice(0, 16) || "Player";
    console.log(`[MC Bridge] Connecting to ${host}:${port} as "${username}"...`);
    const send = (obj) => {
      if (ws.readyState === import_ws.WebSocket.OPEN) ws.send(JSON.stringify(obj));
    };
    let client;
    try {
      client = import_minecraft_protocol.default.createClient({
        host,
        port,
        username,
        auth: "offline",
        version: "1.21.4",
        hideErrors: true,
        checkTimeoutInterval: 30 * 1e3
      });
    } catch (err) {
      send({ type: "error", message: "\u0130stemci ba\u015Flat\u0131lamad\u0131: " + err.message });
      ws.close();
      return;
    }
    let closedByClient = false;
    client.on("connect", () => {
      send({ type: "tcp_connected", host, port });
    });
    client.on("state", (newState) => {
      send({ type: "state", state: newState });
    });
    client.on("playerJoin", () => {
      send({ type: "joined_world", username, entityId: client.entityId ?? null });
    });
    client.on("packet", (data, meta) => {
      if (meta.state !== "play") return;
      switch (meta.name) {
        case "login": {
          send({
            type: "login",
            entityId: data.entityId,
            gameMode: data.gameMode,
            dimension: data.worldName || data.dimension,
            isHardcore: !!data.isHardcore
          });
          break;
        }
        case "position": {
          send({
            type: "position",
            x: data.x,
            y: data.y,
            z: data.z,
            yaw: data.yaw,
            pitch: data.pitch
          });
          if (typeof data.teleportId === "number") {
            try {
              client.write("teleport_confirm", { teleportId: data.teleportId });
            } catch {
            }
          }
          break;
        }
        case "spawn_position": {
          send({
            type: "spawn_position",
            x: data.location?.x,
            y: data.location?.y,
            z: data.location?.z
          });
          break;
        }
        case "update_health": {
          send({ type: "health", health: data.health, food: data.food });
          break;
        }
        case "map_chunk": {
          try {
            const hm = data.heightmaps?.value?.MOTION_BLOCKING?.value?.value;
            send({
              type: "chunk",
              x: data.x,
              z: data.z,
              heightmapPacked: hm ? Array.from(hm) : null
            });
          } catch {
            send({ type: "chunk", x: data.x, z: data.z, heightmapPacked: null });
          }
          break;
        }
        case "unload_chunk": {
          send({ type: "unload_chunk", x: data.chunkX ?? data.x, z: data.chunkZ ?? data.z });
          break;
        }
        case "player_info": {
          try {
            const players = (data.data || []).filter((p) => p.player?.name).map((p) => p.player.name);
            if (players.length) send({ type: "player_list", players });
          } catch {
          }
          break;
        }
        default:
          break;
      }
    });
    client.on("playerChat", (data) => {
      const text = data.plainMessage || data.unsignedContent?.text || (typeof data.formattedMessage === "string" ? data.formattedMessage : "");
      send({ type: "chat", sender: data.senderName || "Oyuncu", text });
    });
    client.on("systemChat", (data) => {
      let text = "";
      try {
        const parsed = typeof data.formattedMessage === "string" ? JSON.parse(data.formattedMessage) : data.formattedMessage;
        text = parsed?.text || parsed?.extra?.map((e) => e.text).join("") || "";
      } catch {
        text = typeof data.formattedMessage === "string" ? data.formattedMessage : "";
      }
      send({ type: "system_chat", text });
    });
    client.on("kick_disconnect", (data) => {
      send({ type: "disconnected", reason: data.reason || "Sunucu ba\u011Flant\u0131y\u0131 sonland\u0131rd\u0131." });
    });
    client.on("end", (reason) => {
      if (!closedByClient) send({ type: "closed", reason });
      if (ws.readyState === import_ws.WebSocket.OPEN) ws.close();
    });
    client.on("error", (err) => {
      const msg = String(err?.message || err);
      if (/encrypt|not.*premium|online.?mode/i.test(msg)) {
        send({
          type: "error",
          message: "Bu sunucu online-mode (Mojang hesap do\u011Frulamas\u0131) istiyor. Bu web istemcisi sadece offline-mode (cracked) sunuculara ba\u011Flanabilir."
        });
      } else {
        send({ type: "error", message: msg });
      }
    });
    ws.on("message", (message, isBinary) => {
      if (isBinary) return;
      try {
        const data = JSON.parse(message.toString());
        if (data.type === "chat" && typeof data.text === "string" && client?.state === "play") {
          client.chat(data.text.slice(0, 256));
        } else if (data.type === "position" && client?.state === "play") {
          client.write("position", {
            x: data.x,
            y: data.y,
            z: data.z,
            onGround: !!data.onGround
          });
        }
      } catch {
      }
    });
    ws.on("close", () => {
      closedByClient = true;
      try {
        client?.end("client_disconnect");
      } catch {
      }
    });
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  httpServer.listen(PORT, "0.0.0.0", () => {
    console.log(`Minecraft Java 1.21.4 Web Client server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
