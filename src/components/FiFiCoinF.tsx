import { useState, useEffect } from 'react';

interface FiFiCoinFProps {
  size?: number;
  onClick?: () => void;
  className?: string;
  showText?: boolean;
}

export default function FiFiCoinF({ 
  size = 48, 
  onClick, 
  className = '', 
  showText = true 
}: FiFiCoinFProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [isBreathing, setIsBreathing] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [fGlow, setFGlow] = useState(false);

  // Плавное вращение
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);

    return () => clearInterval(rotationInterval);
  }, []);

  // Моргание символа F
  useEffect(() => {
    const glowInterval = setInterval(() => {
      if (!isHovered && !isBouncing) {
        setFGlow(true);
        setTimeout(() => setFGlow(false), 600);
      }
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(glowInterval);
  }, [isHovered, isBouncing]);

  const handleClick = () => {
    setIsBouncing(true);
    setFGlow(true);
    onClick?.();
    
    setTimeout(() => {
      setIsBouncing(false);
      setFGlow(false);
    }, 800);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setFGlow(true);
    setIsBreathing(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setFGlow(false);
    setIsBreathing(true);
  };

  return (
    <div
      className={`inline-block cursor-pointer transition-all duration-300 ${
        isBouncing 
          ? 'animate-bounce' 
          : isHovered 
            ? 'scale-110' 
            : isBreathing 
              ? 'animate-pulse' 
              : ''
      } ${className}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotate(${rotation * 0.2}deg) ${isHovered ? 'scale(1.1)' : ''}`,
        transformOrigin: 'center',
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        style={{
          filter: `
            drop-shadow(0 0 ${isHovered ? '20px' : '10px'} rgba(79, 195, 247, 0.5))
            drop-shadow(0 6px 15px rgba(255, 215, 0, 0.4))
            drop-shadow(0 0 ${fGlow ? '25px' : '0px'} rgba(255, 255, 255, 0.6))
          `,
          transition: 'filter 0.4s ease',
        }}
      >
        {/* Внешнее неоновое кольцо */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="url(#outerGlow)"
          strokeWidth="2"
          opacity={isHovered ? "0.9" : "0.6"}
          className={fGlow ? "animate-pulse" : ""}
        />

        {/* 3D основа монеты (тень) */}
        <ellipse
          cx="50"
          cy="52"
          rx="44"
          ry="42"
          fill="url(#shadowGradient)"
          opacity="0.4"
        />

        {/* Основной корпус монеты */}
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="url(#mainCoinGradient)"
          stroke="url(#borderGradient)"
          strokeWidth="2.5"
        />

        {/* Внутренний декоративный круг */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="url(#innerCircleGradient)"
          stroke="#FFD700"
          strokeWidth="1"
          opacity="0.8"
        />

        {/* Декоративные элементы по краю */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
          const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
          const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);
          return (
            <circle 
              key={i}
              cx={x} 
              cy={y} 
              r="1.5" 
              fill="#FFFFFF" 
              opacity="0.7"
              className={isHovered ? "animate-ping" : ""}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          );
        })}

        {/* Текст FiFiCoin по кругу (если включен) */}
        {showText && (
          <g>
            <defs>
              <path
                id="textPath"
                d="M 50 50 m -35 0 a 35 35 0 1 1 70 0 a 35 35 0 1 1 -70 0"
                fill="none"
              />
            </defs>
            <text fontSize="6" fill="url(#textGradient)" fontWeight="bold" fontFamily="Arial, sans-serif">
              <textPath href="#textPath" startOffset="0%">
                FiFi Bank • FiFi Bank • FiFi Bank • 
              </textPath>
            </text>
          </g>
        )}

        {/* Главный символ F */}
        <g transform="translate(50, 50)">
          {/* Фон для символа F */}
          <circle
            cx="0"
            cy="0"
            r="20"
            fill="url(#fBackgroundGradient)"
            opacity="0.3"
            className={fGlow ? "animate-pulse" : ""}
          />
          
          {/* Символ F - основа */}
          <path
            d="M -8 -15 L -8 15 M -8 -15 L 8 -15 M -8 -2 L 5 -2"
            stroke="url(#fMainGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className={fGlow ? "animate-pulse" : ""}
          />
          
          {/* Символ F - декоративные элементы */}
          <path
            d="M -8 -15 L -8 15 M -8 -15 L 8 -15 M -8 -2 L 5 -2"
            stroke={fGlow ? "#FFFFFF" : "url(#fAccentGradient)"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity={fGlow ? "0.9" : "0.6"}
          />

          {/* Геометрические акценты на F */}
          <circle cx="8" cy="-15" r="2" fill="url(#accentDot)" opacity="0.8" />
          <circle cx="5" cy="-2" r="1.5" fill="url(#accentDot)" opacity="0.8" />
          
          {/* Дополнительные блики на F */}
          {fGlow && (
            <>
              <circle cx="-5" cy="-10" r="1" fill="#FFFFFF" opacity="0.8" className="animate-ping" />
              <circle cx="0" cy="5" r="1" fill="#4FC3F7" opacity="0.8" className="animate-ping" style={{ animationDelay: '0.3s' }} />
            </>
          )}
        </g>

        {/* Основные блики на монете */}
        <ellipse
          cx="42"
          cy="38"
          rx="10"
          ry="15"
          fill="url(#mainHighlight)"
          opacity={isHovered ? "0.5" : "0.3"}
          transform="rotate(-30 42 38)"
        />

        {/* Дополнительные блики */}
        <ellipse
          cx="65"
          cy="35"
          rx="5"
          ry="8"
          fill="url(#secondaryHighlight)"
          opacity="0.2"
          transform="rotate(45 65 35)"
        />

        {/* Динамические частицы при наведении */}
        {isHovered && (
          <>
            <circle cx="25" cy="25" r="1" fill="#4FC3F7" opacity="0.8" className="animate-ping" />
            <circle cx="75" cy="75" r="1" fill="#FFD700" opacity="0.8" className="animate-ping" style={{ animationDelay: '0.4s' }} />
            <circle cx="25" cy="75" r="1" fill="#FF69B4" opacity="0.8" className="animate-ping" style={{ animationDelay: '0.8s' }} />
            <circle cx="75" cy="25" r="1" fill="#00E5FF" opacity="0.8" className="animate-ping" style={{ animationDelay: '1.2s' }} />
          </>
        )}

        {/* Градиенты и эффекты */}
        <defs>
          {/* Внешнее свечение */}
          <linearGradient id="outerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="25%" stopColor="#4FC3F7" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="75%" stopColor="#4FC3F7" />
            <stop offset="100%" stopColor="#00E5FF" />
          </linearGradient>

          {/* Тень */}
          <radialGradient id="shadowGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="60%" stopColor="#000000" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
          </radialGradient>

          {/* Основной градиент монеты */}
          <radialGradient id="mainCoinGradient" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="20%" stopColor="#E1F5FE" />
            <stop offset="50%" stopColor="#B3E5FC" />
            <stop offset="80%" stopColor="#81D4FA" />
            <stop offset="100%" stopColor="#4FC3F7" />
          </radialGradient>

          {/* Внутренний круг */}
          <radialGradient id="innerCircleGradient" cx="0.4" cy="0.4">
            <stop offset="0%" stopColor="#FFFDE7" />
            <stop offset="30%" stopColor="#FFF9C4" />
            <stop offset="60%" stopColor="#FFF176" />
            <stop offset="100%" stopColor="#FFD54F" />
          </radialGradient>

          {/* Граница */}
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="25%" stopColor="#4FC3F7" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="75%" stopColor="#4FC3F7" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>

          {/* Градиент для F - основной */}
          <linearGradient id="fMainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1565C0" />
            <stop offset="50%" stopColor="#1976D2" />
            <stop offset="100%" stopColor="#0D47A1" />
          </linearGradient>

          {/* Градиент для F - акцент */}
          <linearGradient id="fAccentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4FC3F7" />
            <stop offset="50%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#01B0F0" />
          </linearGradient>

          {/* Фон для F */}
          <radialGradient id="fBackgroundGradient" cx="0.5" cy="0.5">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E3F2FD" />
          </radialGradient>

          {/* Акцентные точки */}
          <radialGradient id="accentDot" cx="0.3" cy="0.3">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#4FC3F7" />
            <stop offset="100%" stopColor="#1976D2" />
          </radialGradient>

          {/* Основной блик */}
          <radialGradient id="mainHighlight" cx="0.5" cy="0.2">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Вторичный блик */}
          <radialGradient id="secondaryHighlight" cx="0.5" cy="0.3">
            <stop offset="0%" stopColor="#E1F5FE" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Градиент для текста */}
          <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1976D2" />
            <stop offset="50%" stopColor="#4FC3F7" />
            <stop offset="100%" stopColor="#1976D2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}