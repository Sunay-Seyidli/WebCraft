# 🎮 WebCraft Minecraft Web İstemcisi - Başlayın

Hoşgeldiniz! Bu paket, tarayıcıda çalışan **gerçek Minecraft Java Edition (1.21.4)** istemcisidir.

## 📦 İçeride Ne Var?

```
WebCraft/
├── 📄 START_HERE.md              ← Şu an burdasınız
├── 📄 QUICKSTART.md              ← 5 dakikalık hızlı başlangıç
├── 📄 README_TR.md               ← Tam tüm detaylar & sorun giderme
├── 📄 NELER_YAPILDI.md           ← Teknik açıklamalar
├── 📦 package.json               ← npm dependencies
├── 🖥️  server.ts                  ← Node.js sunucu + protokol handler
├── 📁 src/                        ← React/TypeScript kaynak
├── 📁 public/                     ← Statik assets
├── 📁 WebCraft-dist/              ← Hazır build (production)
└── .env.example                  ← Environment variables template
```

## ⚡ 30 Saniyede Başla

```bash
# 1. Dependencies yükle
npm install

# 2. Başlat
npm run dev

# 3. Tarayıcı aç
# http://localhost:5173

# 4. Sunucuya katıl
# Menü → Çok Oyunculu → Doğrudan Bağlan → sunucuadı.com:25565
```

## 🎯 Ana Özellikler

✅ **Gerçek Minecraft Sunucularına Bağlan**
- Handshake, Login, Configuration, Play protokolü
- Offline-mode (cracked) sunucular
- Chunk data → real terrain rendering
- Chat & player list senkronizasyonu

✅ **Tarayıcıda Tam Oynanabilir**
- Three.js 3D render
- Hareket, sıçrama, camera kontrol
- Chat input
- Inventory (fake local)

❌ **Kısıtlamalar**
- Sadece **offline-mode** sunucular (Hypixel vb. çalışmaz)
- Entities (oyuncular) render'lanmaz
- Block breaking/placing yok (read-only)

## 📖 Dokümantasyon

| Dosya | İçerik |
|-------|--------|
| **QUICKSTART.md** | 5 dakikalık setup |
| **README_TR.md** | Tüm detaylar, sorun giderme |
| **NELER_YAPILDI.md** | Teknik/mimari açıklamalar |

## 🚀 Hızlı Referans

### Geliştirme (Development)
```bash
npm run dev      # Vite dev server → http://localhost:5173
npm run lint     # TypeScript check
```

### Üretim (Production)
```bash
npm run build    # Build → dist/
npm start        # Production server → PORT 3000
# Veya: PORT=8080 npm start
```

### Üretim Deploy'u
```bash
# Tarayıcıya açtır:
ssh server.com
cd /opt/webcraft
npm install
npm run build
PORT=80 npm start &
# İnsan açar: http://server.com
```

## 🎮 Oyun Kontrolleri

| Aksiyon | Tuş |
|---------|-----|
| İleri | W |
| Geri | S |
| Sol | A |
| Sağ | D |
| Sıçra | SPACE |
| Chat | T |
| Bak (Mouse) | Sağ Tıkla + Sürükle |

## ⚙️ Sunucu Kurulumu

E�er kendi offline-mode sunucusu kuraracaksan:

```bash
# Paper recommended (hafif, hızlı)
# https://papermc.io/downloads/paper → paper-1.21.4-xyz.jar

echo "eula=true" > eula.txt
echo "online-mode=false" >> server.properties
java -Xmx2G -jar paper.jar nogui
```

WebCraft'ta bağlan:
```
Doğrudan Bağlan → localhost:25565
```

## ❓ Sık Sorulan Sorular

### S: Neden Hypixel çalışmıyor?
**C:** Online-mode gerekli. Bu istemci offline-mode'u destekler. Kendi sunucusunu kur.

### S: Neden oyuncular görünmüyor?
**C:** Entity rendering V2'de. Şu an sadece terrain + chat.

### S: Çalışmıyor! Ne yapmalı?
**C:** [README_TR.md](./README_TR.md) sorun giderme bölümüne bak.

### S: Diğer sürümlere destek var mı? (1.20, 1.19?)
**C:** Şu an 1.21.4 sınırlı. Diğer sürümler için src/components/GameCanvas.tsx'te yapılandırma yapılabilir.

## 📞 Destek

Hata veya soru için:
1. [README_TR.md](./README_TR.md) sorun giderme okuyun
2. Tarayıcı Console'u aç (F12)
3. Server logs'unu kontrol et
4. GitHub issues aç

## 🎓 Teknik Stack

- **Frontend:** React 19 + TypeScript + Three.js + Vite
- **Backend:** Node.js + Express + WebSocket
- **Protokol:** minecraft-protocol (v1.68.0)
- **Styling:** Tailwind CSS + Minecraft font

## 📜 Lisans

Bu proje WebCraft orijinal repo'su temel alındı.

---

**Sonraki Adım:** [QUICKSTART.md](./QUICKSTART.md) okuyun veya `npm run dev` yazın! 🎮

E�lencenize! 🚀
