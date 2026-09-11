import React from 'react';

export interface MinecraftHudProps {
  health: number; // 0 to 20
  food: number;   // 0 to 20
  armor?: number;  // 0 to 20
  xpLevel?: number;
  xpProgress?: number; // 0.0 to 1.0
  air?: number; // 0 to 20 (underwater)
}

export const MinecraftHud: React.FC<MinecraftHudProps> = ({
  health = 20,
  food = 20,
  armor = 0,
  xpLevel = 7,
  xpProgress = 0.65,
  air = 20,
}) => {
  const clampedHealth = Math.max(0, Math.min(20, health));
  const clampedFood = Math.max(0, Math.min(20, food));
  const clampedArmor = Math.max(0, Math.min(20, armor));
  const clampedAir = Math.max(0, Math.min(20, air));

  // Render 10 Heart Icons for Health
  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < 10; i++) {
      const heartValue = (i + 1) * 2;
      let state = 'empty';
      if (clampedHealth >= heartValue) {
        state = 'full';
      } else if (clampedHealth >= heartValue - 1) {
        state = 'half';
      }

      hearts.push(
        <div key={`heart-${i}`} className="w-4 h-4 relative flex items-center justify-center select-none">
          {/* Heart Container / Background */}
          <svg className="w-4 h-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" viewBox="0 0 9 9" fill="none">
            <path d="M1 3h1V2h2v1h1V2h2v1h1v3H8v1H7v1H6v1H3V8H2V7H1V6H0V3h1z" fill="#1f0000" />
            <path d="M1 3h2V2H1v1zm4 0h2V2H5v1z" fill="#3f0000" />
            {state === 'full' && (
              <>
                <path d="M1 3h3v3H1V3zm4 0h3v3H5V3z" fill="#ff2222" />
                <path d="M2 3h1v1H2V3zm4 0h1v1H6V3z" fill="#ffffff" />
                <path d="M2 6h5v2H2V6z" fill="#cc0000" />
              </>
            )}
            {state === 'half' && (
              <>
                <path d="M1 3h3v3H1V3z" fill="#ff2222" />
                <path d="M2 3h1v1H2V3z" fill="#ffffff" />
                <path d="M2 6h2v2H2V6z" fill="#cc0000" />
              </>
            )}
          </svg>
        </div>
      );
    }
    return hearts;
  };

  // Render 10 Hunger Drumsticks
  const renderDrumsticks = () => {
    const drumsticks = [];
    for (let i = 0; i < 10; i++) {
      const foodValue = (i + 1) * 2;
      let state = 'empty';
      if (clampedFood >= foodValue) {
        state = 'full';
      } else if (clampedFood >= foodValue - 1) {
        state = 'half';
      }

      drumsticks.push(
        <div key={`food-${i}`} className="w-4 h-4 relative flex items-center justify-center select-none">
          <svg className="w-4 h-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" viewBox="0 0 9 9" fill="none">
            <path d="M2 2h5v5H2V2z" fill="#2b1a09" />
            {state === 'full' && (
              <>
                <path d="M3 2h3v3H3V2z" fill="#bd6d2b" />
                <path d="M4 3h2v2H4V3z" fill="#e0a05a" />
                <path d="M2 6h2v2H2V6z" fill="#f0d0a0" />
              </>
            )}
            {state === 'half' && (
              <>
                <path d="M4 2h2v3H4V2z" fill="#bd6d2b" />
                <path d="M5 3h1v2H5V3z" fill="#e0a05a" />
                <path d="M2 6h1v2H2V6z" fill="#f0d0a0" />
              </>
            )}
          </svg>
        </div>
      );
    }
    return drumsticks;
  };

  // Render 10 Armor Chestplate Icons
  const renderArmor = () => {
    if (clampedArmor <= 0) return null;
    const armors = [];
    for (let i = 0; i < 10; i++) {
      const armorVal = (i + 1) * 2;
      const isFull = clampedArmor >= armorVal;
      const isHalf = clampedArmor >= armorVal - 1;

      if (!isHalf) continue;

      armors.push(
        <div key={`armor-${i}`} className="w-4 h-4 relative flex items-center justify-center select-none">
          <svg className="w-4 h-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" viewBox="0 0 9 9" fill="none">
            <path d="M1 1h7v7H1V1z" fill="#1a1a1a" />
            <path d="M2 2h5v5H2V2z" fill={isFull ? '#e2e2e2' : '#999999'} />
            <path d="M3 2h3v2H3V2z" fill="#ffffff" />
          </svg>
        </div>
      );
    }
    return armors;
  };

  return (
    <div className="flex flex-col gap-1 items-center justify-end select-none pointer-events-none pb-1">
      {/* Top Row: Armor (Left) & Underwater Air (Right) */}
      <div className="w-[360px] max-w-full flex justify-between items-center px-1">
        <div className="flex items-center gap-0.5">{renderArmor()}</div>
        {clampedAir < 20 && (
          <div className="flex items-center gap-0.5">
            {Array.from({ length: Math.ceil(clampedAir / 2) }).map((_, idx) => (
              <div key={idx} className="w-3.5 h-3.5 bg-cyan-400 rounded-full border border-blue-900 shadow" />
            ))}
          </div>
        )}
      </div>

      {/* Main Status Bars Row: Health (Left) & Hunger (Right) */}
      <div className="w-[360px] max-w-full flex justify-between items-center px-1">
        {/* Health Hearts */}
        <div className="flex items-center gap-0.5">{renderHearts()}</div>
        {/* Hunger Drumsticks */}
        <div className="flex items-center gap-0.5 flex-row-reverse">{renderDrumsticks()}</div>
      </div>

      {/* Minecraft Authentic Green Experience (XP) Bar */}
      <div className="w-[360px] max-w-full h-2.5 bg-black/80 border border-gray-900 rounded-sm relative overflow-hidden flex items-center shadow-md">
        {/* Fill */}
        <div
          style={{ width: `${Math.min(100, Math.max(0, xpProgress * 100))}%` }}
          className="h-full bg-gradient-to-r from-lime-500 via-green-400 to-emerald-300 shadow-[0_0_8px_rgba(74,222,128,0.8)]"
        />
        {/* Level Number */}
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-lime-300 tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
          {xpLevel}
        </div>
      </div>
    </div>
  );
};
