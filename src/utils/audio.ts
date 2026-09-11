// Official Minecraft 1.21.4 Sound Manager with OGG Audio & Throttling

class SoundManager {
  private ctx: AudioContext | null = null;
  private volume: number = 0.5;
  private audioCache: Map<string, AudioBuffer> = new Map();
  private lastPlayTime: Map<string, number> = new Map();

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
  }

  private isThrottled(key: string, cooldownMs: number): boolean {
    const now = Date.now();
    const last = this.lastPlayTime.get(key) || 0;
    if (now - last < cooldownMs) {
      return true;
    }
    this.lastPlayTime.set(key, now);
    return false;
  }

  private async playOgg(url: string, volumeScale = 1.0) {
    try {
      this.initCtx();
      if (!this.ctx) return false;

      let buffer = this.audioCache.get(url);
      if (!buffer) {
        const res = await fetch(url);
        if (!res.ok) return false;
        const arrayBuffer = await res.arrayBuffer();
        buffer = await this.ctx.decodeAudioData(arrayBuffer);
        this.audioCache.set(url, buffer);
      }

      const source = this.ctx.createBufferSource();
      const gainNode = this.ctx.createGain();

      source.buffer = buffer;
      gainNode.gain.value = this.volume * volumeScale;

      source.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      source.start(0);
      return true;
    } catch {
      return false;
    }
  }

  // Classic button click
  public playClick() {
    if (this.isThrottled('click', 100)) return;
    this.playOgg('/sounds/random/click.ogg', 0.6).then((success) => {
      if (!success) this.playSynthClick();
    });
  }

  // Digging / Block break sound with variations
  public playDig(type: string = 'stone') {
    if (this.isThrottled('dig', 120)) return;

    let folder = 'stone';
    if (type.includes('grass') || type.includes('leaves')) folder = 'grass';
    else if (type.includes('dirt') || type.includes('gravel') || type.includes('sand')) folder = 'gravel';
    else if (type.includes('wood') || type.includes('log') || type.includes('plank')) folder = 'wood';
    else if (type.includes('wool') || type.includes('carpet')) folder = 'cloth';

    const num = Math.floor(Math.random() * 3) + 1;
    let url = `/sounds/dig/${folder}${num}.ogg`;
    if (folder === 'gravel' || folder === 'cloth') url = `/sounds/dig/${folder}1.ogg`;

    this.playOgg(url, 0.8).then((success) => {
      if (!success) this.playSynthDig(type);
    });
  }

  // Footstep sound with variations
  public playFootstep(type: string = 'stone') {
    if (this.isThrottled('footstep', 320)) return;

    let folder = 'stone';
    if (type.includes('grass') || type.includes('leaves')) folder = 'grass';
    else if (type.includes('dirt') || type.includes('gravel') || type.includes('sand')) folder = 'gravel';
    else if (type.includes('wood') || type.includes('log')) folder = 'wood';

    const num = Math.floor(Math.random() * 3) + 1;
    let url = `/sounds/step/${folder}${num}.ogg`;
    if (folder === 'gravel' || folder === 'wood') url = `/sounds/step/${folder}1.ogg`;

    this.playOgg(url, 0.4).then((success) => {
      if (!success) this.playSynthFootstep();
    });
  }

  // Pop item pick up
  public playPop() {
    if (this.isThrottled('pop', 80)) return;
    this.playOgg('/sounds/random/pop.ogg', 0.5).then((success) => {
      if (!success) this.playSynthPop();
    });
  }

  // Damage / Hurt sound
  public playHurt() {
    if (this.isThrottled('hurt', 300)) return;
    this.playOgg('/sounds/damage/hit1.ogg', 0.8);
  }

  // Explosion / Wind charge sound
  public playExplosion() {
    if (this.isThrottled('explode', 150)) return;
    this.playOgg('/sounds/random/explode.ogg', 0.9).then((success) => {
      if (!success) this.playSynthExplosion();
    });
  }

  private playSynthExplosion() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const bufferSize = this.ctx.sampleRate * 0.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(350, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.35);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(this.volume * 0.9, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.38);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start();
    } catch {}
  }

  // --- Procedural Fallbacks ---
  private playSynthClick() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(this.volume * 0.6, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch {}
  }

  private playSynthDig(type: string) {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const bufferSize = this.ctx.sampleRate * 0.1;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = type === 'stone' ? 'bandpass' : 'lowpass';
      filter.frequency.setValueAtTime(type === 'stone' ? 800 : 400, this.ctx.currentTime);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(this.volume * 0.8, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start();
    } catch {}
  }

  private playSynthFootstep() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(120, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(this.volume * 0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {}
  }

  private playSynthPop() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(900, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(this.volume * 0.4, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch {}
  }
}

export const soundManager = new SoundManager();
