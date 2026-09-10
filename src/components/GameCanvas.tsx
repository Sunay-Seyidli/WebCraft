import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { WorldInfo, ServerInfo, GameSettings, ChatMessage, BlockType, InventoryItem, MinecraftEntityData } from '../types';
import { soundManager } from '../utils/audio';
import { blockTextures, initTextures, mapMinecraftBlock } from '../utils/textures';
import { createEntity3D, updateEntityTick, RenderedEntity } from '../utils/entityRenderer';

interface GameCanvasProps {
  world?: WorldInfo;
  server?: ServerInfo;
  settings: GameSettings;
  onExit: () => void;
}

export const BLOCK_NAMES: Record<BlockType, string> = {
  air: 'Hava',
  grass: 'Çimen Bloğu',
  dirt: 'Toprak',
  stone: 'Taş',
  cobblestone: 'Kırıktaş',
  oak_planks: 'Meşe Tahtası',
  oak_log: 'Meşe Kütüğü',
  oak_leaves: 'Meşe Yaprakları',
  bricks: 'Tuğla',
  glass: 'Cam',
  water: 'Su',
  lava: 'Lav',
  bedrock: 'Katman Kayası (Bedrock)',
  sand: 'Kum',
  diamond_ore: 'Elmas Cevheri',
  gold_ore: 'Altın Cevheri',
  obsidian: 'Obsidyen',
  iron_block: 'Demir Bloğu',
  crafting_table: 'Çalışma Masası',
  furnace: 'Fırın',
  wool: 'Yün',
  bookshelf: 'Kitaplık',
  tnt: 'TNT',
  netherrack: 'Nether Taşı',
  glowstone: 'Işık Taşı'
};

const initialHotbarItems: InventoryItem[] = [
  { type: 'grass', count: 64, name: 'Çimen Bloğu' },
  { type: 'dirt', count: 64, name: 'Toprak' },
  { type: 'stone', count: 64, name: 'Taş' },
  { type: 'cobblestone', count: 64, name: 'Kırıktaş' },
  { type: 'oak_planks', count: 64, name: 'Meşe Tahtası' },
  { type: 'oak_log', count: 32, name: 'Meşe Kütüğü' },
  { type: 'bricks', count: 64, name: 'Tuğla' },
  { type: 'glass', count: 64, name: 'Cam' },
  { type: 'diamond_ore', count: 16, name: 'Elmas Cevheri' },
];

export interface BlockData {
  type: BlockType;
  x: number;
  y: number;
  z: number;
  index: number;
}

interface TargetedBlockData {
  type: BlockType;
  name: string;
  x: number;
  y: number;
  z: number;
  distance: number;
  faceNormal: THREE.Vector3;
  isBedrock: boolean;
}

interface Particle {
  mesh: THREE.Mesh;
  vx: number;
  vy: number;
  vz: number;
  life: number;
}

let msgSequence = 0;

export function GameCanvas({ world, server, settings, onExit }: GameCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [serverLoading, setServerLoading] = useState(!!server);
  const [serverStatusText, setServerStatusText] = useState(
    server ? `${server.name} (${server.ip}:${server.port}) sunucusuna bağlanılıyor...` : ''
  );
  const [blocksCount, setBlocksCount] = useState(0);
  const [entitiesCount, setEntitiesCount] = useState(0);
  const [actionBarText, setActionBarText] = useState<string | null>(null);
  const [titleText, setTitleText] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init-msg-1', sender: 'Sistem', text: 'Minecraft 1.21.4 Web Client Dünyasına Hoş Geldiniz!', time: '12:00', isSystem: true },
    { 
      id: 'init-msg-2', 
      sender: 'Sistem', 
      text: server 
        ? `Sunucu: ${server.name} (${server.ip}:${server.port}) - Minecraft Java Protokolü ve Chat Aktif` 
        : `Tek Oyunculu Dünya: ${world?.name || 'Yeni Dünya'}`, 
      time: '12:00', 
      isSystem: true 
    }
  ]);
  const [hotbar, setHotbar] = useState<InventoryItem[]>(() => {
    if (server) {
      return Array.from({ length: 9 }, (_, i) => ({ type: 'air' as BlockType, count: 0, name: 'Boş' }));
    }
    return initialHotbarItems;
  });
  const [serverInventory, setServerInventory] = useState<InventoryItem[]>([]);
  const [selectedHotbarIndex, setSelectedHotbarIndex] = useState(0);
  const [health, setHealth] = useState(20);
  const [hunger, setHunger] = useState(20);
  const [fps, setFps] = useState(60);

  // Live customizable settings and diagnostics
  const [activeSettings, setActiveSettings] = useState<GameSettings>(() => {
    try {
      const saved = localStorage.getItem('mc_client_settings');
      if (saved) {
        return {
          showScoreboard: true,
          showPing: true,
          ...settings,
          ...JSON.parse(saved)
        };
      }
    } catch {}
    return {
      showScoreboard: true,
      showPing: true,
      ...settings,
    };
  });
  const [ping, setPing] = useState(0);
  const [tabList, setTabList] = useState<any[]>([]);
  const [scoreboard, setScoreboard] = useState<{ title: string; items: { name: string; score: number }[] } | null>(null);
  const [tabListOpen, setTabListOpen] = useState(false);
  const [menuScreen, setMenuScreen] = useState<'main' | 'settings'>('main');

  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const [playerPos, setPlayerPos] = useState({ x: '0.0', y: '64.0', z: '0.0' });
  const [targetedBlock, setTargetedBlock] = useState<TargetedBlockData | null>(null);
  const [disconnectedReason, setDisconnectedReason] = useState<string | null>(null);
  const [reconnectTrigger, setReconnectTrigger] = useState(0);
  const [playerUsername, setPlayerUsername] = useState<string>(() => {
    return (localStorage.getItem('mc_player_username')?.trim() || settings.playerName?.trim() || activeSettings.playerName?.trim() || 'Steve').replace(/[^a-zA-Z0-9_]/g, '');
  });

  const lastActionTimeRef = useRef<number>(0);

  const chatScrollRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLInputElement>(null);

  // Touch control state
  const touchMoveRef = useRef({ forward: false, back: false, left: false, right: false, jump: false });
  const touchLookRef = useRef<{ touchId: number; lastX: number; lastY: number } | null>(null);
  const actionsRef = useRef<{ breakBlock: () => void; placeBlock: () => void } | null>(null);

  // Check if touch controls should be visible
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024);
  const showTouchControls = activeSettings.touchControls === 'enabled' || (activeSettings.touchControls === 'auto' && isTouchDevice);

  // Landscape vs Portrait detection for mobile optimization
  const [isPortrait, setIsPortrait] = useState(() => typeof window !== 'undefined' && window.innerHeight > window.innerWidth);
  const [dismissPortraitWarning, setDismissPortraitWarning] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      if (typeof window !== 'undefined') {
        setIsPortrait(window.innerHeight > window.innerWidth);
      }
    };
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  const handleRequestLandscape = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
      if ('orientation' in screen && (screen.orientation as any).lock) {
        await (screen.orientation as any).lock('landscape').catch(() => {});
      }
    } catch {}
  };

  const wsRef = useRef<WebSocket | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const blocksMapRef = useRef<Map<string, BlockData> | null>(null);
  const removeBlockAtRef = useRef<((x: number, y: number, z: number) => void) | null>(null);
  const entitiesMapRef = useRef<Map<number, RenderedEntity>>(new Map());

  // Zero-Overhead Direct HUD DOM Refs (Eliminates 20-60 React re-renders per second)
  const fpsDisplayRef = useRef<HTMLSpanElement>(null);
  const posDisplayRef = useRef<HTMLSpanElement>(null);
  const blocksDisplayRef = useRef<HTMLSpanElement>(null);
  const targetHudRef = useRef<HTMLDivElement>(null);
  const targetNameRef = useRef<HTMLSpanElement>(null);
  const targetCoordsRef = useRef<HTMLSpanElement>(null);
  const targetBedrockBadgeRef = useRef<HTMLSpanElement>(null);
  const crosshairRef = useRef<HTMLDivElement>(null);

  // Synchronized refs to avoid re-initializing Three.js on UI toggles
  const pausedRef = useRef(paused);
  const inventoryOpenRef = useRef(inventoryOpen);
  const chatOpenRef = useRef(chatOpen);
  const hotbarRef = useRef(hotbar);
  const selectedHotbarIndexRef = useRef(selectedHotbarIndex);

  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => { inventoryOpenRef.current = inventoryOpen; }, [inventoryOpen]);
  useEffect(() => { chatOpenRef.current = chatOpen; }, [chatOpen]);
  useEffect(() => { hotbarRef.current = hotbar; }, [hotbar]);
  useEffect(() => { selectedHotbarIndexRef.current = selectedHotbarIndex; }, [selectedHotbarIndex]);

  // Auto-scroll chat to bottom on new messages
  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages, chatOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (chatOpen && chatInputRef.current) {
      setTimeout(() => chatInputRef.current?.focus(), 50);
    }
  }, [chatOpen]);

  const addChatMessage = useCallback((sender: string, text: string, isSystem = false) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const uniqueId = `msg-${Date.now()}-${++msgSequence}-${Math.random().toString(36).slice(2, 8)}`;
    setMessages((prev) => {
      // Keep last 120 messages
      const updated = [...prev, { id: uniqueId, sender, text, time, isSystem }];
      if (updated.length > 120) return updated.slice(updated.length - 120);
      return updated;
    });
  }, []);

  const updateHeldItemMeshRef = useRef<(() => void) | null>(null);

  // Hotbar slot selection synchronization
  const handleSelectHotbarSlot = (index: number) => {
    setSelectedHotbarIndex(index);
    if (updateHeldItemMeshRef.current) {
      setTimeout(() => updateHeldItemMeshRef.current?.(), 10);
    }
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'selectSlot', slot: index }));
    }
  };

  useEffect(() => {
    // Initialize textures with the active user setting
    initTextures(activeSettings.texturePack || 'realistic');

    if (!containerRef.current) return;
    const container = containerRef.current;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x87ceeb); // Sky blue
    scene.fog = new THREE.FogExp2(0x87ceeb, 0.018);

    const camera = new THREE.PerspectiveCamera(activeSettings.fov, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 15, 0);
    cameraRef.current = camera;
    scene.add(camera);

    // FIRST-PERSON HAND & HELD ITEM MODEL
    const handGroup = new THREE.Group();
    handGroup.position.set(0.38, -0.32, -0.55);
    handGroup.rotation.set(0.1, -0.2, 0);
    camera.add(handGroup);

    // Steve Arm Mesh (Forearm & Sleeve)
    const armGeo = new THREE.BoxGeometry(0.14, 0.48, 0.14);
    const armMat = new THREE.MeshLambertMaterial({ color: 0x00aaaa }); // Teal sleeve
    const armMesh = new THREE.Mesh(armGeo, armMat);
    armMesh.position.set(0, -0.15, 0);
    handGroup.add(armMesh);

    const handTipGeo = new THREE.BoxGeometry(0.13, 0.15, 0.13);
    const handTipMat = new THREE.MeshLambertMaterial({ color: 0xf5d0a9 }); // Skin tone
    const handTipMesh = new THREE.Mesh(handTipGeo, handTipMat);
    handTipMesh.position.set(0, 0.15, 0);
    handGroup.add(handTipMesh);

    // Container for currently held item/block
    const heldItemContainer = new THREE.Group();
    heldItemContainer.position.set(0, 0.22, -0.08);
    handGroup.add(heldItemContainer);

    let currentHeldMesh: THREE.Object3D | null = null;
    let handSwingProgress = 0.0;

    const triggerHandSwing = () => {
      handSwingProgress = 1.0;
    };

    const updateHeldItemMesh = () => {
      if (currentHeldMesh) {
        heldItemContainer.remove(currentHeldMesh);
        currentHeldMesh = null;
      }

      const activeSlot = selectedHotbarIndexRef.current;
      const item = hotbarRef.current[activeSlot];
      if (!item || item.count <= 0 || item.type === 'air') return;

      const blockTex = blockTextures[item.type];
      if (blockTex) {
        const miniGeo = new THREE.BoxGeometry(0.22, 0.22, 0.22);
        let miniMat: THREE.Material | THREE.Material[];
        if ('top' in blockTex) {
          miniMat = [
            new THREE.MeshLambertMaterial({ map: blockTex.side }),
            new THREE.MeshLambertMaterial({ map: blockTex.side }),
            new THREE.MeshLambertMaterial({ map: blockTex.top }),
            new THREE.MeshLambertMaterial({ map: blockTex.bottom }),
            new THREE.MeshLambertMaterial({ map: blockTex.side }),
            new THREE.MeshLambertMaterial({ map: blockTex.side }),
          ];
        } else {
          miniMat = new THREE.MeshLambertMaterial({ map: blockTex });
        }
        const miniBlock = new THREE.Mesh(miniGeo, miniMat);
        miniBlock.rotation.set(0.2, 0.4, 0.1);
        heldItemContainer.add(miniBlock);
        currentHeldMesh = miniBlock;
      } else {
        const bladeGeo = new THREE.BoxGeometry(0.06, 0.45, 0.02);
        const bladeMat = new THREE.MeshLambertMaterial({ color: 0x38bdf8 });
        const sword = new THREE.Mesh(bladeGeo, bladeMat);
        sword.position.set(0, 0.12, -0.1);
        sword.rotation.set(0.6, -0.3, 0.2);
        heldItemContainer.add(sword);
        currentHeldMesh = sword;
      }
    };

    // Initial held item render
    updateHeldItemMesh();
    updateHeldItemMeshRef.current = updateHeldItemMesh;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: activeSettings.graphics === 'fabulous',
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const targetPixelRatio = activeSettings.graphics === 'fast' ? 1.0 : Math.min(window.devicePixelRatio, 1.25);
    renderer.setPixelRatio(targetPixelRatio);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff5e6, 0.95);
    sunLight.position.set(50, 100, 50);
    scene.add(sunLight);

    // 3D Block Target Highlight Box (Classic Minecraft Outline)
    const wireframeGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.004, 1.004, 1.004));
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0x000000,
      linewidth: 2,
      depthTest: true
    });
    const highlightBox = new THREE.LineSegments(wireframeGeo, wireframeMat);
    highlightBox.visible = false;
    highlightBox.renderOrder = 999;
    scene.add(highlightBox);

    // Block particles (Single shared geometry without disposing)
    const particles: Particle[] = [];
    const particleBoxGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);

    const spawnBlockParticles = (x: number, y: number, z: number, type: BlockType) => {
      if (particles.length > 40) return; // Prevent particle explosion lag
      const tex = blockTextures[type];
      let pMat: THREE.Material;
      if (tex && 'top' in tex) {
        pMat = new THREE.MeshLambertMaterial({ map: tex.top });
      } else if (tex instanceof THREE.Texture) {
        pMat = new THREE.MeshLambertMaterial({ map: tex });
      } else {
        pMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
      }

      for (let i = 0; i < 6; i++) {
        const pMesh = new THREE.Mesh(particleBoxGeo, pMat);
        pMesh.position.set(
          x + (Math.random() - 0.5) * 0.7,
          y + (Math.random() - 0.5) * 0.7,
          z + (Math.random() - 0.5) * 0.7
        );
        scene.add(pMesh);
        particles.push({
          mesh: pMesh,
          vx: (Math.random() - 0.5) * 0.08,
          vy: Math.random() * 0.08 + 0.03,
          vz: (Math.random() - 0.5) * 0.08,
          life: 18
        });
      }
    };

    // =========================================================================
    // HIGH-PERFORMANCE INSTANCED VOXEL ENGINE
    // Converts 30,000+ draw calls into ~20 draw calls for rock-solid 60 FPS
    // =========================================================================
    const blocksMap = new Map<string, BlockData>();
    blocksMapRef.current = blocksMap;
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const dummyMatrix = new THREE.Matrix4();
    const dummyPos = new THREE.Vector3();

    interface InstancedTypeEntry {
      mesh: THREE.InstancedMesh;
      count: number;
      capacity: number;
      keys: string[];
    }
    const instancedMeshMap = new Map<BlockType, InstancedTypeEntry>();
    const dirtyTypes = new Set<BlockType>();

    // Material Cache: Shared materials across blocks
    const materialCache = new Map<BlockType, THREE.Material | THREE.Material[]>();

    const getMaterialsForBlock = (type: BlockType): THREE.Material | THREE.Material[] => {
      if (materialCache.has(type)) {
        return materialCache.get(type)!;
      }

      const tex = blockTextures[type];
      if (!tex) {
        const fallbackMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
        materialCache.set(type, fallbackMat);
        return fallbackMat;
      }

      let mats: THREE.Material | THREE.Material[];
      if ('top' in tex) {
        const sideMat = new THREE.MeshLambertMaterial({ map: tex.side });
        const topMat = new THREE.MeshLambertMaterial({ map: tex.top });
        const botMat = new THREE.MeshLambertMaterial({ map: tex.bottom });
        mats = [sideMat, sideMat, topMat, botMat, sideMat, sideMat];
      } else {
        const isTransparent = type === 'glass' || type === 'water';
        mats = new THREE.MeshLambertMaterial({
          map: tex,
          transparent: isTransparent,
          opacity: type === 'water' ? 0.7 : type === 'glass' ? 0.85 : 1.0
        });
      }

      materialCache.set(type, mats);
      return mats;
    };

    const getOrCreateInstancedMesh = (type: BlockType): InstancedTypeEntry => {
      let entry = instancedMeshMap.get(type);
      if (entry) return entry;

      const capacity = 8192;
      const mats = getMaterialsForBlock(type);
      const mesh = new THREE.InstancedMesh(boxGeometry, mats, capacity);
      mesh.count = 0;
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.frustumCulled = false;
      scene.add(mesh);

      entry = { mesh, count: 0, capacity, keys: [] };
      instancedMeshMap.set(type, entry);
      return entry;
    };

    const addBlockAt = (x: number, y: number, z: number, type: BlockType, deferUpdate = false) => {
      const key = `${x},${y},${z}`;
      if (blocksMap.has(key)) return;

      const entry = getOrCreateInstancedMesh(type);

      // Dynamically expand capacity if needed
      if (entry.count >= entry.capacity) {
        const newCapacity = entry.capacity * 2;
        const newMesh = new THREE.InstancedMesh(boxGeometry, getMaterialsForBlock(type), newCapacity);
        newMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        newMesh.frustumCulled = false;
        for (let i = 0; i < entry.count; i++) {
          entry.mesh.getMatrixAt(i, dummyMatrix);
          newMesh.setMatrixAt(i, dummyMatrix);
        }
        newMesh.count = entry.count;
        newMesh.instanceMatrix.needsUpdate = true;
        scene.remove(entry.mesh);
        entry.mesh.dispose();
        scene.add(newMesh);
        entry.mesh = newMesh;
        entry.capacity = newCapacity;
      }

      const index = entry.count;
      dummyPos.set(x + 0.5, y + 0.5, z + 0.5);
      dummyMatrix.setPosition(dummyPos);
      entry.mesh.setMatrixAt(index, dummyMatrix);
      entry.keys.push(key);
      entry.count++;
      entry.mesh.count = entry.count;

      if (!deferUpdate) {
        entry.mesh.instanceMatrix.needsUpdate = true;
      } else {
        dirtyTypes.add(type);
      }

      blocksMap.set(key, { type, x, y, z, index });
    };

    const removeBlockAt = (x: number, y: number, z: number) => {
      const key = `${x},${y},${z}`;
      const block = blocksMap.get(key);
      if (!block) return;

      const entry = instancedMeshMap.get(block.type);
      if (entry && entry.count > 0) {
        const lastIndex = entry.count - 1;
        if (block.index < lastIndex) {
          // Swap last instance into block.index (O(1) fast swap)
          const lastKey = entry.keys[lastIndex];
          entry.mesh.getMatrixAt(lastIndex, dummyMatrix);
          entry.mesh.setMatrixAt(block.index, dummyMatrix);
          entry.keys[block.index] = lastKey;
          const lastBlock = blocksMap.get(lastKey);
          if (lastBlock) {
            lastBlock.index = block.index;
          }
        }
        entry.keys.pop();
        entry.count--;
        entry.mesh.count = entry.count;
        entry.mesh.instanceMatrix.needsUpdate = true;
      }

      blocksMap.delete(key);
    };
    removeBlockAtRef.current = removeBlockAt;

    const flushDirtyBlocks = () => {
      if (dirtyTypes.size === 0) return;
      for (const type of dirtyTypes) {
        const entry = instancedMeshMap.get(type);
        if (entry) {
          entry.mesh.instanceMatrix.needsUpdate = true;
        }
      }
      dirtyTypes.clear();
    };

    // Generate Natural Terrain ONLY for Singleplayer (Surface visible voxels only - ultra light!)
    if (!server) {
      const worldSize = 28;
      const half = Math.floor(worldSize / 2);
      for (let x = -half; x < half; x++) {
        for (let z = -half; z < half; z++) {
          const height = Math.floor(Math.sin(x * 0.15) * Math.cos(z * 0.15) * 2 + 10);
          addBlockAt(x, height, z, 'grass', true);
          addBlockAt(x, height - 1, z, 'dirt', true);

          // Trees (Sparse for clean look and maximum performance)
          if (Math.abs(x) % 8 === 0 && Math.abs(z) % 8 === 0 && x !== 0 && z !== 0) {
            for (let ty = height + 1; ty <= height + 4; ty++) {
              addBlockAt(x, ty, z, 'oak_log', true);
            }
            for (let lx = x - 1; lx <= x + 1; lx++) {
              for (let lz = z - 1; lz <= z + 1; lz++) {
                for (let ly = height + 4; ly <= height + 6; ly++) {
                  addBlockAt(lx, ly, lz, 'oak_leaves', true);
                }
              }
            }
          }
        }
      }
      flushDirtyBlocks();
    }

    // Player Physics & Controls State
    const player = {
      x: 0,
      y: server ? 64 : 14, // Spawn near ground in singleplayer for immediate play
      z: 0,
      vx: 0,
      vy: 0,
      vz: 0,
      speed: 0.12,
      jumpForce: 0.25,
      gravity: 0.015,
      yaw: 0,
      pitch: 0
    };

    const keys: Record<string, boolean> = {};

    const handleKeyDown = (e: KeyboardEvent) => {
      keys[e.code] = true;
      if (e.code === 'Tab') {
        e.preventDefault();
        setTabListOpen(true);
      }
      if (e.code === 'KeyE' && !chatOpenRef.current) {
        setInventoryOpen((prev) => !prev);
      }
      if (e.code === 'KeyT' && !chatOpenRef.current) {
        e.preventDefault();
        setChatOpen(true);
      }
      if (e.code === 'Slash' && !chatOpenRef.current) {
        e.preventDefault();
        setChatInput('/');
        setChatOpen(true);
      }
      if (e.code === 'Escape') {
        if (chatOpenRef.current) {
          setChatOpen(false);
        } else if (inventoryOpenRef.current) {
          setInventoryOpen(false);
        } else {
          setPaused((prev) => {
            if (!prev) setMenuScreen('main'); // default screen when pausing
            return !prev;
          });
        }
      }
      if (e.code.startsWith('Digit')) {
        const num = parseInt(e.code.replace('Digit', ''), 10);
        if (num >= 1 && num <= 9) {
          handleSelectHotbarSlot(num - 1);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.code] = false;
      if (e.code === 'Tab') {
        e.preventDefault();
        setTabListOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Mouse Look
    const handleMouseMove = (e: MouseEvent) => {
      if (document.pointerLockElement === renderer.domElement && !pausedRef.current && !inventoryOpenRef.current && !chatOpenRef.current) {
        const sensitivity = 0.002;
        player.yaw -= e.movementX * sensitivity;
        player.pitch -= e.movementY * sensitivity;
        player.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, player.pitch));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Ultra-Fast 3D DDA Voxel Raymarching (Amanatides & Woo algorithm: ~6-8 steps max, 0.0005ms)
    const cameraForward = new THREE.Vector3();
    const faceNormalVec = new THREE.Vector3();

    const getRaycastTarget = (): TargetedBlockData | null => {
      const camPos = camera.position;
      camera.getWorldDirection(cameraForward);
      const dirX = cameraForward.x;
      const dirY = cameraForward.y;
      const dirZ = cameraForward.z;

      let mapX = Math.floor(camPos.x);
      let mapY = Math.floor(camPos.y);
      let mapZ = Math.floor(camPos.z);

      const deltaDistX = Math.abs(1 / (dirX || 0.000001));
      const deltaDistY = Math.abs(1 / (dirY || 0.000001));
      const deltaDistZ = Math.abs(1 / (dirZ || 0.000001));

      let stepX: number, stepY: number, stepZ: number;
      let sideDistX: number, sideDistY: number, sideDistZ: number;

      if (dirX < 0) {
        stepX = -1;
        sideDistX = (camPos.x - mapX) * deltaDistX;
      } else {
        stepX = 1;
        sideDistX = (mapX + 1.0 - camPos.x) * deltaDistX;
      }
      if (dirY < 0) {
        stepY = -1;
        sideDistY = (camPos.y - mapY) * deltaDistY;
      } else {
        stepY = 1;
        sideDistY = (mapY + 1.0 - camPos.y) * deltaDistY;
      }
      if (dirZ < 0) {
        stepZ = -1;
        sideDistZ = (camPos.z - mapZ) * deltaDistZ;
      } else {
        stepZ = 1;
        sideDistZ = (mapZ + 1.0 - camPos.z) * deltaDistZ;
      }

      const maxDist = 5.2;
      let distTraveled = 0;
      let lastSide = 0; // 0: X, 1: Y, 2: Z

      while (distTraveled < maxDist) {
        if (sideDistX < sideDistY) {
          if (sideDistX < sideDistZ) {
            distTraveled = sideDistX;
            sideDistX += deltaDistX;
            mapX += stepX;
            lastSide = 0;
          } else {
            distTraveled = sideDistZ;
            sideDistZ += deltaDistZ;
            mapZ += stepZ;
            lastSide = 2;
          }
        } else {
          if (sideDistY < sideDistZ) {
            distTraveled = sideDistY;
            sideDistY += deltaDistY;
            mapY += stepY;
            lastSide = 1;
          } else {
            distTraveled = sideDistZ;
            sideDistZ += deltaDistZ;
            mapZ += stepZ;
            lastSide = 2;
          }
        }

        if (distTraveled > maxDist) break;

        const block = blocksMap.get(`${mapX},${mapY},${mapZ}`);
        if (block) {
          if (lastSide === 0) faceNormalVec.set(-stepX, 0, 0);
          else if (lastSide === 1) faceNormalVec.set(0, -stepY, 0);
          else faceNormalVec.set(0, 0, -stepZ);

          return {
            type: block.type,
            name: BLOCK_NAMES[block.type] || block.type,
            x: mapX,
            y: mapY,
            z: mapZ,
            distance: parseFloat(distTraveled.toFixed(1)),
            faceNormal: faceNormalVec,
            isBedrock: block.type === 'bedrock'
          };
        }
      }

      return null;
    };

    // BREAK ACTION
    const performBreak = () => {
      if (pausedRef.current || inventoryOpenRef.current || chatOpenRef.current) return;
      const now = performance.now();
      if (now - lastActionTimeRef.current < 200) return;
      lastActionTimeRef.current = now;

      triggerHandSwing();

      // Check if clicking an entity (mob/player/NPC attack)
      if (entitiesMapRef.current) {
        const ray = new THREE.Raycaster();
        const dir = new THREE.Vector3();
        camera.getWorldDirection(dir);
        ray.set(camera.position, dir);
        ray.far = 4.5;

        const entityMeshes: THREE.Object3D[] = [];
        const entityIdMap = new Map<THREE.Object3D, number>();
        for (const [id, rent] of entitiesMapRef.current.entries()) {
          entityMeshes.push(rent.group);
          entityIdMap.set(rent.group, id);
        }

        const hits = ray.intersectObjects(entityMeshes, true);
        if (hits.length > 0) {
          let rootGroup: THREE.Object3D | null = hits[0].object;
          let eId = rootGroup.userData?.entityId;
          while (rootGroup && eId === undefined) {
            if (entityIdMap.has(rootGroup)) {
              eId = entityIdMap.get(rootGroup);
              break;
            }
            rootGroup = rootGroup.parent;
            if (rootGroup?.userData?.entityId !== undefined) {
              eId = rootGroup.userData.entityId;
              break;
            }
          }
          if (eId !== undefined && wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
            soundManager.playClick();
            wsRef.current.send(JSON.stringify({ type: 'attackEntity', entityId: eId }));
            return;
          }
        }
      }

      const target = getRaycastTarget();
      if (!target) return;

      if (target.isBedrock) {
        soundManager.playClick();
        addChatMessage('Sistem', 'Katman kayası (Bedrock) kırılamaz!', true);
        return;
      }

      if (!server) {
        // Singleplayer: execute immediately
        spawnBlockParticles(target.x + 0.5, target.y + 0.5, target.z + 0.5, target.type);
        removeBlockAt(target.x, target.y, target.z);
        soundManager.playDig(target.type);

        setHotbar((prev) => {
          const updated = [...prev];
          const foundIdx = updated.findIndex((item) => item.type === target.type);
          if (foundIdx !== -1) {
            updated[foundIdx] = { ...updated[foundIdx], count: updated[foundIdx].count + 1 };
          } else {
            const emptyIdx = updated.findIndex((item) => item.count <= 0);
            if (emptyIdx !== -1) {
              updated[emptyIdx] = { type: target.type, count: 1, name: BLOCK_NAMES[target.type] || target.type };
            }
          }
          return updated;
        });
        highlightBox.visible = false;
      } else {
        // Multiplayer: Optimistic local removal + sound + particles + send dig packet
        soundManager.playDig(target.type);
        spawnBlockParticles(target.x + 0.5, target.y + 0.5, target.z + 0.5, target.type);
        removeBlockAt(target.x, target.y, target.z);
        highlightBox.visible = false;

        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
          wsRef.current.send(
            JSON.stringify({
              type: 'dig',
              x: target.x,
              y: target.y,
              z: target.z,
            })
          );
        }
      }
    };

    // PLACE ACTION
    const performPlace = () => {
      if (pausedRef.current || inventoryOpenRef.current || chatOpenRef.current) return;
      const now = performance.now();
      if (now - lastActionTimeRef.current < 200) return;
      lastActionTimeRef.current = now;

      triggerHandSwing();

      // Check if right clicking an entity (interact / NPC dialogue / villager trade)
      if (entitiesMapRef.current) {
        const ray = new THREE.Raycaster();
        const dir = new THREE.Vector3();
        camera.getWorldDirection(dir);
        ray.set(camera.position, dir);
        ray.far = 4.5;

        const entityMeshes: THREE.Object3D[] = [];
        const entityIdMap = new Map<THREE.Object3D, number>();
        for (const [id, rent] of entitiesMapRef.current.entries()) {
          entityMeshes.push(rent.group);
          entityIdMap.set(rent.group, id);
        }

        const hits = ray.intersectObjects(entityMeshes, true);
        if (hits.length > 0) {
          let rootGroup: THREE.Object3D | null = hits[0].object;
          let eId = rootGroup.userData?.entityId;
          while (rootGroup && eId === undefined) {
            if (entityIdMap.has(rootGroup)) {
              eId = entityIdMap.get(rootGroup);
              break;
            }
            rootGroup = rootGroup.parent;
            if (rootGroup?.userData?.entityId !== undefined) {
              eId = rootGroup.userData.entityId;
              break;
            }
          }
          if (eId !== undefined && wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
            soundManager.playClick();
            wsRef.current.send(JSON.stringify({ type: 'useEntity', entityId: eId }));
            return;
          }
        }
      }

      const target = getRaycastTarget();
      if (!target) return;

      const activeSlot = selectedHotbarIndexRef.current;
      const currentItem = hotbarRef.current[activeSlot];

      if (!currentItem || currentItem.count <= 0 || currentItem.type === 'air') {
        soundManager.playClick();
        return;
      }

      const placeX = target.x + Math.round(target.faceNormal.x);
      const placeY = target.y + Math.round(target.faceNormal.y);
      const placeZ = target.z + Math.round(target.faceNormal.z);

      // Prevent placing inside player body
      const insidePlayer =
        player.x + 0.35 > placeX &&
        player.x - 0.35 < placeX + 1 &&
        player.z + 0.35 > placeZ &&
        player.z - 0.35 < placeZ + 1 &&
        player.y + 1.8 > placeY &&
        player.y < placeY + 1;

      if (insidePlayer) return;

      const key = `${placeX},${placeY},${placeZ}`;
      if (blocksMap.has(key)) return;

      if (!server) {
        // Singleplayer: execute immediately
        addBlockAt(placeX, placeY, placeZ, currentItem.type);
        soundManager.playDig(currentItem.type);
        setHotbar((prev) => {
          const updated = [...prev];
          if (updated[activeSlot] && updated[activeSlot].count > 0) {
            updated[activeSlot] = { ...updated[activeSlot], count: updated[activeSlot].count - 1 };
          }
          return updated;
        });
      } else {
        // Multiplayer: Optimistic local placement + send place packet
        addBlockAt(placeX, placeY, placeZ, currentItem.type);
        soundManager.playDig(currentItem.type);
        setHotbar((prev) => {
          const updated = [...prev];
          if (updated[activeSlot] && updated[activeSlot].count > 0) {
            updated[activeSlot] = { ...updated[activeSlot], count: updated[activeSlot].count - 1 };
          }
          return updated;
        });
        if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
          wsRef.current.send(
            JSON.stringify({
              type: 'place',
              x: target.x,
              y: target.y,
              z: target.z,
              face: {
                x: Math.round(target.faceNormal.x),
                y: Math.round(target.faceNormal.y),
                z: Math.round(target.faceNormal.z),
              },
              slot: activeSlot,
            })
          );
        }
      }
    };

    actionsRef.current = { breakBlock: performBreak, placeBlock: performPlace };

    // Mouse Controls
    const handleMouseDown = (e: MouseEvent) => {
      if (pausedRef.current || inventoryOpenRef.current || chatOpenRef.current) return;

      if (document.pointerLockElement !== renderer.domElement) {
        renderer.domElement.requestPointerLock();
      }

      if (e.button === 0) performBreak();
      else if (e.button === 2) performPlace();
      else if (e.button === 1) {
        const target = getRaycastTarget();
        if (target) {
          const found = hotbarRef.current.findIndex((i) => i.type === target.type);
          if (found !== -1) {
            handleSelectHotbarSlot(found);
            soundManager.playPop();
          }
        }
      }
    };

    const handleContextMenu = (e: MouseEvent) => e.preventDefault();

    const handleWheel = (e: WheelEvent) => {
      if (pausedRef.current || inventoryOpenRef.current || chatOpenRef.current) return;
      if (e.deltaY > 0) {
        handleSelectHotbarSlot((selectedHotbarIndexRef.current + 1) % 9);
      } else if (e.deltaY < 0) {
        handleSelectHotbarSlot((selectedHotbarIndexRef.current - 1 + 9) % 9);
      }
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('wheel', handleWheel, { passive: true });

    // Touch Look Handling on Canvas (Mobile Screen Pan)
    const handleTouchStart = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        if (t.clientX > window.innerWidth * 0.35) {
          touchLookRef.current = {
            touchId: t.identifier,
            lastX: t.clientX,
            lastY: t.clientY
          };
          break;
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchLookRef.current) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        if (t.identifier === touchLookRef.current.touchId) {
          const dx = t.clientX - touchLookRef.current.lastX;
          const dy = t.clientY - touchLookRef.current.lastY;
          touchLookRef.current.lastX = t.clientX;
          touchLookRef.current.lastY = t.clientY;

          const sensitivity = 0.005;
          player.yaw -= dx * sensitivity;
          player.pitch -= dy * sensitivity;
          player.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, player.pitch));
          break;
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchLookRef.current) return;
      for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === touchLookRef.current.touchId) {
          touchLookRef.current = null;
          break;
        }
      }
    };

    renderer.domElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    renderer.domElement.addEventListener('touchmove', handleTouchMove, { passive: true });
    renderer.domElement.addEventListener('touchend', handleTouchEnd, { passive: true });

    let pingInterval: any = null;

    // Connect WebSocket Minecraft Java Protocol Bridge if server is specified
    if (server) {
      const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const chosenPlayerName = (playerUsername.trim() || localStorage.getItem('mc_player_username')?.trim() || settings.playerName?.trim() || activeSettings.playerName?.trim() || 'Steve').replace(/[^a-zA-Z0-9_]/g, '');
      const wsUrl = `${wsProtocol}//${window.location.host}/ws-proxy?host=${encodeURIComponent(server.ip)}&port=${server.port}&username=${encodeURIComponent(chosenPlayerName || 'Steve')}&mode=protocol`;
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        addChatMessage('Sistem', `Minecraft Java Protokol Köprüsü bağlandı: ${server.name} (${server.ip}:${server.port})`, true);
        
        // Start live round-trip latency (ping) diagnostic loop
        pingInterval = setInterval(() => {
          if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ type: 'ping', time: Date.now() }));
          }
        }, 2000);
      };

      ws.onmessage = (event) => {
        if (typeof event.data === 'string') {
          try {
            const data = JSON.parse(event.data);

            if (data.type === 'status') {
              setServerStatusText(data.message || 'Sunucuya bağlanılıyor...');
              addChatMessage('Sistem', data.message, true);
            } else if (data.type === 'login') {
              const uName = data?.username || 'Oyuncu';
              setServerStatusText(`${uName} olarak giriş yapıldı. Dünya yükleniyor...`);
              addChatMessage('Sistem', data?.message || `${uName} sunucuya giriş yaptı.`, true);
            } else if (data.type === 'spawn') {
              setServerLoading(false);
              setServerStatusText('Dünyaya katıldınız!');
              player.x = data.x;
              player.y = data.y;
              player.z = data.z;
              player.vx = 0;
              player.vy = 0;
              player.vz = 0;
              if (typeof data.yaw === 'number') player.yaw = data.yaw;
              if (typeof data.pitch === 'number') player.pitch = data.pitch;
              camera.position.set(data.x, data.y + 1.62, data.z);
              if (typeof data.health === 'number') setHealth(data.health);
              if (typeof data.food === 'number') setHunger(data.food);
              addChatMessage('Sistem', `Dünyaya doğdunuz! X:${data.x.toFixed(1)} Y:${data.y.toFixed(1)} Z:${data.z.toFixed(1)}`, true);
            } else if (data.type === 'teleport') {
              player.x = data.x;
              player.y = data.y;
              player.z = data.z;
              player.vx = 0;
              player.vy = 0;
              player.vz = 0;
              if (typeof data.yaw === 'number') player.yaw = data.yaw;
              if (typeof data.pitch === 'number') player.pitch = data.pitch;
              camera.position.set(data.x, data.y + 1.62, data.z);
            } else if (data.type === 'blocks') {
              // Real heightmap blocks streamed from the Minecraft Java server!
              if (Array.isArray(data.blocks)) {
                setServerLoading(false);
                for (const b of data.blocks) {
                  const mapped = mapMinecraftBlock(b.type);
                  addBlockAt(b.x, b.y, b.z, mapped, true);
                }
                flushDirtyBlocks();
                if (blocksDisplayRef.current) {
                  blocksDisplayRef.current.textContent = blocksMap.size.toLocaleString();
                }
              }
            } else if (data.type === 'blockUpdate') {
              const key = `${data.x},${data.y},${data.z}`;
              if (!data.blockType || data.blockType === 'air' || data.blockType === 'cave_air' || data.blockType === 'void_air') {
                const block = blocksMap.get(key);
                if (block) {
                  spawnBlockParticles(data.x + 0.5, data.y + 0.5, data.z + 0.5, block.type);
                  soundManager.playDig(block.type);
                  removeBlockAt(data.x, data.y, data.z);
                  if (blocksDisplayRef.current) {
                    blocksDisplayRef.current.textContent = blocksMap.size.toLocaleString();
                  }
                }
              } else {
                const mapped = mapMinecraftBlock(data.blockType);
                addBlockAt(data.x, data.y, data.z, mapped);
                soundManager.playDig(mapped);
                if (blocksDisplayRef.current) {
                  blocksDisplayRef.current.textContent = blocksMap.size.toLocaleString();
                }
              }
            } else if (data.type === 'chat') {
              addChatMessage(data.sender || 'Sunucu', data.text || '', data.isSystem);
            } else if (data.type === 'actionBar') {
              setActionBarText(data.text);
              setTimeout(() => setActionBarText(null), 3000);
            } else if (data.type === 'title') {
              setTitleText(data.text);
              setTimeout(() => setTitleText(null), 4000);
            } else if (data.type === 'health') {
              if (typeof data.health === 'number') setHealth(data.health);
              if (typeof data.food === 'number') setHunger(data.food);
            } else if (data.type === 'inventory') {
              // Synchronize inventory items from server
              if (Array.isArray(data.hotbar)) {
                const mappedHotbar: InventoryItem[] = data.hotbar.map((i: any) => ({
                  type: mapMinecraftBlock(i.type),
                  count: i.count,
                  name: i.name || BLOCK_NAMES[mapMinecraftBlock(i.type)] || i.type,
                }));
                setHotbar(mappedHotbar);
              }
              if (Array.isArray(data.inventory)) {
                const mappedInv: InventoryItem[] = data.inventory.map((i: any) => ({
                  type: mapMinecraftBlock(i.type),
                  count: i.count,
                  name: i.name || BLOCK_NAMES[mapMinecraftBlock(i.type)] || i.type,
                }));
                setServerInventory(mappedInv);
              }
              if (typeof data.selectedSlot === 'number') {
                setSelectedHotbarIndex(data.selectedSlot);
              }
            } else if (data.type === 'entitySpawn') {
              // 3D Mob, NPC, or Player Spawn
              const ed: MinecraftEntityData = data.entity;
              if (ed && !entitiesMapRef.current.has(ed.id)) {
                const e3d = createEntity3D(ed);
                scene.add(e3d.group);
                entitiesMapRef.current.set(ed.id, e3d);
                setEntitiesCount(entitiesMapRef.current.size);
              }
            } else if (data.type === 'entityMove') {
              // Smooth entity movement
              const ed = data.entity;
              if (ed) {
                const existing = entitiesMapRef.current.get(ed.id);
                if (existing) {
                  existing.targetPos.set(ed.x, ed.y, ed.z);
                  existing.targetYaw = ed.yaw;
                  existing.targetPitch = ed.pitch;
                }
              }
            } else if (data.type === 'entityDespawn') {
              // Entity despawned / gone
              const existing = entitiesMapRef.current.get(data.id);
              if (existing) {
                scene.remove(existing.group);
                entitiesMapRef.current.delete(data.id);
                setEntitiesCount(entitiesMapRef.current.size);
              }
            } else if (data.type === 'entitiesSync') {
              // Batch sync of visible entities
              if (Array.isArray(data.entities)) {
                for (const ed of data.entities) {
                  const existing = entitiesMapRef.current.get(ed.id);
                  if (existing) {
                    existing.targetPos.set(ed.x, ed.y, ed.z);
                    existing.targetYaw = ed.yaw;
                    existing.targetPitch = ed.pitch;
                  } else {
                    const e3d = createEntity3D(ed);
                    scene.add(e3d.group);
                    entitiesMapRef.current.set(ed.id, e3d);
                  }
                }
                setEntitiesCount(entitiesMapRef.current.size);
              }
            } else if (data.type === 'pong') {
              const rtt = Date.now() - data.clientTime;
              setPing(rtt + data.serverPing);
            } else if (data.type === 'tabList') {
              if (Array.isArray(data.players)) {
                setTabList(data.players.filter((p: any) => p && typeof p.username === 'string' && p.username.trim() !== ''));
              }
            } else if (data.type === 'scoreboard') {
              setScoreboard({
                title: data.title || 'SCOREBOARD',
                items: data.items || []
              });
            } else if (data.type === 'kicked') {
              const reasonText = data.reason || 'Sunucu tarafından oturum sonlandırıldı.';
              setServerStatusText(`Sunucudan atıldınız: ${reasonText}`);
              addChatMessage('Sunucu', `Sunucudan atıldınız: ${reasonText}`, true);
              setDisconnectedReason(`Sunucudan Atıldınız:\n${reasonText}`);
            } else if (data.type === 'error') {
              setServerStatusText(`Hata: ${data.message}`);
              addChatMessage('Sistem', `Hata: ${data.message}`, true);
            } else if (data.type === 'closed') {
              setServerStatusText(`Sunucu bağlantısı kapandı.`);
              addChatMessage('Sistem', 'Sunucu bağlantısı kapandı.', true);
              setDisconnectedReason('Minecraft sunucusu ile bağlantı kesildi veya sunucu kapalı.');
            }
          } catch {
            // raw message
          }
        }
      };

      ws.onerror = () => {
        setServerStatusText('Sunucuya bağlanılamadı (TCP/Protocol Hatası)');
        addChatMessage('Sistem', `Sunucuya bağlanılamadı. Render.com üzerinde veya sunucunun online olduğunu kontrol edin.`, true);
      };

      ws.onclose = () => {
        addChatMessage('Sistem', `Sunucu bağlantısı sonlandı.`, true);
      };
    }

    // Animation Loop
    let lastTime = performance.now();
    let frameCount = 0;
    let animId: number;
    let lastTargetKey = '';

    const animate = (now: number) => {
      animId = requestAnimationFrame(animate);

      // FPS calculation (Zero re-render direct DOM update)
      frameCount++;
      if (now - lastTime >= 1000) {
        const currentFps = Math.round((frameCount * 1000) / (now - lastTime));
        if (fpsDisplayRef.current) {
          fpsDisplayRef.current.textContent = String(currentFps);
        }
        frameCount = 0;
        lastTime = now;
      }

      // Dynamic Chunk Culling (Unloads distant blocks smoothly in batches)
      if (frameCount % 60 === 0) {
        const limitDistSq = Math.pow(activeSettings.renderDistance * 16, 2);
        const camX = camera.position.x;
        const camY = camera.position.y;
        const camZ = camera.position.z;
        const toRemove: { x: number; y: number; z: number }[] = [];
        for (const b of blocksMap.values()) {
          const dx = b.x - camX;
          const dy = b.y - camY;
          const dz = b.z - camZ;
          if (dx * dx + dy * dy + dz * dz > limitDistSq) {
            toRemove.push(b);
            if (toRemove.length >= 64) break;
          }
        }
        for (const b of toRemove) {
          removeBlockAt(b.x, b.y, b.z);
        }
        if (toRemove.length > 0 && blocksDisplayRef.current) {
          blocksDisplayRef.current.textContent = blocksMap.size.toLocaleString();
        }
      }

      // Animate 3D Mobs, NPCs, and Players
      for (const entity of entitiesMapRef.current.values()) {
        updateEntityTick(entity, 0.016);
      }

      // Update breaking particles (Shared geometry - never dispose!)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.mesh.position.x += p.vx;
        p.mesh.position.y += p.vy;
        p.mesh.position.z += p.vz;
        p.vy -= 0.008;
        p.life--;
        if (p.life <= 0) {
          scene.remove(p.mesh);
          particles.splice(i, 1);
        }
      }

      if (!pausedRef.current && !inventoryOpenRef.current && !chatOpenRef.current) {
        // Minecraft Shift (Sneak/Crouch) vs Ctrl/R (Sprint) controls
        const isSneaking = keys['ShiftLeft'];
        const isSprinting = !isSneaking && (keys['ControlLeft'] || keys['KeyR']);
        
        let moveSpeed = 0.12; // Realistic Minecraft walking speed
        if (isSprinting) moveSpeed = 0.17;
        if (isSneaking) moveSpeed = 0.05;

        let inputX = 0;
        let inputZ = 0;

        const isForward = keys['KeyW'] || keys['ArrowUp'] || touchMoveRef.current.forward;
        const isBack = keys['KeyS'] || keys['ArrowDown'] || touchMoveRef.current.back;
        const isLeft = keys['KeyA'] || keys['ArrowLeft'] || touchMoveRef.current.left;
        const isRight = keys['KeyD'] || keys['ArrowRight'] || touchMoveRef.current.right;
        const isJump = keys['Space'] || touchMoveRef.current.jump;

        if (isForward) {
          inputX -= Math.sin(player.yaw);
          inputZ -= Math.cos(player.yaw);
        }
        if (isBack) {
          inputX += Math.sin(player.yaw);
          inputZ += Math.cos(player.yaw);
        }
        if (isLeft) {
          inputX -= Math.cos(player.yaw);
          inputZ += Math.sin(player.yaw);
        }
        if (isRight) {
          inputX += Math.cos(player.yaw);
          inputZ -= Math.sin(player.yaw);
        }

        const len = Math.sqrt(inputX * inputX + inputZ * inputZ);
        if (len > 0) {
          inputX = (inputX / len) * moveSpeed;
          inputZ = (inputZ / len) * moveSpeed;
        }

        // 1. Gravity & Vertical Collision
        player.vy -= 0.018; // Standard Minecraft gravity
        if (player.vy < -0.5) player.vy = -0.5; // Terminal velocity

        let verticalTargetY = player.y + player.vy;
        let isOnGround = false;

        // Find highest solid block level under player's feet bounding box
        let highestSolidY = -999;
        const offsets = [-0.28, 0, 0.28];
        const searchMinY = Math.floor(player.y - 1.2);
        const searchMaxY = Math.floor(player.y + 0.2);

        for (const ox of offsets) {
          for (const oz of offsets) {
            const bx = Math.floor(player.x + ox);
            const bz = Math.floor(player.z + oz);
            for (let by = searchMaxY; by >= searchMinY; by--) {
              if (blocksMap.has(`${bx},${by},${bz}`)) {
                const topOfBlock = by + 1.0;
                if (topOfBlock > highestSolidY) {
                  highestSolidY = topOfBlock;
                }
                break;
              }
            }
          }
        }

        if (highestSolidY !== -999 && verticalTargetY <= highestSolidY + 0.05 && player.y >= highestSolidY - 0.3) {
          player.y = highestSolidY;
          player.vy = 0;
          isOnGround = true;
        } else {
          player.y = verticalTargetY;
        }

        // Void Safety: Respawn if fallen into void (< -30) or invalid position NaN
        if (isNaN(player.x) || isNaN(player.y) || isNaN(player.z) || player.y < -30) {
          player.x = 0;
          player.y = server ? 70 : 15;
          player.z = 0;
          player.vy = 0;
          soundManager.playHurt();
          addChatMessage('Sistem', 'Boşluğa düştün! Başlangıç noktasına güvenle ışınlandın.', true);
        }

        // Jump (Standard Minecraft Jump Force = 0.25)
        if (isJump && isOnGround) {
          player.vy = 0.25;
          isOnGround = false;
          const feetBlock = blocksMap.get(`${Math.floor(player.x)},${Math.floor(player.y - 0.1)},${Math.floor(player.z)}`);
          soundManager.playFootstep(feetBlock ? feetBlock.type : 'stone');
        }

        // 2. Horizontal Movement & Edge Sneaking
        let nextX = player.x + inputX;
        let nextZ = player.z + inputZ;

        // Minecraft Sneak Ledge Protection
        if (isSneaking && isOnGround) {
          const checkNextX = Math.floor(nextX);
          const checkNextZ = Math.floor(nextZ);
          const feetBlockY = Math.floor(player.y - 0.1);
          if (!blocksMap.has(`${checkNextX},${feetBlockY},${checkNextZ}`) && blocksMap.size > 0) {
            nextX = player.x;
            nextZ = player.z;
          }
        }

        // Wall collision & Smooth Auto-step
        const testX = Math.floor(nextX);
        const testZ = Math.floor(nextZ);
        const feetY = Math.floor(player.y);

        const isBlockAtFeet = blocksMap.has(`${testX},${feetY},${testZ}`);
        const isBlockAtHead = blocksMap.has(`${testX},${feetY + 1},${testZ}`);

        if (isBlockAtFeet && !isBlockAtHead && isOnGround) {
          // Step up 1 block smoothly
          player.y = feetY + 1.0;
          player.vy = 0;
          player.x = nextX;
          player.z = nextZ;
        } else if (!isBlockAtFeet) {
          player.x = nextX;
          player.z = nextZ;
        }

        // Footstep Sound Trigger when walking on ground
        if (isOnGround && (Math.abs(inputX) > 0.001 || Math.abs(inputZ) > 0.001)) {
          const feetBlock = blocksMap.get(`${Math.floor(player.x)},${Math.floor(player.y - 0.1)},${Math.floor(player.z)}`);
          soundManager.playFootstep(feetBlock ? feetBlock.type : 'stone');
        }

        // Camera position & look (Eye level: 1.62m standard, 1.35m crouched)
        const eyeHeight = isSneaking ? 1.35 : 1.62;
        camera.position.set(player.x, player.y + eyeHeight, player.z);

        const targetX = camera.position.x - Math.sin(player.yaw) * Math.cos(player.pitch);
        const targetY = camera.position.y + Math.sin(player.pitch);
        const targetZ = camera.position.z - Math.cos(player.yaw) * Math.cos(player.pitch);
        camera.lookAt(targetX, targetY, targetZ);

        // Sync position every 3 frames (~20Hz Minecraft tick rate)
        if (frameCount % 3 === 0) {
          setPlayerPos({
            x: player.x.toFixed(2),
            y: player.y.toFixed(2),
            z: player.z.toFixed(2)
          });

          if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
            wsRef.current.send(
              JSON.stringify({
                type: 'move',
                x: player.x,
                y: player.y,
                z: player.z,
                yaw: player.yaw,
                pitch: player.pitch,
                onGround: isOnGround,
              })
            );
          }
        }

        // Raycast Target Highlight
        const target = getRaycastTarget();
        if (target) {
          highlightBox.visible = true;
          highlightBox.position.set(target.x + 0.5, target.y + 0.5, target.z + 0.5);

          const currentKey = `${target.x},${target.y},${target.z},${target.type}`;
          if (currentKey !== lastTargetKey) {
            lastTargetKey = currentKey;
            setTargetedBlock({
              type: target.type,
              name: target.name,
              x: target.x,
              y: target.y,
              z: target.z,
              distance: parseFloat(target.distance.toFixed(1)),
              isBedrock: target.isBedrock
            });
          }
        } else {
          highlightBox.visible = false;
          if (lastTargetKey !== '') {
            lastTargetKey = '';
            setTargetedBlock(null);
          }
        }
      }

      // Hand swing animation update
      if (handSwingProgress > 0) {
        handSwingProgress = Math.max(0, handSwingProgress - 0.08);
        const swing = Math.sin(handSwingProgress * Math.PI);
        handGroup.rotation.x = 0.1 - swing * 0.95;
        handGroup.rotation.y = -0.2 - swing * 0.45;
        handGroup.position.z = -0.55 + swing * 0.18;
      } else {
        const isMoving = keys['KeyW'] || keys['KeyS'] || keys['KeyA'] || keys['KeyD'] || touchMoveRef.current.forward || touchMoveRef.current.back;
        const bobX = isMoving ? Math.sin(Date.now() * 0.008) * 0.025 : 0;
        const bobY = Math.sin(Date.now() * 0.003) * 0.008 + (isMoving ? Math.cos(Date.now() * 0.016) * 0.025 : 0);
        handGroup.position.x = 0.38 + bobX;
        handGroup.position.y = -0.32 + bobY;
        handGroup.position.z = -0.55;
        handGroup.rotation.set(0.1, -0.2, 0);
      }

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      if (pingInterval) clearInterval(pingInterval);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wheel', handleWheel);
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      renderer.domElement.removeEventListener('contextmenu', handleContextMenu);
      renderer.domElement.removeEventListener('touchstart', handleTouchStart);
      renderer.domElement.removeEventListener('touchmove', handleTouchMove);
      renderer.domElement.removeEventListener('touchend', handleTouchEnd);
      renderer.domElement.remove();
      if (wsRef.current) wsRef.current.close();
      entitiesMapRef.current.clear();
    };
  }, [activeSettings.fov, activeSettings.graphics, activeSettings.texturePack, server, addChatMessage, reconnectTrigger]);

  const handleUpdateSetting = <K extends keyof GameSettings>(key: K, value: GameSettings[K]) => {
    setActiveSettings(prev => {
      const updated = { ...prev, [key]: value };
      try {
        localStorage.setItem('mc_client_settings', JSON.stringify(updated));
      } catch {}

      // Hot-apply settings in real-time
      if (key === 'fov' && cameraRef.current) {
        cameraRef.current.fov = Number(value);
        cameraRef.current.updateProjectionMatrix();
      }
      if (key === 'volume') {
        soundManager.setVolume(Number(value) / 100);
      }
      if (key === 'renderDistance' && cameraRef.current) {
        // Immediate chunk culling when user lowers render distance
        const newDistSq = Math.pow(Number(value) * 16, 2);
        const camPos = cameraRef.current.position;
        if (sceneRef.current && blocksMapRef.current) {
          for (const [bKey, mesh] of blocksMapRef.current.entries()) {
            if (mesh.position.distanceToSquared(camPos) > newDistSq) {
              sceneRef.current.remove(mesh);
              mesh.geometry.dispose();
              blocksMapRef.current.delete(bKey);
            }
          }
        }
      }

      return updated;
    });
  };

  const handleSendChat = () => {
    const text = chatInput.trim();
    if (!text) return;

    soundManager.playClick();

    // Commands (starts with '/') are not echoed back by the server, so we show them locally
    if (text.startsWith('/')) {
      addChatMessage('Komut', text, true);
    }

    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'chat', text }));
    }

    setChatInput('');
    setChatOpen(false);
  };

  const handleChatTabAutocomplete = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault(); // prevent losing focus
      soundManager.playClick();

      const words = chatInput.split(' ');
      if (words.length === 0) return;

      const lastWord = words[words.length - 1];
      if (!lastWord) return;

      let candidates: string[] = [];

      if (lastWord.startsWith('/')) {
        // Minecraft commands autocomplete
        const commands = [
          '/gamemode', '/tp', '/spawn', '/help', '/op', '/deop', '/clear',
          '/difficulty', '/gamerule', '/give', '/kill', '/list', '/say',
          '/time', '/weather', '/whisper', '/msg', '/plugins', '/tps', '/ping'
        ];
        candidates = commands.filter(c => c.toLowerCase().startsWith(lastWord.toLowerCase()));
      } else {
        // Player names autocomplete from tabList
        const playerNames = (Array.isArray(tabList) ? tabList : [])
          .filter(p => p && typeof p.username === 'string')
          .map(p => p.username);
        candidates = playerNames.filter(name => name.toLowerCase().startsWith(lastWord.toLowerCase()));
      }

      if (candidates.length > 0) {
        words[words.length - 1] = candidates[0];
        setChatInput(words.join(' ') + ' ');
      }
    }
  };

  const handleRequestChunks = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: 'requestChunks' }));
      addChatMessage('Sistem', 'Çevredeki chunklar sunucudan talep edildi.', true);
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden select-none font-['VT323'] touch-none overscroll-none">
      {/* Three.js Canvas */}
      <div ref={containerRef} className="absolute inset-0 cursor-crosshair" />

      {/* MOBILE PORTRAIT WARNING & ROTATE PROMPT */}
      {isTouchDevice && isPortrait && !dismissPortraitWarning && (
        <div className="fixed inset-0 z-50 bg-[#121212]/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center select-none">
          <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#252525] border-2 border-yellow-400 rounded-2xl shadow-2xl text-3xl animate-pulse">
            📱🔄
          </div>
          <h2 className="text-3xl font-bold text-yellow-300 mb-2">
            Lütfen Ekranınızı Yatay Çevirin
          </h2>
          <p className="text-gray-300 text-base max-w-sm mb-6 leading-relaxed">
            Minecraft kontrollerini rahat kullanmak ve ekranın tam sığması için cihazınızı yatay (landscape) konuma getirin.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
            <button
              onClick={handleRequestLandscape}
              className="w-full py-3 bg-[#4a7c34] hover:bg-[#5b9640] active:bg-[#3d662b] border-2 border-t-[#7ebd60] border-l-[#7ebd60] border-b-[#264417] border-r-[#264417] text-white text-xl font-bold rounded shadow-lg active:scale-95"
            >
              ⛶ Tam Ekran & Yatay Yap
            </button>
            <button
              onClick={() => setDismissPortraitWarning(true)}
              className="w-full py-2 bg-black/60 hover:bg-black/80 border border-gray-600 text-gray-300 text-base rounded active:scale-95"
            >
              Yine de Devam Et
            </button>
          </div>
        </div>
      )}

      {/* Title Message (Center Screen like Minecraft) */}
      {titleText && (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 text-center animate-fade-in">
          <div className="text-4xl sm:text-6xl font-bold text-yellow-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] tracking-wider">
            {titleText}
          </div>
        </div>
      )}

      {/* Action Bar Text (Above Hotbar) */}
      {actionBarText && (
        <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 pointer-events-none z-30 text-center bg-black/70 px-4 py-1 rounded border border-yellow-500/50">
          <div className="text-lg sm:text-2xl font-bold text-yellow-200 drop-shadow">
            {actionBarText}
          </div>
        </div>
      )}

      {/* Target Block HUD (Top Center) */}
      {targetedBlock ? (
        <div 
          id="target-block-hud" 
          className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 bg-black/85 border-2 border-[#555] px-3 sm:px-4 py-1 rounded shadow-2xl flex items-center gap-2 pointer-events-none text-white z-20 backdrop-blur-sm max-w-[90vw]"
        >
          <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${targetedBlock.isBedrock ? 'bg-red-500' : 'bg-emerald-400 animate-pulse'}`} />
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="font-bold text-yellow-300 text-lg sm:text-xl tracking-wide truncate">{targetedBlock.name}</span>
            <span className="text-gray-300 text-xs font-mono">[{targetedBlock.x}, {targetedBlock.y}, {targetedBlock.z}]</span>
            {targetedBlock.isBedrock && (
              <span className="text-[10px] bg-red-900/80 text-red-200 px-1 rounded">Kırılamaz</span>
            )}
          </div>
        </div>
      ) : null}

      {/* Crosshair */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className={`text-2xl sm:text-3xl font-mono transition-transform duration-75 ${targetedBlock ? 'text-yellow-300 scale-125 opacity-100' : 'text-white opacity-75'}`}>
          +
        </div>
      </div>

      {/* HUD: FPS & Player Pos & Server Banner (Top Left) */}
      <div className="absolute top-2 left-2 text-white text-xs sm:text-sm bg-black/60 px-2.5 py-1.5 rounded border border-white/10 pointer-events-none z-20 max-w-[45vw] overflow-hidden">
        <div className="text-green-400 font-bold truncate">MC 1.21.4 • {activeSettings.texturePack?.toUpperCase() || 'REALISTIC'}</div>
        <div className="truncate font-mono">
          FPS: {fps} | XYZ: {playerPos.x}/{playerPos.y}/{playerPos.z}
          {activeSettings.showPing && server && ` | 📶 ${ping}ms`}
        </div>
        <div className="text-emerald-300 text-[11px] truncate">
          🧱 Blok: {blocksCount.toLocaleString()} {server && `| 🧟 Canlı: ${entitiesCount}`}
        </div>
        {server && (
          <div className="text-yellow-300 text-[11px] font-mono truncate">
            🌐 {server.name}
          </div>
        )}
      </div>

      {/* Top Right Buttons (Fixed Z-50, Never Covered) */}
      <div className="absolute top-2 right-2 flex items-center gap-1.5 z-50">
        {server && (
          <>
            <button
              onClick={handleRequestChunks}
              className="h-9 sm:h-10 px-2.5 sm:px-3 bg-black/75 hover:bg-black/95 active:bg-emerald-950 border border-emerald-500 rounded text-emerald-300 text-xs sm:text-base flex items-center gap-1 shadow-md active:scale-95"
              title="Chunkları Yenile"
            >
              🗺️ <span className="hidden sm:inline">Chunklar</span>
            </button>
            <button
              onClick={() => setTabListOpen((prev) => !prev)}
              className={`h-9 sm:h-10 px-2.5 sm:px-3 border rounded text-white text-xs sm:text-base flex items-center gap-1 shadow-md active:scale-95 ${
                tabListOpen ? 'bg-emerald-600 border-emerald-400' : 'bg-black/75 hover:bg-black/95 border-gray-500'
              }`}
              title="Oyuncu Listesi (TAB)"
            >
              👥 <span className="hidden sm:inline">Oyuncular</span>
            </button>
          </>
        )}
        <button
          onClick={() => setChatOpen((prev) => !prev)}
          className={`h-9 sm:h-10 px-2.5 sm:px-3 border rounded text-white text-xs sm:text-base flex items-center gap-1 shadow-md active:scale-95 ${
            chatOpen ? 'bg-yellow-600 border-yellow-400' : 'bg-black/75 hover:bg-black/95 border-gray-500'
          }`}
          title="Sohbet"
        >
          💬 <span className="hidden sm:inline">Sohbet</span>
        </button>
        <button
          onClick={() => setInventoryOpen((prev) => !prev)}
          className="h-9 sm:h-10 px-2.5 sm:px-3 bg-black/75 hover:bg-black/95 border border-gray-500 rounded text-white text-xs sm:text-base flex items-center gap-1 shadow-md active:scale-95"
          title="Envanter"
        >
          🎒 <span className="hidden sm:inline">Envanter</span>
        </button>
        <button
          onClick={() => setPaused((prev) => !prev)}
          className="h-9 sm:h-10 px-3 bg-black/75 hover:bg-black/95 border border-gray-500 rounded text-white text-base sm:text-lg flex items-center justify-center gap-1 shadow-md active:scale-95"
          title="Menü"
        >
          ⏸️
        </button>
      </div>

      {/* HUD: Hearts & Hunger */}
      <div className="absolute bottom-14 sm:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none z-20">
        {/* Hearts */}
        <div className="flex gap-0.5 sm:gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={`w-3 h-3 sm:w-4 sm:h-4 ${i < health / 2 ? 'bg-red-600' : 'bg-gray-600'} border border-black transform rotate-45`} />
          ))}
        </div>
        {/* Hunger */}
        <div className="flex gap-0.5 sm:gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={`w-3 h-3 sm:w-4 sm:h-4 ${i < hunger / 2 ? 'bg-amber-700' : 'bg-gray-600'} border border-black rounded-full`} />
          ))}
        </div>
      </div>

      {/* Hotbar (Centered at bottom, compact) */}
      <div className="absolute bottom-1.5 sm:bottom-3 left-1/2 -translate-x-1/2 bg-[#3c3c3c]/95 border-2 border-[#222] p-0.5 flex gap-0.5 shadow-2xl z-30 max-w-[94vw] rounded overflow-x-auto">
        {hotbar.map((item, index) => {
          const isSelected = index === selectedHotbarIndex;
          const hasItem = item && item.type !== 'air' && item.count > 0;
          return (
            <div
              key={index}
              onClick={() => {
                soundManager.playClick();
                handleSelectHotbarSlot(index);
              }}
              className={`relative w-8 h-8 sm:w-11 sm:h-11 bg-[#8b8b8b] border cursor-pointer flex items-center justify-center flex-shrink-0 transition-all ${
                isSelected ? 'border-white scale-105 bg-[#a3a3a3] shadow-lg ring-2 ring-yellow-400/80' : 'border-[#373737] hover:border-gray-400'
              }`}
            >
              <div className="text-[9px] font-bold text-yellow-300 absolute top-0.5 left-0.5">{index + 1}</div>
              <div className="text-[9px] sm:text-[10px] uppercase font-bold text-center text-white px-0.5 truncate">
                {hasItem ? item.type.slice(0, 3) : ''}
              </div>
              {hasItem && (
                <div className="text-[9px] font-bold text-white absolute bottom-0.5 right-0.5 bg-black/70 px-0.5 rounded-sm">
                  {item.count}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* MOBILE TOUCH CONTROLS (D-Pad & Actions) */}
      {showTouchControls && (
        <div className="absolute inset-0 pointer-events-none z-40">
          {/* Virtual D-Pad (Left Bottom) */}
          <div className="absolute bottom-3 left-3 pointer-events-auto flex flex-col items-center">
            <button
              onTouchStart={(e) => { e.preventDefault(); touchMoveRef.current.forward = true; }}
              onTouchEnd={(e) => { e.preventDefault(); touchMoveRef.current.forward = false; }}
              onMouseDown={() => { touchMoveRef.current.forward = true; }}
              onMouseUp={() => { touchMoveRef.current.forward = false; }}
              className="w-12 h-12 bg-black/60 active:bg-black/90 border-2 border-white/50 active:border-yellow-400 text-white text-xl font-bold rounded-t-lg flex items-center justify-center select-none shadow-xl"
            >
              ▲
            </button>
            <div className="flex gap-2">
              <button
                onTouchStart={(e) => { e.preventDefault(); touchMoveRef.current.left = true; }}
                onTouchEnd={(e) => { e.preventDefault(); touchMoveRef.current.left = false; }}
                onMouseDown={() => { touchMoveRef.current.left = true; }}
                onMouseUp={() => { touchMoveRef.current.left = false; }}
                className="w-12 h-12 bg-black/60 active:bg-black/90 border-2 border-white/50 active:border-yellow-400 text-white text-xl font-bold rounded-l-lg flex items-center justify-center select-none shadow-xl"
              >
                ◀
              </button>
              <div className="w-8 h-12 flex items-center justify-center text-gray-400 font-mono text-xs">
                +
              </div>
              <button
                onTouchStart={(e) => { e.preventDefault(); touchMoveRef.current.right = true; }}
                onTouchEnd={(e) => { e.preventDefault(); touchMoveRef.current.right = false; }}
                onMouseDown={() => { touchMoveRef.current.right = true; }}
                onMouseUp={() => { touchMoveRef.current.right = false; }}
                className="w-12 h-12 bg-black/60 active:bg-black/90 border-2 border-white/50 active:border-yellow-400 text-white text-xl font-bold rounded-r-lg flex items-center justify-center select-none shadow-xl"
              >
                ▶
              </button>
            </div>
            <button
              onTouchStart={(e) => { e.preventDefault(); touchMoveRef.current.back = true; }}
              onTouchEnd={(e) => { e.preventDefault(); touchMoveRef.current.back = false; }}
              onMouseDown={() => { touchMoveRef.current.back = true; }}
              onMouseUp={() => { touchMoveRef.current.back = false; }}
              className="w-12 h-12 bg-black/60 active:bg-black/90 border-2 border-white/50 active:border-yellow-400 text-white text-xl font-bold rounded-b-lg flex items-center justify-center select-none shadow-xl"
            >
              ▼
            </button>
          </div>

          {/* Action Buttons (Right Bottom: Jump, Break, Place) */}
          <div className="absolute bottom-3 right-3 pointer-events-auto flex flex-col items-end gap-2">
            <button
              onTouchStart={(e) => { e.preventDefault(); actionsRef.current?.placeBlock(); }}
              onClick={() => actionsRef.current?.placeBlock()}
              className="w-13 h-13 bg-emerald-700/85 active:bg-emerald-500 border-2 border-emerald-400 text-white font-bold rounded-full flex flex-col items-center justify-center shadow-xl select-none"
            >
              <span className="text-base">🧱</span>
              <span className="text-[9px] leading-none">KOY</span>
            </button>

            <button
              onTouchStart={(e) => { e.preventDefault(); actionsRef.current?.breakBlock(); }}
              onClick={() => actionsRef.current?.breakBlock()}
              className="w-13 h-13 bg-red-700/85 active:bg-red-500 border-2 border-red-400 text-white font-bold rounded-full flex flex-col items-center justify-center shadow-xl select-none"
            >
              <span className="text-base">⛏️</span>
              <span className="text-[9px] leading-none">KIR</span>
            </button>

            <button
              onTouchStart={(e) => { e.preventDefault(); touchMoveRef.current.jump = true; }}
              onTouchEnd={(e) => { e.preventDefault(); touchMoveRef.current.jump = false; }}
              onMouseDown={() => { touchMoveRef.current.jump = true; }}
              onMouseUp={() => { touchMoveRef.current.jump = false; }}
              className="w-14 h-14 bg-blue-700/85 active:bg-blue-500 border-2 border-blue-400 text-white font-bold rounded-full flex flex-col items-center justify-center shadow-2xl select-none"
            >
              <span className="text-lg">⬆️</span>
              <span className="text-[10px] leading-none">ZIPLA</span>
            </button>
          </div>
        </div>
      )}

      {/* MOBILE CHAT MODAL OVERLAY */}
      {isTouchDevice && chatOpen && (
        <div className="fixed inset-2 sm:inset-6 z-50 bg-black/95 border-2 border-yellow-400 rounded-lg p-3 flex flex-col shadow-2xl backdrop-blur-md">
          <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-2">
            <div className="text-lg font-bold text-yellow-300 flex items-center gap-2">
              <span>💬 Sohbet & Komutlar</span>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="px-3 py-1 bg-red-600 active:bg-red-700 text-white font-bold rounded text-sm"
            >
              ✕ Kapat
            </button>
          </div>

          {/* Messages list */}
          <div ref={chatScrollRef} className="flex-1 overflow-y-auto flex flex-col gap-1 pr-1 text-sm sm:text-base">
            {messages.slice(-60).map((m) => (
              <div key={m.id} className="leading-tight break-words">
                <span className="text-gray-400 text-xs">[{m.time}] </span>
                {m.sender && !['sunucu', 'system', 'sistem', 'server'].includes(m.sender.toLowerCase()) && (
                  <span className={m.isSystem ? 'text-yellow-400 font-bold' : 'text-emerald-300 font-bold'}>
                    {m.sender}:{' '}
                  </span>
                )}
                <span className="text-white">{m.text}</span>
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div className="flex gap-2 pt-2 border-t border-gray-700 mt-2">
            <input
              ref={chatInputRef}
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendChat();
                } else if (e.key === 'Tab') {
                  handleChatTabAutocomplete(e);
                }
              }}
              placeholder="Mesaj veya /komut yazın..."
              className="flex-1 bg-gray-900 border border-yellow-400/80 px-3 py-2 text-white outline-none rounded text-base"
            />
            <button
              onClick={handleSendChat}
              className="px-4 py-2 bg-emerald-600 active:bg-emerald-700 text-white font-bold rounded text-base flex-shrink-0"
            >
              Gönder
            </button>
          </div>
        </div>
      )}

      {/* DESKTOP CHAT SYSTEM (Classic Java Edition) */}
      {!isTouchDevice && (
        <div className={`absolute bottom-16 left-4 z-40 transition-all ${
          chatOpen 
            ? 'w-[480px] pointer-events-auto' 
            : 'w-[400px] pointer-events-none'
        }`}>
          {/* Messages List */}
          <div 
            ref={chatScrollRef}
            className={`flex flex-col gap-1 text-white text-base rounded border transition-all ${
              chatOpen 
                ? 'bg-black/90 p-3 max-h-72 overflow-y-auto border-yellow-500/80 shadow-2xl' 
                : 'bg-black/50 p-2 max-h-44 overflow-y-hidden border-transparent'
            }`}
          >
            {messages.slice(chatOpen ? -80 : -8).map((m) => (
              <div key={m.id} className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] leading-tight break-words">
                <span className="text-gray-400 text-xs">[{m.time}] </span>
                {m.sender && !['sunucu', 'system', 'sistem', 'server'].includes(m.sender.toLowerCase()) && (
                  <span className={m.isSystem ? 'text-yellow-400 font-bold' : 'text-emerald-300 font-bold'}>
                    {m.sender}:{' '}
                  </span>
                )}
                <span className="text-white">{m.text}</span>
              </div>
            ))}
          </div>

          {/* Desktop Input Bar (When Chat is Open) */}
          {chatOpen && (
            <div className="flex gap-2 mt-1.5 bg-black/95 p-2 rounded border border-yellow-400 shadow-2xl">
              <input
                ref={chatInputRef}
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSendChat();
                  } else if (e.key === 'Escape') {
                    setChatOpen(false);
                  } else if (e.key === 'Tab') {
                    handleChatTabAutocomplete(e);
                  }
                }}
                placeholder="Mesaj veya /komut..."
                className="w-full bg-black border border-gray-600 px-3 py-1.5 text-xl text-white outline-none rounded focus:border-yellow-400"
              />
              <button
                onClick={handleSendChat}
                className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-lg rounded border border-emerald-300 flex-shrink-0"
              >
                Gönder
              </button>
            </div>
          )}
        </div>
      )}

      {/* MOBILE IN-GAME FAINT CHAT PREVIEW (When Chat is closed on mobile) */}
      {isTouchDevice && !chatOpen && messages.length > 0 && (
        <div className="absolute top-14 left-2 z-10 pointer-events-none max-w-[55vw] flex flex-col gap-0.5">
          {messages.slice(-3).map((m) => (
            <div key={m.id} className="bg-black/50 px-2 py-0.5 rounded text-[11px] text-white truncate shadow">
              <span className={m.isSystem ? 'text-yellow-300 font-bold' : 'text-emerald-300 font-bold'}>
                {m.sender}:{' '}
              </span>
              <span>{m.text}</span>
            </div>
          ))}
        </div>
      )}

      {/* Inventory Modal */}
      {inventoryOpen && (
        <div 
          onClick={(e) => {
            if (e.target === e.currentTarget) setInventoryOpen(false);
          }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
        >
          <div className="bg-[#c6c6c6] border-4 border-[#373737] p-3 sm:p-5 w-full max-w-xl max-h-[92vh] overflow-y-auto flex flex-col gap-3 text-black shadow-2xl rounded">
            <div className="flex justify-between items-center border-b-2 border-gray-500 pb-2">
              <div className="text-xl sm:text-2xl font-bold text-black flex items-center gap-2 truncate">
                <span>🎒 Envanter</span>
                <span className="text-xs sm:text-sm font-normal text-gray-700 font-mono hidden sm:inline">(Survival & Server Sync)</span>
              </div>
              <button 
                onClick={() => setInventoryOpen(false)}
                className="w-10 h-10 bg-red-600 active:bg-red-700 hover:bg-red-500 text-white font-bold text-xl rounded flex items-center justify-center shadow flex-shrink-0"
                aria-label="Kapat"
                title="Kapat"
              >
                ✕
              </button>
            </div>

            {/* Hotbar Section */}
            <div>
              <div className="text-xs sm:text-sm font-bold text-gray-700 mb-1">Hızlı Erişim (Hotbar 1-9)</div>
              <div className="grid grid-cols-9 gap-1 sm:gap-1.5 bg-[#8b8b8b] p-1.5 sm:p-2.5 border-2 border-inset border-gray-600 rounded">
                {hotbar.map((item, idx) => (
                  <div 
                    key={`hb-${idx}`}
                    onClick={() => {
                      soundManager.playPop();
                      handleSelectHotbarSlot(idx);
                    }}
                    className={`w-7 h-7 sm:w-11 sm:h-11 bg-[#c6c6c6] border-2 cursor-pointer flex flex-col items-center justify-center text-[9px] sm:text-xs font-bold transition-transform ${
                      idx === selectedHotbarIndex ? 'border-yellow-500 bg-yellow-100 scale-105 shadow' : 'border-t-[#373737] border-l-[#373737] border-b-[#fff] border-r-[#fff] hover:bg-gray-300'
                    }`}
                  >
                    <span className="truncate w-full text-center px-0.5">{item.type !== 'air' ? item.type.slice(0, 4) : ''}</span>
                    {item.count > 0 && <span className="text-blue-900">{item.count}</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Inventory Section */}
            <div>
              <div className="text-xs sm:text-sm font-bold text-gray-700 mb-1">
                {server ? 'Sunucu Envanteri (Minecraft)' : 'Yaratıcı Envanter'}
              </div>
              <div className="grid grid-cols-9 gap-1 sm:gap-1.5 bg-[#8b8b8b] p-1.5 sm:p-2.5 border-2 border-inset border-gray-600 rounded max-h-[35vh] overflow-y-auto">
                {(server 
                  ? (serverInventory.length > 0 ? serverInventory : Array.from({ length: 27 }, () => ({ type: 'air' as BlockType, count: 0, name: 'Boş' })))
                  : (serverInventory.length > 0 ? serverInventory : initialHotbarItems)
                ).map((item, idx) => (
                  <div 
                    key={`inv-${idx}`}
                    onClick={() => {
                      if (item.type !== 'air') {
                        soundManager.playPop();
                        handleSelectHotbarSlot(idx % 9);
                      }
                    }}
                    className={`w-7 h-7 sm:w-11 sm:h-11 bg-[#c6c6c6] border-2 border-t-[#373737] border-l-[#373737] border-b-[#fff] border-r-[#fff] flex flex-col items-center justify-center text-[9px] sm:text-xs font-bold ${
                      item.type !== 'air' ? 'cursor-pointer hover:bg-gray-300' : 'cursor-default opacity-50'
                    }`}
                    title={item.name || item.type}
                  >
                    <span className="truncate w-full text-center px-0.5 text-black">
                      {item.type !== 'air' ? (item.name || item.type).slice(0, 5) : ''}
                    </span>
                    {item.count > 0 && <span className="text-blue-900 font-extrabold">{item.count}</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile-Friendly Exit Button */}
            <button
              onClick={() => {
                soundManager.playClick();
                setInventoryOpen(false);
              }}
              className="w-full py-2.5 bg-gray-800 hover:bg-gray-700 active:bg-gray-900 text-white font-bold text-base sm:text-lg rounded border-2 border-gray-600 shadow mt-1"
            >
              ✕ Kapat ve Oyuna Dön
            </button>
          </div>
        </div>
      )}

      {/* Pause Menu */}
      {paused && (
        <div 
          onClick={(e) => {
            if (e.target === e.currentTarget) setPaused(false);
          }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4"
        >
          <div className="bg-[#2e2e2e] border-4 border-[#444] p-4 sm:p-6 w-full max-w-md max-h-[92vh] overflow-y-auto flex flex-col gap-2.5 sm:gap-3 shadow-2xl rounded">
            <div className="flex justify-between items-center border-b border-gray-600 pb-2 mb-1">
              <div className="text-2xl sm:text-3xl text-center text-white font-bold">Oyun Duraklatıldı</div>
              <button
                onClick={() => setPaused(false)}
                className="w-9 h-9 bg-red-600 active:bg-red-700 text-white font-bold text-lg rounded flex items-center justify-center shadow flex-shrink-0"
                aria-label="Kapat"
              >
                ✕
              </button>
            </div>
            {menuScreen === 'main' ? (
              <>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setPaused(false);
                  }}
                  className="py-2.5 sm:py-3 bg-[#4a7c34] hover:bg-[#5b9640] active:bg-[#3d6929] text-white border-2 border-t-[#7ebd60] border-l-[#7ebd60] border-b-[#264417] border-r-[#264417] text-xl sm:text-2xl font-bold"
                >
                  ▶ Oyuna Dön (Resume)
                </button>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setPaused(false);
                    setInventoryOpen(true);
                  }}
                  className="py-2.5 sm:py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-xl sm:text-2xl font-bold"
                >
                  🎒 Envanter (Inventory)
                </button>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setMenuScreen('settings');
                  }}
                  className="py-2.5 sm:py-3 bg-[#eab308] hover:bg-[#ca8a04] text-black border-2 border-t-[#fef08a] border-l-[#fef08a] border-b-[#854d0e] border-r-[#854d0e] text-xl sm:text-2xl font-bold"
                >
                  🔧 Ayarlar (Settings)
                </button>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    handleRequestChunks();
                    setPaused(false);
                  }}
                  className="py-2.5 sm:py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white border-2 border-t-[#93c5fd] border-l-[#93c5fd] border-b-[#1e40af] border-r-[#1e40af] text-xl sm:text-2xl font-bold"
                >
                  🔄 Chunkları Yenile
                </button>
                {/* Quick Nickname Edit for Multiplayer in ESC Menu */}
                {server && (
                  <div className="flex flex-col gap-1 bg-black/60 border border-yellow-500/70 p-2.5 rounded text-left">
                    <div className="flex items-center justify-between text-xs text-yellow-300 font-bold">
                      <span>👤 Oyuncu Adı (Nickname):</span>
                      <span className="text-emerald-400 text-[10px]">İsmi değiştirip yeniden bağlanın</span>
                    </div>
                    <input
                      type="text"
                      maxLength={16}
                      value={playerUsername}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^a-zA-Z0-9_]/g, '').slice(0, 16);
                        setPlayerUsername(val);
                        localStorage.setItem('mc_player_username', val);
                      }}
                      placeholder="Oyuncu Adı"
                      className="bg-black/90 border border-yellow-500/80 focus:border-yellow-400 px-2.5 py-1.5 text-white text-xl font-mono rounded outline-none w-full shadow-inner"
                    />
                  </div>
                )}
                {server && (
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setServerLoading(true);
                      setServerStatusText('Yeniden bağlanılıyor...');
                      setDisconnectedReason(null);
                      setPaused(false);
                      setReconnectTrigger((prev) => prev + 1);
                    }}
                    className="py-2.5 sm:py-3 bg-[#0d9488] hover:bg-[#14b8a6] active:bg-[#0f766e] text-white border-2 border-t-[#2dd4bf] border-l-[#2dd4bf] border-b-[#115e59] border-r-[#115e59] text-xl sm:text-2xl font-bold flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>🔌</span>
                    <span>Yeniden Bağlan (Reconnect)</span>
                  </button>
                )}
                <button
                  onClick={() => {
                    soundManager.playClick();
                    onExit();
                  }}
                  className="py-2.5 sm:py-3 bg-[#a82020] hover:bg-[#c93030] text-white border-2 border-t-[#f87171] border-l-[#f87171] border-b-[#7f1d1d] border-r-[#7f1d1d] text-xl sm:text-2xl font-bold mt-1"
                >
                  🚪 Ana Menüye Kaydet ve Çık
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-3 text-white font-mono text-sm max-h-[75vh] overflow-y-auto pr-1">
                <div className="text-center font-bold text-yellow-400 text-lg border-b border-gray-600 pb-1.5 mb-1.5">
                  🔧 OYUN AYARLARI
                </div>

                {/* FOV Setting */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs font-bold text-gray-300">
                    <span>Bakış Açısı (FOV):</span>
                    <span className="text-yellow-400">{activeSettings.fov}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="110"
                    step="5"
                    value={activeSettings.fov}
                    onChange={(e) => handleUpdateSetting('fov', parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                  />
                </div>

                {/* Render Distance Setting */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs font-bold text-gray-300">
                    <span>Görüş Mesafesi (Render Distance):</span>
                    <span className="text-yellow-400">{activeSettings.renderDistance} Chunk</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="16"
                    step="1"
                    value={activeSettings.renderDistance}
                    onChange={(e) => handleUpdateSetting('renderDistance', parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                  />
                </div>

                {/* Volume Setting */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs font-bold text-gray-300">
                    <span>Ses Düzeyi (Volume):</span>
                    <span className="text-yellow-400">%{activeSettings.volume}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={activeSettings.volume}
                    onChange={(e) => handleUpdateSetting('volume', parseInt(e.target.value, 10))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                  />
                </div>

                {/* Graphics Quality */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-gray-300">Grafik Kalitesi:</span>
                  <div className="grid grid-cols-3 gap-1">
                    {(['fast', 'fancy', 'fabulous'] as const).map((g) => (
                      <button
                        key={g}
                        onClick={() => {
                          soundManager.playClick();
                          handleUpdateSetting('graphics', g);
                        }}
                        className={`py-1 text-xs border rounded transition-colors uppercase font-bold ${
                          activeSettings.graphics === g
                            ? 'bg-yellow-500 text-black border-yellow-300'
                            : 'bg-black/40 text-gray-400 border-gray-600 hover:bg-black/60'
                        }`}
                      >
                        {g === 'fast' ? 'Hızlı' : g === 'fancy' ? 'Gerçekçi' : 'Şahane'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Texture Pack Selection */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-gray-300">Doku Paketi (Texture Pack):</span>
                  <div className="grid grid-cols-3 gap-1">
                    {(['vanilla', 'realistic', 'faithful'] as const).map((pack) => (
                      <button
                        key={pack}
                        onClick={() => {
                          soundManager.playClick();
                          handleUpdateSetting('texturePack', pack);
                        }}
                        className={`py-1 text-xs border rounded transition-colors uppercase font-bold ${
                          activeSettings.texturePack === pack
                            ? 'bg-yellow-500 text-black border-yellow-300'
                            : 'bg-black/40 text-gray-400 border-gray-600 hover:bg-black/60'
                        }`}
                      >
                        {pack}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Touch Controls Toggle */}
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold text-gray-300">Dokunmatik Kontroller:</span>
                  <div className="grid grid-cols-3 gap-1">
                    {(['auto', 'enabled', 'disabled'] as const).map((tc) => (
                      <button
                        key={tc}
                        onClick={() => {
                          soundManager.playClick();
                          handleUpdateSetting('touchControls', tc);
                        }}
                        className={`py-1 text-xs border rounded transition-colors uppercase font-bold ${
                          activeSettings.touchControls === tc
                            ? 'bg-yellow-500 text-black border-yellow-300'
                            : 'bg-black/40 text-gray-400 border-gray-600 hover:bg-black/60'
                        }`}
                      >
                        {tc === 'auto' ? 'Oto' : tc === 'enabled' ? 'Açık' : 'Kapalı'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Visual Widgets Toggles */}
                <div className="flex flex-col gap-2 bg-black/30 p-2 border border-gray-700/80 rounded mt-1">
                  <label className="flex items-center justify-between cursor-pointer group">
                    <span className="text-xs text-gray-300 group-hover:text-white transition-colors">Skor Tablosu (Scoreboard)</span>
                    <input
                      type="checkbox"
                      checked={!!activeSettings.showScoreboard}
                      onChange={(e) => {
                        soundManager.playClick();
                        handleUpdateSetting('showScoreboard', e.target.checked);
                      }}
                      className="w-4 h-4 rounded border-gray-600 text-yellow-500 focus:ring-yellow-400 bg-gray-700"
                    />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer group">
                    <span className="text-xs text-gray-300 group-hover:text-white transition-colors">Ekranda Gecikme Göster (Ping)</span>
                    <input
                      type="checkbox"
                      checked={!!activeSettings.showPing}
                      onChange={(e) => {
                        soundManager.playClick();
                        handleUpdateSetting('showPing', e.target.checked);
                      }}
                      className="w-4 h-4 rounded border-gray-600 text-yellow-500 focus:ring-yellow-400 bg-gray-700"
                    />
                  </label>
                </div>

                <button
                  onClick={() => {
                    soundManager.playClick();
                    setMenuScreen('main');
                  }}
                  className="py-2.5 bg-[#4a7c34] hover:bg-[#5b9640] text-white border-2 border-t-[#7ebd60] border-l-[#7ebd60] border-b-[#264417] border-r-[#264417] text-lg font-bold shadow-md mt-1"
                >
                  💾 Ayarları Kaydet ve Dön
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Disconnected / Kicked Modal (Easy mobile exit) */}
      {disconnectedReason && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4 select-none font-['VT323']">
          <div className="bg-[#241712] border-4 border-[#682a20] p-6 sm:p-8 w-full max-w-lg flex flex-col gap-4 text-center shadow-2xl rounded text-white max-h-[92vh] overflow-y-auto">
            <div className="text-4xl sm:text-5xl font-bold text-red-500">
              ⚠️ Bağlantı Kesildi
            </div>
            <div className="bg-black/70 border border-gray-700 p-4 text-xl sm:text-2xl text-yellow-200 whitespace-pre-wrap font-mono">
              {disconnectedReason}
            </div>
            {/* Quick Nickname Change on Disconnect */}
            <div className="flex flex-col gap-1 bg-black/60 border border-yellow-500/70 p-2.5 rounded text-left">
              <div className="flex items-center justify-between text-xs text-yellow-300 font-bold font-mono">
                <span>👤 Oyuncu Adı (Nickname):</span>
                <span className="text-emerald-400 text-[10px]">İsmi değiştirip tekrar deneyin</span>
              </div>
              <input
                type="text"
                maxLength={16}
                value={playerUsername}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^a-zA-Z0-9_]/g, '').slice(0, 16);
                  setPlayerUsername(val);
                  localStorage.setItem('mc_player_username', val);
                }}
                placeholder="Oyuncu Adı"
                className="bg-black/90 border border-yellow-500/80 focus:border-yellow-400 px-3 py-1 text-white text-xl font-mono rounded outline-none w-full shadow-inner"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  soundManager.playClick();
                  setServerLoading(true);
                  setServerStatusText('Yeniden bağlanılıyor...');
                  setDisconnectedReason(null);
                  setReconnectTrigger(prev => prev + 1);
                }}
                className="flex-1 py-3 bg-[#0d9488] hover:bg-[#14b8a6] active:bg-[#0f766e] text-white border-2 border-t-[#2dd4bf] border-l-[#2dd4bf] border-b-[#115e59] border-r-[#115e59] text-2xl font-bold shadow-xl rounded"
              >
                🔌 Yeniden Bağlan (Reconnect)
              </button>
              <button
                onClick={() => {
                  soundManager.playClick();
                  onExit();
                }}
                className="flex-1 py-3 bg-[#4a7c34] hover:bg-[#5b9640] active:bg-[#3d6929] text-white border-2 border-t-[#7ebd60] border-l-[#7ebd60] border-b-[#264417] border-r-[#264417] text-2xl font-bold shadow-xl rounded"
              >
                Ana Menüye Dön
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Minecraft Multiplayer Server Loading & Protocol Handshake Screen */}
      {server && serverLoading && (
        <div className="fixed inset-0 bg-[#1e140f]/95 backdrop-blur-md flex flex-col items-center justify-center z-50 p-4 sm:p-6 text-white text-center select-none font-['VT323'] max-h-screen overflow-y-auto">
          <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center animate-bounce bg-[#55a038] border-4 border-[#356920] shadow-2xl text-3xl flex-shrink-0">
            ⛏️
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-yellow-400 mb-1 drop-shadow-md">
            {server.name}
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mb-4 font-mono">
            {server.ip}:{server.port}
          </p>

          <div className="w-full max-w-md bg-black/70 border-2 border-white/30 p-4 sm:p-5 rounded-lg mb-4 sm:mb-6 shadow-2xl flex flex-col gap-2.5">
            <div className="flex justify-between items-center text-xs sm:text-sm text-gray-400 font-mono">
              <span>Protokol Durumu:</span>
              <span className="text-emerald-400 font-bold">
                {blocksCount > 0 ? `${blocksCount} blok alındı` : 'Minecraft Java Bridge'}
              </span>
            </div>
            <p className="text-lg sm:text-xl text-yellow-200 font-bold animate-pulse">
              {serverStatusText}
            </p>
            <div className="w-full bg-gray-900 h-3 rounded-full overflow-hidden border border-gray-700 mt-1">
              <div 
                className="bg-emerald-500 h-full transition-all duration-300"
                style={{ width: blocksCount > 0 ? `${Math.min(100, Math.max(25, blocksCount / 5))}%` : '15%' }}
              />
            </div>
            <p className="text-xs text-gray-400 font-mono mt-1">
              Minecraft 1.21.4 Protocol • Dynamic Chunks • Mobs/NPCs • Real Chat
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => setServerLoading(false)}
              className="px-5 sm:px-6 py-2 sm:py-2.5 bg-[#4a7c34] hover:bg-[#5b9640] border-2 border-t-[#7ebd60] border-l-[#7ebd60] border-b-[#264417] border-r-[#264417] text-lg sm:text-xl font-bold shadow-lg"
            >
              Dünyaya Devam Et
            </button>
            <button
              onClick={onExit}
              className="px-5 sm:px-6 py-2 sm:py-2.5 bg-[#a82020] hover:bg-[#c93030] border-2 border-t-[#f87171] border-l-[#f87171] border-b-[#7f1d1d] border-r-[#7f1d1d] text-lg sm:text-xl font-bold shadow-lg"
            >
              İptal Et / Çıkış
            </button>
          </div>
        </div>
      )}

      {/* Minecraft Sidebar Scoreboard */}
      {activeSettings.showScoreboard && scoreboard && (
        <div id="minecraft-scoreboard" className="absolute right-4 top-1/4 z-30 bg-black/70 border-2 border-white/10 p-2.5 rounded text-white font-mono text-sm max-w-[200px] pointer-events-none">
          <div className="text-yellow-400 font-bold text-center border-b border-white/10 pb-1 mb-1.5 truncate uppercase">
            {scoreboard.title}
          </div>
          <div className="flex flex-col gap-1 text-[11px] sm:text-xs">
            {scoreboard.items.map((item: any, idx: number) => (
              <div key={idx} className="flex justify-between gap-4">
                <span className="text-gray-200 truncate">{item.name}</span>
                <span className="text-red-400 text-right font-bold">{item.score !== undefined ? item.score : item.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Player Tab List Overlay */}
      {tabListOpen && (
        <div id="player-tab-list" className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center pointer-events-none">
          <div className="bg-black/95 border-4 border-gray-600/80 p-4 rounded-lg w-full max-w-lg shadow-2xl font-mono text-white pointer-events-auto max-h-[85vh] overflow-y-auto">
            <div className="text-yellow-400 text-center text-lg font-bold mb-3 border-b border-gray-700 pb-1 flex justify-between items-center px-1">
              <span>👥 AKTİF OYUNCULAR ({tabList.length})</span>
              <span className="text-xs text-green-400 font-mono">Sunucu Gecikmesi: {ping}ms</span>
            </div>
            {tabList.length === 0 ? (
              <div className="text-gray-400 text-center py-2 font-mono">Oyuncu bulunamadı</div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {tabList.map((player: any, idx: number) => {
                  if (!player) return null;
                  const pingVal = typeof player.ping === 'number' ? player.ping : 0;
                  const pingColor = pingVal < 80 ? 'text-green-400' : pingVal < 180 ? 'text-yellow-400' : 'text-red-500';
                  return (
                    <div key={idx} className="bg-white/5 border border-white/10 px-2 py-1.5 rounded flex items-center justify-between text-xs sm:text-sm hover:bg-white/10 transition-colors">
                      <span className="truncate font-bold text-emerald-300 flex items-center gap-1">
                        👤 {player.username || 'Oyuncu'}
                      </span>
                      <span className={`text-[10px] font-bold font-mono ${pingColor}`}>
                        📶 {pingVal}ms
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
            <div className="text-[10px] text-gray-400 text-center mt-3 font-mono leading-tight">
              Sohbet penceresinde oyuncu isimlerini veya komutları tamamlamak için TAB tuşuna basabilirsiniz.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
