import { useState } from 'react';
import { GameScreen, GameSettings } from '../types';
import { soundManager } from '../utils/audio';

interface OptionsScreenProps {
  onNavigate: (screen: GameScreen) => void;
  settings: GameSettings;
  onUpdateSettings: (newSettings: Partial<GameSettings>) => void;
}

export function OptionsScreen({ onNavigate, settings, onUpdateSettings }: OptionsScreenProps) {
  const [local, setLocal] = useState<GameSettings>(settings);

  const handleSave = () => {
    soundManager.playClick();
    onUpdateSettings(local);
    onNavigate('menu');
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
      <div className="relative z-10 w-full max-w-2xl flex items-center justify-between pt-2 sm:pt-4">
        <div className="text-2xl sm:text-4xl text-white font-bold tracking-wider drop-shadow-md">
          Seçenekler (Options) - 1.21.4
        </div>
        <button
          onClick={handleSave}
          className="w-9 h-9 bg-red-600 active:bg-red-700 text-white font-bold text-lg rounded flex items-center justify-center shadow"
          title="Kaydet ve Kapat"
        >
          ✕
        </button>
      </div>

      {/* Options Form */}
      <div className="relative z-10 w-full max-w-2xl h-[45vh] sm:h-[55vh] bg-black/60 border-4 border-[#373737] overflow-y-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 shadow-inner text-white">
        {/* FOV */}
        <div className="flex flex-col gap-2">
          <label className="text-yellow-300">Görüş Açısı (FOV): {local.fov}</label>
          <input
            type="range"
            min="70"
            max="110"
            value={local.fov}
            onChange={(e) => {
              soundManager.playFootstep();
              setLocal({ ...local, fov: Number(e.target.value) });
            }}
            className="accent-green-500 cursor-pointer"
          />
        </div>

        {/* Render Distance */}
        <div className="flex flex-col gap-2">
          <label className="text-yellow-300">Görüş Mesafesi (Render Distance): {local.renderDistance} Çunks</label>
          <input
            type="range"
            min="2"
            max="16"
            value={local.renderDistance}
            onChange={(e) => {
              soundManager.playFootstep();
              setLocal({ ...local, renderDistance: Number(e.target.value) });
            }}
            className="accent-green-500 cursor-pointer"
          />
        </div>

        {/* Volume */}
        <div className="flex flex-col gap-2">
          <label className="text-yellow-300">Ses Seviyesi (Volume): {local.volume}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={local.volume}
            onChange={(e) => {
              const val = Number(e.target.value);
              soundManager.setVolume(val / 100);
              setLocal({ ...local, volume: val });
            }}
            className="accent-green-500 cursor-pointer"
          />
        </div>

        {/* Graphics */}
        <div className="flex flex-col gap-2">
          <label className="text-yellow-300">Grafikler (Graphics)</label>
          <select
            value={local.graphics}
            onChange={(e) => {
              soundManager.playClick();
              setLocal({ ...local, graphics: e.target.value as any });
            }}
            className="bg-black border-2 border-gray-600 px-3 py-2 text-white outline-none"
          >
            <option value="fast">Hızlı (Fast)</option>
            <option value="fancy">Süslü (Fancy)</option>
            <option value="fabulous">Muhteşem (Fabulous 1.21)</option>
          </select>
        </div>

        {/* Doku Paketi (Texture Pack / Gerçekçi Doku Ayarı) */}
        <div className="flex flex-col gap-2">
          <label className="text-yellow-300">Doku Paketi (Texture Pack)</label>
          <select
            value={local.texturePack}
            onChange={(e) => {
              soundManager.playClick();
              setLocal({ ...local, texturePack: e.target.value as any });
            }}
            className="bg-black border-2 border-yellow-500/80 px-3 py-2 text-white outline-none"
          >
            <option value="realistic">✨ Gerçekçi HD (64x64 Realistic)</option>
            <option value="faithful">💎 Faithful HD (32x32)</option>
            <option value="vanilla">🧱 Klasik Vanilla (16x16)</option>
          </select>
        </div>

        {/* Mobil Dokunmatik Kontroller */}
        <div className="flex flex-col gap-2">
          <label className="text-yellow-300">Mobil Dokunmatik Kontroller</label>
          <select
            value={local.touchControls}
            onChange={(e) => {
              soundManager.playClick();
              setLocal({ ...local, touchControls: e.target.value as any });
            }}
            className="bg-black border-2 border-gray-600 px-3 py-2 text-white outline-none"
          >
            <option value="auto">📱 Otomatik (Mobilde Aktif)</option>
            <option value="enabled">Açık (Her Zaman Göster)</option>
            <option value="disabled">Kapalı (Sadece Klavye/Mouse)</option>
          </select>
        </div>

        {/* Language */}
        <div className="flex flex-col gap-2">
          <label className="text-yellow-300">Dil (Language)</label>
          <select
            value={local.language}
            onChange={(e) => {
              soundManager.playClick();
              setLocal({ ...local, language: e.target.value as any });
            }}
            className="bg-black border-2 border-gray-600 px-3 py-2 text-white outline-none"
          >
            <option value="tr">Türkçe (Turkey)</option>
            <option value="en">English (US)</option>
          </select>
        </div>

        {/* UI Scale */}
        <div className="flex flex-col gap-2">
          <label className="text-yellow-300">Arayüz Boyutu (UI Scale)</label>
          <select
            value={local.uiScale}
            onChange={(e) => {
              soundManager.playClick();
              setLocal({ ...local, uiScale: Number(e.target.value) });
            }}
            className="bg-black border-2 border-gray-600 px-3 py-2 text-white outline-none"
          >
            <option value="1">Normal (1x)</option>
            <option value="2">Geniş (2x)</option>
            <option value="3">Büyük (3x)</option>
          </select>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="relative z-10 w-full max-w-2xl flex gap-4 pb-6">
        <button
          onClick={handleSave}
          onMouseEnter={() => soundManager.playFootstep()}
          className="flex-1 py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-2xl font-bold"
        >
          Tamam (Save & Back)
        </button>
      </div>
    </div>
  );
}
