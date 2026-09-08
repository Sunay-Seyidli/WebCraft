import { GameScreen, GameSettings } from '../types';
import { soundManager } from '../utils/audio';

interface SkinsScreenProps {
  onNavigate: (screen: GameScreen) => void;
  settings: GameSettings;
  onUpdateSettings: (newSettings: Partial<GameSettings>) => void;
}

export function SkinsScreen({ onNavigate, settings, onUpdateSettings }: SkinsScreenProps) {
  const handleSelect = (skin: 'steve' | 'alex') => {
    soundManager.playClick();
    onUpdateSettings({ skin });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-between p-6 select-none font-['VT323'] text-2xl">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1920&auto=format&fit=crop')` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Header */}
      <div className="relative z-10 text-4xl text-white font-bold tracking-wider pt-6 drop-shadow-md">
        Karakter Özelleştirme (Skin Customizer)
      </div>

      {/* Skin options grid */}
      <div className="relative z-10 w-full max-w-2xl h-[52vh] bg-black/60 border-4 border-[#373737] p-8 flex items-center justify-around gap-6 shadow-inner text-white">
        {/* Steve */}
        <div 
          onClick={() => handleSelect('steve')}
          className={`flex flex-col items-center p-6 border-4 cursor-pointer transition-all ${
            settings.skin === 'steve' ? 'border-yellow-400 bg-yellow-900/40' : 'border-gray-700 bg-black/40 hover:border-gray-500'
          }`}
        >
          <div className="w-32 h-64 bg-cyan-800 border-2 border-black flex items-center justify-center text-xl font-bold">
            STEVE
          </div>
          <div className="mt-4 text-2xl font-bold text-yellow-300">Klasik (Steve)</div>
        </div>

        {/* Alex */}
        <div 
          onClick={() => handleSelect('alex')}
          className={`flex flex-col items-center p-6 border-4 cursor-pointer transition-all ${
            settings.skin === 'alex' ? 'border-yellow-400 bg-yellow-900/40' : 'border-gray-700 bg-black/40 hover:border-gray-500'
          }`}
        >
          <div className="w-32 h-64 bg-orange-700 border-2 border-black flex items-center justify-center text-xl font-bold">
            ALEX
          </div>
          <div className="mt-4 text-2xl font-bold text-yellow-300">İnce Kol (Alex)</div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full max-w-2xl pb-6">
        <button
          onClick={() => {
            soundManager.playClick();
            onNavigate('menu');
          }}
          onMouseEnter={() => soundManager.playFootstep()}
          className="w-full py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-2xl font-bold"
        >
          Geri Dön (Back)
        </button>
      </div>
    </div>
  );
}
