import { useEffect, useState } from 'react';
import { soundManager } from '../utils/audio';

interface MojangSplashProps {
  onComplete: () => void;
}

export function MojangSplash({ onComplete }: MojangSplashProps) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFading(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18) + 8;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-[#ef323d] flex flex-col items-center justify-center z-50 transition-opacity duration-700 select-none ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      onClick={() => {
        soundManager.playClick();
        setProgress(100);
      }}
    >
      {/* Mojang Studios Logo */}
      <div className="flex flex-col items-center max-w-md px-6 text-center">
        <div className="text-white text-5xl md:text-7xl font-bold tracking-widest mb-6 font-['Press_Start_2P'] drop-shadow-lg">
          MOJANG
        </div>
        <div className="text-white text-lg tracking-wider opacity-90 mb-12 font-['VT323'] text-2xl">
          STUDIOS
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-3 bg-black/40 rounded-none border-2 border-black p-0.5">
          <div 
            className="h-full bg-white transition-all duration-100 ease-out"
            style={{ width: `${Math.min(100, progress)}%` }}
          />
        </div>
        <div className="text-white/80 font-['VT323'] text-xl mt-3">
          Loading 1.21.4 assets... {Math.min(100, progress)}%
        </div>
      </div>
    </div>
  );
}
