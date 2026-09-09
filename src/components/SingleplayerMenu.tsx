import { useState } from 'react';
import { GameScreen, WorldInfo } from '../types';
import { soundManager } from '../utils/audio';

interface SingleplayerMenuProps {
  onNavigate: (screen: GameScreen) => void;
  onSelectWorld: (world: WorldInfo) => void;
}

const defaultWorlds: WorldInfo[] = [
  { id: 'w1', name: 'Yeni Dünya (Survival)', seed: '121400', gameMode: 'survival', difficulty: 'normal', lastPlayed: Date.now() - 3600000 },
  { id: 'w2', name: 'Yaratıcı Kale (Creative)', seed: 'minecraft', gameMode: 'creative', difficulty: 'peaceful', lastPlayed: Date.now() - 86400000 }
];

export function SingleplayerMenu({ onNavigate, onSelectWorld }: SingleplayerMenuProps) {
  const [worlds, setWorlds] = useState<WorldInfo[]>(defaultWorlds);
  const [selectedId, setSelectedId] = useState<string>(defaultWorlds[0].id);

  const handlePlay = () => {
    soundManager.playClick();
    const w = worlds.find((item) => item.id === selectedId) || worlds[0];
    onSelectWorld(w);
    onNavigate('game');
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
      <div className="relative z-10 text-4xl text-white font-bold tracking-wider pt-6 drop-shadow-md">
        Dünya Seçin (Select World)
      </div>

      {/* World List Box */}
      <div className="relative z-10 w-full max-w-2xl h-[42vh] sm:h-[50vh] bg-black/60 border-4 border-[#373737] overflow-y-auto p-3 sm:p-4 flex flex-col gap-2.5 sm:gap-3 shadow-inner">
        {worlds.map((w) => {
          const isSelected = w.id === selectedId;
          return (
            <div
              key={w.id}
              onClick={() => {
                soundManager.playClick();
                setSelectedId(w.id);
              }}
              onDoubleClick={handlePlay}
              className={`p-3 border-2 cursor-pointer flex items-center justify-between transition-colors ${
                isSelected 
                  ? 'bg-blue-900/60 border-blue-400 text-white' 
                  : 'bg-black/40 border-gray-700 hover:border-gray-500 text-gray-300'
              }`}
            >
              <div>
                <div className="text-3xl font-bold text-yellow-300">{w.name}</div>
                <div className="text-lg opacity-80">
                  Seed: {w.seed} | Mod: {w.gameMode} | Zorluk: {w.difficulty}
                </div>
              </div>
              <div className="text-sm opacity-60">
                {new Date(w.lastPlayed).toLocaleDateString()}
              </div>
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col gap-3 pb-8">
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handlePlay}
            onMouseEnter={() => soundManager.playFootstep()}
            className="py-3 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-2xl font-bold"
          >
            Seçilen Dünyayı Oyna
          </button>
          <button
            onClick={() => {
              soundManager.playClick();
              onNavigate('create_world');
            }}
            onMouseEnter={() => soundManager.playFootstep()}
            className="py-3 bg-[#727272] hover:bg-[#858585] active:bg-[#5c5c5c] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] shadow-[inset_1px_1px_0px_#9e9e9e,inset_-1px_-1px_0px_#424242] text-2xl font-bold"
          >
            Yeni Dünya Oluştur
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => {
              soundManager.playClick();
              const name = prompt("Yeni Dünya Adı:", "Hayatta Kalma");
              if (name) {
                const newW: WorldInfo = {
                  id: `world-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                  name,
                  seed: Math.floor(Math.random() * 1000000).toString(),
                  gameMode: 'survival',
                  difficulty: 'normal',
                  lastPlayed: Date.now()
                };
                setWorlds([newW, ...worlds]);
                setSelectedId(newW.id);
              }
            }}
            onMouseEnter={() => soundManager.playFootstep()}
            className="py-2.5 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-xl"
          >
            Düzenle / Edit
          </button>
          <button
            onClick={() => {
              soundManager.playClick();
              if (worlds.length > 1) {
                setWorlds(worlds.filter(w => w.id !== selectedId));
                setSelectedId(worlds[0].id);
              } else {
                alert("En az bir dünya kalmalı!");
              }
            }}
            onMouseEnter={() => soundManager.playFootstep()}
            className="py-2.5 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-xl"
          >
            Sil / Delete
          </button>
          <button
            onClick={() => {
              soundManager.playClick();
              onNavigate('menu');
            }}
            onMouseEnter={() => soundManager.playFootstep()}
            className="py-2.5 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-xl"
          >
            Geri Dön
          </button>
        </div>
      </div>
    </div>
  );
}
