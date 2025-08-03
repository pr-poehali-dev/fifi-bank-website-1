import { useState, useEffect } from 'react';

interface FiFiCoinProps {
  size?: number;
  onClick?: () => void;
  className?: string;
}

type Expression = 'happy' | 'wink' | 'surprised' | 'laugh' | 'content' | 'sleepy';

export default function FiFiCoin({ size = 48, onClick, className = '' }: FiFiCoinProps) {
  const [expression, setExpression] = useState<Expression>('happy');
  const [isHovered, setIsHovered] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [isBreathing, setIsBreathing] = useState(true);
  const [rotation, setRotation] = useState(0);

  // Автоматическое моргание и смена эмоций
  useEffect(() => {
    const emotionInterval = setInterval(() => {
      if (!isHovered && !isBouncing) {
        const emotions: Expression[] = ['wink', 'content', 'sleepy', 'happy'];
        const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
        setExpression(randomEmotion);
        
        setTimeout(() => {
          setExpression('happy');
        }, 800);
      }
    }, 4000 + Math.random() * 3000);

    return () => clearInterval(emotionInterval);
  }, [isHovered, isBouncing]);

  // Плавное вращение
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(rotationInterval);
  }, []);

  const handleClick = () => {
    setIsBouncing(true);
    setExpression('laugh');
    onClick?.();
    
    setTimeout(() => {
      setIsBouncing(false);
      setExpression('happy');
    }, 800);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setExpression('surprised');
    setIsBreathing(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setExpression('happy');
    setIsBreathing(true);
  };

  const getEars = () => (
    <>
      {/* Левое ухо */}
      <path 
        d="M25 25 Q20 15 30 20 Q35 18 30 28 Z" 
        fill="url(#catEarGradient)"
        stroke="#FFD700"
        strokeWidth="1"
      />
      {/* Правое ухо */}
      <path 
        d="M65 25 Q70 15 60 20 Q55 18 60 28 Z" 
        fill="url(#catEarGradient)"
        stroke="#FFD700"
        strokeWidth="1"
      />
      {/* Внутренняя часть ушей */}
      <path d="M27 24 Q25 20 29 23" fill="#FF69B4" opacity="0.6" />
      <path d="M63 24 Q65 20 61 23" fill="#FF69B4" opacity="0.6" />
    </>
  );

  const getEyes = () => {
    switch (expression) {
      case 'wink':
        return (
          <>
            <ellipse cx="35" cy="38" rx="4" ry="5" fill="#000" opacity="0.8" />
            <ellipse cx="35" cy="37" rx="2" ry="3" fill="#4FC3F7" />
            <circle cx="36" cy="36" r="1" fill="#FFFFFF" />
            <path d="M50 35 Q58 38 50 41" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </>
        );
      case 'surprised':
        return (
          <>
            <ellipse cx="35" cy="38" rx="5" ry="6" fill="#000" opacity="0.8" />
            <ellipse cx="35" cy="37" rx="3" ry="4" fill="#4FC3F7" />
            <circle cx="36" cy="35" r="1.5" fill="#FFFFFF" />
            <ellipse cx="55" cy="38" rx="5" ry="6" fill="#000" opacity="0.8" />
            <ellipse cx="55" cy="37" rx="3" ry="4" fill="#4FC3F7" />
            <circle cx="56" cy="35" r="1.5" fill="#FFFFFF" />
          </>
        );
      case 'laugh':
        return (
          <>
            <path d="M28 38 Q35 32 42 38" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M48 38 Q55 32 62 38" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        );
      case 'sleepy':
        return (
          <>
            <path d="M30 38 Q35 35 40 38" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M50 38 Q55 35 60 38" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <text x="42" y="32" fontSize="8" fill="#4FC3F7">💤</text>
          </>
        );
      case 'content':
        return (
          <>
            <ellipse cx="35" cy="38" rx="4" ry="4" fill="#000" opacity="0.8" />
            <ellipse cx="35" cy="37" rx="2.5" ry="2.5" fill="#4FC3F7" />
            <circle cx="36" cy="36" r="1" fill="#FFFFFF" />
            <ellipse cx="55" cy="38" rx="4" ry="4" fill="#000" opacity="0.8" />
            <ellipse cx="55" cy="37" rx="2.5" ry="2.5" fill="#4FC3F7" />
            <circle cx="56" cy="36" r="1" fill="#FFFFFF" />
          </>
        );
      default: // happy
        return (
          <>
            <ellipse cx="35" cy="38" rx="4" ry="5" fill="#000" opacity="0.8" />
            <ellipse cx="35" cy="37" rx="2.5" ry="3" fill="#4FC3F7" />
            <circle cx="36" cy="36" r="1" fill="#FFFFFF" />
            <ellipse cx="55" cy="38" rx="4" ry="5" fill="#000" opacity="0.8" />
            <ellipse cx="55" cy="37" rx="2.5" ry="3" fill="#4FC3F7" />
            <circle cx="56" cy="36" r="1" fill="#FFFFFF" />
          </>
        );
    }
  };

  const getMouth = () => {
    switch (expression) {
      case 'surprised':
        return <ellipse cx="45" cy="55" rx="3" ry="5" fill="#000" opacity="0.7" />;
      case 'laugh':
        return (
          <>
            <path d="M32 50 Q45 68 58 50" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M35 52 Q45 65 55 52" fill="#FF69B4" opacity="0.8" />
          </>
        );
      case 'sleepy':
        return <circle cx="45" cy="55" r="2" fill="#000" opacity="0.5" />;
      case 'content':
        return <path d="M38 52 Q45 58 52 52" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />;
      default: // happy, wink
        return <path d="M35 52 Q45 62 55 52" stroke="#000" strokeWidth="2.5" fill="none" strokeLinecap="round" />;
    }
  };

  const getNose = () => (
    <path d="M43 45 L45 48 L47 45 Z" fill="#FF69B4" opacity="0.8" />
  );

  const getWhiskers = () => (
    <>
      {/* Левые усы */}
      <path d="M20 45 Q28 44 25 46" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M22 50 Q30 49 27 51" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Правые усы */}
      <path d="M70 45 Q62 44 65 46" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M68 50 Q60 49 63 51" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </>
  );

  const getCheeks = () => {
    if (expression === 'happy' || expression === 'laugh' || expression === 'content') {
      return (
        <>
          <ellipse cx="22" cy="48" rx="4" ry="3" fill="#FFB3D9" opacity="0.6" />
          <ellipse cx="68" cy="48" rx="4" ry="3" fill="#FFB3D9" opacity="0.6" />
        </>
      );
    }
    return null;
  };

  return (
    <div
      className={`inline-block cursor-pointer transition-all duration-300 ${
        isBouncing 
          ? 'animate-bounce' 
          : isHovered 
            ? 'scale-110 hover:scale-125' 
            : isBreathing 
              ? 'animate-pulse' 
              : ''
      } ${className}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotate(${rotation * 0.1}deg) ${isHovered ? 'scale(1.1)' : ''}`,
        transformOrigin: 'center',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 90 90"
        style={{
          filter: `
            drop-shadow(0 0 ${isHovered ? '15px' : '8px'} rgba(79, 195, 247, 0.4))
            drop-shadow(0 4px 12px rgba(255, 215, 0, 0.3))
          `,
          transition: 'filter 0.3s ease',
        }}
      >
        {/* Неоновое свечение по краю */}
        <circle
          cx="45"
          cy="45"
          r="44"
          fill="none"
          stroke="url(#neonGlow)"
          strokeWidth="2"
          opacity={isHovered ? "0.8" : "0.5"}
        />

        {/* 3D основа монеты */}
        <ellipse
          cx="45"
          cy="47"
          rx="41"
          ry="39"
          fill="url(#coin3DShadow)"
          opacity="0.3"
        />

        {/* Основной корпус монеты */}
        <circle
          cx="45"
          cy="45"
          r="41"
          fill="url(#coinMainGradient)"
          stroke="url(#coinBorder)"
          strokeWidth="2"
        />
        
        {/* Внутренний круг с градиентом */}
        <circle
          cx="45"
          cy="45"
          r="36"
          fill="url(#coinInnerGradient)"
          stroke="#FFD700"
          strokeWidth="1.5"
          opacity="0.9"
        />

        {/* Декоративные точки по краю */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const x = 45 + 38 * Math.cos((angle * Math.PI) / 180);
          const y = 45 + 38 * Math.sin((angle * Math.PI) / 180);
          return (
            <circle 
              key={i}
              cx={x} 
              cy={y} 
              r="1.5" 
              fill="#FFFFFF" 
              opacity="0.8"
            />
          );
        })}

        {/* Текст FiFi */}
        <text
          x="45"
          y="25"
          textAnchor="middle"
          fontSize="7"
          fill="url(#textGradient)"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
        >
          FiFi
        </text>

        {/* Кот-банкир */}
        <g>
          {getEars()}
          {getWhiskers()}
          {getEyes()}
          {getNose()}
          {getMouth()}
          {getCheeks()}
        </g>

        {/* Блики и отражения */}
        <ellipse
          cx="38"
          cy="38"
          rx="8"
          ry="12"
          fill="url(#highlight)"
          opacity={isHovered ? "0.4" : "0.25"}
          transform="rotate(-25 38 38)"
        />

        {/* Динамические частицы при наведении */}
        {isHovered && (
          <>
            <circle cx="20" cy="30" r="1" fill="#4FC3F7" opacity="0.8" className="animate-ping" />
            <circle cx="70" cy="60" r="1" fill="#FFD700" opacity="0.8" className="animate-ping" style={{ animationDelay: '0.5s' }} />
            <circle cx="30" cy="70" r="1" fill="#FF69B4" opacity="0.8" className="animate-ping" style={{ animationDelay: '1s' }} />
          </>
        )}

        {/* Градиенты и эффекты */}
        <defs>
          {/* Неоновое свечение */}
          <linearGradient id="neonGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4FC3F7" />
            <stop offset="50%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#4FC3F7" />
          </linearGradient>

          {/* 3D тень */}
          <radialGradient id="coin3DShadow" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="70%" stopColor="#000000" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
          </radialGradient>

          {/* Основной градиент монеты */}
          <radialGradient id="coinMainGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#E1F5FE" />
            <stop offset="70%" stopColor="#81D4FA" />
            <stop offset="100%" stopColor="#4FC3F7" />
          </radialGradient>

          {/* Внутренний градиент */}
          <radialGradient id="coinInnerGradient" cx="0.4" cy="0.4">
            <stop offset="0%" stopColor="#FFFDE7" />
            <stop offset="40%" stopColor="#FFF59D" />
            <stop offset="80%" stopColor="#FFD54F" />
            <stop offset="100%" stopColor="#FFD700" />
          </radialGradient>

          {/* Граница монеты */}
          <linearGradient id="coinBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#4FC3F7" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>

          {/* Градиент для текста */}
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1976D2" />
            <stop offset="100%" stopColor="#0D47A1" />
          </linearGradient>

          {/* Блик */}
          <radialGradient id="highlight" cx="0.5" cy="0.2">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Градиент для ушей */}
          <linearGradient id="catEarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF59D" />
            <stop offset="100%" stopColor="#FFD54F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}