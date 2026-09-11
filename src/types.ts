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
  proxy?: string; // SOCKS5 proxy IP:Port or 'auto'
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
  showScoreboard?: boolean;
  showPing?: boolean;
}

export interface ScoreboardItem {
  name: string;
  score: number;
}

export interface ScoreboardData {
  title: string;
  items: ScoreboardItem[];
}

export interface TabPlayer {
  username: string;
  displayName?: string;
  ping: number;
  gameMode?: string;
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
  isItem?: boolean;
  itemType?: string;
  itemName?: string;
  itemCount?: number;
  x: number;
  y: number;
  z: number;
  yaw: number;
  pitch: number;
  width?: number;
  height?: number;
  health?: number;
}

export type StandardBlockType = 
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

export type BlockType = StandardBlockType | string;

export interface InventoryItem {
  type: BlockType;
  count: number;
  name: string;
}
