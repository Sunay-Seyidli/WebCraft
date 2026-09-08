import * as THREE from 'three';
import { BlockType } from '../types';

export type TextureMode = 'vanilla' | 'realistic' | 'faithful';

// Helper to generate crisp or HD textures for Minecraft blocks
export function createPixelTexture(
  size: number,
  drawFn: (ctx: CanvasRenderingContext2D, s: number) => void
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    ctx.imageSmoothingEnabled = size >= 64;
    drawFn(ctx, size);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = size >= 64 ? THREE.LinearFilter : THREE.NearestFilter;
  texture.minFilter = size >= 64 ? THREE.LinearMipmapLinearFilter : THREE.NearestFilter;
  texture.generateMipmaps = true;
  return texture;
}

export const blockTextures: Record<
  BlockType,
  THREE.CanvasTexture | { top: THREE.CanvasTexture; side: THREE.CanvasTexture; bottom: THREE.CanvasTexture }
> = {} as any;

let currentLoadedMode: TextureMode | null = null;

export function initTextures(mode: TextureMode = 'realistic') {
  if (currentLoadedMode === mode && Object.keys(blockTextures).length > 0) return;
  currentLoadedMode = mode;

  const size = mode === 'realistic' ? 64 : mode === 'faithful' ? 32 : 16;
  const isHD = mode === 'realistic';

  // 1. Grass Block
  const grassTop = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = isHD ? '#417d29' : '#55a038';
    ctx.fillRect(0, 0, s, s);
    const dots = isHD ? 280 : 35;
    for (let i = 0; i < dots; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? (isHD ? '#4c8f30' : '#63b242') : (isHD ? '#356920' : '#478c2d');
      const w = isHD ? 2 : 1;
      ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), w, isHD ? 4 : 1);
    }
  });

  const dirtTex = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = isHD ? '#704c31' : '#866043';
    ctx.fillRect(0, 0, s, s);
    const dots = isHD ? 350 : 45;
    for (let i = 0; i < dots; i++) {
      const v = Math.random();
      ctx.fillStyle = v > 0.6 ? '#855c3c' : v > 0.3 ? '#5c3e27' : '#482f1b';
      const w = isHD ? 2 : 1;
      ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), w, w);
    }
  });

  const grassSide = createPixelTexture(size, (ctx, s) => {
    // Dirt base
    ctx.fillStyle = isHD ? '#704c31' : '#866043';
    ctx.fillRect(0, 0, s, s);
    const dots = isHD ? 300 : 40;
    for (let i = 0; i < dots; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#5c3e27' : '#855c3c';
      ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), isHD ? 2 : 1, isHD ? 2 : 1);
    }
    // Grass overhang
    const topH = Math.floor(s * 0.28);
    ctx.fillStyle = isHD ? '#417d29' : '#55a038';
    ctx.fillRect(0, 0, s, topH);
    // Blades hanging down
    const step = isHD ? 4 : 2;
    for (let x = 0; x < s; x += step) {
      const drip = Math.floor(Math.random() * (topH * 0.8));
      ctx.fillRect(x, topH, step, drip);
    }
  });

  blockTextures.grass = { top: grassTop, side: grassSide, bottom: dirtTex };
  blockTextures.dirt = dirtTex;

  // 2. Stone
  blockTextures.stone = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = isHD ? '#6b6b6b' : '#737373';
    ctx.fillRect(0, 0, s, s);
    const count = isHD ? 400 : 40;
    for (let i = 0; i < count; i++) {
      const v = Math.random();
      ctx.fillStyle = v > 0.6 ? '#808080' : v > 0.3 ? '#575757' : '#454545';
      const sz = isHD ? Math.floor(Math.random() * 3) + 1 : 1;
      ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), sz, sz);
    }
    if (isHD) {
      // Natural stone fracture veins
      ctx.strokeStyle = '#404040';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(s * 0.2, s * 0.3);
      ctx.lineTo(s * 0.5, s * 0.6);
      ctx.lineTo(s * 0.8, s * 0.5);
      ctx.stroke();
    }
  });

  // 3. Cobblestone
  blockTextures.cobblestone = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = isHD ? '#545454' : '#595959';
    ctx.fillRect(0, 0, s, s);
    const grid = isHD ? 16 : 4;
    // Mortar / shadow lines
    ctx.fillStyle = '#2b2b2b';
    for (let x = 0; x < s; x += grid) {
      ctx.fillRect(x, 0, isHD ? 2 : 1, s);
    }
    for (let y = 0; y < s; y += grid) {
      ctx.fillRect(0, y, s, isHD ? 2 : 1);
    }
    const count = isHD ? 350 : 40;
    for (let i = 0; i < count; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#707070' : '#3d3d3d';
      ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), isHD ? 2 : 1, isHD ? 2 : 1);
    }
  });

  // 4. Oak Planks
  blockTextures.oak_planks = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = isHD ? '#bc9355' : '#c49a5b';
    ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = '#8f682f';
    const plankH = Math.floor(s / 4);
    for (let y = 0; y < s; y += plankH) {
      ctx.fillRect(0, y, s, isHD ? 2 : 1);
    }
    // Wood grain lines
    ctx.fillStyle = isHD ? 'rgba(120, 85, 35, 0.4)' : '#a37c3c';
    for (let i = 0; i < (isHD ? 20 : 6); i++) {
      ctx.fillRect(0, Math.floor(Math.random() * s), s, 1);
    }
    // Vertical seams
    ctx.fillStyle = '#6b4b1e';
    ctx.fillRect(Math.floor(s * 0.25), 0, isHD ? 2 : 1, plankH);
    ctx.fillRect(Math.floor(s * 0.75), plankH, isHD ? 2 : 1, plankH);
    ctx.fillRect(Math.floor(s * 0.4), plankH * 2, isHD ? 2 : 1, plankH);
    ctx.fillRect(Math.floor(s * 0.85), plankH * 3, isHD ? 2 : 1, plankH);
  });

  // 5. Oak Log
  const logSide = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = '#543b1c';
    ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = '#33210d';
    const barkStep = isHD ? 4 : 3;
    for (let x = 0; x < s; x += barkStep) {
      ctx.fillRect(x, 0, isHD ? 2 : 1, s);
    }
    ctx.fillStyle = '#6e4f29';
    for (let i = 0; i < (isHD ? 40 : 10); i++) {
      ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), 2, isHD ? 6 : 2);
    }
  });

  const logTop = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = '#b08b52';
    ctx.fillRect(0, 0, s, s);
    ctx.strokeStyle = '#75582f';
    ctx.lineWidth = isHD ? 2 : 1;
    ctx.strokeRect(s * 0.15, s * 0.15, s * 0.7, s * 0.7);
    ctx.strokeRect(s * 0.32, s * 0.32, s * 0.36, s * 0.36);
  });
  blockTextures.oak_log = { top: logTop, side: logSide, bottom: logTop };

  // 6. Oak Leaves
  blockTextures.oak_leaves = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = isHD ? '#2e5416' : '#375e1d';
    ctx.fillRect(0, 0, s, s);
    const count = isHD ? 350 : 50;
    for (let i = 0; i < count; i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#407521' : '#1f3b0e';
      ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), isHD ? 2 : 1, isHD ? 2 : 1);
    }
  });

  // 7. Bricks
  blockTextures.bricks = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = '#9e4a38';
    ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = '#d1c7be';
    const bH = Math.floor(s / 4);
    for (let y = 0; y < s; y += bH) {
      ctx.fillRect(0, y, s, isHD ? 2 : 1);
    }
    ctx.fillRect(Math.floor(s * 0.45), 0, isHD ? 2 : 1, bH);
    ctx.fillRect(Math.floor(s * 0.15), bH, isHD ? 2 : 1, bH);
    ctx.fillRect(Math.floor(s * 0.65), bH * 2, isHD ? 2 : 1, bH);
    ctx.fillRect(Math.floor(s * 0.3), bH * 3, isHD ? 2 : 1, bH);
  });

  // 8. Glass
  blockTextures.glass = createPixelTexture(size, (ctx, s) => {
    ctx.clearRect(0, 0, s, s);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = isHD ? 2 : 1;
    ctx.strokeRect(0, 0, s, s);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.fillRect(Math.floor(s * 0.25), Math.floor(s * 0.25), isHD ? 4 : 1, isHD ? 4 : 1);
    ctx.fillRect(Math.floor(s * 0.7), Math.floor(s * 0.7), isHD ? 4 : 1, isHD ? 4 : 1);
  });

  // 9. Water
  blockTextures.water = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = '#60a5fa';
    for (let i = 0; i < (isHD ? 50 : 15); i++) {
      ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), isHD ? 4 : 2, 1);
    }
  });

  // 10. Bedrock
  blockTextures.bedrock = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = '#222222';
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (isHD ? 350 : 60); i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#111111' : '#3d3d3d';
      ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), isHD ? 2 : 1, isHD ? 2 : 1);
    }
  });

  // 11. Sand
  blockTextures.sand = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = '#ded29d';
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (isHD ? 300 : 40); i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#ccbf8c' : '#ede2b0';
      ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), isHD ? 2 : 1, isHD ? 2 : 1);
    }
  });

  // 12. Diamond Ore
  blockTextures.diamond_ore = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = isHD ? '#6b6b6b' : '#737373';
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (isHD ? 300 : 35); i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#555555' : '#858585';
      ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), isHD ? 2 : 1, isHD ? 2 : 1);
    }
    // Crystal clusters
    ctx.fillStyle = '#38bdf8';
    const cSize = isHD ? 6 : 2;
    ctx.fillRect(Math.floor(s * 0.2), Math.floor(s * 0.25), cSize, cSize);
    ctx.fillRect(Math.floor(s * 0.65), Math.floor(s * 0.15), cSize, cSize);
    ctx.fillRect(Math.floor(s * 0.45), Math.floor(s * 0.7), cSize, cSize);
    ctx.fillRect(Math.floor(s * 0.8), Math.floor(s * 0.8), isHD ? 4 : 1, isHD ? 4 : 1);
    ctx.fillStyle = '#bae6fd';
    ctx.fillRect(Math.floor(s * 0.2) + 1, Math.floor(s * 0.25) + 1, isHD ? 2 : 1, isHD ? 2 : 1);
  });

  // 13. Obsidian
  blockTextures.obsidian = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = '#120b1f';
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (isHD ? 250 : 30); i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#24123b' : '#3c1d63';
      ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), isHD ? 4 : 2, isHD ? 4 : 2);
    }
  });

  // 14. Gold Ore
  blockTextures.gold_ore = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = isHD ? '#6b6b6b' : '#737373';
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (isHD ? 300 : 35); i++) {
      ctx.fillStyle = Math.random() > 0.5 ? '#555555' : '#858585';
      ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), isHD ? 2 : 1, isHD ? 2 : 1);
    }
    ctx.fillStyle = '#facc15';
    const gSize = isHD ? 6 : 2;
    ctx.fillRect(Math.floor(s * 0.3), Math.floor(s * 0.35), gSize, gSize);
    ctx.fillRect(Math.floor(s * 0.7), Math.floor(s * 0.55), gSize, gSize);
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(Math.floor(s * 0.3) + 1, Math.floor(s * 0.35) + 1, isHD ? 2 : 1, isHD ? 2 : 1);
  });

  // 15. Lava
  blockTextures.lava = createPixelTexture(size, (ctx, s) => {
    ctx.fillStyle = '#c2410c';
    ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = '#f97316';
    for (let i = 0; i < (isHD ? 200 : 25); i++) {
      ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), isHD ? 6 : 2, isHD ? 6 : 2);
    }
    ctx.fillStyle = '#facc15';
    for (let i = 0; i < (isHD ? 60 : 10); i++) {
      ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), isHD ? 3 : 1, isHD ? 3 : 1);
    }
  });
}
