import { useState, useEffect, MouseEvent } from 'react';
import { GameScreen, ServerInfo } from '../types';
import { soundManager } from '../utils/audio';

interface MultiplayerMenuProps {
  onNavigate: (screen: GameScreen) => void;
  onJoinServer: (server: ServerInfo, playerName?: string) => void;
}

const defaultServers: ServerInfo[] = [
  {
    id: 'local',
    name: '🏠 Yerel Vanilla (Localhost:25565)',
    ip: '127.0.0.1',
    port: 25565,
    motd: '§eYerel Minecraft 1.21.4 Offline-Mode Sunucusu',
    version: '1.21.4',
    playersOnline: 1,
    maxPlayers: 20,
    ping: 2,
    online: true
  },
  {
    id: 'note_online_only',
    name: '⚠️ Online-Mode Sunucuları (Hypixel, CubeCraft, vb.)',
    ip: 'minecraft.net',
    port: 25565,
    motd: '§cBu istemci sadece OFFLINE-MODE sunuculara bağlanabilir!',
    version: '1.21.4',
    playersOnline: 0,
    maxPlayers: 0,
    ping: -1,
    online: false
  },
  {
    id: 'custom_instruction',
    name: '📝 Custom Sunucu Eklemek İçin "Doğrudan Bağlan"a Basın',
    ip: 'localhost',
    port: 25565,
    motd: '§eKendi Offline-Mode Sunucunuzu IP/Port ile ekleyin',
    version: '1.21.4',
    playersOnline: 0,
    maxPlayers: 0,
    ping: -1,
    online: undefined
  }
];

export function MultiplayerMenu({ onNavigate, onJoinServer }: MultiplayerMenuProps) {
  const [servers, setServers] = useState<ServerInfo[]>(() => {
    try {
      const saved = localStorage.getItem('mc_servers_list');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return defaultServers;
  });

  const [selectedId, setSelectedId] = useState<string>(() => servers[0]?.id || 'local');
  const [isPinging, setIsPinging] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDirectModal, setShowDirectModal] = useState(false);
  const [playerName, setPlayerName] = useState<string>(() => {
    return localStorage.getItem('mc_player_username') || 'Steve';
  });

  // Form states for adding a server
  const [newServerName, setNewServerName] = useState('Minecraft Sunucum');
  const [newServerAddress, setNewServerAddress] = useState('');
  const [directAddress, setDirectAddress] = useState('localhost:25565');

  // Ping a specific server
  const pingServer = async (srv: ServerInfo): Promise<ServerInfo> => {
    try {
      const res = await fetch(`/api/ping?host=${encodeURIComponent(srv.ip)}&port=${srv.port}`);
      if (!res.ok) throw new Error('Ping failed');
      const data = await res.json();
      return {
        ...srv,
        online: data.online,
        ping: data.ping > 0 ? data.ping : srv.ping,
        version: data.version || srv.version,
        motd: data.motd || srv.motd,
        playersOnline: data.playersOnline ?? srv.playersOnline,
        maxPlayers: data.maxPlayers ?? srv.maxPlayers,
        icon: data.icon || srv.icon
      };
    } catch {
      return {
        ...srv,
        online: false,
        ping: -1
      };
    }
  };

  // Ping all servers
  const refreshAllPings = async () => {
    setIsPinging(true);
    const updated = await Promise.all(servers.map((s) => pingServer(s)));
    setServers(updated);
    try {
      localStorage.setItem('mc_servers_list', JSON.stringify(updated));
    } catch {
      // ignore
    }
    setIsPinging(false);
  };

  // Auto-ping on menu mount
  useEffect(() => {
    refreshAllPings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleJoin = (server: ServerInfo) => {
    soundManager.playClick();
    const cleanName = playerName.trim() || 'Player_' + Math.floor(Math.random() * 899 + 100);
    localStorage.setItem('mc_player_username', cleanName);
    onJoinServer(server, cleanName);
    onNavigate('game');
  };

  const handleAddServer = async () => {
    if (!newServerAddress.trim()) return;
    soundManager.playClick();

    const parts = newServerAddress.trim().split(':');
    const host = parts[0];
    const port = parts[1] ? parseInt(parts[1], 10) : 25565;

    const tempServer: ServerInfo = {
      id: `srv-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      name: newServerName.trim() || host,
      ip: host,
      port: isNaN(port) ? 25565 : port,
      motd: 'Sunucu aranıyor...',
      version: '1.21.4',
      playersOnline: 0,
      maxPlayers: 0,
      ping: -1,
      online: undefined
    };

    const newServers = [...servers, tempServer];
    setServers(newServers);
    setSelectedId(tempServer.id);
    setShowAddModal(false);
    setNewServerName('Minecraft Sunucum');
    setNewServerAddress('');

    // Immediately ping the new server
    const pinged = await pingServer(tempServer);
    setServers((prev) => {
      const up = prev.map((item) => (item.id === tempServer.id ? pinged : item));
      try {
        localStorage.setItem('mc_servers_list', JSON.stringify(up));
      } catch {
        // ignore
      }
      return up;
    });
  };

  const handleDeleteServer = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    soundManager.playClick();
    const filtered = servers.filter((s) => s.id !== id);
    setServers(filtered);
    if (selectedId === id && filtered.length > 0) {
      setSelectedId(filtered[0].id);
    }
    try {
      localStorage.setItem('mc_servers_list', JSON.stringify(filtered));
    } catch {
      // ignore
    }
  };

  const selectedServer = servers.find((s) => s.id === selectedId) || servers[0];

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-between p-4 sm:p-6 select-none font-['VT323'] text-xl sm:text-2xl">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-40"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1920&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* Header */}
      <div className="relative z-10 text-center pt-2 sm:pt-3">
        <div className="text-3xl sm:text-4xl text-white font-bold tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          🖧 Sunucu Bağlantısı (Multiplayer - 1.21.4)
        </div>
        <div className="text-amber-300 text-xs sm:text-sm mt-1">
          ⚠️ Not: Sadece <span className="font-bold underline">OFFLINE-MODE</span> Minecraft Java sunuculara bağlanabilir.
        </div>
        {isPinging && <span className="text-yellow-400 animate-pulse text-xs sm:text-sm block">[Sunucular Pingleniyor...]</span>}
      </div>

      {/* Player Nickname Editor Bar */}
      <div className="relative z-10 w-full max-w-3xl flex flex-wrap items-center justify-between bg-[#222222]/95 border-2 border-[#555] px-4 py-2 rounded shadow-xl gap-2">
        <div className="flex items-center gap-2">
          <span className="text-yellow-400 font-bold text-lg sm:text-xl flex items-center gap-1.5">
            👤 Oyuncu Adınız:
          </span>
          <input
            type="text"
            value={playerName}
            onChange={(e) => {
              const val = e.target.value.replace(/[^a-zA-Z0-9_]/g, '').slice(0, 16);
              setPlayerName(val);
              localStorage.setItem('mc_player_username', val);
            }}
            placeholder="Kullanıcı Adı"
            maxLength={16}
            className="bg-black/90 border-2 border-yellow-500/80 focus:border-yellow-400 px-3 py-1 text-white text-lg sm:text-xl font-mono rounded outline-none w-44 sm:w-56 shadow-inner"
          />
        </div>
        <div className="text-emerald-400 text-xs sm:text-sm font-sans flex items-center gap-1">
          <span>✓ Sunucuda bu isim görünecektir</span>
        </div>
      </div>

      {/* Server List (Minecraft Java Style) */}
      <div className="relative z-10 w-full max-w-3xl h-[50vh] sm:h-[54vh] bg-black/75 border-4 border-[#373737] overflow-y-auto p-2 sm:p-3 flex flex-col gap-2.5 shadow-2xl">
        {servers.map((s) => {
          const isSelected = s.id === selectedId;
          return (
            <div
              key={s.id}
              onClick={() => {
                soundManager.playClick();
                setSelectedId(s.id);
              }}
              onDoubleClick={() => handleJoin(s)}
              className={`relative p-2.5 sm:p-3 border-2 cursor-pointer flex items-center justify-between transition-all rounded-sm ${
                isSelected 
                  ? 'bg-blue-950/80 border-blue-400 ring-2 ring-blue-500/50 text-white' 
                  : 'bg-black/50 border-gray-700/80 hover:border-gray-500 text-gray-300'
              }`}
            >
              {/* Server Icon & Main Info */}
              <div className="flex items-center gap-3 overflow-hidden">
                {/* 64x64 Minecraft Server Icon */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 bg-stone-900 border-2 border-stone-600 rounded overflow-hidden flex items-center justify-center">
                  {s.icon ? (
                    <img
                      src={s.icon}
                      alt={s.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover [image-rendering:pixelated]"
                      onError={(e) => {
                        // fallback to styled icon if image fails
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-emerald-800 to-amber-900 text-white text-xs font-bold text-center px-1 font-mono">
                      <span>MC</span>
                      <span className="text-[10px] text-yellow-300">1.21</span>
                    </div>
                  )}
                </div>

                {/* Server Text Info */}
                <div className="flex flex-col overflow-hidden">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-bold text-white tracking-wide truncate">
                      {s.name}
                    </span>
                    {s.online === false && (
                      <span className="text-xs bg-red-950 border border-red-600 text-red-300 px-1.5 py-0.5 rounded font-mono">
                        Kapalı
                      </span>
                    )}
                  </div>

                  {/* MOTD / Description (Minecraft color tags stripped or parsed) */}
                  <div className="text-base sm:text-xl text-gray-300 line-clamp-1 truncate font-mono">
                    {s.motd ? s.motd.replace(/§[0-9a-fk-or]/gi, '') : 'Minecraft Sunucusu'}
                  </div>

                  <div className="text-xs sm:text-sm text-yellow-400/90 font-mono flex items-center gap-2">
                    <span>{s.ip}:{s.port}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-300">{s.version}</span>
                  </div>
                </div>
              </div>

              {/* Status / Ping / Player Count */}
              <div className="flex flex-col items-end flex-shrink-0 pl-3">
                {/* 5-bar Minecraft signal indicator */}
                <div className="flex items-center gap-1.5 mb-1" title={s.online ? `${s.ping}ms gecikme` : 'Sunucu Çevrimdışı'}>
                  <span className="text-sm sm:text-base font-mono font-bold text-gray-300">
                    {s.online && s.ping ? `${s.ping}ms` : '---'}
                  </span>
                  <div className="flex items-end gap-0.5 h-4 w-4 justify-end">
                    <div className={`w-0.5 h-1 ${s.online ? 'bg-emerald-400' : 'bg-red-600'}`} />
                    <div className={`w-0.5 h-2 ${s.online && s.ping! < 200 ? 'bg-emerald-400' : s.online ? 'bg-amber-400' : 'bg-red-600'}`} />
                    <div className={`w-0.5 h-3 ${s.online && s.ping! < 120 ? 'bg-emerald-400' : s.online ? 'bg-amber-400' : 'bg-zinc-700'}`} />
                    <div className={`w-0.5 h-4 ${s.online && s.ping! < 70 ? 'bg-emerald-400' : 'bg-zinc-700'}`} />
                  </div>
                </div>

                {/* Player count */}
                <div className="text-sm sm:text-xl font-mono text-right">
                  {s.online ? (
                    <span className="text-emerald-400 font-bold">
                      {s.playersOnline?.toLocaleString()} <span className="text-gray-400">/</span> {s.maxPlayers?.toLocaleString()}
                    </span>
                  ) : (
                    <span className="text-red-400 text-sm">Bağlantı Yok</span>
                  )}
                </div>

                {/* Remove button */}
                <button
                  onClick={(e) => handleDeleteServer(s.id, e)}
                  title="Listeden Kaldır"
                  className="mt-1 text-xs text-red-400 hover:text-red-200 opacity-60 hover:opacity-100 transition-opacity"
                >
                  [Sil]
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Actions (Minecraft Java Layout) */}
      <div className="relative z-10 w-full max-w-3xl flex flex-col gap-2.5 pb-3 sm:pb-4">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <button
            onClick={() => {
              if (selectedServer) handleJoin(selectedServer);
            }}
            onMouseEnter={() => soundManager.playFootstep()}
            className="py-2.5 sm:py-3 bg-[#42722b] hover:bg-[#538f36] text-white border-2 border-t-[#85c963] border-l-[#85c963] border-b-[#254217] border-r-[#254217] text-2xl sm:text-3xl font-bold shadow-lg"
          >
            🎮 Sunucuya Katıl (Join Server)
          </button>
          <button
            onClick={() => {
              soundManager.playClick();
              setShowDirectModal(true);
            }}
            onMouseEnter={() => soundManager.playFootstep()}
            className="py-2.5 sm:py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-2xl sm:text-3xl font-bold shadow-lg"
          >
            Doğrudan Bağlan (Direct Connect)
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          <button
            onClick={() => {
              soundManager.playClick();
              setShowAddModal(true);
            }}
            onMouseEnter={() => soundManager.playFootstep()}
            className="py-2 sm:py-2.5 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-lg sm:text-2xl font-bold"
          >
            ➕ Sunucu Ekle
          </button>
          <button
            onClick={refreshAllPings}
            disabled={isPinging}
            onMouseEnter={() => soundManager.playFootstep()}
            className="py-2 sm:py-2.5 bg-[#727272] hover:bg-[#858585] disabled:opacity-50 text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-lg sm:text-2xl font-bold"
          >
            🔄 {isPinging ? 'Yenileniyor...' : 'Yenile (Refresh)'}
          </button>
          <button
            onClick={() => {
              soundManager.playClick();
              onNavigate('menu');
            }}
            onMouseEnter={() => soundManager.playFootstep()}
            className="py-2 sm:py-2.5 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-lg sm:text-2xl font-bold"
          >
            İptal / Geri Dön
          </button>
        </div>
      </div>

      {/* Add Server Modal (Minecraft Style Dialog) */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#2b2b2b] border-4 border-[#444] p-6 w-full max-w-lg flex flex-col gap-4 text-white shadow-2xl">
            <div className="text-3xl font-bold text-yellow-300 text-center border-b-2 border-gray-600 pb-2">
              Sunucu Bilgisini Düzenle (Add Server)
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-300 text-lg">Sunucu Adı (Server Name):</label>
              <input
                type="text"
                value={newServerName}
                onChange={(e) => setNewServerName(e.target.value)}
                className="bg-black border-2 border-gray-600 px-3 py-2 text-2xl text-white outline-none focus:border-yellow-400"
                placeholder="Örnek: Minecraft Sunucum"
                autoFocus
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-300 text-lg">Sunucu Adresi (Server Address / IP:Port):</label>
              <input
                type="text"
                value={newServerAddress}
                onChange={(e) => setNewServerAddress(e.target.value)}
                className="bg-black border-2 border-gray-600 px-3 py-2 text-2xl text-white outline-none focus:border-yellow-400 font-mono"
                placeholder="example.com veya 192.168.1.100:25565"
              />
              <span className="text-xs text-gray-400">
                ⚠️ Sadece <span className="font-bold">OFFLINE-MODE</span> Minecraft Java 1.21.x sunuculara bağlanabilir.
              </span>
              <span className="text-xs text-amber-300">
                Örnek: Kendi/arkadaş sunucusu, Paper/Spigot offline-mode, vb.
              </span>
            </div>

            <div className="flex gap-4 mt-2">
              <button
                onClick={handleAddServer}
                className="flex-1 py-3 bg-[#42722b] hover:bg-[#538f36] text-white border-2 border-t-[#85c963] border-l-[#85c963] border-b-[#254217] border-r-[#254217] text-2xl font-bold"
              >
                Tamam (Done)
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-2xl font-bold"
              >
                İptal (Cancel)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Direct Connect Modal */}
      {showDirectModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#2b2b2b] border-4 border-[#444] p-6 w-full max-w-lg flex flex-col gap-4 text-white shadow-2xl">
            <div className="text-3xl font-bold text-yellow-300 text-center border-b-2 border-gray-600 pb-2">
              🖧 Doğrudan Bağlantı (Direct Connect)
            </div>
            <div className="text-lg text-gray-300">
              Girmek istediğiniz Minecraft 1.21.4 sunucu adresini yazın:
            </div>
            <div className="text-sm text-amber-300 bg-black/50 border border-amber-600 p-3 rounded">
              <span className="font-bold">⚠️ Önemli:</span> Bu istemci sadece <span className="font-bold">OFFLINE-MODE</span> sunuculara bağlanabilir.
              <br />Hypixel ve benzeri büyük sunucular çalışmaz.
            </div>
            <input
              type="text"
              value={directAddress}
              onChange={(e) => setDirectAddress(e.target.value)}
              className="bg-black border-2 border-gray-600 px-3 py-2 text-2xl text-white outline-none focus:border-yellow-400 font-mono"
              placeholder="localhost:25565 veya example.com"
              autoFocus
            />
            <div className="flex gap-4 mt-2">
              <button
                onClick={() => {
                  soundManager.playClick();
                  setShowDirectModal(false);
                  const parts = directAddress.trim().split(':');
                  const host = parts[0] || 'localhost';
                  const port = parts[1] ? parseInt(parts[1], 10) : 25565;

                  const directServer: ServerInfo = {
                    id: `direct-${Date.now()}`,
                    name: host,
                    ip: host,
                    port: isNaN(port) ? 25565 : port,
                    motd: 'Doğrudan Bağlantı',
                    version: '1.21.4',
                    playersOnline: 1,
                    maxPlayers: 100,
                    ping: 25,
                    online: true
                  };
                  handleJoin(directServer);
                }}
                className="flex-1 py-3 bg-[#42722b] hover:bg-[#538f36] text-white border-2 border-t-[#85c963] border-l-[#85c963] border-b-[#254217] border-r-[#254217] text-2xl font-bold"
              >
                Sunucuya Katıl
              </button>
              <button
                onClick={() => setShowDirectModal(false)}
                className="flex-1 py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-2xl font-bold"
              >
                İptal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
