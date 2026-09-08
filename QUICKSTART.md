# ⚡ WebCraft - Hızlı Başlangıç (5 Dakika)

## 1️⃣ Dosyaları Hazırla

```bash
# Eğer zip indir ise:
unzip WebCraft-files.zip
cd WebCraft

# Dosyaları kontrol et:
ls -la
# Görmek isteyenler: server.ts, package.json, src/, public/, dist/
```

## 2️⃣ Bağımlılıkları Yükle

```bash
npm install
```

(Node.js 18+ gerekli)

## 3️⃣ Geliştirme Sunucusu Başlat

```bash
npm run dev
```

Çıktı göreceksin:
```
  ➜  Local:   http://localhost:5173/
```

## 4️⃣ Tarayıcıda Aç

http://localhost:5173

## 5️⃣ Sunucuya Bağlan

### Seçenek A: Yerel Sunucu (Bilgisayarınızda)

1. **Ana Menü** → **Çok Oyunculu**
2. `127.0.0.1:25565` seç
3. **Sunucuya Katıl** tuşu

### Seçenek B: Arkadaşın/Kendi Sunucusu

1. **Doğrudan Bağlan** tuşu
2. Adresi gir: `example.com:25565` (veya sadece `example.com`)
3. **Katıl** tuşu

---

## ✅ Başarılı Bağlantı Nedir?

Sohbet log'unda şunları göreceksin:
```
[Sistem] TCP Köprüsü: example.com:25565
[Sistem] Protokol: Play State aktif ✓
[Sistem] ✓ WebPlayer dünyaya katıldı!
[Sistem] Spawn: 100, 64, 50
```

Sonra oyun dünyasını göreceksin ve hareket edebileceksin.

---

## ❌ Sorun Mu?

### "Bağlantı hatası / Sunucu bulunamadı"
- Sunucu adresini kontrol et
- Firewall'u kontrol et (port 25565 açık mı?)
- Sunucunun çalıştığından emin ol

### "Online-mode hatası"
- Sunucunun `server.properties` dosyasını edit et
- `online-mode=false` yap
- Sunucuyu restart et

### "Dünyaya girmiş ama hiç blok görünmüyor"
- Fareli (SPACE + W) biraz hareket et yukarı/aşağı
- Spawn pozisyonunun yerde olduğundan emin ol
- F12 Console'u aç, hata var mı bak

---

## 📦 Dağıtım (Deployment)

Herkese açık yapacaksan:

```bash
npm run build
PORT=8080 npm start
```

Tarayıcıdan: `http://sunucunuzun-ip:8080`

(Firewall kural ekle: `sudo ufw allow 8080/tcp`)

---

## 🎮 Kontroller

- **W/A/S/D** - Hareket
- **SPACE** - Sıçra
- **Mouse** - Bak / Sağ Tıkla + Sürükle (mobile)
- **T** - Chat
- **E** - Inventory
- **ESC** - Pause

---

## 💡 Sonraki Adımlar

1. [README_TR.md](./README_TR.md) – Tüm ayrıntılar
2. Server kurulumu: `java -jar server.jar nogui` (Paper recommended)
3. Port yönlendirmesi (eğer port açmak istersen): https://portforward.com

---

**Eğlenceleri olsun! 🎮🎯**
