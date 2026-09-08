import { useState, useEffect } from 'react';
import { GameScreen } from '../types';
import { soundManager } from '../utils/audio';

interface MainMenuProps {
  onNavigate: (screen: GameScreen) => void;
}

const splashTexts = [
  "Also try Minecraft!",
  "Java Edition 1.21.4!",
  "Real Minecraft textures!",
  "TCP-to-WebSocket bridge ready!",
  "Multiplayer & Singleplayer!",
  "Blocky goodness!",
  "Open source web client!"
];

export function MainMenu({ onNavigate }: MainMenuProps) {
  const [splash] = useState(() => splashTexts[Math.floor(Math.random() * splashTexts.length)]);
  const [rotation, setRotation] = useState(0);

  // Slow panorama background rotation simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setRotation((r) => (r + 0.05) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const handleButtonClick = (screen: GameScreen) => {
    soundManager.playClick();
    onNavigate(screen);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-between select-none font-['VT323'] text-2xl">
      {/* Panorama Background with blur/zoom effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-90 transform scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1920&auto=format&fit=crop')`,
          transform: `scale(1.1) rotate(${Math.sin(rotation * 0.01) * 1}deg)`
        }}
      />
      
      {/* Dark overlay for vintage Java menu look */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* Top Header / Title */}
      <div className="relative z-10 pt-12 flex flex-col items-center">
        <div className="text-5xl md:text-8xl font-black text-yellow-300 tracking-wider font-['Press_Start_2P'] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] text-center animate-pulse">
          MINECRAFT
        </div>
        <div className="text-xl md:text-2xl text-white font-bold tracking-widest mt-2 drop-shadow-md">
          JAVA EDITION <span className="text-yellow-400">1.21.4</span> VANILLA
        </div>

        {/* Splash text floating */}
        <div className="absolute -right-16 top-24 transform rotate-[-15deg] text-yellow-300 text-2xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)] animate-bounce pointer-events-none">
          {splash}
        </div>
      </div>

      {/* Center Menu Buttons */}
      <div className="relative z-10 flex flex-col gap-3 w-full max-w-md px-6 my-auto">
        <button
          onClick={() => handleButtonClick('singleplayer')}
          onMouseEnter={() => soundManager.playFootstep()}
          className="w-full py-3 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-2xl font-bold tracking-wide transition-all"
        >
          Tek Oyunculu (Singleplayer)
        </button>

        <button
          onClick={() => handleButtonClick('multiplayer')}
          onMouseEnter={() => soundManager.playFootstep()}
          className="w-full py-3 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-2xl font-bold tracking-wide transition-all"
        >
          Çok Oyunculu (Multiplayer)
        </button>

        <button
          onClick={() => handleButtonClick('realms')}
          onMouseEnter={() => soundManager.playFootstep()}
          className="w-full py-3 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-2xl font-bold tracking-wide transition-all flex items-center justify-center gap-2"
        >
          <span>Minecraft Realms</span>
          <span className="text-xs bg-red-600 px-1.5 py-0.5 text-white font-mono">NEW</span>
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleButtonClick('options')}
            onMouseEnter={() => soundManager.playFootstep()}
            className="py-3 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-xl font-bold tracking-wide"
          >
            Seçenekler...
          </button>
          <button
            onClick={() => handleButtonClick('skins')}
            onMouseEnter={() => soundManager.playFootstep()}
            className="py-3 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-xl font-bold tracking-wide"
          >
            Karakter / Skin
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-1">
          <button
            onClick={() => handleButtonClick('tcp_bridge')}
            onMouseEnter={() => soundManager.playFootstep()}
            className="py-2.5 bg-[#2563eb] hover:bg-[#3b82f6] active:bg-[#1d4ed8] text-white border-2 border-t-[#60a5fa] border-l-[#60a5fa] border-b-[#1e40af] border-r-[#1e40af] text-lg font-bold tracking-wide flex items-center justify-center gap-1.5"
          >
            <span>TCP Çevirici (Bridge)</span>
          </button>
          <button
            onClick={() => {
              soundManager.playClick();
              alert("Minecraft 1.21.4 Web Client is running in browser sandbox! Close tab to quit.");
            }}
            onMouseEnter={() => soundManager.playFootstep()}
            className="py-2.5 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-xl font-bold tracking-wide"
          >
            Oyundan Çık
          </button>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="relative z-10 pb-4 text-white/80 text-lg flex justify-between w-full px-6 drop-shadow-md">
        <div>Minecraft 1.21.4 Vanilla Web Client (Java UI)</div>
        <div>Copyright Mojang AB. Do not distribute!</div>
      </div>
    </div>
  );
}
