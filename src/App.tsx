import React, { Component, ErrorInfo, ReactNode, useState } from 'react';
import { GameScreen, WorldInfo, ServerInfo, GameSettings } from './types';
import { MojangSplash } from './components/MojangSplash';
import { MainMenu } from './components/MainMenu';
import { SingleplayerMenu } from './components/SingleplayerMenu';
import { MultiplayerMenu } from './components/MultiplayerMenu';
import { OptionsScreen } from './components/OptionsScreen';
import { SkinsScreen } from './components/SkinsScreen';
import { TcpBridgeModal } from './components/TcpBridgeModal';
import { GameCanvas } from './components/GameCanvas';

interface ErrorBoundaryProps {
  children: ReactNode;
  onReset: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class GameErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  declare state: ErrorBoundaryState;
  declare props: ErrorBoundaryProps;
  declare setState: React.Component<ErrorBoundaryProps, ErrorBoundaryState>['setState'];

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('GameCanvas Error Boundary caught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-[#111] text-white font-['VT323'] p-6 text-center">
          <div className="text-red-500 text-4xl mb-2 font-bold">Oyun İstemci Hatası Oluştu!</div>
          <div className="text-gray-300 text-xl max-w-xl mb-6 bg-black/60 p-4 rounded border border-red-900/50">
            {this.state.error?.message || 'Beklenmeyen bir 3D grafik/fizik yükleme hatası.'}
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => {
                this.setState({ hasError: false });
                this.props.onReset();
              }}
              className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-black text-2xl font-bold rounded border-2 border-yellow-300"
            >
              Yeniden Bağlan / Başlat
            </button>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white text-2xl font-bold rounded border-2 border-gray-500"
            >
              Ana Menüye Dön
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

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
          onJoinServer={(srv, username) => {
            setSelectedServer(srv);
            setSelectedWorld(undefined);
            if (username) {
              setSettings((prev) => ({ ...prev, playerName: username }));
            }
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
        <GameErrorBoundary onReset={() => setScreen('menu')}>
          <GameCanvas 
            world={selectedWorld} 
            server={selectedServer} 
            settings={settings} 
            onExit={() => setScreen('menu')} 
          />
        </GameErrorBoundary>
      )}
    </div>
  );
}
