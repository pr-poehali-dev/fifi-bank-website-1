interface PremiumCatProps {
  catExpression: 'happy' | 'surprised' | 'content' | 'guard' | 'wink' | 'excited' | 'sleepy' | 'love';
  isBlinking: boolean;
  tailWag: boolean;
  earTwitch: boolean;
  catSize: number;
  isHovered: boolean;
}

export default function PremiumCat({ 
  catExpression, 
  isBlinking, 
  tailWag, 
  earTwitch, 
  catSize,
  isHovered
}: PremiumCatProps) {
  return (
    <div className="relative">
      <svg width={catSize} height={catSize} viewBox="0 0 120 120">
        {/* VIP фон */}
        <rect x="5" y="5" width="110" height="110" fill="url(#premiumBg)" opacity="0.1" rx="20" />
        
        <g transform="translate(60, 25)">
          {/* Красная дорожка */}
          <rect x="-25" y="50" width="50" height="8" fill="#DC143C" opacity="0.6" />
          
          {/* Хвост мейн-куна */}
          <path 
            d="M-30 25 Q-40 20 -35 35 Q-30 30 -25 35" 
            fill="#9370DB"
            className={tailWag ? "animate-wiggle" : ""}
          />
          <path d="M-32 28 L-30 26 M-28 32 L-26 30" stroke="#8A2BE2" strokeWidth="1" />
          
          {/* Корона VIP */}
          <g transform="translate(0, -15)">
            <path d="M-15 5 L-10 -5 L-5 0 L0 -8 L5 0 L10 -5 L15 5 Z" fill="#FFD700" />
            <circle cx="0" cy="-3" r="3" fill="#FF69B4" className="animate-pulse" />
            <circle cx="-8" cy="1" r="2" fill="#87CEEB" />
            <circle cx="8" cy="1" r="2" fill="#87CEEB" />
          </g>
          
          {/* Тело мейн-куна крупное */}
          <ellipse cx="0" cy="30" rx="20" ry="25" fill="#9370DB" />
          <ellipse cx="0" cy="28" rx="17" ry="20" fill="#8A2BE2" opacity="0.3" />
          
          {/* Голова мейн-куна */}
          <ellipse cx="0" cy="5" rx="16" ry="18" fill="#9370DB" />
          
          {/* Ушки с кисточками */}
          <path d="M-10 -8 L-14 -18 L-6 -12" fill="#9370DB" className={earTwitch ? "animate-wiggle" : ""} />
          <path d="M10 -8 L14 -18 L6 -12" fill="#9370DB" className={earTwitch ? "animate-wiggle" : ""} />
          {/* Кисточки */}
          <path d="M-14 -18 L-13 -22" stroke="#8A2BE2" strokeWidth="2" />
          <path d="M14 -18 L13 -22" stroke="#8A2BE2" strokeWidth="2" />
          
          {/* Лапы машущие VIP */}
          <ellipse 
            cx="-15" 
            cy="35" 
            rx="6" 
            ry="12" 
            fill="#9370DB"
            className={isHovered ? "animate-wiggle" : ""}
          />
          <ellipse cx="15" cy="35" rx="6" ry="12" fill="#9370DB" />
          
          {/* Глаза VIP */}
          {isBlinking ? (
            <>
              <path d="M-7 3 Q-5 2 -3 3" stroke="#333" strokeWidth="2" fill="none" />
              <path d="M3 3 Q5 2 7 3" stroke="#333" strokeWidth="2" fill="none" />
            </>
          ) : (
            <>
              <path d="M-8 3 Q-5 0 -2 3" stroke="#333" strokeWidth="2" fill="none" />
              <path d="M2 3 Q5 0 8 3" stroke="#333" strokeWidth="2" fill="none" />
              <circle cx="-5" cy="3" r="1" fill="#FFD700" />
              <circle cx="5" cy="3" r="1" fill="#FFD700" />
            </>
          )}
          
          {/* Нос */}
          <path d="M-1 8 L1 8 L0 10 Z" fill="#FFB3BA" />
          
          {/* Рот довольный VIP */}
          <path d="M-5 12 Q0 16 5 12" stroke="#333" strokeWidth="2" fill="none" />
          
          {/* Усы аристократичные */}
          <path d="M-16 6 L-9 7" stroke="#333" strokeWidth="1" />
          <path d="M-16 9 L-9 9" stroke="#333" strokeWidth="1" />
          <path d="M9 7 L16 6" stroke="#333" strokeWidth="1" />
          <path d="M9 9 L16 9" stroke="#333" strokeWidth="1" />
          
          {/* VIP аксессуары */}
          <ellipse cx="0" cy="20" rx="8" ry="3" fill="#FFD700" opacity="0.7" />
          <text x="0" y="22" textAnchor="middle" fontSize="4" fill="#9370DB" fontWeight="bold">VIP</text>
        </g>
        
        {/* Premium символы */}
        <text x="15" y="25" fontSize="10" fill="#FFD700" className="animate-pulse">👑</text>
        <text x="95" y="30" fontSize="8" fill="#9370DB" className="animate-bounce">💎</text>
        <text x="20" y="105" fontSize="6" fill="#FF69B4" className="animate-pulse">⭐</text>
        <text x="95" y="105" fontSize="6" fill="#FFD700" className="animate-bounce">🎩</text>
        
        <defs>
          <radialGradient id="premiumBg">
            <stop offset="0%" stopColor="#9370DB" />
            <stop offset="50%" stopColor="#8A2BE2" />
            <stop offset="100%" stopColor="#FF69B4" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}