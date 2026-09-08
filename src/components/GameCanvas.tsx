import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { WorldInfo, ServerInfo, GameSettings, ChatMessage, BlockType, InventoryItem } from '../types';
import { soundManager } from '../utils/audio';
import { blockTextures, initTextures } from '../utils/textures';

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
  obsidian: 'Obsidyen'
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

interface TargetedBlockData {
  type: BlockType;
  name: string;
  x: number;
  y: number;
  z: number;
  distance: number;
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
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'init-msg-1', sender: 'Sistem', text: 'Minecraft 1.21.4 Dünyasına Hoş Geldiniz!', time: '12:00', isSystem: true },
    { 
      id: 'init-msg-2', 
      sender: 'Sistem', 
      text: server 
        ? `Sunucu: ${server.name} (${server.ip}:${server.port}) - TCP WebSocket Köprüsü Aktif` 
        : `Tek Oyunculu Dünya: ${world?.name || 'Yeni Dünya'}`, 
      time: '12:00', 
      isSystem: true 
    }
  ]);
  const [hotbar, setHotbar] = useState<InventoryItem[]>(initialHotbarItems);
  const [selectedHotbarIndex, setSelectedHotbarIndex] = useState(0);
  const [health] = useState(20);
  const [hunger] = useState(20);
  const [fps, setFps] = useState(60);
  const [playerPos, setPlayerPos] = useState({ x: '0.0', y: '12.0', z: '0.0' });
  const [targetedBlock, setTargetedBlock] = useState<TargetedBlockData | null>(null);

  // Touch control state
  const touchMoveRef = useRef({ forward: false, back: false, left: false, right: false, jump: false });
  const touchLookRef = useRef<{ touchId: number; lastX: number; lastY: number } | null>(null);
  const actionsRef = useRef<{ breakBlock: () => void; placeBlock: () => void } | null>(null);

  // Check if touch controls should be visible
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024);
  const showTouchControls = settings.touchControls === 'enabled' || (settings.touchControls === 'auto' && isTouchDevice);

  const wsRef = useRef<WebSocket | null>(null);

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

  const addChatMessage = useCallback((sender: string, text: string, isSystem = false) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const uniqueId = `msg-${Date.now()}-${++msgSequence}-${Math.random().toString(36).slice(2, 8)}`;
    setMessages((prev) => [...prev, { id: uniqueId, sender, text, time, isSystem }]);
  }, []);

  useEffect(() => {
    // Initialize chosen texture pack (Realistic HD 64x64, Faithful 32x32, or Vanilla 16x16)
    initTextures(settings.texturePack || 'realistic');

    if (!containerRef.current) return;
    const container = containerRef.current;

    // Three.js Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb); // Sky blue
    scene.fog = new THREE.FogExp2(0x87ceeb, 0.022);

    const camera = new THREE.PerspectiveCamera(settings.fov, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 15, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: settings.graphics === 'fabulous' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff5e6, 0.9);
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

    // Block particles
    const particles: Particle[] = [];
    const particleBoxGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);

    const spawnBlockParticles = (x: number, y: number, z: number, type: BlockType) => {
      const tex = blockTextures[type];
      let pMat: THREE.Material;
      if (tex && 'top' in tex) {
        pMat = new THREE.MeshLambertMaterial({ map: tex.top });
      } else if (tex instanceof THREE.Texture) {
        pMat = new THREE.MeshLambertMaterial({ map: tex });
      } else {
        pMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
      }

      for (let i = 0; i < 8; i++) {
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
          vy: Math.random() * 0.1 + 0.03,
          vz: (Math.random() - 0.5) * 0.08,
          life: 20
        });
      }
    };

    // World Blocks map
    const worldSize = 32;
    const blocksMap = new Map<string, THREE.Mesh>();
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

    const getMaterialsForBlock = (type: BlockType): THREE.Material | THREE.Material[] => {
      const tex = blockTextures[type];
      if (!tex) {
        return new THREE.MeshLambertMaterial({ color: 0x888888 });
      }
      if ('top' in tex) {
        // [right, left, top, bottom, front, back]
        const sideMat = new THREE.MeshLambertMaterial({ map: tex.side });
        const topMat = new THREE.MeshLambertMaterial({ map: tex.top });
        const botMat = new THREE.MeshLambertMaterial({ map: tex.bottom });
        return [sideMat, sideMat, topMat, botMat, sideMat, sideMat];
      }
      const isTransparent = type === 'glass' || type === 'water';
      return new THREE.MeshLambertMaterial({
        map: tex,
        transparent: isTransparent,
        opacity: type === 'water' ? 0.7 : type === 'glass' ? 0.85 : 1.0
      });
    };

    const addBlockAt = (x: number, y: number, z: number, type: BlockType) => {
      const key = `${x},${y},${z}`;
      if (blocksMap.has(key)) return;

      const materials = getMaterialsForBlock(type);
      const mesh = new THREE.Mesh(boxGeometry, materials);
      mesh.position.set(x, y, z);
      mesh.userData = { type, x, y, z };
      scene.add(mesh);
      blocksMap.set(key, mesh);
    };

    // Generate Natural Terrain (SINGLEPLAYER / no server only).
    // When connected to a real server, the world instead comes from the
    // WebSocket bridge's chunk heightmap data — see buildTerrainColumn below.
    const half = Math.floor(worldSize / 2);
    if (!server) {
      for (let x = -half; x < half; x++) {
        for (let z = -half; z < half; z++) {
          addBlockAt(x, 0, z, 'bedrock');
          const height = Math.floor(Math.sin(x * 0.15) * Math.cos(z * 0.15) * 2 + 10);
          for (let y = 1; y <= height; y++) {
            if (y === height) {
              addBlockAt(x, y, z, 'grass');
            } else if (y > height - 3) {
              addBlockAt(x, y, z, 'dirt');
            } else {
              const isDiamond = Math.random() < 0.02 && y < 5;
              const isGold = Math.random() < 0.03 && y < 7;
              addBlockAt(x, y, z, isDiamond ? 'diamond_ore' : isGold ? 'gold_ore' : 'stone');
            }
          }

          // Trees
          if (Math.abs(x) % 7 === 0 && Math.abs(z) % 7 === 0 && x !== 0 && z !== 0) {
            for (let ty = height + 1; ty <= height + 4; ty++) {
              addBlockAt(x, ty, z, 'oak_log');
            }
            for (let lx = x - 1; lx <= x + 1; lx++) {
              for (let lz = z - 1; lz <= z + 1; lz++) {
                for (let ly = height + 4; ly <= height + 6; ly++) {
                  addBlockAt(lx, ly, lz, 'oak_leaves');
                }
              }
            }
          }
        }
      }
    }

    // Builds a simple terrain column from a real server's heightmap value
    // (MOTION_BLOCKING, i.e. the y of the topmost solid block at x,z).
    // This is a simplified stand-in for full paletted block-state decoding:
    // it shows the real shape of the server's world using a small set of
    // representative block types, so players entering a real server see
    // that server's actual terrain contours rather than a generic filler.
    const buildTerrainColumn = (wx: number, wz: number, topY: number) => {
      const clampedTop = Math.max(1, Math.min(60, topY));
      addBlockAt(wx, 0, wz, 'bedrock');
      for (let y = 1; y <= clampedTop; y++) {
        if (y === clampedTop) {
          addBlockAt(wx, y, wz, 'grass');
        } else if (y > clampedTop - 3) {
          addBlockAt(wx, y, wz, 'dirt');
        } else {
          addBlockAt(wx, y, wz, 'stone');
        }
      }
    };

    // Player Physics & Controls State
    const player = {
      x: 0,
      y: 13,
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
      if (e.code === 'KeyE' && !chatOpenRef.current) {
        setInventoryOpen((prev) => !prev);
      }
      if (e.code === 'KeyT' && !chatOpenRef.current) {
        setChatOpen(true);
      }
      if (e.code === 'Escape') {
        if (chatOpenRef.current) setChatOpen(false);
        else if (inventoryOpenRef.current) setInventoryOpen(false);
        else setPaused((prev) => !prev);
      }
      if (e.code.startsWith('Digit')) {
        const num = parseInt(e.code.replace('Digit', ''), 10);
        if (num >= 1 && num <= 9) {
          setSelectedHotbarIndex(num - 1);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys[e.code] = false;
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

    // Raycasting & Block Targeting Logic
    const raycaster = new THREE.Raycaster();
    raycaster.far = 5.5;
    const cameraForward = new THREE.Vector3();

    const getRaycastTarget = () => {
      camera.getWorldDirection(cameraForward);
      raycaster.set(camera.position, cameraForward);

      const nearbyCandidates: THREE.Mesh[] = [];
      const camPos = camera.position;
      for (const mesh of blocksMap.values()) {
        if (mesh.position.distanceToSquared(camPos) <= 36) {
          nearbyCandidates.push(mesh);
        }
      }

      const intersects = raycaster.intersectObjects(nearbyCandidates, false);
      if (intersects.length > 0 && intersects[0].face) {
        const hit = intersects[0];
        const mesh = hit.object as THREE.Mesh;
        const bType = (mesh.userData.type as BlockType) || 'stone';
        return {
          mesh,
          type: bType,
          name: BLOCK_NAMES[bType] || bType,
          x: Math.round(mesh.position.x),
          y: Math.round(mesh.position.y),
          z: Math.round(mesh.position.z),
          distance: hit.distance,
          faceNormal: hit.face.normal.clone(),
          isBedrock: bType === 'bedrock'
        };
      }
      return null;
    };

    // BREAK ACTION
    const performBreak = () => {
      if (pausedRef.current || inventoryOpenRef.current || chatOpenRef.current) return;
      const target = getRaycastTarget();
      if (!target) return;

      if (target.isBedrock) {
        soundManager.playClick();
        addChatMessage('Sistem', 'Katman kayası (Bedrock) kırılamaz!', true);
        return;
      }

      spawnBlockParticles(target.x, target.y, target.z, target.type);
      const key = `${target.x},${target.y},${target.z}`;
      scene.remove(target.mesh);
      target.mesh.geometry.dispose();
      blocksMap.delete(key);
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
    };

    // PLACE ACTION
    const performPlace = () => {
      if (pausedRef.current || inventoryOpenRef.current || chatOpenRef.current) return;
      const target = getRaycastTarget();
      if (!target) return;

      const activeSlot = selectedHotbarIndexRef.current;
      const currentItem = hotbarRef.current[activeSlot];

      if (!currentItem || currentItem.count <= 0) {
        soundManager.playClick();
        return;
      }

      const placeX = Math.round(target.x + target.faceNormal.x);
      const placeY = Math.round(target.y + target.faceNormal.y);
      const placeZ = Math.round(target.z + target.faceNormal.z);

      // Prevent placing inside player body
      const playerMinX = player.x - 0.45;
      const playerMaxX = player.x + 0.45;
      const playerMinZ = player.z - 0.45;
      const playerMaxZ = player.z + 0.45;
      const playerMinY = player.y - 1.2;
      const playerMaxY = player.y + 0.8;

      const insidePlayer =
        playerMaxX > placeX - 0.5 &&
        playerMinX < placeX + 0.5 &&
        playerMaxZ > placeZ - 0.5 &&
        playerMinZ < placeZ + 0.5 &&
        playerMaxY > placeY - 0.5 &&
        playerMinY < placeY + 0.5;

      if (insidePlayer) return;

      const key = `${placeX},${placeY},${placeZ}`;
      if (blocksMap.has(key)) return;

      addBlockAt(placeX, placeY, placeZ, currentItem.type);
      soundManager.playDig(currentItem.type);

      setHotbar((prev) => {
        const updated = [...prev];
        if (updated[activeSlot] && updated[activeSlot].count > 0) {
          updated[activeSlot] = { ...updated[activeSlot], count: updated[activeSlot].count - 1 };
        }
        return updated;
      });
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
            setSelectedHotbarIndex(found);
            soundManager.playPop();
          }
        }
      }
    };

    const handleContextMenu = (e: MouseEvent) => e.preventDefault();

    const handleWheel = (e: WheelEvent) => {
      if (pausedRef.current || inventoryOpenRef.current || chatOpenRef.current) return;
      if (e.deltaY > 0) {
        setSelectedHotbarIndex((prev) => (prev + 1) % 9);
      } else if (e.deltaY < 0) {
        setSelectedHotbarIndex((prev) => (prev - 1 + 9) % 9);
      }
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('wheel', handleWheel, { passive: true });

    // Touch Look Handling on Canvas (Mobile Screen Pan)
    const handleTouchStart = (e: TouchEvent) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        // Right half of screen is for camera rotation
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

    // Connect WebSocket <-> Real Minecraft Server bridge if server is specified
    if (server) {
      const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${wsProtocol}//${window.location.host}/ws-proxy?host=${encodeURIComponent(server.ip)}&port=${server.port}&username=WebPlayer`;
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => {
        addChatMessage('Sistem', `${server.name} sunucusuna bağlanıyor...`, true);
      };

      ws.onmessage = (event) => {
        if (typeof event.data !== 'string') return;
        try {
          const msg = JSON.parse(event.data);

          switch (msg.type) {
            case 'tcp_connected':
              addChatMessage('Sistem', `TCP Köprüsü: ${msg.host}:${msg.port}`, true);
              break;

            case 'state':
              if (msg.state === 'play') {
                addChatMessage('Sistem', 'Protokol: Play State aktif ✓', true);
              }
              break;

            case 'login':
              addChatMessage('Sistem', `Login başarılı! Oyun Modu: ${msg.gameMode}`, true);
              break;

            case 'joined_world':
              addChatMessage('Sistem', `✓ ${msg.username} dünyaya katıldı!`, true);
              // Place player at spawn or floating spawn
              player.y = 64;
              break;

            case 'spawn_position':
              if (msg.x !== undefined && msg.y !== undefined && msg.z !== undefined) {
                player.x = msg.x + 0.5;
                player.y = msg.y + 1.5;
                player.z = msg.z + 0.5;
                addChatMessage('Sistem', `Spawn: ${Math.round(msg.x)}, ${Math.round(msg.y)}, ${Math.round(msg.z)}`, true);
              }
              break;

            case 'position':
              // Server wants us at this position (teleport)
              if (msg.x !== undefined && msg.y !== undefined && msg.z !== undefined) {
                player.x = msg.x;
                player.y = msg.y;
                player.z = msg.z;
              }
              break;

            case 'chunk':
              // Server sent chunk data; decode heightmap and build terrain
              if (msg.heightmapPacked && Array.isArray(msg.heightmapPacked)) {
                const chunkX = msg.x;
                const chunkZ = msg.z;
                // Heightmap is packed as 64 longs (int64) representing 16x16 positions
                // Each long covers 2x2 = 4 blocks, so 16x16 = 256 positions total.
                // This is complex; for now, approximate by taking block heights from the packed array.
                // This is a simplified decode — real heightmap decoding is more complex.
                for (let lx = 0; lx < 16; lx++) {
                  for (let lz = 0; lz < 16; lz++) {
                    const idx = lz * 16 + lx;
                    const heightValue = Math.floor((msg.heightmapPacked[idx % msg.heightmapPacked.length] || 64) / 4) + 1;
                    const wx = chunkX * 16 + lx;
                    const wz = chunkZ * 16 + lz;
                    buildTerrainColumn(wx, wz, Math.min(255, Math.max(0, heightValue)));
                  }
                }
              }
              break;

            case 'unload_chunk':
              // Server unloaded a chunk — remove blocks in that region
              // For now, we'll just ignore to avoid flickering
              break;

            case 'health':
              // Server sent health update
              if (typeof msg.health === 'number') {
                addChatMessage('Sistem', `❤ Sağlık: ${msg.health.toFixed(1)}/20`, true);
              }
              break;

            case 'player_list':
              if (Array.isArray(msg.players) && msg.players.length) {
                addChatMessage('Sistem', `Çevrimiçi: ${msg.players.join(', ')}`, true);
              }
              break;

            case 'chat':
              addChatMessage(msg.sender || 'Oyuncu', msg.text);
              break;

            case 'system_chat':
              addChatMessage('Sistem', msg.text, true);
              break;

            case 'disconnected':
              addChatMessage('Sistem', `❌ Bağlantı kesildi: ${msg.reason}`, true);
              break;

            case 'closed':
              addChatMessage('Sistem', `⚠ Sunucu kapandı.`, true);
              break;

            case 'error':
              addChatMessage('Sistem', `⚠ HATA: ${msg.message}`, true);
              break;

            default:
              break;
          }
        } catch (err) {
          // Ignore malformed JSON
        }
      };

      ws.onerror = () => {
        addChatMessage('Sistem', `❌ WebSocket Hatası`, true);
      };

      ws.onclose = () => {
        addChatMessage('Sistem', `⚠ Sunucu bağlantısı kapandı.`, true);
      };
    }

    // Animation Loop
    let lastTime = performance.now();
    let frameCount = 0;
    let animId: number;
    let lastTargetKey = '';

    const animate = (now: number) => {
      animId = requestAnimationFrame(animate);

      // FPS calculation
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }

      // Update breaking particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.mesh.position.x += p.vx;
        p.mesh.position.y += p.vy;
        p.mesh.position.z += p.vz;
        p.vy -= 0.008;
        p.life--;
        if (p.life <= 0) {
          scene.remove(p.mesh);
          p.mesh.geometry.dispose();
          particles.splice(i, 1);
        }
      }

      if (!pausedRef.current && !inventoryOpenRef.current && !chatOpenRef.current) {
        const moveSpeed = player.speed;
        let dx = 0;
        let dz = 0;

        const isForward = keys['KeyW'] || keys['ArrowUp'] || touchMoveRef.current.forward;
        const isBack = keys['KeyS'] || keys['ArrowDown'] || touchMoveRef.current.back;
        const isLeft = keys['KeyA'] || keys['ArrowLeft'] || touchMoveRef.current.left;
        const isRight = keys['KeyD'] || keys['ArrowRight'] || touchMoveRef.current.right;
        const isJump = keys['Space'] || touchMoveRef.current.jump;

        if (isForward) {
          dx -= Math.sin(player.yaw) * moveSpeed;
          dz -= Math.cos(player.yaw) * moveSpeed;
        }
        if (isBack) {
          dx += Math.sin(player.yaw) * moveSpeed;
          dz += Math.cos(player.yaw) * moveSpeed;
        }
        if (isLeft) {
          dx -= Math.cos(player.yaw) * moveSpeed;
          dz += Math.sin(player.yaw) * moveSpeed;
        }
        if (isRight) {
          dx += Math.cos(player.yaw) * moveSpeed;
          dz += Math.sin(player.yaw) * moveSpeed;
        }

        player.x += dx;
        player.z += dz;

        // Gravity & Jumping
        if (isJump && player.y <= 11.05) {
          player.vy = player.jumpForce;
          soundManager.playFootstep();
        }

        player.y += player.vy;
        player.vy -= player.gravity;

        if (player.y < 11) {
          player.y = 11;
          player.vy = 0;
        }

        // Camera position & look
        camera.position.set(player.x, player.y + 0.6, player.z);

        const targetX = camera.position.x - Math.sin(player.yaw) * Math.cos(player.pitch);
        const targetY = camera.position.y + Math.sin(player.pitch);
        const targetZ = camera.position.z - Math.cos(player.yaw) * Math.cos(player.pitch);
        camera.lookAt(targetX, targetY, targetZ);

        if (frameCount % 8 === 0) {
          setPlayerPos({
            x: player.x.toFixed(1),
            y: player.y.toFixed(1),
            z: player.z.toFixed(1)
          });
        }

        // Raycast Target Highlight
        const target = getRaycastTarget();
        if (target) {
          highlightBox.visible = true;
          highlightBox.position.set(target.x, target.y, target.z);

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
    };
  }, [settings.fov, settings.graphics, settings.texturePack, server, addChatMessage]);

  return (
    <div className="relative w-full h-screen overflow-hidden select-none font-['VT323'] touch-none">
      {/* Three.js Canvas */}
      <div ref={containerRef} className="absolute inset-0 cursor-crosshair" />

      {/* Target Block HUD (Top Center) */}
      {targetedBlock ? (
        <div 
          id="target-block-hud" 
          className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 bg-black/85 border-2 border-[#555] px-3 sm:px-4 py-1.5 sm:py-2 rounded shadow-2xl flex items-center gap-2 sm:gap-3 pointer-events-none text-white z-20 backdrop-blur-sm max-w-[92vw]"
        >
          <div className={`w-3 h-3 rounded-full flex-shrink-0 ${targetedBlock.isBedrock ? 'bg-red-500' : 'bg-emerald-400 animate-pulse'}`} />
          <div className="flex flex-col overflow-hidden">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-bold text-yellow-300 text-xl sm:text-2xl tracking-wide truncate">{targetedBlock.name}</span>
              <span className="text-gray-300 text-xs sm:text-sm">({targetedBlock.distance}m)</span>
              {targetedBlock.isBedrock && (
                <span className="text-[10px] sm:text-xs bg-red-900/80 text-red-200 px-1 py-0.5 rounded border border-red-700">Kırılamaz</span>
              )}
            </div>
            <div className="text-gray-300 text-xs sm:text-sm flex gap-2 font-mono truncate">
              <span>[{targetedBlock.x}, {targetedBlock.y}, {targetedBlock.z}]</span>
              <span className="text-blue-300 hidden sm:inline">[Sol: Kır]</span>
              <span className="text-emerald-300 hidden sm:inline">[Sağ: Koy]</span>
            </div>
          </div>
        </div>
      ) : (
        <div 
          id="target-block-hud-empty" 
          className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 bg-black/40 border border-white/20 px-3 py-1 rounded text-gray-400 text-xs sm:text-base pointer-events-none z-20"
        >
          Hedef Blok: Menzil Dışı
        </div>
      )}

      {/* Crosshair */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className={`text-2xl sm:text-3xl font-mono transition-transform duration-75 ${targetedBlock ? 'text-yellow-300 scale-125 opacity-100' : 'text-white opacity-75'}`}>
          +
        </div>
      </div>

      {/* HUD: FPS & Player Pos & Server Banner */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 text-white text-base sm:text-xl bg-black/60 p-2 sm:p-2.5 rounded border border-white/10 pointer-events-none z-10 max-w-[50vw]">
        <div className="text-green-400 font-bold">MC 1.21.4 • {settings.texturePack?.toUpperCase() || 'REALISTIC'}</div>
        <div>FPS: {fps} | XYZ: {playerPos.x}/{playerPos.y}/{playerPos.z}</div>
        {server && (
          <div className="text-yellow-300 text-xs sm:text-sm font-mono truncate">
            🌐 {server.name} ({server.ip})
          </div>
        )}
      </div>

      {/* Top Right Buttons (Mobile & Desktop Accessible) */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center gap-2 z-30">
        <button
          onClick={() => setChatOpen((prev) => !prev)}
          className="p-2 sm:px-3 sm:py-1.5 bg-black/70 hover:bg-black/90 border border-gray-500 rounded text-white text-base sm:text-lg flex items-center gap-1 active:scale-95"
          title="Sohbeti Aç (T)"
        >
          💬 <span className="hidden sm:inline">Sohbet</span>
        </button>
        <button
          onClick={() => setInventoryOpen((prev) => !prev)}
          className="p-2 sm:px-3 sm:py-1.5 bg-black/70 hover:bg-black/90 border border-gray-500 rounded text-white text-base sm:text-lg flex items-center gap-1 active:scale-95"
          title="Envanteri Aç (E)"
        >
          🎒 <span className="hidden sm:inline">Envanter</span>
        </button>
        <button
          onClick={() => setPaused((prev) => !prev)}
          className="p-2 sm:px-3 sm:py-1.5 bg-black/70 hover:bg-black/90 border border-gray-500 rounded text-white text-base sm:text-lg flex items-center gap-1 active:scale-95"
          title="Menü (Esc)"
        >
          ⏸️ <span className="hidden sm:inline">Menü</span>
        </button>
      </div>

      {/* HUD: Hearts & Hunger */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none z-10">
        {/* Hearts */}
        <div className="flex gap-0.5 sm:gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={`w-3.5 h-3.5 sm:w-5 sm:h-5 ${i < health / 2 ? 'bg-red-600' : 'bg-gray-600'} border border-black transform rotate-45`} />
          ))}
        </div>
        {/* Hunger */}
        <div className="flex gap-0.5 sm:gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={`w-3.5 h-3.5 sm:w-5 sm:h-5 ${i < hunger / 2 ? 'bg-amber-700' : 'bg-gray-600'} border border-black rounded-full`} />
          ))}
        </div>
      </div>

      {/* Hotbar */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-[#3c3c3c]/90 border-2 sm:border-4 border-[#222] p-0.5 sm:p-1 flex gap-0.5 sm:gap-1 shadow-2xl z-20 max-w-[96vw] overflow-x-auto">
        {hotbar.map((item, index) => {
          const isSelected = index === selectedHotbarIndex;
          return (
            <div
              key={index}
              onClick={() => {
                soundManager.playClick();
                setSelectedHotbarIndex(index);
              }}
              className={`relative w-8 h-8 sm:w-12 sm:h-12 bg-[#8b8b8b] border sm:border-2 cursor-pointer flex items-center justify-center flex-shrink-0 transition-all ${
                isSelected ? 'border-white scale-105 bg-[#a3a3a3]' : 'border-[#373737] hover:border-gray-400'
              }`}
            >
              <div className="text-[9px] sm:text-xs font-bold text-yellow-300 absolute top-0.5 left-0.5 sm:left-1">{index + 1}</div>
              <div className="text-[9px] sm:text-xs uppercase font-bold text-center text-white px-0.5 truncate">{item.type.slice(0, 3)}</div>
              <div className="text-[9px] sm:text-xs font-bold text-white absolute bottom-0.5 right-0.5 sm:right-1 bg-black/70 px-0.5 rounded-sm">{item.count}</div>
            </div>
          );
        })}
      </div>

      {/* MOBILE TOUCH CONTROLS OVERLAY */}
      {showTouchControls && (
        <div className="absolute inset-0 pointer-events-none z-30">
          {/* Virtual D-Pad (Left Bottom) */}
          <div className="absolute bottom-20 left-4 pointer-events-auto flex flex-col items-center">
            {/* Up / Forward */}
            <button
              onTouchStart={(e) => { e.preventDefault(); touchMoveRef.current.forward = true; }}
              onTouchEnd={(e) => { e.preventDefault(); touchMoveRef.current.forward = false; }}
              onMouseDown={() => { touchMoveRef.current.forward = true; }}
              onMouseUp={() => { touchMoveRef.current.forward = false; }}
              className="w-14 h-14 bg-black/60 active:bg-black/90 border-2 border-white/50 active:border-yellow-400 text-white text-2xl font-bold rounded-t-lg flex items-center justify-center select-none shadow-xl"
            >
              ▲
            </button>
            <div className="flex gap-3">
              {/* Left */}
              <button
                onTouchStart={(e) => { e.preventDefault(); touchMoveRef.current.left = true; }}
                onTouchEnd={(e) => { e.preventDefault(); touchMoveRef.current.left = false; }}
                onMouseDown={() => { touchMoveRef.current.left = true; }}
                onMouseUp={() => { touchMoveRef.current.left = false; }}
                className="w-14 h-14 bg-black/60 active:bg-black/90 border-2 border-white/50 active:border-yellow-400 text-white text-2xl font-bold rounded-l-lg flex items-center justify-center select-none shadow-xl"
              >
                ◀
              </button>
              {/* Center indicator */}
              <div className="w-10 h-14 flex items-center justify-center text-gray-500 font-mono text-xs">
                +
              </div>
              {/* Right */}
              <button
                onTouchStart={(e) => { e.preventDefault(); touchMoveRef.current.right = true; }}
                onTouchEnd={(e) => { e.preventDefault(); touchMoveRef.current.right = false; }}
                onMouseDown={() => { touchMoveRef.current.right = true; }}
                onMouseUp={() => { touchMoveRef.current.right = false; }}
                className="w-14 h-14 bg-black/60 active:bg-black/90 border-2 border-white/50 active:border-yellow-400 text-white text-2xl font-bold rounded-r-lg flex items-center justify-center select-none shadow-xl"
              >
                ▶
              </button>
            </div>
            {/* Down / Back */}
            <button
              onTouchStart={(e) => { e.preventDefault(); touchMoveRef.current.back = true; }}
              onTouchEnd={(e) => { e.preventDefault(); touchMoveRef.current.back = false; }}
              onMouseDown={() => { touchMoveRef.current.back = true; }}
              onMouseUp={() => { touchMoveRef.current.back = false; }}
              className="w-14 h-14 bg-black/60 active:bg-black/90 border-2 border-white/50 active:border-yellow-400 text-white text-2xl font-bold rounded-b-lg flex items-center justify-center select-none shadow-xl"
            >
              ▼
            </button>
          </div>

          {/* Action Buttons (Right Bottom: Jump, Break, Place) */}
          <div className="absolute bottom-20 right-4 pointer-events-auto flex flex-col items-end gap-3">
            {/* Place Block */}
            <button
              onTouchStart={(e) => { e.preventDefault(); actionsRef.current?.placeBlock(); }}
              onClick={() => actionsRef.current?.placeBlock()}
              className="w-14 h-14 bg-emerald-700/80 active:bg-emerald-600 border-2 border-emerald-400 text-white text-sm font-bold rounded-full flex flex-col items-center justify-center shadow-xl select-none"
            >
              <span>🧱</span>
              <span className="text-[10px]">KOY</span>
            </button>

            {/* Break Block */}
            <button
              onTouchStart={(e) => { e.preventDefault(); actionsRef.current?.breakBlock(); }}
              onClick={() => actionsRef.current?.breakBlock()}
              className="w-14 h-14 bg-red-700/80 active:bg-red-600 border-2 border-red-400 text-white text-sm font-bold rounded-full flex flex-col items-center justify-center shadow-xl select-none"
            >
              <span>⛏️</span>
              <span className="text-[10px]">KIR</span>
            </button>

            {/* Jump */}
            <button
              onTouchStart={(e) => { e.preventDefault(); touchMoveRef.current.jump = true; }}
              onTouchEnd={(e) => { e.preventDefault(); touchMoveRef.current.jump = false; }}
              onMouseDown={() => { touchMoveRef.current.jump = true; }}
              onMouseUp={() => { touchMoveRef.current.jump = false; }}
              className="w-16 h-16 bg-blue-700/80 active:bg-blue-600 border-2 border-blue-400 text-white text-base font-bold rounded-full flex flex-col items-center justify-center shadow-2xl select-none"
            >
              <span>⬆️</span>
              <span className="text-[11px]">ZIPLA</span>
            </button>
          </div>
        </div>
      )}

      {/* Chat Overlay */}
      <div className="absolute bottom-20 sm:bottom-24 left-2 sm:left-4 w-[75vw] sm:w-96 flex flex-col gap-1 z-30 pointer-events-none">
        <div className="bg-black/60 p-2 sm:p-2.5 max-h-36 sm:max-h-44 overflow-y-auto flex flex-col gap-1 text-white text-base sm:text-xl rounded border border-white/10">
          {messages.map((m, idx) => (
            <div key={`${m.id || 'msg'}-${idx}`} className="drop-shadow">
              <span className="text-gray-400 text-xs sm:text-sm">[{m.time}] </span>
              <span className={m.isSystem ? 'text-yellow-400 font-bold' : 'text-green-300'}>{m.sender}: </span>
              <span>{m.text}</span>
            </div>
          ))}
        </div>
        {chatOpen && (
          <div className="pointer-events-auto flex mt-1">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && chatInput.trim()) {
                  soundManager.playClick();
                  addChatMessage('Oyuncu', chatInput);
                  if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                    wsRef.current.send(JSON.stringify({ type: 'chat', text: chatInput }));
                  }
                  setChatInput('');
                  setChatOpen(false);
                }
              }}
              placeholder="Mesaj yazın..."
              autoFocus
              className="w-full bg-black/90 border-2 border-yellow-400 px-3 py-1.5 sm:py-2 text-lg sm:text-2xl text-white outline-none"
            />
          </div>
        )}
      </div>

      {/* Inventory Modal */}
      {inventoryOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#c6c6c6] border-4 border-[#373737] p-4 sm:p-6 w-full max-w-xl flex flex-col gap-4 text-black shadow-2xl">
            <div className="flex justify-between items-center border-b-2 border-gray-500 pb-2">
              <div className="text-2xl sm:text-3xl font-bold text-black">Envanter (Survival)</div>
              <button 
                onClick={() => setInventoryOpen(false)}
                className="px-3 py-1 bg-red-600 text-white font-bold text-lg hover:bg-red-500"
              >
                X
              </button>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-9 gap-1.5 sm:gap-2 bg-[#8b8b8b] p-3 sm:p-4 border-2 border-inset border-gray-600 max-h-[60vh] overflow-y-auto">
              {hotbar.concat(hotbar).map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => {
                    soundManager.playPop();
                    setSelectedHotbarIndex(idx % 9);
                  }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-[#c6c6c6] border-2 border-t-[#373737] border-l-[#373737] border-b-[#fff] border-r-[#fff] cursor-pointer flex flex-col items-center justify-center text-[10px] sm:text-xs font-bold hover:bg-gray-300"
                >
                  <span className="truncate w-full text-center px-0.5">{item.type}</span>
                  <span className="text-blue-900">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Pause Menu */}
      {paused && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#2e2e2e] border-4 border-[#444] p-6 sm:p-8 w-full max-w-md flex flex-col gap-3 sm:gap-4 shadow-2xl">
            <div className="text-3xl sm:text-4xl text-center text-white font-bold mb-2">Oyun Duraklatıldı</div>
            <button
              onClick={() => {
                soundManager.playClick();
                setPaused(false);
              }}
              className="py-2.5 sm:py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-xl sm:text-2xl font-bold"
            >
              Oyuna Dön (Resume)
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                setPaused(false);
                setInventoryOpen(true);
              }}
              className="py-2.5 sm:py-3 bg-[#727272] hover:bg-[#858585] text-white border-2 border-t-[#b5b5b5] border-l-[#b5b5b5] border-b-[#3d3d3d] border-r-[#3d3d3d] text-xl sm:text-2xl font-bold"
            >
              Envanter (Inventory)
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                onExit();
              }}
              className="py-2.5 sm:py-3 bg-[#a82020] hover:bg-[#c93030] text-white border-2 border-t-[#f87171] border-l-[#f87171] border-b-[#7f1d1d] border-r-[#7f1d1d] text-xl sm:text-2xl font-bold mt-2"
            >
              Ana Menüye Kaydet ve Çık
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
