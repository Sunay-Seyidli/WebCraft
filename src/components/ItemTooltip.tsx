import React from 'react';

export interface ItemTooltipProps {
  type: string;
  name: string;
  count: number;
  x: number;
  y: number;
}

const ITEM_DETAILS: Record<string, { category: string; description: string; rarity?: string }> = {
  // 1.21.4 Tricky Trials
  mace: {
    category: '1.21.4 Ağır Savaş Silahı (+10 Hasar)',
    description: 'Ağır Çekirdek ve Rüzgar Çubuğu birleşimi. Yüksekten düşüş saldırılarında kinetik patlama hasarı verir!',
    rarity: 'text-purple-400 font-bold',
  },
  wind_charge: {
    category: '1.21.4 Rüzgar Topu (Fırlatılabilir)',
    description: 'Breeze canlısından düşer. Fırlatıldığında rüzgar patlaması yaratarak yüksek zıplatır veya düşmanı savurur.',
    rarity: 'text-cyan-300 font-bold',
  },
  breeze_rod: {
    category: '1.21.4 Üretim Malzemesi',
    description: 'Breeze canlısından düşer. Rüzgar topu ve Balyoz (Mace) yapımında kullanılır.',
    rarity: 'text-cyan-400 font-bold',
  },
  heavy_core: {
    category: '1.21.4 Antik Çekirdek',
    description: 'Mahzen (Vault) ödüllerinden çıkar. Balyoz (Mace) başını oluşturur.',
    rarity: 'text-purple-300 font-bold',
  },
  trial_key: {
    category: '1.21.4 Mahzen Anahtarı',
    description: 'Deneme Odaları Spawnerlarından çıkar. Mahzenleri (Vault) açarak ganimet verir.',
    rarity: 'text-amber-400 font-bold',
  },
  ominous_trial_key: {
    category: '1.21.4 Uğursuz Mahzen Anahtarı',
    description: 'Zorlu uğursuz denemelerden kazanılır. En nadir Tricky Trials ödüllerini açar!',
    rarity: 'text-fuchsia-400 font-bold',
  },
  crafter: {
    category: '1.21.4 Kızıltaş Otomatik Üretici',
    description: 'Kızıltaş darbesi aldığında 3x3 ızgaradaki eşyayı otomatik olarak üretir ve fırlatır.',
    rarity: 'text-rose-400 font-bold',
  },
  copper_bulb: {
    category: '1.21.4 Bakır Ampul',
    description: 'Kızıltaş sinyali ile açılıp kapanan şık bakır aydınlatma bloğu.',
    rarity: 'text-orange-400',
  },
  copper_grate: {
    category: '1.21.4 Bakır Izgara',
    description: 'Işık ve su geçiren dekoratif bakır ızgara bloğu.',
    rarity: 'text-orange-300',
  },
  tuff_bricks: {
    category: '1.21.4 Tüf Tuğlası',
    description: 'Deneme odalarının karakteristik sağlam taş tuğlası.',
    rarity: 'text-gray-300',
  },

  // Combat & Interactive Items
  ender_pearl: {
    category: 'Işınlanma Eşyası',
    description: 'Sağ tık ile fırlatıldığında çarptığı noktaya anında ışınlanmanı sağlar.',
    rarity: 'text-emerald-300 font-semibold',
  },
  eye_of_ender: {
    category: 'Ender Gözü',
    description: 'Ender Portalı kalesinin yönünü gösterir ve portal çerçevesini etkinleştirir.',
    rarity: 'text-emerald-400 font-semibold',
  },
  totem_of_undying: {
    category: 'Ölümsüzlük Totemi',
    description: 'Elde tutulduğunda ölümcül darbeleri engeller, kalp ve yenilenme efekti verir!',
    rarity: 'text-yellow-400 font-bold',
  },
  trident: {
    category: 'Zıpkın (+9 Saldırı Hasarı)',
    description: 'Yakın dövüşte ve fırlatılarak kullanılabilir. Girdap büyüsüyle oyuncuyu uçurur.',
    rarity: 'text-cyan-400 font-semibold',
  },
  shield: {
    category: 'Kalkan',
    description: 'Okları, patlamaları ve yakın dövüş saldırılarını bloke eder.',
    rarity: 'text-gray-300',
  },
  bow: {
    category: 'Yay',
    description: 'Ok fırlatarak uzaktaki hedefleri vurur.',
    rarity: 'text-amber-200',
  },
  crossbow: {
    category: 'Tatar Yayı',
    description: 'Önceden doldurulup hazırda bekletilebilen güçlü yay.',
    rarity: 'text-amber-300',
  },
  arrow: {
    category: 'Mühimmat',
    description: 'Yay ve tatar yayı mermisi.',
    rarity: 'text-gray-400',
  },

  // Weapons & Tools
  netherite_sword: {
    category: 'Netherit Kılıç (+8 Saldırı Hasarı)',
    description: 'Lavda yanmayan ve en yüksek dayanıklılığa sahip efsanevi kılıç.',
    rarity: 'text-purple-300 font-bold',
  },
  netherite_pickaxe: {
    category: 'Netherit Kazma (Hız: 9.0)',
    description: 'Lavda yanmaz, tüm blokları en yüksek hızla kazar.',
    rarity: 'text-purple-300 font-bold',
  },
  diamond_sword: {
    category: 'Elmas Kılıç (+7 Saldırı Hasarı)',
    description: 'Dayanıklı ve keskin elmas savaş kılıcı.',
    rarity: 'text-cyan-300 font-semibold',
  },
  diamond_pickaxe: {
    category: 'Elmas Kazma (Hız: 8.0)',
    description: 'Obsidyen ve tüm madenleri hızlıca kazar.',
    rarity: 'text-cyan-300 font-semibold',
  },
  diamond_axe: {
    category: 'Elmas Balta (+9 Saldırı Hasarı)',
    description: 'Ağaçları hızlıca keser ve kalkanları geçici olarak devre dışı bırakır.',
    rarity: 'text-cyan-300',
  },
  iron_sword: {
    category: 'Demir Kılıç (+6 Saldırı Hasarı)',
    description: 'Güvenilir standart savaş kılıcı.',
    rarity: 'text-gray-200',
  },
  iron_pickaxe: {
    category: 'Demir Kazma (Hız: 6.0)',
    description: 'Elmas, altın ve kızıltaş cevherlerini kazabilir.',
    rarity: 'text-gray-200',
  },

  // Foods
  golden_apple: {
    category: 'Büyülü Yiyecek (+4 Açlık)',
    description: 'Emilim II ve Yenilenme II vererek hayatta kalmanı sağlar.',
    rarity: 'text-yellow-300 font-bold',
  },
  enchanted_golden_apple: {
    category: 'Efsanevi Büyülü Altın Elma (Notch Elması)',
    description: 'Yenilenme V, Direnç, Ateş Direnci ve Emilim IV verir!',
    rarity: 'text-purple-400 font-extrabold',
  },
  apple: {
    category: 'Yiyecek (+4 Açlık)',
    description: 'Taze meşe ağacı elması. Sağ tık ile yenilebilir.',
    rarity: 'text-red-400',
  },
  bread: {
    category: 'Yiyecek (+5 Açlık)',
    description: 'Buğdaydan pişirilen doyurucu ekmek.',
    rarity: 'text-amber-300',
  },
  cooked_beef: {
    category: 'Pişmiş Biftek (+8 Açlık)',
    description: 'En yüksek doygunluk veren pişmiş et.',
    rarity: 'text-amber-400 font-semibold',
  },
  golden_carrot: {
    category: 'Altın Havuç (+6 Açlık)',
    description: 'Oyundaki en yüksek doygunluk değerine sahip özel yiyecek.',
    rarity: 'text-yellow-400 font-semibold',
  },

  // Materials & Blocks
  diamond: {
    category: 'Değerli Maden',
    description: 'Yüksek kaliteli alet ve zırh yapımında kullanılır.',
    rarity: 'text-cyan-300 font-bold',
  },
  emerald: {
    category: 'Ticaret Para Birimi',
    description: 'Köylüler ile alışverişte kullanılan değerli zümrüt.',
    rarity: 'text-emerald-400 font-bold',
  },
  netherite_ingot: {
    category: 'Antik Külçe',
    description: 'Antik kalıntılardan elde edilir, elmas teçhizatı güçlendirir.',
    rarity: 'text-purple-400 font-bold',
  },
  gold_ingot: {
    category: 'Altın Külçe',
    description: 'Piyade altın elmalar ve saat yapımında kullanılır.',
    rarity: 'text-yellow-300',
  },
  iron_ingot: {
    category: 'Demir Külçe',
    description: 'Zırh, alet ve mekanizma yapımının temel taşı.',
    rarity: 'text-gray-200',
  },
  obsidian: {
    category: 'Dayanıklı Blok (Patlamaz)',
    description: 'Lav ve suyun birleşimiyle oluşur. Nether portalı yapımında kullanılır.',
    rarity: 'text-purple-300',
  },
  bedrock: {
    category: 'Kırılamaz Katman Kayası',
    description: 'Dünyanın en alt tabakasını oluşturur, hayatta kalma modunda kırılamaz.',
    rarity: 'text-red-500 font-bold',
  },
  crafting_table: {
    category: 'İşleme Masası',
    description: '3x3 genişletilmiş üretim ızgarası sağlar.',
    rarity: 'text-amber-200',
  },
};

export const ItemTooltip: React.FC<ItemTooltipProps> = ({ type, name, count, x, y }) => {
  if (!type || type === 'air' || count <= 0) return null;

  const lowerType = type.toLowerCase().replace('minecraft:', '').trim();
  const info = ITEM_DETAILS[lowerType] || {
    category: 'Minecraft 1.21.4 Eşyası',
    description: `${name || type} (Miktar: ${count})`,
    rarity: 'text-yellow-200',
  };

  return (
    <div
      style={{
        position: 'fixed',
        left: `${Math.min(x + 14, window.innerWidth - 240)}px`,
        top: `${Math.max(10, y - 70)}px`,
        zIndex: 99999,
      }}
      className="pointer-events-none bg-[#100826]/95 border-2 border-[#582cb5] rounded p-2.5 text-xs text-white shadow-[0_8px_24px_rgba(0,0,0,0.8)] backdrop-blur-md max-w-[240px] flex flex-col gap-1 select-none font-sans"
    >
      <div className={`text-sm font-bold leading-tight ${info.rarity || 'text-yellow-300'}`}>
        {name || type}
      </div>
      <div className="text-[10px] text-purple-300 font-medium border-b border-purple-800/60 pb-1">
        {info.category}
      </div>
      <div className="text-[11px] text-gray-300 leading-snug">
        {info.description}
      </div>
      {count > 1 && (
        <div className="text-[10px] text-cyan-400 font-bold pt-0.5">
          Adet: {count}
        </div>
      )}
    </div>
  );
};
