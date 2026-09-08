# 🎮 WebCraft - Tarayıcı İçinde Minecraft Web İstemcisi (1.21.4)

## ✨ Neler Değişti? (2.0 - Gerçek Sunucu Desteği)

Bu yeni versiyon, **gerçek Minecraft Java Edition sunuculara** bağlanmanızı sağlar. Artık sadece yerel prosedürel dünya yerine:

- ✅ **Gerçek Minecraft Protokolü (1.21.4)** – Handshake, Login, Configuration, Play state'inin hepsi
- ✅ **Sunucu Teraini** – Sunucunun heightmap'ı kullanılarak gerçek arazi şekli render edilir
- ✅ **Oyuncu Listesi** – Sunucudaki oyuncu isimlerini görsün
- ✅ **Chat** – Sunucudaki diğer oyuncularla sohbet edin
- ✅ **Spawn Senkronizasyonu** – Sunucunun verdiği spawn konumuna teleport
- ❌ **Online-Mode (Mojang Auth) – DESTEKLENMIYOR** – Sadece offline-mode sunucular çalışır

## 📋 Gereksinimler

- **Node.js** 18+ (npm ile)
- **Tarayıcı** – Chrome, Firefox, Safari, Edge (modern WebSocket desteği gerekli)
- **Minecraft Sunucu** – 1.21.4 offline-mode (cracked) konfigürasyonlu

## 🚀 Kurulum ve Çalıştırma

### 1. Proje Dosyalarını Hazırlayın

```bash
# Eğer WebCraft-dist ve server.ts file'larını indirdiyseniz:
unzip WebCraft-dist.zip  # Eğer compress'liyse
# Veya tamamen baştan klonlayın:
git clone https://github.com/PrismarineJS/WebCraft  # (orijinal repo)
cd WebCraft
```

### 2. Bağımlılıkları Kurun

```bash
npm install
```

Kurulum sırasında `minecraft-protocol` kütüphanesi içlusive tüm protokol yardımcıları yüklenecek.

### 3. Geliştirme Sunucusu Başlatın

```bash
npm run dev
```

Çıktı:
```
  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

**Tarayıcıda açın:** http://localhost:5173

### 4. Üretim Build'i (Deployment için)

```bash
npm run build
npm start
```

Sunucu **PORT 3000** (varsayılan) veya `PORT=8080 npm start` ile başlayacak.

---

## 🖧 Sunucuya Bağlanma

### Ana Menü → Çok Oyunculu → Sunucu Seçimi

1. **Önceden Tanımlı Sunucudan Seçin:**
   - `127.0.0.1:25565` – Yerel sunucu (sizin bilgisayarınızdaki)
   - Veya "Doğrudan Bağlan" kullanın

2. **Doğrudan Bağlan** (Direct Connect):
   ```
   Sunucu Adı (opsiyonel): Arkadaşın Sunucusu
   Sunucu Adresi:          example.com   (otomatik 25565 portunu kullanır)
                        veya example.com:25566  (custom port)
   ```

3. **Sunucuya Katıl** tuşuna basın → Minecraft protokolü ile bağlanılır.

### Bağlantı Akışı

```
[Tarayıcı]
    ↓
[WebSocket → /ws-proxy?host=X&port=Y]
    ↓
[Node.js server.ts: minecraft-protocol createClient]
    ↓
[Gerçek TCP: Minecraft Sunucu]
    ↓
[Handshake → Login → Configuration → Play State]
    ↓
[JSON Event'ler geri tarayıcıya: chunk, chat, player_list, etc.]
    ↓
[Three.js ile Render]
```

---

## ⚠️ Desteklenen ve Desteklenmeyen Sunucular

### ✅ ÇALIŞIR (Offline-Mode)

- Kendi/arkadaş Vanilla sunucusu
- Paper, Spigot, Purpur (offline-mode aktif)
- Craftbukkit offline
- Yerel `java -jar server.jar nogui` sunucu
- **Sunucunun `server.properties` dosyasında:**
  ```
  online-mode=false
  ```

### ❌ ÇALIŞMAZ (Online-Mode / Mojang Auth)

- **Hypixel** (mc.hypixel.net) – online-mode zorunlu
- **CubeCraft** (play.cubecraft.net) – online-mode zorunlu
- **Tüm resmi büyük sunucular** – Microsoft hesap doğrulama gerekli
- Bu web istemcisi Mojang/Microsoft authentication yapamaz

---

## 🛠️ Özel Sunucu Kurulumu (Test İçin)

### Yerel Offline-Mode Sunucu Başlatın

```bash
# Paper kullanarak (önerilen, hafif, hızlı):
wget https://launcher.mojang.com/v1/objects/.../server.jar
# Veya Paper: https://papermc.io/downloads/paper

echo "eula=true" > eula.txt
echo "online-mode=false" >> server.properties

java -Xmx2G -jar server.jar nogui
```

Sunucu başlattıktan sonra WebCraft'ta:
```
Doğrudan Bağlan → localhost:25565
```

---

## 🎮 Oyun Kontrolleri

| Kontrol | Tuş / Hareket |
|---------|--------------|
| İleri | W veya ↑ |
| Geri | S veya ↓ |
| Sol | A veya ← |
| Sağ | D veya → |
| Sıçra | SPACE |
| Chat Aç/Kapat | T |
| Inventory | E |
| Pause | ESC |
| Mouse Bak | Sağ Tıkla ve Sürükle |
| Touch Cihazlar | Hareket joystick + Look área |

---

## 📡 Network & Proxy Kurulum

### Eğer WebCraft'i Uzak Sunucuda Çalıştırıyorsanız

```bash
# Uzak sunucu (example.com) üzerinde:
PORT=80 npm start

# Tarayıcıdan:
https://example.com
```

WebCraft, gelen WebSocket `/ws-proxy` bağlantılarını yönetir:
- Query: `?host=sunucu.ip&port=25565&username=oyuncuadı`
- Handshake → Protocol 769 (1.21.4)
- Offline-Mode login (UUID random)
- Chunk heightmap extract + render

### Eğer Bir HTTP/HTTPS Proxy Arkasındaysanız

Proxy sunucu WebSocket (`ws://` / `wss://`) desteği gerektirir:

```nginx
# Nginx örneği:
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://localhost:5173;
    }

    location /ws-proxy {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 86400;
    }
}
```

---

## 🐛 Sorun Giderme

### Sorun: "Bu sunucu şifreleme (online-mode) istiyor"

**Sebep:** Sunucu online-mode=true yapılandırılmış.

**Çözüm:**
```bash
# Sunucunun server.properties dosyasını edit et:
nano server.properties

# Satırı bul ve değiştir:
online-mode=false

# Sunucuyu yeniden başlat
```

---

### Sorun: "TCP Köprüsü / WebSocket bağlantı hatası"

**Sebep:** Firewall, port kapalı, veya sunucu yanlış adreste.

**Çözüm:**
```bash
# 1. Sunucunun çalışıp çalışmadığını kontrol et:
telnet sunucuadı.com 25565
# veya nc (netcat):
nc -zv sunucuadı.com 25565

# 2. WebCraft'ın kendi sunucusu ayakta mı kontrol et:
curl http://localhost:3000
# Veya Firefox DevTools → Network → /ws-proxy

# 3. Firewall kuralları:
sudo ufw allow 25565/tcp  # Minecraft port
sudo ufw allow 3000/tcp   # WebCraft server port
```

---

### Sorun: Sunucuya bağlandığı söylüyor ama dünyaya girmiyor

**Sebep:** Chunk data parse hatası, veya protocol mismatch.

**Çözüm:**
1. Tarayıcı Console'u aç (F12)
2. WebSocket mesajlarını izle (Network tab)
3. `"state": "play"` mesajı geldi mi kontrol et
4. Server logs'unda hata var mı bak
5. Sunucu sürümünün 1.21.4 olduğundan emin ol

---

### Sorun: "Chunk" event'leri geliyor ama hiç blok görünmüyor

**Sebep:** Heightmap decode'u başarısız, veya oyuncu spawn pozisyonu çok yüksekte/aşağıda.

**Çözüm:**
- Spawn position'ı kontrol et (chat'te gösterilir)
- Oyuncuyu manuel olarak hareket ettir (W+Space)
- Server restart ettikten sonra yeniden dene

---

## 🔧 Geliştirici Notları

### Dosya Yapısı

```
WebCraft/
├── server.ts                      # Node.js + minecraft-protocol entegrasyon
├── src/
│   ├── components/
│   │   ├── GameCanvas.tsx         # Three.js render + WebSocket handler
│   │   ├── MultiplayerMenu.tsx    # Sunucu seçimi UI
│   │   └── ...
│   ├── utils/
│   │   └── audio.ts               # Ses efektleri
│   └── types.ts
├── public/                        # Static assets
├── package.json
└── vite.config.ts
```

### Protokol Akışı (server.ts)

1. **WebSocket Upgrade:** `/ws-proxy?host=X&port=Y&username=Z`
2. **createClient:** `mc.createClient({ host, port, username, auth: 'offline' })`
3. **Event Listeners:**
   - `playerJoin` → `{type: 'joined_world'}`
   - `packet` (state=play) → paket ismine göre parse
   - `map_chunk` → heightmap extract → `{type: 'chunk', x, z, heightmapPacked}`
   - `playerChat`, `systemChat` → JSON forward
4. **Graceful Disconnect:** Socket kapatıldığında TCP connection temizleme

### Chunk Render Mantığı (GameCanvas.tsx)

- **Sunucu varsa:** `buildTerrainColumn(x, z, topY)` – heightmap'tan y değerini kullanır
- **Sunucu yoksa:** Prosedürel Perlin-like sine terrain üretir
- Blok tipi: bedrock (y=0), dirt (y-3 ile y arasında), grass (y=top), stone (altı)

### Kısıtlamalar ve Bilinen Sorunlar

1. **Chunk Render:** Tam block-state palette decode'u yapılmaz, sadece heightmap tahmini
2. **Entities:** Oyuncular/mob'lar görünmez (scope out)
3. **Inventory:** Local fake envanter
4. **Redstone/Mekanizmalar:** Render edilmez
5. **Protocol Version:** Sabit 1.21.4 (protokol 769)

---

## 📚 Kaynaklar

- **Minecraft Protocol Wiki:** https://minecraft.wiki/w/Java_Edition_protocol
- **minecraft-protocol (Node):** https://github.com/PrismarineJS/node-minecraft-protocol
- **Three.js Docs:** https://threejs.org/docs/
- **Vite:** https://vitejs.dev/

---

## 📝 Lisans

Bu proje, WebCraft orijinal repo'su temel alınarak geliştirilmiştir.
Minecraft, Mojang Studios tarafındandır.

---

## 🎯 Sonraki Adımlar (İyileştirmeler)

- [ ] Full block-state palette decode (chunk data'nın tamamı)
- [ ] Entity render (oyuncu avatarları)
- [ ] Blok kırma/yerleştirme fiziği
- [ ] Online-mode support (token-based, değil Mojang)
- [ ] Mobil UI iyileştirmesi
- [ ] Sound effects (yerleştirme, yıkma)
- [ ] Multiplayer visual indicators

---

## 💬 Geri Bildirim

Sorun veya önerileriniz için GitHub issues'ları açabilirsiniz.

**Eğlenceleri yoğun olsun! 🎮**
