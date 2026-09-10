import * as THREE from 'three';
import { BlockType } from '../types';

export type TextureMode = 'vanilla' | 'realistic' | 'faithful';

const textureCache = new Map<string, THREE.CanvasTexture>();
const blockFaceCache = new Map<string, any>();

/**
 * Creates a crisp pixel-art canvas texture for Three.js
 */
export function createPixelTexture(
  size: number,
  drawFn: (ctx: CanvasRenderingContext2D, s: number) => void
): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    ctx.imageSmoothingEnabled = false;
    drawFn(ctx, size);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  return texture;
}

/**
 * Generates high-quality procedural pixel textures matching Minecraft 1.21.4 color palettes
 */
function generateProceduralTexture(type: string): THREE.CanvasTexture {
  const size = 16;
  if (textureCache.has(type)) return textureCache.get(type)!;

  const tex = createPixelTexture(size, (ctx, s) => {
    // 1. Grass Top (Lush Vibrant Minecraft Plains Green)
    if (type === 'grass_top') {
      ctx.fillStyle = '#55ab2f';
      ctx.fillRect(0, 0, s, s);
      const greens = ['#62be36', '#489c25', '#3d861e', '#6ed140'];
      for (let i = 0; i < 65; i++) {
        ctx.fillStyle = greens[Math.floor(Math.random() * greens.length)];
        ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), 1, 1);
      }
    }
    // 2. Grass Side (Dirt base with lush green overhang)
    else if (type === 'grass_side') {
      // Dirt base
      ctx.fillStyle = '#866043';
      ctx.fillRect(0, 0, s, s);
      const dirtColors = ['#735136', '#9c7252', '#5e4028'];
      for (let i = 0; i < 40; i++) {
        ctx.fillStyle = dirtColors[Math.floor(Math.random() * dirtColors.length)];
        ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), 1, 1);
      }
      // Top overhang green grass trim
      ctx.fillStyle = '#55ab2f';
      ctx.fillRect(0, 0, s, 3);
      for (let x = 0; x < s; x++) {
        const overhang = Math.random() > 0.4 ? 4 : Math.random() > 0.7 ? 5 : 3;
        ctx.fillRect(x, 0, 1, overhang);
      }
    }
    // 3. Dirt
    else if (type === 'dirt' || type.includes('mud') || type.includes('path') || type.includes('farmland')) {
      ctx.fillStyle = '#866043';
      ctx.fillRect(0, 0, s, s);
      const dirtColors = ['#735136', '#9c7252', '#5c3e26', '#69482d'];
      for (let i = 0; i < 60; i++) {
        ctx.fillStyle = dirtColors[Math.floor(Math.random() * dirtColors.length)];
        ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), 1, 1);
      }
    }
    // 4. Leaves (Vibrant Lush Green foliage)
    else if (type.includes('leaves') || type.includes('vine') || type.includes('bush') || type.includes('sapling')) {
      if (type.includes('cherry')) {
        ctx.fillStyle = '#ffb7c5';
        ctx.fillRect(0, 0, s, s);
        const cherryColors = ['#f79bb0', '#e08298', '#ffd6e0'];
        for (let i = 0; i < 50; i++) {
          ctx.fillStyle = cherryColors[Math.floor(Math.random() * cherryColors.length)];
          ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), 1, 1);
        }
      } else {
        ctx.fillStyle = '#388e3c';
        ctx.fillRect(0, 0, s, s);
        const leafColors = ['#2e7d32', '#4caf50', '#1b5e20', '#43a047'];
        for (let i = 0; i < 70; i++) {
          ctx.fillStyle = leafColors[Math.floor(Math.random() * leafColors.length)];
          ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), 1, 1);
        }
      }
    }
    // 5. Stone / Cobblestone
    else if (type === 'stone' || type === 'cobblestone' || type.includes('andesite') || type.includes('tuff')) {
      ctx.fillStyle = type === 'cobblestone' ? '#686868' : '#7d7d7d';
      ctx.fillRect(0, 0, s, s);
      const stoneColors = ['#616161', '#8e8e8e', '#525252', '#a1a1a1'];
      for (let i = 0; i < 60; i++) {
        ctx.fillStyle = stoneColors[Math.floor(Math.random() * stoneColors.length)];
        ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), 1, 1);
      }
      if (type === 'cobblestone') {
        ctx.strokeStyle = '#424242';
        ctx.strokeRect(1, 1, 6, 6);
        ctx.strokeRect(8, 2, 7, 5);
        ctx.strokeRect(2, 9, 7, 6);
      }
    }
    // 6. Deepslate
    else if (type.includes('deepslate')) {
      ctx.fillStyle = '#36363c';
      ctx.fillRect(0, 0, s, s);
      const dsColors = ['#29292e', '#45454d', '#1f1f24'];
      for (let i = 0; i < 60; i++) {
        ctx.fillStyle = dsColors[Math.floor(Math.random() * dsColors.length)];
        ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), 1, 1);
      }
    }
    // 7. Planks (Wood)
    else if (type.includes('plank') || type.includes('slab') || type.includes('stair') || type.includes('fence')) {
      let baseColor = '#b08b52'; // Oak default
      if (type.includes('spruce')) baseColor = '#6d4c33';
      else if (type.includes('birch')) baseColor = '#d7c297';
      else if (type.includes('jungle')) baseColor = '#a07252';
      else if (type.includes('acacia')) baseColor = '#b25a32';
      else if (type.includes('dark_oak')) baseColor = '#3f2918';
      else if (type.includes('crimson')) baseColor = '#682d3e';
      else if (type.includes('warped')) baseColor = '#2b6867';
      else if (type.includes('cherry')) baseColor = '#e0a39e';

      ctx.fillStyle = baseColor;
      ctx.fillRect(0, 0, s, s);
      ctx.fillStyle = 'rgba(0,0,0,0.18)';
      ctx.fillRect(0, 3, s, 1);
      ctx.fillRect(0, 7, s, 1);
      ctx.fillRect(0, 11, s, 1);
      ctx.fillRect(0, 15, s, 1);
    }
    // 8. Logs (Side)
    else if (type.endsWith('_log') || type.endsWith('_stem') || type.endsWith('_wood')) {
      ctx.fillStyle = '#6e4f29';
      ctx.fillRect(0, 0, s, s);
      ctx.fillStyle = '#4f381c';
      for (let x = 0; x < s; x += 3) {
        ctx.fillRect(x, 0, 1, s);
      }
      ctx.fillStyle = '#8a6538';
      for (let i = 0; i < 20; i++) {
        ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), 1, 2);
      }
    }
    // 9. Log Top
    else if (type.endsWith('_log_top')) {
      ctx.fillStyle = '#b08b52';
      ctx.fillRect(0, 0, s, s);
      ctx.strokeStyle = '#6e4f29';
      ctx.lineWidth = 1;
      ctx.strokeRect(2, 2, 12, 12);
      ctx.strokeRect(5, 5, 6, 6);
    }
    // 10. Ores
    else if (type.includes('ore')) {
      ctx.fillStyle = type.includes('deepslate') ? '#36363c' : '#7d7d7d';
      ctx.fillRect(0, 0, s, s);
      for (let i = 0; i < 40; i++) {
        ctx.fillStyle = type.includes('deepslate') ? '#252529' : '#616161';
        ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), 1, 1);
      }
      // Crystals
      let gemColor = '#38bdf8'; // Diamond
      if (type.includes('coal')) gemColor = '#222222';
      else if (type.includes('iron')) gemColor = '#d1a384';
      else if (type.includes('gold')) gemColor = '#facc15';
      else if (type.includes('copper')) gemColor = '#e07a5f';
      else if (type.includes('emerald')) gemColor = '#22c55e';
      else if (type.includes('lapis')) gemColor = '#2563eb';
      else if (type.includes('redstone')) gemColor = '#ef4444';

      ctx.fillStyle = gemColor;
      ctx.fillRect(3, 4, 3, 3);
      ctx.fillRect(10, 3, 3, 2);
      ctx.fillRect(6, 10, 3, 3);
      ctx.fillRect(11, 11, 2, 3);
    }
    // 11. Crafting Table Top
    else if (type === 'crafting_table_top') {
      ctx.fillStyle = '#9c6e39';
      ctx.fillRect(0, 0, s, s);
      ctx.fillStyle = '#65421d';
      ctx.fillRect(3, 3, 10, 10);
      ctx.strokeStyle = '#c49a5b';
      ctx.strokeRect(3, 3, 10, 10);
    }
    // 12. Crafting Table Side
    else if (type === 'crafting_table_side') {
      ctx.fillStyle = '#9c6e39';
      ctx.fillRect(0, 0, s, s);
      ctx.fillStyle = '#4a2f13';
      ctx.fillRect(2, 5, 12, 8);
    }
    // 13. Furnace Front
    else if (type === 'furnace_front') {
      ctx.fillStyle = '#686868';
      ctx.fillRect(0, 0, s, s);
      ctx.fillStyle = '#1c1c1c';
      ctx.fillRect(3, 6, 10, 8);
      ctx.fillStyle = '#ea580c';
      ctx.fillRect(5, 9, 6, 3);
    }
    // 14. Bookshelf Side
    else if (type === 'bookshelf_side') {
      ctx.fillStyle = '#bc9355';
      ctx.fillRect(0, 0, s, s);
      ctx.fillStyle = '#2b1d0c';
      ctx.fillRect(2, 2, 12, 5);
      ctx.fillRect(2, 9, 12, 5);
      const bookColors = ['#dc2626', '#2563eb', '#16a34a', '#ca8a04', '#9333ea'];
      for (let i = 0; i < 5; i++) {
        ctx.fillStyle = bookColors[i % bookColors.length];
        ctx.fillRect(3 + i * 2, 3, 2, 4);
        ctx.fillRect(3 + i * 2, 10, 2, 4);
      }
    }
    // 15. TNT Side
    else if (type === 'tnt_side') {
      ctx.fillStyle = '#dc2626';
      ctx.fillRect(0, 0, s, s);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 5, s, 6);
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 5px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('TNT', 8, 8);
    }
    // 16. Water / Lava / Obsidian / Bedrock / Glass / Bricks / Sand / Wool
    else if (type.includes('water')) {
      ctx.fillStyle = '#2563eb';
      ctx.fillRect(0, 0, s, s);
      ctx.fillStyle = '#60a5fa';
      for (let i = 0; i < 15; i++) {
        ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), 2, 1);
      }
    } else if (type.includes('lava')) {
      ctx.fillStyle = '#c2410c';
      ctx.fillRect(0, 0, s, s);
      ctx.fillStyle = '#f97316';
      for (let i = 0; i < 20; i++) {
        ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), 2, 2);
      }
    } else if (type.includes('obsidian')) {
      ctx.fillStyle = '#120b1f';
      ctx.fillRect(0, 0, s, s);
      ctx.fillStyle = '#3c1d63';
      for (let i = 0; i < 25; i++) {
        ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), 2, 2);
      }
    } else if (type.includes('bedrock')) {
      ctx.fillStyle = '#222222';
      ctx.fillRect(0, 0, s, s);
      ctx.fillStyle = '#444444';
      for (let i = 0; i < 40; i++) {
        ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), 1, 1);
      }
    } else if (type.includes('glass')) {
      ctx.clearRect(0, 0, s, s);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.strokeRect(0, 0, s, s);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fillRect(3, 3, 2, 2);
      ctx.fillRect(11, 11, 2, 2);
    } else if (type.includes('brick')) {
      ctx.fillStyle = '#9e4a38';
      ctx.fillRect(0, 0, s, s);
      ctx.fillStyle = '#d1c7be';
      ctx.fillRect(0, 3, s, 1);
      ctx.fillRect(0, 7, s, 1);
      ctx.fillRect(0, 11, s, 1);
      ctx.fillRect(0, 15, s, 1);
      ctx.fillRect(8, 0, 1, 3);
      ctx.fillRect(4, 4, 1, 3);
      ctx.fillRect(12, 8, 1, 3);
    } else if (type.includes('sand')) {
      ctx.fillStyle = '#ded29d';
      ctx.fillRect(0, 0, s, s);
      ctx.fillStyle = '#ccbf8c';
      for (let i = 0; i < 35; i++) {
        ctx.fillRect(Math.floor(Math.random() * s), Math.floor(Math.random() * s), 1, 1);
      }
    } else {
      // Dynamic General Fallback color based on block name string
      let color = '#7d7d7d';
      if (type.includes('grass')) color = '#55ab2f';
      else if (type.includes('dirt')) color = '#866043';
      else if (type.includes('wood') || type.includes('log') || type.includes('plank')) color = '#b08b52';
      else if (type.includes('nether') || type.includes('crimson')) color = '#6b1d1d';
      else if (type.includes('quartz') || type.includes('diorite') || type.includes('snow')) color = '#e5e7eb';
      else if (type.includes('gold') || type.includes('glowstone') || type.includes('yellow')) color = '#facc15';
      else if (type.includes('iron') || type.includes('gray')) color = '#9ca3af';
      else if (type.includes('diamond') || type.includes('cyan') || type.includes('blue')) color = '#38bdf8';

      ctx.fillStyle = color;
      ctx.fillRect(0, 0, s, s);
      ctx.fillStyle = 'rgba(0,0,0,0.12)';
      ctx.fillRect(0, 0, s, 1);
      ctx.fillRect(0, 0, 1, s);
    }
  });

  textureCache.set(type, tex);
  return tex;
}

export function getBlockTextureObj(rawType: string): any {
  const type = rawType.toLowerCase().replace('minecraft:', '').trim();

  if (blockFaceCache.has(type)) return blockFaceCache.get(type);

  let result: any = null;

  // Grass Block
  if (type === 'grass' || type === 'grass_block') {
    const top = generateProceduralTexture('grass_top');
    const side = generateProceduralTexture('grass_side');
    const bottom = generateProceduralTexture('dirt');
    result = { top, side, bottom };
  }
  // Logs & Stems
  else if (type.endsWith('_log') || type.endsWith('_stem') || type.endsWith('_wood')) {
    const top = generateProceduralTexture('oak_log_top');
    const side = generateProceduralTexture(type);
    result = { top, side, bottom: top };
  }
  // Crafting Table
  else if (type === 'crafting_table') {
    const top = generateProceduralTexture('crafting_table_top');
    const side = generateProceduralTexture('crafting_table_side');
    const bottom = generateProceduralTexture('oak_planks');
    result = { top, side, bottom };
  }
  // Furnace
  else if (type === 'furnace') {
    const top = generateProceduralTexture('stone');
    const side = generateProceduralTexture('furnace_front');
    const bottom = generateProceduralTexture('stone');
    result = { top, side, bottom };
  }
  // Bookshelf
  else if (type === 'bookshelf') {
    const top = generateProceduralTexture('oak_planks');
    const side = generateProceduralTexture('bookshelf_side');
    result = { top, side, bottom: top };
  }
  // TNT
  else if (type === 'tnt') {
    const top = generateProceduralTexture('wool');
    const side = generateProceduralTexture('tnt_side');
    const bottom = generateProceduralTexture('wool');
    result = { top, side, bottom };
  }
  // All other single-texture blocks
  else {
    result = generateProceduralTexture(type);
  }

  blockFaceCache.set(type, result);
  return result;
}

// Proxy wrapper so any blockTextures['whatever'] resolves dynamically in code
export const blockTextures: Record<string, any> = new Proxy({}, {
  get(_target, prop: string) {
    if (typeof prop !== 'string') return generateProceduralTexture('stone');
    return getBlockTextureObj(prop);
  }
});

let currentLoadedMode: TextureMode | null = null;

export function initTextures(mode: TextureMode = 'realistic') {
  currentLoadedMode = mode;
  // Pre-prime common block textures
  const common = [
    'stone', 'dirt', 'grass', 'grass_block', 'cobblestone', 'oak_planks',
    'oak_log', 'oak_leaves', 'glass', 'water', 'bedrock', 'sand',
    'diamond_ore', 'gold_ore', 'iron_ore', 'coal_ore', 'obsidian',
    'lava', 'crafting_table', 'furnace', 'wool', 'bookshelf', 'tnt',
    'netherrack', 'glowstone', 'deepslate', 'granite', 'diorite', 'andesite'
  ];
  for (const b of common) {
    getBlockTextureObj(b);
  }
}

/**
 * Maps Minecraft Java Edition block names from Mineflayer packets directly to clean block IDs
 */
export function mapMinecraftBlock(rawName: string): BlockType {
  if (!rawName) return 'stone' as BlockType;
  let name = rawName.toLowerCase().replace('minecraft:', '').trim();

  // Strip state suffixes if present (e.g. grass_block[snowy=false] -> grass_block)
  if (name.includes('[')) {
    name = name.split('[')[0];
  }

  if (name === 'grass') return 'grass_block' as BlockType;
  return name as BlockType;
}
