interface DepositCatProps {
  catExpression: 'happy' | 'surprised' | 'content' | 'guard' | 'wink' | 'excited' | 'sleepy' | 'love';
  isBlinking: boolean;
  tailWag: boolean;
  earTwitch: boolean;
  catSize: number;
  isTreasureOpen: boolean;
}

export default function DepositCat({ 
  catExpression, 
  isBlinking, 
  tailWag, 
  earTwitch, 
  catSize,
  isTreasureOpen
}: DepositCatProps) {
  return (
    <div className="relative">
      <svg width={catSize} height={catSize} viewBox="0 0 120 120">
        {/* Фон с депозитными элементами */}
        <rect x="5" y="5" width="110" height="110" fill="url(#depositBg)" opacity="0.1" rx="15" />
        
        <g transform="translate(60, 20)">
          {/* Сундук */}
          <rect 
            x="-20" 
            y="50" 
            width="40" 
            height="25" 
            fill="#8B4513" 
            rx="3"
          />
          {/* Крышка сундука */}
          <rect 
            x="-20" 
            y={isTreasureOpen ? "42" : "50"} 
            width="40" 
            height="12" 
            fill="#A0522D" 
            rx="3"
            className="transition-all duration-500"
          />
          {/* Замок */}
          <rect x="-3" y="58" width="6" height="8" fill="#FFD700" rx="1" />
          
          {/* Свечение из сундука */}
          {isTreasureOpen && (
            <>
              <circle cx="0" cy="62" r="15" fill="#FFD700" opacity="0.6" className="animate-pulse" />
              <path d="M-10 55 L10 55 L5 45 L-5 45 Z" fill="#FFD700" opacity="0.4" />
            </>
          )}
          
          {/* Персидский кот-охранник */}
          <g transform="translate(0, 10)">
            {/* Хвост пушистый */}
            <ellipse 
              cx="-25" 
              cy="25" 
              rx="6" 
              ry="15" 
              fill="#32CD32"
              className={tailWag ? "animate-wiggle" : ""}
            />
            <ellipse cx="-25" cy="20" rx="4" ry="10" fill="#228B22" />
            
            {/* Тело пушистое */}
            <ellipse cx="0" cy="30" rx="18" ry="22" fill="#32CD32" />
            <ellipse cx="0" cy="28" rx="15" ry="18" fill="#228B22" opacity="0.3" />
            
            {/* Голова круглая персидская */}
            <circle cx="0" cy="8" r="16" fill="#32CD32" />
            <circle cx="0" cy="6" r="13" fill="#228B22" opacity="0.2" />
            
            {/* Ушки маленькие */}
            <ellipse cx="-8" cy="-2" rx="4" ry="6" fill="#32CD32" className={earTwitch ? "animate-wiggle" : ""} />
            <ellipse cx="8" cy="-2" rx="4" ry="6" fill="#32CD32" className={earTwitch ? "animate-wiggle" : ""} />
            <ellipse cx="-8" cy="-1" rx="2" ry="3" fill="#90EE90" />
            <ellipse cx="8" cy="-1" rx="2" ry="3" fill="#90EE90" />
            
            {/* Глаза охранника */}
            {catExpression === 'guard' ? (
              <>
                <path d="M-6 6 L-4 4 L-2 6" stroke="#333" strokeWidth="2" fill="none" />
                <path d="M2 6 L4 4 L6 6" stroke="#333" strokeWidth="2" fill="none" />
              </>
            ) : catExpression === 'wink' ? (
              <>
                <circle cx="-5" cy="6" r="2" fill="#333" />
                <path d="M3 4 Q5 6 3 8" stroke="#333" strokeWidth="2" fill="none" />
              </>
            ) : isBlinking ? (
              <>
                <path d="M-7 6 Q-5 5 -3 6" stroke="#333" strokeWidth="2" fill="none" />
                <path d="M3 6 Q5 5 7 6" stroke="#333" strokeWidth="2" fill="none" />
              </>
            ) : (
              <>
                <circle cx="-5" cy="6" r="2.5" fill="#333" />
                <circle cx="5" cy="6" r="2.5" fill="#333" />
                <circle cx="-4.5" cy="5.5" r="0.8" fill="#FFF" />
                <circle cx="5.5" cy="5.5" r="0.8" fill="#FFF" />
              </>
            )}
            
            {/* Нос персидский приплюснутый */}
            <ellipse cx="0" cy="12" rx="1.5" ry="1" fill="#FFB3BA" />
            
            {/* Рот */}
            <path d="M-3 15 Q0 18 3 15" stroke="#333" strokeWidth="1.5" fill="none" />
            
            {/* Усы длинные */}
            <path d="M-15 10 L-8 11" stroke="#333" strokeWidth="1" />
            <path d="M-15 13 L-8 13" stroke="#333" strokeWidth="1" />
            <path d="M8 11 L15 10" stroke="#333" strokeWidth="1" />
            <path d="M8 13 L15 13" stroke="#333" strokeWidth="1" />
          </g>
        </g>
        
        {/* Депозитные символы */}
        <text x="15" y="30" fontSize="8" fill="#32CD32" className="animate-pulse">💎</text>
        <text x="95" y="35" fontSize="6" fill="#FFD700" className="animate-bounce">🔒</text>
        <text x="20" y="100" fontSize="7" fill="#228B22" className="animate-pulse">💰</text>
        
        <defs>
          <radialGradient id="depositBg">
            <stop offset="0%" stopColor="#32CD32" />
            <stop offset="100%" stopColor="#228B22" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}