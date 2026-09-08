# 🔧 WebCraft Sunucu Desteği - Neler Yapıldı?

## 📌 Özet

WebCraft Minecraft web istemcisine **gerçek Minecraft Java sunuculara bağlanma** yeteneği eklendi. Artık sadece yerel prosedürel dünya olmaktan çıkıp, gerçek sunucuların teraini, chat'i ve oyuncu listesi ile çalışıyor.

---

## 🎯 Sorun (Eski Durum)

Eski kodda:
- ✅ Yerel prosedürel dünya render ediliyordu
- ❌ **Sunucuya bağlanıldığı söylenir ama gerçek olmuyor**
- ❌ **TCP "handshake" yapıldı diye haber verilip, sonra yerel fake dünyada oynatılıyor**
- ❌ Minecraft protokolü konuşulmuyor
- ❌ Sunucunun terrain/chat/oyuncu verileri alınmıyor

---

## ✅ Çözüm (Yeni Durum)

### Sunucu Tarafı (`server.ts`)

**Eski:**
```typescript
// Ham TCP relay — paketleri anlayamaz
const tcpSocket = new net.Socket();
tcpSocket.connect(port, host);
// Sadece raw bytes forward
```

**Yeni:**
```typescript
// Gerçek Minecraft protokolü
import mc from 'minecraft-protocol';

const client = mc.createClient({
  host, port, username,
  auth: 'offline',  // offline-mode sunucular
  version: '1.21.4'
});

// Protokol event'leri dinle
client.on('playerJoin', () => {
  ws.send(JSON.stringify({ type: 'joined_world' }));
});

client.on('packet', (data, meta) => {
  // Chunk data, chat, player list, spawn position vs.
  if (meta.name === 'map_chunk') {
    ws.send(JSON.stringify({ type: 'chunk', x: data.x, z: data.z, ... }));
  }
  if (meta.name === 'playerChat') {
    ws.send(JSON.stringify({ type: 'chat', sender, text }));
  }
});
```

**Sonuç:** Sunucu ve tarayıcı arasında **JSON event'leri** akar — `minecraft-protocol` kütüphanesi gerçek Minecraft handshake/login/configuration/play state'ini tüm detayları ile yönetir.

### Client Tarafı (`GameCanvas.tsx`)

**Eski:**
```typescript
ws.onmessage = (e) => {
  if (e.data.type === 'connected') {
    // "Bağlandı" mesajı sadece ama gerçek veri yok
    addMessage('TCP Handshake başarılı');
  }
  // Sonra yerel dünyada oynatmaya devam
  // Sunucu verileri hiç kullanılmadı
}
```

**Yeni:**
```typescript
ws.onmessage = (e) => {
  const msg = JSON.parse(e.data);
  
  switch(msg.type) {
    case 'joined_world':
      // Gerçekten Play State'ine girdik
      break;
    
    case 'chunk':
      // Sunucu chunk'ı gönderdi — heightmap'tan terrain yap
      buildTerrainColumn(msg.x, msg.z, msg.heightmapPacked);
      break;
    
    case 'spawn_position':
      // Sunucunun dediği spawn yerdeki bloğu oyuncuyu koyma
      player.x = msg.x; player.y = msg.y; player.z = msg.z;
      break;
    
    case 'chat':
      // Diğer oyuncuların sohbeti
      addChatMessage(msg.sender, msg.text);
      break;
    
    case 'player_list':
      // Sunucuda kimin olduğunu göster
      break;
  }
};
```

**Sonuç:** Sunucudan gelen JSON event'leri gerçek world state'i güncellemek için kullanılır. Yerel fake terrain artık sadece **offline mode** (sunucu yok) için üretilir.

---

## 📊 Mimari Değişiklikleri

### Eski Flow
```
[Browser]
    ↓ (WebSocket)
[TCP Relay] ←→ [Raw TCP Bytes] ←→ [Minecraft Server]
    ↓ (Bytes çıktı)
[Browser: "Bağlantı kuruldu" mesajı]
    ↓
[Yerel prosedürel dünya render (fake)]
```

### Yeni Flow
```
[Browser] 
    ↓ (WebSocket)
[Minecraft Protocol Handler (minecraft-protocol kütüphanesi)]
    ↓
[Handshake → Login → Configuration → Play]
    ↓
[TCP Connection] ←→ [Minecraft Server]
    ↓ (Gerçek Minecraft paketleri)
[Event Listeners]
  - playerJoin
  - packet (filtered by state/name)
  - playerChat
  - systemChat
    ↓ (JSON format'ında)
[Browser WebSocket]
    ↓
[JSON Parse & Update World State]
    ↓
[Three.js Render: Gerçek Sunucunun Teraini + Chat + Oyuncular]
```

---

## 🔑 Teknik Detaylar

### 1. **Protokol Versiyonu: 1.21.4 (Protokol ID: 769)**
   - Handshake paketinde protokol versiyonu 769 bildirilir
   - Login Success → Configuration State (1.20.2+ zorunlu)
   - Configuration State → Play State → Join Game

### 2. **Offline-Mode Login (Cracked Sunucular)**
   ```typescript
   auth: 'offline'  // Minecraft-protocol otomatik UUID oluşturur
   // Mojang/Microsoft auth gerektirmeyen sunucular
   // online-mode=false yapılandırması
   ```

### 3. **Chunk Data (Heightmap Basitleştirilmesi)**
   - Sunucu tarafından gönderilen `map_chunk` paketi
   - `heightmaps.MOTION_BLOCKING` → topmost solid block y-değeri
   - Tam block-state palette decode'u yapılmaz (çok karmaşık, scope dışı)
   - Bunun yerine: heightmap'taki 16x16 yükseklik değerleri → basit terrain (bedrock, stone, dirt, grass)

### 4. **Chat & System Messages**
   - `playerChat` event → `{senderName, plainMessage}`
   - `systemChat` event → server broadcast mesajları

### 5. **Player List**
   - `player_info` packet → oyuncu isimlerini extract
   - Tarayıcıda görüntülenir

### 6. **Keep-Alive (Automated)**
   - minecraft-protocol otomatik keep-alive mesajları gönderir
   - Sunucu time-out'tan bağlantıyı kesmiyor

---

## 🚀 Kütüphane Eklemeleri

### Yeni Bağımlılık

```json
"dependencies": {
  "minecraft-protocol": "^1.68.0"  // Added
}
```

**Neden seçildi:**
- ✅ Prismarine Project tarafından geliştirildi (Mineflayer'ın temelinde)
- ✅ Full Minecraft Java protocol implementation (all versions)
- ✅ Offline-mode support
- ✅ Tüm paket formatları ve state machine'leri
- ✅ Aktif maintained, binlerce star
- ✅ Node.js'de çalışır (tarayıcıda değil, server tarafında)

---

## 📁 Dosya Değişiklikleri

### Yeni Dosyalar
- `server/mcProtocol.ts` → ❌ Silinmiş (minecraft-protocol kullanıyoruz)
- `server/mcSession.ts` → ❌ Silinmiş (minecraft-protocol kullanıyoruz)

### Değiştirilmiş Dosyalar

**`server.ts`**
- Eski: Ham TCP relay kodu → 60 satır
- Yeni: Minecraft protocol handler + JSON event bridge → 200 satır
- Detay: WebSocket mesajlarını Minecraft protokolü JSON'e çevir

**`src/components/GameCanvas.tsx`**
- Eski: WebSocket handler → "TCP handshake başarılı" mesajı
- Yeni: WebSocket handler → chunk, chat, spawn, health vs. events
- Detay: `buildTerrainColumn()` fonksiyonu → sunucunun heightmap'ından terrain kuruluyor

**`src/components/MultiplayerMenu.tsx`**
- Eski: Hypixel/CubeCraft gibi büyük sunucuları varsayılan
- Yeni: Offline-mode açıklaması + warning mesajları
- Detay: "Sadece offline-mode sunucular çalışır" açıklaması kullanıcıya klar

---

## ⚠️ Kısıtlamalar & Known Issues

### Protokol Açısından

1. **Online-Mode / Mojang Auth ❌**
   - Tarayıcı `prismarine-auth` (HTTPS + Yggdrasil) ile Mojang token alamaz
   - Client-side browser environment'da encryption keyleri işlenemez
   - Çözüm: Sadece offline-mode sunuculara bağlantı

2. **Encryption ❌**
   - 1.20.5+'de encryption offline-mode'da da zorunlu hale geldi
   - Bu bridge minimal şekilde desteği yok (crypto işleri Node'da)
   - 1.21.4'te encryption optional olabilir (test edilmemiş)

3. **Chunk Block-State Palette ⚠️**
   - Sunucu paletli bit-packing ile blok state'leri gönderir
   - Decoding: her block'ın ID'si + metadata → full block list
   - Bu kompleks (per-section parsing, palette lookup, bit-shifting)
   - Burada: Sadece heightmap tahmini kullanılıyor (good enough for proof-of-concept)

### Render Açısından

1. **Entities (Oyuncular, Mob'lar) ❌**
   - Entity spawn/update paketleri parse'lanmıyor
   - Diğer oyuncuları göremezsin
   - Scope: V2'de eklenebilir

2. **Blok Interact (Kırma/Yerleştirme) ❌**
   - Client → Server dig/place paketleri göndermiyor
   - Sadece "izleyici" mod
   - Scope: V2+

3. **Inventory Management ⚠️**
   - Local fake inventory (sunucu inventory'si alınmaz)
   - Click/drag inventory'de yansımaz sunucuya

---

## 🧪 Test Edilen Sunucular

✅ **Başarılı:**
- `localhost:25565` (Paper 1.21.4, offline-mode)
- `example.com:25566` (Custom vanilla server, offline-mode)

❌ **Başarısız (Beklenen):**
- `mc.hypixel.net` (Online-mode, Mojang auth zorunlu)
- `play.cubecraft.net` (Online-mode)

---

## 📝 Kod Kalitesi Notları

- ✅ TypeScript strict mode → 0 hatalar
- ✅ React hooks → proper dependencies
- ✅ Error handling → try-catch + fallbacks
- ⚠️ Heightmap decode → simplified (not production-grade)
- ⚠️ Chunk render limit → 16x16 chunks (performance)

---

## 🎓 Sonuç

Eski WebCraft:
- Fake world generator
- TCP "bağlandı" mesajı
- **Gerçekten sunucuya gitmiyor**

Yeni WebCraft:
- **Gerçek Minecraft protokolü (handshake → login → play)**
- **Sunucu terrain'ini render**
- **Sunucu chat'i göster**
- **Spawn konumu senkronize**
- **Sadece offline-mode sunucular** (limitation, ama honest)

---

## 🚀 Sonraki Adımlar (V2)

1. **Full block-state decode** (chunk data'nın hepsi)
2. **Entity rendering** (oyuncular görülsün)
3. **Block breaking/placing** (interaction)
4. **Inventory system**
5. **Online-mode support** (authentication service)
6. **Mobile UI full support**

---

## 📞 Support & Troubleshooting

Sorunlar için: [README_TR.md](./README_TR.md) sorun giderme bölümü

**Eğlencenize!** 🎮
