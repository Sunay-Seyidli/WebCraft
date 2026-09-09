export type GameScreen = 
  | 'splash' 
  | 'menu' 
  | 'singleplayer' 
  | 'create_world' 
  | 'multiplayer' 
  | 'direct_connect' 
  | 'options' 
  | 'skins' 
  | 'realms' 
  | 'tcp_bridge' 
  | 'game' 
  | 'pause';

export interface WorldInfo {
  id: string;
  name: string;
  seed: string;
  gameMode: 'survival' | 'creative' | 'hardcore';
  difficulty: 'peaceful' | 'easy' | 'normal' | 'hard';
  lastPlayed: number;
  icon?: string;
}

export interface ServerInfo {
  id: string;
  name: string;
  ip: string;
  port: number;
  motd: string;
  version: string;
  playersOnline: number;
  maxPlayers: number;
  ping?: number;
  online?: boolean;
  icon?: string;
}

export interface GameSettings {
  fov: number; // 70 - 110
  renderDistance: number; // 2 - 16
  volume: number; // 0 - 100
  graphics: 'fast' | 'fancy' | 'fabulous';
  texturePack: 'vanilla' | 'realistic' | 'faithful';
  touchControls: 'auto' | 'enabled' | 'disabled';
  uiScale: number; // 1 - 3
  language: 'tr' | 'en';
  skin: 'steve' | 'alex' | 'custom';
  customSkinColor: string;
  playerName?: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  text: string;
  time: string;
  isSystem?: boolean;
  color?: string;
}

export interface MinecraftEntityData {
  id: number;
  type: string;
  name: string;
  username?: string;
  customName?: string;
  isHologram?: boolean;
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
  width?: number;
  height?: number;
  health?: number;
}

export type BlockType = 
  | 'air'
  | 'grass'
  | 'dirt'
  | 'stone'
  | 'cobblestone'
  | 'oak_planks'
  | 'oak_log'
  | 'oak_leaves'
  | 'bricks'
  | 'glass'
  | 'water'
  | 'lava'
  | 'bedrock'
  | 'sand'
  | 'diamond_ore'
  | 'gold_ore'
  | 'obsidian'
  | 'iron_block'
  | 'crafting_table'
  | 'furnace'
  | 'wool'
  | 'bookshelf'
  | 'tnt'
  | 'netherrack'
  | 'glowstone';

export interface InventoryItem {
  type: BlockType;
  count: number;
  name: string;
}
