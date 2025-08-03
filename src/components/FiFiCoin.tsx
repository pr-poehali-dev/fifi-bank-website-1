import { useState, useEffect } from 'react';

interface FiFiCoinProps {
  size?: number;
  onClick?: () => void;
}

type Expression = 'happy' | 'wink' | 'surprised' | 'laugh';

export default function FiFiCoin({ size = 48, onClick }: FiFiCoinProps) {
  const [expression, setExpression] = useState<Expression>('happy');
  const [isHovered, setIsHovered] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  // Автоматическое моргание
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (!isHovered && !isBouncing) {
        setExpression('wink');
        setTimeout(() => setExpression('happy'), 200);
      }
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, [isHovered, isBouncing]);

  const handleClick = () => {
    setIsBouncing(true);
    setExpression('laugh');
    onClick?.();
    
    setTimeout(() => {
      setIsBouncing(false);
      setExpression('happy');
    }, 600);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setExpression('surprised');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setExpression('happy');
  };

  const getEyeComponent = () => {
    switch (expression) {
      case 'wink':
        return (
          <>
            <circle cx="35" cy="35" r="3" fill="#4A90E2" />
            <path d="M50 32 Q55 35 50 38" stroke="#4A90E2" strokeWidth="2" fill="none" />
          </>
        );
      case 'surprised':
        return (
          <>
            <circle cx="35" cy="35" r="4" fill="#4A90E2" />
            <circle cx="55" cy="35" r="4" fill="#4A90E2" />
          </>
        );
      case 'laugh':
        return (
          <>
            <path d="M30 35 Q35 30 40 35" stroke="#4A90E2" strokeWidth="2" fill="none" />
            <path d="M50 35 Q55 30 60 35" stroke="#4A90E2" strokeWidth="2" fill="none" />
          </>
        );
      default:
        return (
          <>
            <circle cx="35" cy="35" r="3" fill="#4A90E2" />
            <circle cx="55" cy="35" r="3" fill="#4A90E2" />
          </>
        );
    }
  };

  const getMouthComponent = () => {
    switch (expression) {
      case 'surprised':
        return <circle cx="45" cy="55" r="4" fill="#4A90E2" />;
      case 'laugh':
        return <path d="M35 50 Q45 65 55 50" stroke="#4A90E2" strokeWidth="2" fill="none" />;
      default:
        return <path d="M35 50 Q45 60 55 50" stroke="#4A90E2" strokeWidth="2" fill="none" />;
    }
  };

  return (
    <div
      className={`inline-block cursor-pointer transition-transform duration-200 ${
        isBouncing ? 'animate-bounce' : isHovered ? 'scale-110' : ''
      }`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 90 90"
        className="animate-spin-slow"
        style={{
          filter: 'drop-shadow(0 4px 8px rgba(74, 144, 226, 0.2))',
          animationDuration: '8s',
        }}
      >
        {/* Внешний ободок монеты */}
        <circle
          cx="45"
          cy="45"
          r="42"
          fill="url(#coinGradient)"
          stroke="#4A90E2"
          strokeWidth="3"
        />
        
        {/* Внутренний круг */}
        <circle
          cx="45"
          cy="45"
          r="35"
          fill="url(#innerGradient)"
          stroke="#FFD700"
          strokeWidth="2"
        />

        {/* Декоративные элементы по краю */}
        <circle cx="45" cy="15" r="2" fill="#FFD700" opacity="0.8" />
        <circle cx="45" cy="75" r="2" fill="#FFD700" opacity="0.8" />
        <circle cx="15" cy="45" r="2" fill="#FFD700" opacity="0.8" />
        <circle cx="75" cy="45" r="2" fill="#FFD700" opacity="0.8" />

        {/* Буквы FiFi */}
        <text
          x="45"
          y="25"
          textAnchor="middle"
          fontSize="8"
          fill="#4A90E2"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          FiFi
        </text>

        {/* Лицо */}
        {/* Глаза */}
        <g>{getEyeComponent()}</g>
        
        {/* Рот */}
        <g>{getMouthComponent()}</g>

        {/* Щечки при улыбке */}
        {(expression === 'happy' || expression === 'laugh') && (
          <>
            <circle cx="25" cy="45" r="3" fill="#FFB3BA" opacity="0.6" />
            <circle cx="65" cy="45" r="3" fill="#FFB3BA" opacity="0.6" />
          </>
        )}

        {/* Градиенты */}
        <defs>
          <radialGradient id="coinGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#E6F3FF" />
            <stop offset="50%" stopColor="#B3D9FF" />
            <stop offset="100%" stopColor="#4A90E2" />
          </radialGradient>
          <radialGradient id="innerGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#FFFACD" />
            <stop offset="50%" stopColor="#FFE55C" />
            <stop offset="100%" stopColor="#FFD700" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}