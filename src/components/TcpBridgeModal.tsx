import { useState } from 'react';
import { GameScreen } from '../types';
import { soundManager } from '../utils/audio';

interface TcpBridgeModalProps {
  onNavigate: (screen: GameScreen) => void;
}

export function TcpBridgeModal({ onNavigate }: TcpBridgeModalProps) {
  const [testHost, setTestHost] = useState('play.hypixel.net');
  const [testPort, setTestPort] = useState('25565');
  const [pingResult, setPingResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleTest = async () => {
    soundManager.playClick();
    setLoading(true);
    setPingResult(null);
    try {
      const res = await fetch(`/api/ping?host=${testHost}&port=${testPort}`);
      const data = await res.json();
      setPingResult(data);
    } catch (err: any) {
      setPingResult({ online: false, error: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen h-full overflow-y-auto flex flex-col items-center justify-between p-3 sm:p-6 select-none font-['VT323'] text-xl sm:text-2xl">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1920&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Header */}
      <div className="relative z-10 w-full max-w-3xl flex items-center justify-between pt-2 sm:pt-4">
        <div className="text-2xl sm:text-4xl text-white font-bold tracking-wider drop-shadow-md">
          TCP-to-WebSocket Çevirici (Bridge)
        </div>
        <button
          onClick={() => {
            soundManager.playClick();
            onNavigate('menu');
          }}
          className="w-9 h-9 bg-red-600 active:bg-red-700 text-white font-bold text-lg rounded flex items-center justify-center shadow"
          title="Kapat"
        >
          ✕
        </button>
      </div>

      {/* Content Box */}
      <div className="relative z-10 w-full max-w-3xl min-h-[45vh] max-h-[60vh] bg-black/70 border-4 border-[#373737] p-4 sm:p-6 overflow-y-auto flex flex-col gap-3 sm:gap-4 text-white shadow-inner my-2">
        <div className="text-yellow-300 text-3xl font-bold">Gerçek Minecraft Sunucularına Bağlantı Nasıl Çalışır?</div>
        <div className="text-xl text-gray-300 leading-relaxed">
          Tarayıcılar doğrudan ham TCP soketleri açamaz (güvenlik kısıtlamaları nedeniyle). Bu nedenle projede bir <span className="text-yellow-400 font-bold">Node.js WebSocket-to-TCP Bridge (Çevirici)</span> mimarisi kodlanmıştır.
        </div>
        <div className="bg-black/80 border-2 border-gray-700 p-4 text-lg font-mono text-green-400">
          [Tarayıcı WebClient] {'-->'} [Node.js Express /ws-proxy] {'-->'} [Gerçek Minecraft Sunucusu (örn. Hypixel)]
        </div>

        <div className="text-yellow-300 text-2xl font-bold mt-2">Sunucu Bağlantı ve Ping Test Aracı</div>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            value={testHost}
            onChange={(e) => setTestHost(e.target.value)}
            className="flex-1 bg-black border-2 border-gray-600 px-3 py-2 text-2xl text-white outline-none"
            placeholder="play.hypixel.net"
          />
          <input
            type="text"
            value={testPort}
            onChange={(e) => setTestPort(e.target.value)}
            className="w-28 bg-black border-2 border-gray-600 px-3 py-2 text-2xl text-white outline-none"
            placeholder="25565"
          />
          <button
            onClick={handleTest}
            disabled={loading}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white border-2 border-blue-400 font-bold"
          >
            {loading ? 'Test Ediliyor...' : 'Ping Test Et'}
          </button>
        </div>

        {pingResult && (
          <div className={`p-4 border-2 ${pingResult.online ? 'bg-green-950/60 border-green-500 text-green-300' : 'bg-red-950/60 border-red-500 text-red-300'}`}>
            {pingResult.online ? (
              <div>
                <span className="font-bold text-white">✓ Sunucu Çevrimiçi!</span> Ping: {pingResult.ping}ms | Sürüm: {pingResult.version}
              </div>
            ) : (
              <div>
                <span className="font-bold text-white">✗ Bağlantı Kurulamadı:</span> {pingResult.error || 'Sunucu yanıt vermedi'}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full max-w-3xl pb-6">
        <button
          onClick={() => {
            soundManager.playClick();
            onNavigate('menu');
          }}
          onMouseEnter={() => soundManager.playFootstep()}
          className="w-full py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-2xl font-bold"
        >
          Ana Menüye Dön
        </button>
      </div>
    </div>
  );
}
