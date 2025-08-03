interface DebitCatProps {
  catExpression: 'happy' | 'surprised' | 'content' | 'guard' | 'wink' | 'excited' | 'sleepy' | 'love';
  isBlinking: boolean;
  tailWag: boolean;
  earTwitch: boolean;
  catSize: number;
}

export default function DebitCat({ 
  catExpression, 
  isBlinking, 
  tailWag, 
  earTwitch, 
  catSize 
}: DebitCatProps) {
  return (
    <div className="relative flex items-center justify-center">
      <svg width={catSize} height={catSize} viewBox="0 0 120 120" className="relative z-10">
        {/* Фон с мемными элементами */}
        <circle cx="60" cy="60" r="55" fill="url(#debitBg)" opacity="0.1" />
        
        {/* Гигантская FiFiCoin */}
        <circle cx="60" cy="70" r="25" fill="url(#coinGrad)" className="animate-pulse" />
        <circle cx="60" cy="70" r="20" fill="#FFD700" opacity="0.8" />
        <text x="60" y="67" textAnchor="middle" fontSize="6" fill="#4A90E2" fontWeight="bold">FiFi</text>
        <text x="60" y="76" textAnchor="middle" fontSize="5" fill="#4A90E2" fontWeight="bold">₽</text>
        
        {/* Кот обнимает монету - рыжий табби */}
        <g transform="translate(60, 35)">
          {/* Хвост */}
          <path 
            d="M-35 15 Q-45 10 -40 25 Q-35 20 -30 25" 
            fill="#FF8C42" 
            stroke="#E67E22" 
            strokeWidth="1"
            className={tailWag ? "animate-wiggle" : ""}
          />
          <path d="M-37 18 L-35 16 M-32 22 L-30 20" stroke="#E67E22" strokeWidth="1" />
          
          {/* Тело */}
          <ellipse cx="0" cy="20" rx="18" ry="22" fill="#FF8C42" />
          {/* Полоски на теле */}
          <path d="M-15 10 Q0 8 15 10" stroke="#E67E22" strokeWidth="2" fill="none" />
          <path d="M-15 18 Q0 16 15 18" stroke="#E67E22" strokeWidth="2" fill="none" />
          <path d="M-15 26 Q0 24 15 26" stroke="#E67E22" strokeWidth="2" fill="none" />
          
          {/* Голова */}
          <circle cx="0" cy="0" r="14" fill="#FF8C42" />
          {/* Полоски на голове */}
          <path d="M-10 -8 Q0 -10 10 -8" stroke="#E67E22" strokeWidth="1.5" fill="none" />
          <path d="M-8 -3 Q0 -5 8 -3" stroke="#E67E22" strokeWidth="1.5" fill="none" />
          
          {/* Ушки */}
          <path d="M-8 -10 L-12 -18 L-4 -12" fill="#FF8C42" className={earTwitch ? "animate-wiggle" : ""} />
          <path d="M8 -10 L12 -18 L4 -12" fill="#FF8C42" className={earTwitch ? "animate-wiggle" : ""} />
          <path d="M-9 -12 L-8 -15 L-6 -12" fill="#FFB366" />
          <path d="M9 -12 L8 -15 L6 -12" fill="#FFB366" />
          
          {/* Лапы обнимающие монету */}
          <ellipse cx="-12" cy="25" rx="6" ry="12" fill="#FF8C42" transform="rotate(-20 -12 25)" />
          <ellipse cx="12" cy="25" rx="6" ry="12" fill="#FF8C42" transform="rotate(20 12 25)" />
          
          {/* Глаза */}
          {catExpression === 'love' ? (
            <>
              <path d="M-5 -2 L-3 -5 L-1 -2 L-3 0 Z" fill="#FF1493" />
              <path d="M1 -2 L3 -5 L5 -2 L3 0 Z" fill="#FF1493" />
            </>
          ) : isBlinking ? (
            <>
              <path d="M-6 -2 Q-4 -1 -2 -2" stroke="#333" strokeWidth="2" fill="none" />
              <path d="M2 -2 Q4 -1 6 -2" stroke="#333" strokeWidth="2" fill="none" />
            </>
          ) : (
            <>
              <circle cx="-4" cy="-2" r="2.5" fill="#333" />
              <circle cx="4" cy="-2" r="2.5" fill="#333" />
              <circle cx="-3.5" cy="-2.5" r="0.8" fill="#FFF" />
              <circle cx="4.5" cy="-2.5" r="0.8" fill="#FFF" />
            </>
          )}
          
          {/* Нос */}
          <path d="M-1 3 L1 3 L0 5 Z" fill="#FFB3BA" />
          
          {/* Рот */}
          <path d="M-3 6 Q0 9 3 6" stroke="#333" strokeWidth="1.5" fill="none" />
          
          {/* Усы */}
          <path d="M-12 2 L-8 3" stroke="#333" strokeWidth="1" />
          <path d="M-12 5 L-8 5" stroke="#333" strokeWidth="1" />
          <path d="M8 3 L12 2" stroke="#333" strokeWidth="1" />
          <path d="M8 5 L12 5" stroke="#333" strokeWidth="1" />
        </g>
        
        {/* Мемные элементы вокруг */}
        <text x="20" y="30" fontSize="8" fill="#FFD700" className="animate-bounce">₽</text>
        <text x="100" y="40" fontSize="6" fill="#4A90E2" className="animate-pulse">💰</text>
        
        <defs>
          <radialGradient id="debitBg">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FF8C42" />
          </radialGradient>
          <radialGradient id="coinGrad">
            <stop offset="0%" stopColor="#FFE55C" />
            <stop offset="100%" stopColor="#FFD700" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}