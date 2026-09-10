import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import util from 'util';

const execAsync = util.promisify(exec);

const CLIENT_JAR_URL = 'https://piston-data.mojang.com/v1/objects/a7e5a6024bfd3cd614625aa05629adf760020304/client.jar';
const ASSET_INDEX_URL = 'https://piston-meta.mojang.com/v1/packages/80b5cb70d65b1ffcd272d7f99981a8f94957e8eb/17.json';

export async function ensureMinecraftAssets(): Promise<void> {
  const blockDir = path.join(process.cwd(), 'public', 'textures', 'block');
  const soundsDir = path.join(process.cwd(), 'public', 'sounds');

  const hasTextures = fs.existsSync(path.join(blockDir, 'stone.png'));
  const hasSounds = fs.existsSync(path.join(soundsDir, 'step_stone1.ogg'));

  if (hasTextures && hasSounds) {
    console.log('[AssetDownloader] Official Minecraft 1.21.4 assets cached and ready.');
    return;
  }

  console.log('[AssetDownloader] Downloading official Minecraft 1.21.4 client assets from Mojang...');

  // Create public directories
  const dirs = [
    'public/textures/block',
    'public/textures/item',
    'public/textures/entity',
    'public/textures/gui',
    'public/textures/particle',
    'public/sounds',
    'temp_mc'
  ];

  for (const d of dirs) {
    fs.mkdirSync(path.join(process.cwd(), d), { recursive: true });
  }

  const tempJar = path.join(process.cwd(), 'temp_mc', 'client.jar');

  try {
    // 1. Download official client.jar if needed
    if (!fs.existsSync(tempJar)) {
      console.log('[AssetDownloader] Downloading client.jar...');
      await execAsync(`curl -sSL "${CLIENT_JAR_URL}" -o "${tempJar}"`);
    }

    // 2. Extract textures from client.jar
    console.log('[AssetDownloader] Extracting official textures, items, entities, GUIs, particles...');
    await execAsync(`unzip -o "${tempJar}" "assets/minecraft/textures/block/*" "assets/minecraft/textures/item/*" "assets/minecraft/textures/entity/*" "assets/minecraft/textures/gui/*" "assets/minecraft/textures/particle/*" -d temp_mc/`);

    // Copy extracted textures into public
    const copyPairs = [
      ['temp_mc/assets/minecraft/textures/block/*', 'public/textures/block/'],
      ['temp_mc/assets/minecraft/textures/item/*', 'public/textures/item/'],
      ['temp_mc/assets/minecraft/textures/entity/*', 'public/textures/entity/'],
      ['temp_mc/assets/minecraft/textures/gui/*', 'public/textures/gui/'],
      ['temp_mc/assets/minecraft/textures/particle/*', 'public/textures/particle/']
    ];

    for (const [src, dest] of copyPairs) {
      const fullSrc = path.join(process.cwd(), src);
      const fullDest = path.join(process.cwd(), dest);
      await execAsync(`cp -r ${fullSrc} ${fullDest} 2>/dev/null || true`);
    }

    // 3. Fetch official sounds index & core audio files
    console.log('[AssetDownloader] Downloading official Minecraft sound assets...');
    const soundIndexFile = path.join(process.cwd(), 'temp_mc', '17.json');
    if (!fs.existsSync(soundIndexFile)) {
      await execAsync(`curl -sSL "${ASSET_INDEX_URL}" -o "${soundIndexFile}"`);
    }

    if (fs.existsSync(soundIndexFile)) {
      const indexData = JSON.parse(fs.readFileSync(soundIndexFile, 'utf-8'));
      const objects = indexData.objects || {};

      // Common sound files needed for footstep, dig, block, click
      const keySounds = [
        'minecraft/sounds/step/stone1.ogg',
        'minecraft/sounds/step/stone2.ogg',
        'minecraft/sounds/step/stone3.ogg',
        'minecraft/sounds/step/grass1.ogg',
        'minecraft/sounds/step/grass2.ogg',
        'minecraft/sounds/step/grass3.ogg',
        'minecraft/sounds/step/gravel1.ogg',
        'minecraft/sounds/step/gravel2.ogg',
        'minecraft/sounds/step/wood1.ogg',
        'minecraft/sounds/step/wood2.ogg',
        'minecraft/sounds/dig/stone1.ogg',
        'minecraft/sounds/dig/grass1.ogg',
        'minecraft/sounds/dig/wood1.ogg',
        'minecraft/sounds/random/click.ogg',
        'minecraft/sounds/game/player/hurt1.ogg'
      ];

      for (const sndKey of keySounds) {
        const item = objects[sndKey];
        if (item && item.hash) {
          const hash = item.hash;
          const prefix = hash.substring(0, 2);
          const cdnUrl = `https://resources.download.minecraft.net/${prefix}/${hash}`;
          const filename = path.basename(sndKey);
          const targetPath = path.join(process.cwd(), 'public', 'sounds', filename);
          if (!fs.existsSync(targetPath)) {
            await execAsync(`curl -sSL "${cdnUrl}" -o "${targetPath}"`).catch(() => {});
          }
        }
      }
    }

    console.log('[AssetDownloader] Official Minecraft 1.21.4 assets successfully downloaded and extracted!');
  } catch (err) {
    console.error('[AssetDownloader] Error downloading assets:', err);
  } finally {
    // Clean up temporary archive
    await execAsync(`rm -rf ${path.join(process.cwd(), 'temp_mc')}`).catch(() => {});
  }
}
