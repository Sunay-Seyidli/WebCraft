import fs from 'fs';
import path from 'path';
import https from 'https';

const manifestPath = path.join(process.cwd(), 'temp_mc', 'sounds_manifest.json');
if (!fs.existsSync(manifestPath)) {
  console.error('Manifest file not found');
  process.exit(1);
}

const { objects } = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Essential sounds mapping for Minecraft 1.21.4 Web Client
const soundTargets = [
  // Dig / Block break sounds
  'minecraft/sounds/dig/stone1.ogg',
  'minecraft/sounds/dig/stone2.ogg',
  'minecraft/sounds/dig/stone3.ogg',
  'minecraft/sounds/dig/grass1.ogg',
  'minecraft/sounds/dig/grass2.ogg',
  'minecraft/sounds/dig/grass3.ogg',
  'minecraft/sounds/dig/gravel1.ogg',
  'minecraft/sounds/dig/sand1.ogg',
  'minecraft/sounds/dig/wood1.ogg',
  'minecraft/sounds/dig/wood2.ogg',
  'minecraft/sounds/dig/cloth1.ogg',
  
  // Step / Footstep sounds
  'minecraft/sounds/step/stone1.ogg',
  'minecraft/sounds/step/stone2.ogg',
  'minecraft/sounds/step/stone3.ogg',
  'minecraft/sounds/step/grass1.ogg',
  'minecraft/sounds/step/grass2.ogg',
  'minecraft/sounds/step/grass3.ogg',
  'minecraft/sounds/step/wood1.ogg',
  'minecraft/sounds/step/gravel1.ogg',

  // GUI / Clicks / Pop / Explosion
  'minecraft/sounds/random/click.ogg',
  'minecraft/sounds/gui/button_click.ogg',
  'minecraft/sounds/random/pop.ogg',
  'minecraft/sounds/random/explode1.ogg',
  'minecraft/sounds/random/drink.ogg',
  'minecraft/sounds/random/eat1.ogg',
  
  // Entity sounds
  'minecraft/sounds/damage/hit1.ogg',
  'minecraft/sounds/damage/fallbig.ogg',
  'minecraft/sounds/entity/zombie/say1.ogg',
  'minecraft/sounds/entity/zombie/hurt1.ogg',
  'minecraft/sounds/entity/zombie/death.ogg'
];

async function downloadFile(hash, destPath) {
  const hashPrefix = hash.substring(0, 2);
  const downloadUrl = `https://resources.download.minecraft.net/${hashPrefix}/${hash}`;
  
  fs.mkdirSync(path.dirname(destPath), { recursive: true });

  return new Promise((resolve) => {
    https.get(downloadUrl, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed ${downloadUrl}: ${res.statusCode}`);
        return resolve(false);
      }
      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(true);
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${downloadUrl}:`, err);
      resolve(false);
    });
  });
}

async function main() {
  console.log('Downloading official Minecraft 1.21.4 sound effects...');
  let count = 0;
  for (const soundPath of soundTargets) {
    const obj = objects[soundPath];
    if (obj) {
      // Save locally under public/sounds/
      // e.g. minecraft/sounds/dig/stone1.ogg -> public/sounds/dig/stone1.ogg
      const relPath = soundPath.replace('minecraft/sounds/', '');
      const targetLocal = path.join(process.cwd(), 'public', 'sounds', relPath);
      const ok = await downloadFile(obj.hash, targetLocal);
      if (ok) count++;
    } else {
      console.warn('Sound asset not found in index:', soundPath);
    }
  }
  console.log(`Successfully downloaded ${count} official Minecraft 1.21.4 sounds into public/sounds/`);
}

main();
