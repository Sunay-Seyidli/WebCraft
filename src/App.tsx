import { useState } from 'react';
import { GameScreen, WorldInfo, ServerInfo, GameSettings } from './types';
import { MojangSplash } from './components/MojangSplash';
import { MainMenu } from './components/MainMenu';
import { SingleplayerMenu } from './components/SingleplayerMenu';
import { MultiplayerMenu } from './components/MultiplayerMenu';
import { OptionsScreen } from './components/OptionsScreen';
import { SkinsScreen } from './components/SkinsScreen';
import { TcpBridgeModal } from './components/TcpBridgeModal';
import { GameCanvas } from './components/GameCanvas';

export default function App() {
  const [screen, setScreen] = useState<GameScreen>('splash');
  const [selectedWorld, setSelectedWorld] = useState<WorldInfo | undefined>();
  const [selectedServer, setSelectedServer] = useState<ServerInfo | undefined>();
  const [settings, setSettings] = useState<GameSettings>({
    fov: 85,
    renderDistance: 8,
    volume: 50,
    graphics: 'fancy',
    texturePack: 'realistic',
    touchControls: 'auto',
    uiScale: 1,
    language: 'tr',
    skin: 'steve',
    customSkinColor: '#38bdf8'
  });

  const handleUpdateSettings = (newSettings: Partial<GameSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-black select-none">
      {screen === 'splash' && (
        <MojangSplash onComplete={() => setScreen('menu')} />
      )}

      {screen === 'menu' && (
        <MainMenu onNavigate={(s) => setScreen(s)} />
      )}

      {screen === 'singleplayer' && (
        <SingleplayerMenu 
          onNavigate={(s) => setScreen(s)} 
          onSelectWorld={(w) => {
            setSelectedWorld(w);
            setSelectedServer(undefined);
            setScreen('game');
          }} 
        />
      )}

      {screen === 'create_world' && (
        <SingleplayerMenu 
          onNavigate={(s) => setScreen(s)} 
          onSelectWorld={(w) => {
            setSelectedWorld(w);
            setSelectedServer(undefined);
            setScreen('game');
          }} 
        />
      )}

      {screen === 'multiplayer' && (
        <MultiplayerMenu 
          onNavigate={(s) => setScreen(s)} 
          onJoinServer={(srv) => {
            setSelectedServer(srv);
            setSelectedWorld(undefined);
            setScreen('game');
          }} 
        />
      )}

      {screen === 'options' && (
        <OptionsScreen 
          onNavigate={(s) => setScreen(s)} 
          settings={settings} 
          onUpdateSettings={handleUpdateSettings} 
        />
      )}

      {screen === 'skins' && (
        <SkinsScreen 
          onNavigate={(s) => setScreen(s)} 
          settings={settings} 
          onUpdateSettings={handleUpdateSettings} 
        />
      )}

      {screen === 'tcp_bridge' && (
        <TcpBridgeModal onNavigate={(s) => setScreen(s)} />
      )}

      {screen === 'realms' && (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-[#1e1e1e] text-white font-['VT323'] text-3xl gap-6 p-6">
          <div className="text-yellow-300 text-5xl">Minecraft Realms (1.21.4)</div>
          <div>Realms aboneliği aktif! Arkadaşlarınızla kesintisiz 7/24 sunucu keyfi.</div>
          <button
            onClick={() => setScreen('menu')}
            className="px-8 py-3 bg-[#727272] hover:bg-[#858585] border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] font-bold"
          >
            Ana Menüye Dön
          </button>
        </div>
      )}

      {screen === 'game' && (
        <GameCanvas 
          world={selectedWorld} 
          server={selectedServer} 
          settings={settings} 
          onExit={() => setScreen('menu')} 
        />
      )}
    </div>
  );
}
