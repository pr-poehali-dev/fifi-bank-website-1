interface CreditCatProps {
  catExpression: 'happy' | 'surprised' | 'content' | 'guard' | 'wink' | 'excited' | 'sleepy' | 'love';
  isBlinking: boolean;
  tailWag: boolean;
  earTwitch: boolean;
  catSize: number;
}

export default function CreditCat({ 
  catExpression, 
  isBlinking, 
  tailWag, 
  earTwitch, 
  catSize 
}: CreditCatProps) {
  return (
    <div className="relative">
      <svg width={catSize} height={catSize} viewBox="0 0 120 120">
        {/* Фон с кредитными элементами */}
        <rect x="10" y="10" width="100" height="100" fill="url(#creditBg)" opacity="0.1" rx="10" />
        
        <g transform="translate(60, 35)">
          {/* Хвост сиамского кота */}
          <path 
            d="M-30 20 Q-40 15 -35 30 Q-30 25 -25 30" 
            fill="#1E3A8A" 
            className={tailWag ? "animate-wiggle" : ""}
          />
          
          {/* Тело сиамского кота */}
          <ellipse cx="0" cy="25" rx="16" ry="20" fill="#F5F5DC" />
          
          {/* Голова */}
          <ellipse cx="0" cy="0" rx="12" ry="14" fill="#F5F5DC" />
          
          {/* Сиамские отметины */}
          <ellipse cx="0" cy="-5" rx="8" ry="6" fill="#1E3A8A" opacity="0.7" />
          
          {/* Ушки с темными кончиками */}
          <path d="M-7 -12 L-11 -20 L-3 -14" fill="#1E3A8A" className={earTwitch ? "animate-wiggle" : ""} />
          <path d="M7 -12 L11 -20 L3 -14" fill="#1E3A8A" className={earTwitch ? "animate-wiggle" : ""} />
          
          {/* Лапы */}
          <ellipse cx="-10" cy="35" rx="5" ry="10" fill="#1E3A8A" />
          <ellipse cx="10" cy="35" rx="5" ry="10" fill="#1E3A8A" />
          
          {/* Глаза - голубые сиамские */}
          {catExpression === 'surprised' ? (
            <>
              <ellipse cx="-4" cy="-2" rx="3" ry="4" fill="#87CEEB" />
              <ellipse cx="4" cy="-2" rx="3" ry="4" fill="#87CEEB" />
              <circle cx="-4" cy="-2" r="2" fill="#1E3A8A" />
              <circle cx="4" cy="-2" r="2" fill="#1E3A8A" />
            </>
          ) : catExpression === 'content' ? (
            <>
              <path d="M-6 -2 Q-4 0 -2 -2" stroke="#1E3A8A" strokeWidth="2" fill="none" />
              <path d="M2 -2 Q4 0 6 -2" stroke="#1E3A8A" strokeWidth="2" fill="none" />
            </>
          ) : isBlinking ? (
            <>
              <path d="M-6 -2 Q-4 -1 -2 -2" stroke="#1E3A8A" strokeWidth="2" fill="none" />
              <path d="M2 -2 Q4 -1 6 -2" stroke="#1E3A8A" strokeWidth="2" fill="none" />
            </>
          ) : (
            <>
              <ellipse cx="-4" cy="-2" rx="2" ry="3" fill="#87CEEB" />
              <ellipse cx="4" cy="-2" rx="2" ry="3" fill="#87CEEB" />
              <circle cx="-4" cy="-2" r="1.5" fill="#1E3A8A" />
              <circle cx="4" cy="-2" r="1.5" fill="#1E3A8A" />
            </>
          )}
          
          {/* Нос */}
          <path d="M-1 3 L1 3 L0 5 Z" fill="#FFB3BA" />
          
          {/* Рот */}
          {catExpression === 'content' ? (
            <path d="M-4 7 Q0 11 4 7" stroke="#1E3A8A" strokeWidth="1.5" fill="none" />
          ) : catExpression === 'surprised' ? (
            <ellipse cx="0" cy="7" rx="2" ry="3" fill="#1E3A8A" />
          ) : (
            <path d="M-2 7 Q0 9 2 7" stroke="#1E3A8A" strokeWidth="1.5" fill="none" />
          )}
          
          {/* Усы */}
          <path d="M-10 1 L-7 2" stroke="#333" strokeWidth="1" />
          <path d="M-10 4 L-7 4" stroke="#333" strokeWidth="1" />
          <path d="M7 2 L10 1" stroke="#333" strokeWidth="1" />
          <path d="M7 4 L10 4" stroke="#333" strokeWidth="1" />
        </g>
        
        {/* Кредитные символы */}
        <text x="15" y="25" fontSize="10" fill="#4A90E2" className="animate-pulse">💳</text>
        <text x="95" y="100" fontSize="8" fill="#9370DB" className="animate-bounce">%</text>
        
        <defs>
          <linearGradient id="creditBg">
            <stop offset="0%" stopColor="#4A90E2" />
            <stop offset="100%" stopColor="#9370DB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}