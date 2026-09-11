// Procedural 16x16 Pixel Art Texture & Icon Generator for Minecraft 1.21.4
import * as THREE from 'three';

const textureCache = new Map<string, string>();
const threeTextureCache = new Map<string, THREE.CanvasTexture>();

function create16x16Canvas(): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext('2d')!;
  ctx.imageSmoothingEnabled = false;
  return { canvas, ctx };
}

// Color palettes for blocks and items
export const PALETTES: Record<string, string[]> = {
  grass: ['#597d28', '#4c6c22', '#6b9330', '#3e581b', '#79a536'],
  dirt: ['#866043', '#573d26', '#725037', '#9c704f', '#46301e'],
  stone: ['#737373', '#616161', '#828282', '#525252', '#8f8f8f'],
  cobblestone: ['#505050', '#696969', '#3f3f3f', '#7e7e7e', '#2f2f2f'],
  deepslate: ['#38383a', '#262628', '#49494c', '#1f1f21', '#545458'],
  sand: ['#dbd3a2', '#c2b683', '#e8e0b5', '#a89c6b', '#f2ebca'],
  oak_planks: ['#a2824e', '#896c3d', '#b7955b', '#71582f', '#c8a467'],
  spruce_planks: ['#684e32', '#533d26', '#7b5d3e', '#412f1c', '#896947'],
  birch_planks: ['#c4b581', '#a99a6b', '#d3c490', '#8e8055', '#e0d19f'],
  cherry_planks: ['#e4a8aa', '#c98a8c', '#f5bdbe', '#ae7173', '#ffd4d5'],
  oak_log: ['#6d5533', '#574226', '#7c613c', '#46341d', '#8a6e43'],
  oak_leaves: ['#335a1a', '#284714', '#417122', '#1f360f', '#4d8329'],
  crafting_table: ['#835c3b', '#624227', '#a1734a', '#472d19', '#bd8757'],
  bedrock: ['#282828', '#141414', '#3c3c3c', '#080808', '#4c4c4c'],
  diamond_ore: ['#737373', '#616161', '#4dedf6', '#2ecbd4', '#8ffffb'],
  iron_ore: ['#737373', '#616161', '#d8af93', '#b88d71', '#ecc7ae'],
  gold_ore: ['#737373', '#616161', '#fcee4b', '#d8cb2c', '#fff57c'],
  coal_ore: ['#737373', '#616161', '#242424', '#121212', '#383838'],
  emerald_ore: ['#737373', '#616161', '#17dd62', '#0cb84e', '#53f38d'],
  redstone_ore: ['#737373', '#616161', '#ff1d1d', '#cc0505', '#ff5959'],
  lapis_ore: ['#737373', '#616161', '#1e48cf', '#103099', '#426cf5'],
  netherrack: ['#6b2222', '#521919', '#7f2a2a', '#3d1212', '#913232'],
  obsidian: ['#120c1f', '#0a0612', '#1d1430', '#040208', '#271c3f'],
  glass: ['#ffffff', '#e0f7fa', '#80deea'],
  glowstone: ['#cc9f47', '#a37a2e', '#e3ba64', '#f5d689', '#805d1d'],
  diamond: ['#4dedf6', '#2ecbd4', '#8ffffb', '#1a9ba3', '#c2ffff'],
  emerald: ['#17dd62', '#0cb84e', '#53f38d', '#078035', '#95f9ba'],
  gold_ingot: ['#fcee4b', '#d8cb2c', '#fff57c', '#a89d18', '#ffffb0'],
  iron_ingot: ['#e2e2e2', '#bcbcbc', '#ffffff', '#939393', '#f0f0f0'],
  copper_ingot: ['#c15a37', '#9f4625', '#e0764e', '#803419', '#f3946a'],
  netherite_ingot: ['#443a3b', '#31292a', '#594d4e', '#211b1c', '#6d5f60'],
  tuff: ['#41413c', '#33332f', '#4f4f49', '#272724', '#5c5c56'],
  copper_bulb: ['#bf643c', '#8a4325', '#f3895a', '#5f2b14', '#ffe5b4'],
};

// Seedable noise generator for pixel art textures
function pseudoNoise(x: number, y: number, seed: number = 42): number {
  const n = Math.sin(x * 12.9898 + y * 78.233 + seed * 43758.5453) * 43758.5453;
  return n - Math.floor(n);
}

export function drawItemToCanvas(ctx: CanvasRenderingContext2D, id: string): void {
  const lowerId = (id || 'stone').toLowerCase().replace('minecraft:', '').trim();

  // 1. 1.21.4 Tricky Trials Specific Items & Weapons
  if (lowerId.includes('mace')) {
    drawMace(ctx);
  } else if (lowerId.includes('wind_charge') || lowerId === 'wind') {
    drawWindCharge(ctx);
  } else if (lowerId.includes('breeze_rod')) {
    drawBreezeRod(ctx);
  } else if (lowerId.includes('heavy_core')) {
    drawHeavyCore(ctx);
  } else if (lowerId.includes('trial_key')) {
    drawTrialKey(ctx, lowerId.includes('ominous'));
  } else if (lowerId.includes('crafter')) {
    drawCrafter(ctx);
  } else if (lowerId.includes('copper_bulb')) {
    drawCopperBulb(ctx);
  } else if (lowerId.includes('copper_grate')) {
    drawCopperGrate(ctx);
  } else if (lowerId.includes('tuff_brick') || lowerId.includes('tuff')) {
    drawTuffBricks(ctx);
  }
  // 2. Interactive & Combat Items
  else if (lowerId.includes('ender_pearl') || lowerId.includes('pearl')) {
    drawEnderPearl(ctx);
  } else if (lowerId.includes('eye_of_ender')) {
    drawEyeOfEnder(ctx);
  } else if (lowerId.includes('totem')) {
    drawTotemOfUndying(ctx);
  } else if (lowerId.includes('trident')) {
    drawTrident(ctx);
  } else if (lowerId.includes('shield')) {
    drawShield(ctx);
  } else if (lowerId.includes('crossbow')) {
    drawCrossbow(ctx);
  } else if (lowerId.includes('bow')) {
    drawBow(ctx);
  } else if (lowerId.includes('arrow')) {
    drawArrow(ctx, lowerId.includes('spectral'));
  }
  // 3. Armor Pieces
  else if (lowerId.includes('helmet') || lowerId.includes('cap')) {
    drawArmorPiece(ctx, 'helmet', getMaterialColor(lowerId));
  } else if (lowerId.includes('chestplate') || lowerId.includes('tunic')) {
    drawArmorPiece(ctx, 'chestplate', getMaterialColor(lowerId));
  } else if (lowerId.includes('leggings') || lowerId.includes('pants')) {
    drawArmorPiece(ctx, 'leggings', getMaterialColor(lowerId));
  } else if (lowerId.includes('boots')) {
    drawArmorPiece(ctx, 'boots', getMaterialColor(lowerId));
  }
  // 4. Tools & Weapons
  else if (lowerId.includes('sword')) {
    drawSword(ctx, getMaterialColor(lowerId));
  } else if (lowerId.includes('pickaxe')) {
    drawPickaxe(ctx, getMaterialColor(lowerId));
  } else if (lowerId.includes('axe')) {
    drawAxe(ctx, getMaterialColor(lowerId));
  } else if (lowerId.includes('shovel') || lowerId.includes('spade')) {
    drawShovel(ctx, getMaterialColor(lowerId));
  } else if (lowerId.includes('hoe')) {
    drawHoe(ctx, getMaterialColor(lowerId));
  }
  // 5. Food
  else if (lowerId.includes('apple')) {
    drawApple(ctx, lowerId.includes('gold') || lowerId.includes('enchanted') ? '#fcee4b' : '#e62e2e');
  } else if (lowerId.includes('bread')) {
    drawBread(ctx);
  } else if (lowerId.includes('beef') || lowerId.includes('steak') || lowerId.includes('porkchop') || lowerId.includes('mutton')) {
    drawMeat(ctx, lowerId.includes('cooked') ? '#873d23' : '#ba4334');
  } else if (lowerId.includes('carrot')) {
    drawCarrot(ctx, lowerId.includes('gold') ? '#fcee4b' : '#f57c00');
  } else if (lowerId.includes('potato')) {
    drawPotato(ctx, lowerId.includes('baked') ? '#b8860b' : '#d2b48c');
  } else if (lowerId.includes('cookie')) {
    drawCookie(ctx);
  }
  // 6. Minerals & Materials
  else if (lowerId.includes('netherite_ingot')) {
    drawIngot(ctx, '#443a3b');
  } else if (lowerId.includes('gold_ingot') || lowerId.includes('golden_ingot')) {
    drawIngot(ctx, '#fcee4b');
  } else if (lowerId.includes('copper_ingot')) {
    drawIngot(ctx, '#c15a37');
  } else if (lowerId.includes('iron_ingot') || lowerId.includes('ingot')) {
    drawIngot(ctx, '#e2e2e2');
  } else if (lowerId.includes('diamond')) {
    drawGem(ctx, '#4dedf6');
  } else if (lowerId.includes('emerald')) {
    drawGem(ctx, '#17dd62');
  } else if (lowerId.includes('amethyst')) {
    drawGem(ctx, '#c084fc');
  } else if (lowerId.includes('redstone')) {
    drawRedstoneDust(ctx);
  } else if (lowerId.includes('lapis')) {
    drawGem(ctx, '#1e48cf');
  } else if (lowerId.includes('coal') || lowerId.includes('charcoal')) {
    drawCoal(ctx);
  }
  // 7. Buckets, Potions & Utilities
  else if (lowerId.includes('bucket')) {
    const liquid = lowerId.includes('water') ? '#3355ff' : lowerId.includes('lava') ? '#ff5500' : lowerId.includes('milk') ? '#ffffff' : null;
    drawBucket(ctx, liquid);
  } else if (lowerId.includes('potion')) {
    drawPotion(ctx, lowerId.includes('splash') ? '#ff2a8d' : lowerId.includes('healing') ? '#ff2222' : '#3355ff');
  } else if (lowerId.includes('book')) {
    drawBook(ctx, lowerId.includes('enchanted') ? '#9933ff' : '#8b4513');
  } else if (lowerId.includes('flint_and_steel')) {
    drawFlintAndSteel(ctx);
  } else if (lowerId.includes('compass')) {
    drawCompass(ctx);
  } else if (lowerId.includes('clock')) {
    drawClock(ctx);
  } else if (lowerId.includes('torch')) {
    drawTorch(ctx, lowerId.includes('soul') ? '#4dd0e1' : '#ff9800');
  } else if (lowerId.includes('lantern')) {
    drawLantern(ctx, lowerId.includes('soul') ? '#4dd0e1' : '#ffb300');
  }
  // 8. Blocks
  else if (lowerId.includes('crafting_table')) {
    drawCraftingTableTop(ctx);
  } else if (lowerId.includes('furnace') || lowerId.includes('smoker')) {
    drawFurnaceFront(ctx);
  } else if (lowerId.includes('chest')) {
    drawChestFront(ctx);
  } else if (lowerId.includes('bookshelf')) {
    drawBookshelf(ctx);
  } else if (lowerId.includes('tnt')) {
    drawTnt(ctx);
  } else if (lowerId.includes('obsidian')) {
    drawNoisePattern(ctx, PALETTES.obsidian);
  } else if (lowerId.includes('glowstone')) {
    drawNoisePattern(ctx, PALETTES.glowstone);
  } else if (lowerId.includes('bedrock')) {
    drawNoisePattern(ctx, PALETTES.bedrock);
  } else if (lowerId.includes('planks') || lowerId.includes('wood')) {
    drawPlanksPattern(ctx, lowerId.includes('cherry') ? PALETTES.cherry_planks : PALETTES.oak_planks);
  } else if (lowerId.includes('log')) {
    drawLogPattern(ctx, PALETTES.oak_log);
  } else if (lowerId.includes('leaves')) {
    drawLeavesPattern(ctx, PALETTES.oak_leaves);
  } else if (lowerId.includes('grass')) {
    drawGrassSidePattern(ctx);
  } else if (lowerId.includes('dirt')) {
    drawNoisePattern(ctx, PALETTES.dirt);
  } else if (lowerId.includes('sand')) {
    drawNoisePattern(ctx, PALETTES.sand);
  } else if (lowerId.includes('deepslate')) {
    drawNoisePattern(ctx, PALETTES.deepslate);
  } else if (lowerId.includes('stone') || lowerId.includes('cobble')) {
    drawNoisePattern(ctx, PALETTES.stone);
  } else if (lowerId.includes('ore')) {
    const gemColor = lowerId.includes('diamond') ? '#4dedf6' : lowerId.includes('gold') ? '#fcee4b' : lowerId.includes('iron') ? '#d8af93' : lowerId.includes('redstone') ? '#ff1d1d' : '#17dd62';
    drawOrePattern(ctx, PALETTES.stone, gemColor);
  } else if (lowerId.includes('glass')) {
    drawGlassPattern(ctx);
  } else {
    // Deterministic fallback for any other Minecraft item/block
    drawGenericItemOrBlock(ctx, lowerId);
  }
}

export function generateItemTextureUrl(id: string): string {
  if (textureCache.has(id)) return textureCache.get(id)!;

  const { canvas, ctx } = create16x16Canvas();
  drawItemToCanvas(ctx, id);

  const dataUrl = canvas.toDataURL();
  textureCache.set(id, dataUrl);
  return dataUrl;
}

export function generateThreeTexture(id: string): THREE.CanvasTexture {
  if (threeTextureCache.has(id)) return threeTextureCache.get(id)!;

  const { canvas, ctx } = create16x16Canvas();
  drawItemToCanvas(ctx, id);

  const threeTex = new THREE.CanvasTexture(canvas);
  threeTex.magFilter = THREE.NearestFilter;
  threeTex.minFilter = THREE.NearestFilter;
  threeTex.generateMipmaps = false;
  threeTex.needsUpdate = true;

  threeTextureCache.set(id, threeTex);
  return threeTex;
}

// ----------------------------------------------------------------------
// PIXEL ART DRAWING HELPERS
// ----------------------------------------------------------------------

function getMaterialColor(id: string): string {
  if (id.includes('diamond')) return '#4dedf6';
  if (id.includes('netherite')) return '#443a3b';
  if (id.includes('gold') || id.includes('golden')) return '#fcee4b';
  if (id.includes('iron')) return '#e2e2e2';
  if (id.includes('stone')) return '#737373';
  return '#8b5a2b'; // Wood
}

function drawSword(ctx: CanvasRenderingContext2D, color: string) {
  // Handle
  ctx.fillStyle = '#5c4033';
  ctx.fillRect(2, 13, 2, 2);
  ctx.fillRect(3, 12, 2, 2);

  // Crossguard
  ctx.fillStyle = '#3a2417';
  ctx.fillRect(4, 11, 2, 2);
  ctx.fillRect(2, 11, 2, 2);
  ctx.fillRect(5, 9, 2, 2);

  // Blade
  ctx.fillStyle = color;
  for (let i = 0; i < 7; i++) {
    ctx.fillRect(5 + i, 8 - i, 2, 2);
    ctx.fillRect(6 + i, 9 - i, 1, 1);
  }
  // Tip
  ctx.fillRect(12, 2, 2, 2);
}

function drawPickaxe(ctx: CanvasRenderingContext2D, color: string) {
  // Stick
  ctx.fillStyle = '#8b5a2b';
  for (let i = 0; i < 9; i++) {
    ctx.fillRect(2 + i, 13 - i, 1, 1);
    ctx.fillRect(3 + i, 14 - i, 1, 1);
  }

  // Pick head
  ctx.fillStyle = color;
  ctx.fillRect(7, 2, 7, 2);
  ctx.fillRect(12, 4, 2, 3);
  ctx.fillRect(6, 3, 2, 2);
  ctx.fillRect(4, 5, 2, 2);
  ctx.fillRect(3, 7, 2, 3);
}

function drawAxe(ctx: CanvasRenderingContext2D, color: string) {
  // Stick
  ctx.fillStyle = '#8b5a2b';
  for (let i = 0; i < 9; i++) {
    ctx.fillRect(2 + i, 13 - i, 1, 1);
  }
  // Axe head
  ctx.fillStyle = color;
  ctx.fillRect(7, 2, 5, 4);
  ctx.fillRect(6, 4, 3, 4);
  ctx.fillRect(11, 3, 3, 2);
}

function drawShovel(ctx: CanvasRenderingContext2D, color: string) {
  // Stick
  ctx.fillStyle = '#8b5a2b';
  for (let i = 0; i < 9; i++) {
    ctx.fillRect(2 + i, 13 - i, 1, 1);
  }
  // Shovel head
  ctx.fillStyle = color;
  ctx.fillRect(9, 3, 4, 4);
  ctx.fillRect(11, 2, 2, 2);
}

function drawHoe(ctx: CanvasRenderingContext2D, color: string) {
  // Stick
  ctx.fillStyle = '#8b5a2b';
  for (let i = 0; i < 9; i++) {
    ctx.fillRect(2 + i, 13 - i, 1, 1);
  }
  // Hoe head
  ctx.fillStyle = color;
  ctx.fillRect(8, 2, 6, 2);
  ctx.fillRect(12, 4, 2, 2);
}

// 1.21.4 Mace
function drawMace(ctx: CanvasRenderingContext2D) {
  // Breeze Rod Handle
  ctx.fillStyle = '#b2f5ea';
  ctx.fillRect(3, 12, 2, 2);
  ctx.fillRect(4, 11, 2, 2);
  ctx.fillRect(5, 10, 2, 2);
  ctx.fillRect(6, 9, 2, 2);
  ctx.fillStyle = '#319795';
  ctx.fillRect(3, 11, 1, 1);
  ctx.fillRect(5, 9, 1, 1);

  // Heavy Core Hammer Head
  ctx.fillStyle = '#262628';
  ctx.fillRect(6, 2, 8, 8);
  ctx.fillStyle = '#49494c';
  ctx.fillRect(7, 3, 6, 6);
  // Center Energy Core
  ctx.fillStyle = '#4dedf6';
  ctx.fillRect(9, 5, 2, 2);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(9, 5, 1, 1);
}

// 1.21.4 Wind Charge
function drawWindCharge(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#b2f5ea';
  ctx.fillRect(3, 3, 10, 10);
  ctx.fillStyle = '#319795';
  ctx.fillRect(4, 4, 8, 8);
  ctx.fillStyle = '#e6fffa';
  ctx.fillRect(6, 6, 4, 4);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(7, 7, 2, 2);
}

// 1.21.4 Breeze Rod
function drawBreezeRod(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#81e6d9';
  for (let i = 0; i < 12; i++) {
    ctx.fillRect(2 + i, 13 - i, 2, 2);
  }
  ctx.fillStyle = '#e6fffa';
  for (let i = 0; i < 10; i += 2) {
    ctx.fillRect(3 + i, 13 - i, 1, 1);
  }
}

// 1.21.4 Heavy Core
function drawHeavyCore(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#1f1f21';
  ctx.fillRect(2, 2, 12, 12);
  ctx.fillStyle = '#49494c';
  ctx.fillRect(4, 4, 8, 8);
  ctx.fillStyle = '#4dedf6';
  ctx.fillRect(6, 6, 4, 4);
  ctx.fillStyle = '#1f1f21';
  ctx.fillRect(7, 7, 2, 2);
}

// 1.21.4 Trial Key
function drawTrialKey(ctx: CanvasRenderingContext2D, isOminous: boolean) {
  const base = isOminous ? '#9333ea' : '#c15a37';
  const highlight = isOminous ? '#c084fc' : '#f59e0b';
  // Key Ring
  ctx.fillStyle = base;
  ctx.fillRect(10, 2, 4, 4);
  ctx.fillStyle = '#00000000';
  ctx.clearRect(11, 3, 2, 2);
  // Key Stem
  ctx.fillStyle = base;
  for (let i = 0; i < 8; i++) {
    ctx.fillRect(10 - i, 5 + i, 2, 2);
  }
  // Teeth
  ctx.fillStyle = highlight;
  ctx.fillRect(4, 12, 2, 2);
  ctx.fillRect(2, 14, 2, 2);
}

// 1.21.4 Crafter
function drawCrafter(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#41413c';
  ctx.fillRect(1, 1, 14, 14);
  ctx.fillStyle = '#78350f';
  ctx.fillRect(3, 3, 10, 10);
  ctx.fillStyle = '#ef4444'; // Redstone actuator
  ctx.fillRect(6, 6, 4, 4);
  ctx.fillStyle = '#111827';
  ctx.fillRect(7, 7, 2, 2);
}

// 1.21.4 Copper Bulb
function drawCopperBulb(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#9a3412';
  ctx.fillRect(2, 2, 12, 12);
  ctx.fillStyle = '#fbbf24'; // Glowing light
  ctx.fillRect(5, 5, 6, 6);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(6, 6, 4, 4);
}

// 1.21.4 Copper Grate
function drawCopperGrate(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#c15a37';
  ctx.fillRect(1, 1, 14, 14);
  ctx.fillStyle = '#1f1f21'; // Holes
  ctx.fillRect(3, 3, 3, 3);
  ctx.fillRect(10, 3, 3, 3);
  ctx.fillRect(3, 10, 3, 3);
  ctx.fillRect(10, 10, 3, 3);
}

// 1.21.4 Tuff Bricks
function drawTuffBricks(ctx: CanvasRenderingContext2D) {
  drawNoisePattern(ctx, PALETTES.tuff);
  ctx.fillStyle = '#1f1f21';
  ctx.fillRect(0, 7, 16, 1);
  ctx.fillRect(7, 0, 1, 8);
  ctx.fillRect(11, 8, 1, 8);
}

function drawEnderPearl(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#0b4d45';
  ctx.fillRect(4, 4, 8, 8);
  ctx.fillStyle = '#29a394';
  ctx.fillRect(5, 5, 6, 6);
  ctx.fillStyle = '#82f5e7';
  ctx.fillRect(6, 6, 4, 4);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(7, 7, 2, 2);
}

function drawEyeOfEnder(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#1c4d25';
  ctx.fillRect(4, 4, 8, 8);
  ctx.fillStyle = '#41a329';
  ctx.fillRect(5, 5, 6, 6);
  ctx.fillStyle = '#ff3300';
  ctx.fillRect(7, 6, 2, 4);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(7, 7, 1, 2);
}

function drawTotemOfUndying(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#f59e0b';
  ctx.fillRect(4, 2, 8, 12);
  ctx.fillStyle = '#10b981'; // Wings / arms
  ctx.fillRect(2, 6, 12, 3);
  ctx.fillStyle = '#22c55e'; // Eyes
  ctx.fillRect(5, 4, 2, 2);
  ctx.fillRect(9, 4, 2, 2);
}

function drawTrident(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#06b6d4';
  // Central prongs
  ctx.fillRect(12, 2, 2, 4);
  ctx.fillRect(9, 4, 2, 2);
  ctx.fillRect(14, 4, 2, 2);
  // Shaft
  for (let i = 0; i < 9; i++) {
    ctx.fillRect(2 + i, 13 - i, 2, 2);
  }
}

function drawShield(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#78350f';
  ctx.fillRect(4, 2, 8, 11);
  ctx.fillStyle = '#9ca3af'; // Metal rim
  ctx.fillRect(3, 2, 10, 1);
  ctx.fillRect(3, 2, 1, 10);
  ctx.fillRect(12, 2, 1, 10);
  ctx.fillRect(5, 13, 6, 1);
  // Boss
  ctx.fillStyle = '#e5e7eb';
  ctx.fillRect(7, 6, 2, 3);
}

function drawCrossbow(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#78350f';
  ctx.fillRect(7, 4, 2, 10);
  ctx.fillStyle = '#9ca3af';
  ctx.fillRect(3, 3, 10, 2);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(4, 5, 8, 1);
}

function drawBow(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#8b5a2b';
  ctx.fillRect(3, 2, 2, 12);
  ctx.fillRect(2, 4, 2, 8);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(12, 1, 1, 14);
}

function drawArrow(ctx: CanvasRenderingContext2D, isSpectral: boolean = false) {
  ctx.fillStyle = isSpectral ? '#f59e0b' : '#737373';
  ctx.fillRect(12, 2, 3, 3);
  ctx.fillStyle = '#8b5a2b';
  for (let i = 0; i < 10; i++) {
    ctx.fillRect(3 + i, 12 - i, 1, 1);
  }
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(1, 13, 3, 3);
}

function drawArmorPiece(ctx: CanvasRenderingContext2D, piece: string, color: string) {
  ctx.fillStyle = color;
  if (piece === 'helmet') {
    ctx.fillRect(4, 4, 8, 6);
    ctx.fillRect(3, 7, 10, 5);
    ctx.clearRect(6, 8, 4, 3);
  } else if (piece === 'chestplate') {
    ctx.fillRect(3, 3, 10, 10);
    ctx.clearRect(6, 3, 4, 3);
  } else if (piece === 'leggings') {
    ctx.fillRect(4, 3, 8, 10);
    ctx.clearRect(7, 6, 2, 7);
  } else if (piece === 'boots') {
    ctx.fillRect(3, 8, 4, 6);
    ctx.fillRect(9, 8, 4, 6);
  }
}

function drawApple(ctx: CanvasRenderingContext2D, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(4, 5, 8, 8);
  ctx.fillRect(5, 4, 6, 10);

  // Stem & leaf
  ctx.fillStyle = '#5c4033';
  ctx.fillRect(8, 2, 1, 2);
  ctx.fillStyle = '#22c55e';
  ctx.fillRect(9, 2, 2, 1);
}

function drawBread(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#b45309';
  ctx.fillRect(3, 7, 10, 5);
  ctx.fillStyle = '#fde68a';
  ctx.fillRect(4, 6, 8, 2);
  ctx.fillRect(5, 8, 2, 2);
  ctx.fillRect(9, 8, 2, 2);
}

function drawMeat(ctx: CanvasRenderingContext2D, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(4, 5, 8, 7);
  ctx.fillStyle = '#f3f4f6'; // Bone
  ctx.fillRect(2, 10, 3, 3);
}

function drawCarrot(ctx: CanvasRenderingContext2D, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(4, 8, 4, 5);
  ctx.fillRect(7, 5, 4, 5);
  ctx.fillStyle = '#22c55e'; // Green top
  ctx.fillRect(10, 2, 3, 3);
}

function drawPotato(ctx: CanvasRenderingContext2D, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(4, 5, 8, 6);
  ctx.fillRect(5, 4, 6, 8);
}

function drawCookie(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#d97706';
  ctx.fillRect(4, 4, 8, 8);
  ctx.fillStyle = '#451a03'; // Chocolate chips
  ctx.fillRect(5, 5, 2, 2);
  ctx.fillRect(9, 6, 2, 2);
  ctx.fillRect(7, 9, 2, 2);
}

function drawIngot(ctx: CanvasRenderingContext2D, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(3, 7, 10, 4);
  ctx.fillRect(4, 6, 8, 6);
  ctx.fillStyle = '#ffffff44';
  ctx.fillRect(4, 6, 6, 2);
}

function drawGem(ctx: CanvasRenderingContext2D, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(5, 3, 6, 10);
  ctx.fillRect(3, 5, 10, 6);
  ctx.fillStyle = '#ffffff66';
  ctx.fillRect(6, 4, 3, 3);
}

function drawRedstoneDust(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#ef4444';
  ctx.fillRect(5, 7, 6, 4);
  ctx.fillRect(7, 5, 2, 8);
  ctx.fillStyle = '#b91c1c';
  ctx.fillRect(6, 6, 4, 4);
}

function drawCoal(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#18181b';
  ctx.fillRect(4, 4, 8, 8);
  ctx.fillStyle = '#27272a';
  ctx.fillRect(5, 5, 5, 5);
  ctx.fillStyle = '#3f3f46';
  ctx.fillRect(6, 6, 2, 2);
}

function drawBucket(ctx: CanvasRenderingContext2D, liquidColor: string | null) {
  ctx.fillStyle = '#9ca3af';
  ctx.fillRect(4, 5, 8, 7);
  ctx.fillRect(5, 12, 6, 2);
  if (liquidColor) {
    ctx.fillStyle = liquidColor;
    ctx.fillRect(5, 6, 6, 6);
  } else {
    ctx.clearRect(5, 5, 6, 5);
  }
}

function drawPotion(ctx: CanvasRenderingContext2D, color: string) {
  ctx.fillStyle = '#cccccc';
  ctx.fillRect(7, 2, 2, 3);
  ctx.fillStyle = color;
  ctx.fillRect(4, 6, 8, 8);
  ctx.fillStyle = '#ffffff55';
  ctx.fillRect(5, 7, 2, 4);
}

function drawBook(ctx: CanvasRenderingContext2D, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(3, 3, 10, 10);
  ctx.fillStyle = '#f3f4f6';
  ctx.fillRect(4, 4, 8, 8);
  ctx.fillStyle = '#ef4444'; // Bookmark
  ctx.fillRect(7, 3, 2, 5);
}

function drawFlintAndSteel(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#9ca3af';
  ctx.fillRect(4, 4, 4, 8);
  ctx.fillStyle = '#27272a';
  ctx.fillRect(8, 8, 4, 4);
  ctx.fillStyle = '#f97316'; // Spark
  ctx.fillRect(7, 7, 2, 2);
}

function drawCompass(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#9ca3af';
  ctx.fillRect(3, 3, 10, 10);
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(4, 4, 8, 8);
  ctx.fillStyle = '#ef4444'; // Needle North
  ctx.fillRect(7, 5, 2, 3);
  ctx.fillStyle = '#f8fafc'; // Needle South
  ctx.fillRect(7, 8, 2, 3);
}

function drawClock(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#f59e0b';
  ctx.fillRect(3, 3, 10, 10);
  ctx.fillStyle = '#38bdf8'; // Sky
  ctx.fillRect(5, 5, 6, 6);
  ctx.fillStyle = '#facc15'; // Sun
  ctx.fillRect(7, 7, 2, 2);
}

function drawTorch(ctx: CanvasRenderingContext2D, flameColor: string) {
  ctx.fillStyle = '#8b5a2b';
  ctx.fillRect(7, 6, 2, 8);
  ctx.fillStyle = flameColor;
  ctx.fillRect(6, 3, 4, 3);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(7, 4, 2, 1);
}

function drawLantern(ctx: CanvasRenderingContext2D, flameColor: string) {
  ctx.fillStyle = '#1f2937';
  ctx.fillRect(4, 4, 8, 9);
  ctx.fillRect(7, 2, 2, 2);
  ctx.fillStyle = flameColor;
  ctx.fillRect(6, 6, 4, 5);
}

function drawFurnaceFront(ctx: CanvasRenderingContext2D) {
  drawNoisePattern(ctx, PALETTES.stone);
  ctx.fillStyle = '#111827';
  ctx.fillRect(4, 7, 8, 6);
  ctx.fillStyle = '#f97316';
  ctx.fillRect(5, 9, 6, 3);
}

function drawChestFront(ctx: CanvasRenderingContext2D) {
  drawNoisePattern(ctx, PALETTES.oak_planks);
  ctx.fillStyle = '#1f2937';
  ctx.fillRect(0, 5, 16, 2);
  ctx.fillStyle = '#d1d5db'; // Latch
  ctx.fillRect(7, 5, 2, 3);
}

function drawBookshelf(ctx: CanvasRenderingContext2D) {
  drawPlanksPattern(ctx, PALETTES.oak_planks);
  const colors = ['#dc2626', '#2563eb', '#16a34a', '#d97706'];
  for (let i = 0; i < 6; i++) {
    ctx.fillStyle = colors[i % colors.length];
    ctx.fillRect(2 + i * 2, 3, 2, 4);
    ctx.fillRect(2 + i * 2, 9, 2, 4);
  }
}

function drawTnt(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#ef4444';
  ctx.fillRect(0, 0, 16, 16);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 6, 16, 4);
  ctx.fillStyle = '#000000';
  ctx.font = 'bold 5px sans-serif';
  ctx.fillText('TNT', 2, 10);
}

function drawGlassPattern(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#ffffff11';
  ctx.fillRect(0, 0, 16, 16);
  ctx.fillStyle = '#ffffff88';
  ctx.fillRect(2, 2, 3, 1);
  ctx.fillRect(2, 3, 1, 2);
  ctx.fillRect(12, 12, 2, 1);
  ctx.fillRect(13, 11, 1, 2);
}

function drawNoisePattern(ctx: CanvasRenderingContext2D, palette: string[]) {
  for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
      const n = pseudoNoise(x, y);
      const colorIdx = Math.floor(n * palette.length);
      ctx.fillStyle = palette[colorIdx];
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

function drawPlanksPattern(ctx: CanvasRenderingContext2D, palette: string[]) {
  drawNoisePattern(ctx, palette);
  ctx.fillStyle = '#00000033';
  ctx.fillRect(0, 3, 16, 1);
  ctx.fillRect(0, 7, 16, 1);
  ctx.fillRect(0, 11, 16, 1);
  ctx.fillRect(0, 15, 16, 1);
}

function drawLogPattern(ctx: CanvasRenderingContext2D, palette: string[]) {
  drawNoisePattern(ctx, palette);
  ctx.fillStyle = '#00000044';
  ctx.fillRect(2, 0, 1, 16);
  ctx.fillRect(6, 0, 1, 16);
  ctx.fillRect(10, 0, 1, 16);
  ctx.fillRect(14, 0, 1, 16);
}

function drawLeavesPattern(ctx: CanvasRenderingContext2D, palette: string[]) {
  for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
      const n = pseudoNoise(x, y, 101);
      if (n > 0.85) {
        ctx.fillStyle = '#00000000'; // Transparent gaps
      } else {
        const colorIdx = Math.floor(n * palette.length);
        ctx.fillStyle = palette[colorIdx];
      }
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

function drawCraftingTableTop(ctx: CanvasRenderingContext2D) {
  drawNoisePattern(ctx, PALETTES.crafting_table);
  ctx.fillStyle = '#3a2010';
  ctx.fillRect(2, 2, 12, 12);
  ctx.fillStyle = '#a1734a';
  ctx.fillRect(4, 4, 8, 8);
}

function drawGrassSidePattern(ctx: CanvasRenderingContext2D) {
  drawNoisePattern(ctx, PALETTES.dirt);
  for (let x = 0; x < 16; x++) {
    const h = 3 + Math.floor(pseudoNoise(x, 0) * 3);
    for (let y = 0; y < h; y++) {
      ctx.fillStyle = PALETTES.grass[Math.floor(pseudoNoise(x, y) * PALETTES.grass.length)];
      ctx.fillRect(x, y, 1, 1);
    }
  }
}

function drawOrePattern(ctx: CanvasRenderingContext2D, basePalette: string[], gemColor: string) {
  drawNoisePattern(ctx, basePalette);
  ctx.fillStyle = gemColor;
  ctx.fillRect(3, 4, 3, 2);
  ctx.fillRect(10, 2, 2, 3);
  ctx.fillRect(6, 9, 3, 3);
  ctx.fillRect(11, 11, 2, 2);
  ctx.fillRect(2, 12, 3, 2);
}

function drawGenericItemOrBlock(ctx: CanvasRenderingContext2D, name: string) {
  // Generate deterministic pastel color palette from string hash
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const h = Math.abs(hash) % 360;
  const palette = [
    `hsl(${h}, 60%, 40%)`,
    `hsl(${h}, 60%, 50%)`,
    `hsl(${h}, 60%, 60%)`,
    `hsl(${h}, 60%, 30%)`,
  ];

  drawNoisePattern(ctx, palette);
}
