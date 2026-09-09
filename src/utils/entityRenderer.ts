import * as THREE from 'three';
import { MinecraftEntityData } from '../types';

export interface RenderedEntity {
  group: THREE.Group;
  data: MinecraftEntityData;
  targetPos: THREE.Vector3;
  targetYaw: number;
  targetPitch: number;
  currentYaw: number;
  currentPitch: number;
  walkCycle: number;
  isMoving: boolean;
  leftLeg?: THREE.Mesh;
  rightLeg?: THREE.Mesh;
  leftArm?: THREE.Mesh;
  rightArm?: THREE.Mesh;
  head?: THREE.Mesh;
  nameTag?: THREE.Sprite;
}

// Generate a crisp canvas texture for 3D billboard name tag
function createNameTagSprite(text: string, isPlayer: boolean = false): THREE.Sprite {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    // Rounded pill
    ctx.beginPath();
    ctx.roundRect(8, 8, canvas.width - 16, canvas.height - 16, 12);
    ctx.fill();
    ctx.strokeStyle = isPlayer ? 'rgba(250, 204, 21, 0.8)' : 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.font = 'bold 28px "VT323", "Courier New", monospace';
    ctx.fillStyle = isPlayer ? '#fde047' : '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(2.0, 0.5, 1.0);
  sprite.renderOrder = 999;
  return sprite;
}

// Generate a floating hologram / display entity billboard with support for multiple lines & colors
function createHologramSprite(text: string): THREE.Sprite {
  const rawLines = text.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 0);
  const lines = rawLines.length > 0 ? rawLines : [text];

  const canvas = document.createElement('canvas');
  canvas.width = 512;
  const lineH = 46;
  canvas.height = Math.max(64, lines.length * lineH + 20);
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Dark semi-transparent background box like Minecraft HolographicDisplays
    ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
    ctx.beginPath();
    ctx.roundRect(8, 4, canvas.width - 16, canvas.height - 8, 8);
    ctx.fill();

    ctx.font = 'bold 32px "VT323", "Courier New", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const startY = (canvas.height - (lines.length - 1) * lineH) / 2;
    lines.forEach((line, idx) => {
      // Accent color on first line, crisp white on subsequent lines
      ctx.fillStyle = idx === 0 ? '#fde047' : '#ffffff';
      ctx.fillText(line, canvas.width / 2, startY + idx * lineH);
    });
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
  const sprite = new THREE.Sprite(spriteMat);
  const aspect = canvas.width / canvas.height;
  const height = Math.max(0.4, 0.35 * lines.length + 0.15);
  sprite.scale.set(height * aspect, height, 1.0);
  sprite.renderOrder = 999;
  return sprite;
}

// Color palettes for different entity types
const ENTITY_COLORS: Record<string, { head: number; body: number; legs: number; arms: number }> = {
  player: { head: 0xf5d0a9, body: 0x00aaaa, legs: 0x0000aa, arms: 0xf5d0a9 },
  zombie: { head: 0x5a8f4c, body: 0x00aaaa, legs: 0x223388, arms: 0x5a8f4c },
  skeleton: { head: 0xdcdcdc, body: 0xc8c8c8, legs: 0xb0b0b0, arms: 0xb0b0b0 },
  creeper: { head: 0x2d8a35, body: 0x38a842, legs: 0x24732b, arms: 0x24732b },
  villager: { head: 0xd9a07a, body: 0x6e4726, legs: 0x4d321b, arms: 0x5a391d },
  cow: { head: 0x4a321b, body: 0x694627, legs: 0x3d2714, arms: 0x3d2714 },
  sheep: { head: 0xe6e6e6, body: 0xf5f5f5, legs: 0xcccccc, arms: 0xcccccc },
  pig: { head: 0xf5a4b8, body: 0xf28fa7, legs: 0xde7a93, arms: 0xde7a93 },
  chicken: { head: 0xffffff, body: 0xf0f0f0, legs: 0xdda020, arms: 0xffffff },
  spider: { head: 0x222222, body: 0x181818, legs: 0x111111, arms: 0x111111 },
  iron_golem: { head: 0xcccccc, body: 0xdddddd, legs: 0xaaaaaa, arms: 0xbbbbbb },
  enderman: { head: 0x111111, body: 0x161616, legs: 0x0a0a0a, arms: 0x0a0a0a },
};

export function createEntity3D(data: MinecraftEntityData): RenderedEntity {
  const group = new THREE.Group();
  group.position.set(data.x, data.y, data.z);

  const eName = (data.name || data.type || 'player').toLowerCase();

  // 1. Check if this is a Hologram or Text Display entity (DecentHolograms, HolographicDisplays, text_display)
  const isHologram = 
    data.isHologram || 
    eName === 'text_display' || 
    eName === 'interaction' || 
    eName === 'area_effect_cloud' || 
    eName === 'marker' || 
    (eName === 'armor_stand' && !!data.customName);

  if (isHologram) {
    const rawText = data.customName || data.name;
    const isCleanText = rawText && !['text_display', 'interaction', 'area_effect_cloud', 'marker', 'armor_stand'].includes(rawText.toLowerCase());
    
    let nameTag: THREE.Sprite | undefined;
    if (isCleanText) {
      nameTag = createHologramSprite(rawText);
      nameTag.position.set(0, eName === 'text_display' ? 0.2 : 1.1, 0);
      group.add(nameTag);
    }

    return {
      group,
      data,
      targetPos: new THREE.Vector3(data.x, data.y, data.z),
      targetYaw: data.yaw || 0,
      targetPitch: data.pitch || 0,
      currentYaw: data.yaw || 0,
      currentPitch: data.pitch || 0,
      walkCycle: 0,
      isMoving: false,
      nameTag,
    };
  }

  const colors = ENTITY_COLORS[eName] || ENTITY_COLORS.player;

  let leftLeg: THREE.Mesh | undefined;
  let rightLeg: THREE.Mesh | undefined;
  let leftArm: THREE.Mesh | undefined;
  let rightArm: THREE.Mesh | undefined;
  let head: THREE.Mesh | undefined;

  const isQuadruped = ['cow', 'sheep', 'pig'].includes(eName);
  const isCreeper = eName === 'creeper';
  const isItem = eName === 'item';

  if (isItem) {
    // Floating rotating dropped item
    const itemGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
    const itemMat = new THREE.MeshLambertMaterial({ color: 0x3b82f6 });
    head = new THREE.Mesh(itemGeo, itemMat);
    head.position.set(0, 0.25, 0);
    group.add(head);
  } else if (isQuadruped) {
    // Quadruped Model (Cow, Sheep, Pig)
    const bodyGeo = new THREE.BoxGeometry(0.7, 0.6, 1.0);
    const bodyMat = new THREE.MeshLambertMaterial({ color: colors.body });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, 0.65, 0);
    group.add(body);

    const headGeo = new THREE.BoxGeometry(0.45, 0.45, 0.45);
    const headMat = new THREE.MeshLambertMaterial({ color: colors.head });
    head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0, 0.95, 0.55);
    group.add(head);

    // 4 legs
    const legGeo = new THREE.BoxGeometry(0.2, 0.45, 0.2);
    const legMat = new THREE.MeshLambertMaterial({ color: colors.legs });

    leftLeg = new THREE.Mesh(legGeo, legMat);
    leftLeg.position.set(-0.22, 0.22, 0.3);
    group.add(leftLeg);

    rightLeg = new THREE.Mesh(legGeo, legMat);
    rightLeg.position.set(0.22, 0.22, 0.3);
    group.add(rightLeg);

    const legBackL = new THREE.Mesh(legGeo, legMat);
    legBackL.position.set(-0.22, 0.22, -0.3);
    group.add(legBackL);

    const legBackR = new THREE.Mesh(legGeo, legMat);
    legBackR.position.set(0.22, 0.22, -0.3);
    group.add(legBackR);
  } else if (isCreeper) {
    // Creeper Model
    const bodyGeo = new THREE.BoxGeometry(0.4, 0.7, 0.25);
    const bodyMat = new THREE.MeshLambertMaterial({ color: colors.body });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, 0.65, 0);
    group.add(body);

    const headGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const headMat = new THREE.MeshLambertMaterial({ color: colors.head });
    head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0, 1.25, 0);
    group.add(head);

    const legGeo = new THREE.BoxGeometry(0.22, 0.35, 0.22);
    const legMat = new THREE.MeshLambertMaterial({ color: colors.legs });

    leftLeg = new THREE.Mesh(legGeo, legMat);
    leftLeg.position.set(-0.15, 0.17, 0.15);
    group.add(leftLeg);

    rightLeg = new THREE.Mesh(legGeo, legMat);
    rightLeg.position.set(0.15, 0.17, 0.15);
    group.add(rightLeg);
  } else {
    // Standard Humanoid Model (Player, Zombie, Skeleton, Villager, NPC)
    // Head (0.5 x 0.5 x 0.5)
    const headGeo = new THREE.BoxGeometry(0.45, 0.45, 0.45);
    const headMat = new THREE.MeshLambertMaterial({ color: colors.head });
    head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0, 1.45, 0);
    group.add(head);

    // Torso (0.5 x 0.65 x 0.28)
    const torsoGeo = new THREE.BoxGeometry(0.45, 0.65, 0.26);
    const torsoMat = new THREE.MeshLambertMaterial({ color: colors.body });
    const torso = new THREE.Mesh(torsoGeo, torsoMat);
    torso.position.set(0, 0.9, 0);
    group.add(torso);

    // Left & Right Arms (0.2 x 0.65 x 0.2)
    const armGeo = new THREE.BoxGeometry(0.18, 0.65, 0.18);
    const armMat = new THREE.MeshLambertMaterial({ color: colors.arms });

    leftArm = new THREE.Mesh(armGeo, armMat);
    leftArm.position.set(-0.33, 0.9, 0);
    group.add(leftArm);

    rightArm = new THREE.Mesh(armGeo, armMat);
    rightArm.position.set(0.33, 0.9, 0);
    group.add(rightArm);

    // Zombie arms outstretched forward
    if (eName === 'zombie') {
      leftArm.rotation.x = -Math.PI / 2;
      rightArm.rotation.x = -Math.PI / 2;
    }

    // Left & Right Legs (0.2 x 0.65 x 0.2)
    const legGeo = new THREE.BoxGeometry(0.2, 0.65, 0.2);
    const legMat = new THREE.MeshLambertMaterial({ color: colors.legs });

    leftLeg = new THREE.Mesh(legGeo, legMat);
    leftLeg.position.set(-0.12, 0.32, 0);
    group.add(leftLeg);

    rightLeg = new THREE.Mesh(legGeo, legMat);
    rightLeg.position.set(0.12, 0.32, 0);
    group.add(rightLeg);
  }

  // Name Tag
  const displayName = data.username || data.customName || data.name || (data.type === 'player' ? 'Oyuncu' : data.type);
  const isPlayer = !!data.username || data.type === 'player';
  const nameTag = createNameTagSprite(displayName, isPlayer);
  nameTag.position.set(0, (data.height || 1.8) + 0.35, 0);
  group.add(nameTag);

  return {
    group,
    data,
    targetPos: new THREE.Vector3(data.x, data.y, data.z),
    targetYaw: data.yaw || 0,
    targetPitch: data.pitch || 0,
    currentYaw: data.yaw || 0,
    currentPitch: data.pitch || 0,
    walkCycle: 0,
    isMoving: false,
    leftLeg,
    rightLeg,
    leftArm,
    rightArm,
    head,
    nameTag,
  };
}

export function updateEntityTick(entity: RenderedEntity, delta: number = 0.016) {
  // Smoothly lerp towards target position
  const dist = entity.group.position.distanceTo(entity.targetPos);
  if (dist > 0.01) {
    entity.isMoving = true;
    entity.group.position.lerp(entity.targetPos, Math.min(1.0, delta * 12));
    entity.walkCycle += delta * 10;
  } else {
    entity.isMoving = false;
  }

  // Smooth rotation
  entity.group.rotation.y = THREE.MathUtils.lerp(entity.group.rotation.y, entity.targetYaw, delta * 10);

  // Limb swinging animation while walking
  if (entity.leftLeg && entity.rightLeg) {
    if (entity.isMoving) {
      const swing = Math.sin(entity.walkCycle) * 0.6;
      entity.leftLeg.rotation.x = swing;
      entity.rightLeg.rotation.x = -swing;
      if (entity.leftArm && entity.rightArm && entity.data.name !== 'zombie') {
        entity.leftArm.rotation.x = -swing * 0.7;
        entity.rightArm.rotation.x = swing * 0.7;
      }
    } else {
      entity.leftLeg.rotation.x = THREE.MathUtils.lerp(entity.leftLeg.rotation.x, 0, delta * 8);
      entity.rightLeg.rotation.x = THREE.MathUtils.lerp(entity.rightLeg.rotation.x, 0, delta * 8);
      if (entity.leftArm && entity.rightArm && entity.data.name !== 'zombie') {
        entity.leftArm.rotation.x = THREE.MathUtils.lerp(entity.leftArm.rotation.x, 0, delta * 8);
        entity.rightArm.rotation.x = THREE.MathUtils.lerp(entity.rightArm.rotation.x, 0, delta * 8);
      }
    }
  }

  // Dropped item rotation and bobbing
  if (entity.data.name === 'item' && entity.head) {
    entity.head.rotation.y += delta * 2;
    entity.head.position.y = 0.25 + Math.sin(Date.now() * 0.004) * 0.08;
  }
}
