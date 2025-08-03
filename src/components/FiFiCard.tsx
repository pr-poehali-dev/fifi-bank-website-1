import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import FiFiCoin from "@/components/FiFiCoin";

interface FiFiCardProps {
  type: 'debit' | 'credit' | 'deposit' | 'premium';
  title: string;
  description: string;
  memeText: string;
  bonus: string;
  onShare?: () => void;
  playSound?: () => void;
}

type CatExpression = 'happy' | 'surprised' | 'content' | 'guard' | 'wink' | 'excited';
type CatPose = 'sitting' | 'hugging' | 'guarding' | 'waving' | 'premium';

export default function FiFiCard({ 
  type, 
  title, 
  description, 
  memeText, 
  bonus, 
  onShare, 
  playSound 
}: FiFiCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [catExpression, setCatExpression] = useState<CatExpression>('happy');
  const [showMemeText, setShowMemeText] = useState(false);
  const [isTreasureOpen, setIsTreasureOpen] = useState(false);

  // Автоматическая смена выражений кота
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        if (type === 'deposit') {
          setCatExpression(prev => prev === 'guard' ? 'wink' : 'guard');
        } else {
          setCatExpression('happy');
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, type]);

  const handleHover = () => {
    setIsHovered(true);
    setShowMemeText(true);
    playSound?.();
    
    if (type === 'credit') {
      setCatExpression('surprised');
      setTimeout(() => setCatExpression('content'), 500);
    } else if (type === 'debit') {
      setCatExpression('excited');
    } else if (type === 'deposit') {
      setCatExpression('guard');
      setIsTreasureOpen(true);
    } else if (type === 'premium') {
      setCatExpression('content');
    }
  };

  const handleLeave = () => {
    setIsHovered(false);
    setShowMemeText(false);
    setCatExpression('happy');
    setIsTreasureOpen(false);
  };

  const getCatComponent = () => {
    const catSize = 80;
    
    switch (type) {
      case 'debit':
        return (
          <div className="relative flex items-center justify-center">
            <div className="absolute">
              <FiFiCoin size={catSize} onClick={playSound} />
            </div>
            <svg width={catSize} height={catSize} viewBox="0 0 100 100" className="relative z-10">
              {/* Кот обнимает монету */}
              <g transform="translate(20, 10)">
                {/* Тело кота */}
                <ellipse cx="30" cy="50" rx="20" ry="25" fill="#FFB366" />
                {/* Голова */}
                <circle cx="30" cy="25" r="15" fill="#FFB366" />
                {/* Ушки */}
                <path d="M20 15 L25 5 L30 15" fill="#FFB366" />
                <path d="M30 15 L35 5 L40 15" fill="#FFB366" />
                {/* Лапы обнимающие */}
                <ellipse cx="10" cy="40" rx="8" ry="12" fill="#FFB366" transform="rotate(-30 10 40)" />
                <ellipse cx="50" cy="40" rx="8" ry="12" fill="#FFB366" transform="rotate(30 50 40)" />
                {/* Глаза */}
                {catExpression === 'excited' ? (
                  <>
                    <path d="M25 22 Q27 20 29 22" stroke="#333" strokeWidth="2" fill="none" />
                    <path d="M31 22 Q33 20 35 22" stroke="#333" strokeWidth="2" fill="none" />
                  </>
                ) : (
                  <>
                    <circle cx="26" cy="22" r="2" fill="#333" />
                    <circle cx="34" cy="22" r="2" fill="#333" />
                  </>
                )}
                {/* Рот */}
                <path d="M26 30 Q30 34 34 30" stroke="#333" strokeWidth="1.5" fill="none" />
              </g>
            </svg>
          </div>
        );
        
      case 'credit':
        return (
          <div className="relative">
            <svg width={catSize} height={catSize} viewBox="0 0 100 100">
              <g transform="translate(10, 10)">
                {/* Тело */}
                <ellipse cx="40" cy="55" rx="25" ry="30" fill="#4A90E2" />
                {/* Голова */}
                <circle cx="40" cy="30" r="18" fill="#4A90E2" />
                {/* Ушки */}
                <path d="M28 18 L33 8 L38 18" fill="#4A90E2" />
                <path d="M42 18 L47 8 L52 18" fill="#4A90E2" />
                {/* Глаза */}
                {catExpression === 'surprised' ? (
                  <>
                    <circle cx="34" cy="26" r="4" fill="#FFF" />
                    <circle cx="46" cy="26" r="4" fill="#FFF" />
                    <circle cx="34" cy="26" r="2" fill="#333" />
                    <circle cx="46" cy="26" r="2" fill="#333" />
                  </>
                ) : catExpression === 'content' ? (
                  <>
                    <path d="M30 26 Q34 22 38 26" stroke="#333" strokeWidth="2" fill="none" />
                    <path d="M42 26 Q46 22 50 26" stroke="#333" strokeWidth="2" fill="none" />
                  </>
                ) : (
                  <>
                    <circle cx="34" cy="26" r="2" fill="#333" />
                    <circle cx="46" cy="26" r="2" fill="#333" />
                  </>
                )}
                {/* Рот */}
                {catExpression === 'content' ? (
                  <path d="M32 38 Q40 46 48 38" stroke="#333" strokeWidth="2" fill="none" />
                ) : catExpression === 'surprised' ? (
                  <circle cx="40" cy="38" r="3" fill="#333" />
                ) : (
                  <path d="M35 38 Q40 42 45 38" stroke="#333" strokeWidth="1.5" fill="none" />
                )}
                {/* Лапы */}
                <ellipse cx="25" cy="45" rx="8" ry="15" fill="#4A90E2" />
                <ellipse cx="55" cy="45" rx="8" ry="15" fill="#4A90E2" />
              </g>
            </svg>
          </div>
        );
        
      case 'deposit':
        return (
          <div className="relative">
            <svg width={catSize} height={catSize} viewBox="0 0 100 100">
              <g transform="translate(5, 5)">
                {/* Сундук */}
                <rect 
                  x="20" 
                  y="50" 
                  width="50" 
                  height="30" 
                  fill="#8B4513" 
                  rx="5"
                />
                {/* Крышка сундука */}
                <rect 
                  x="20" 
                  y={isTreasureOpen ? "45" : "50"} 
                  width="50" 
                  height="15" 
                  fill="#A0522D" 
                  rx="5"
                  className="transition-all duration-300"
                />
                {/* Свечение из сундука */}
                {isTreasureOpen && (
                  <circle 
                    cx="45" 
                    cy="57" 
                    r="15" 
                    fill="#FFD700" 
                    opacity="0.6"
                    className="animate-pulse"
                  />
                )}
                
                {/* Кот-охранник */}
                <g transform="translate(30, 10)">
                  {/* Тело */}
                  <ellipse cx="15" cy="35" rx="15" ry="20" fill="#32CD32" />
                  {/* Голова */}
                  <circle cx="15" cy="18" r="12" fill="#32CD32" />
                  {/* Ушки */}
                  <path d="M8 10 L12 2 L16 10" fill="#32CD32" />
                  <path d="M14 10 L18 2 L22 10" fill="#32CD32" />
                  {/* Глаза */}
                  {catExpression === 'guard' ? (
                    <>
                      <path d="M11 15 L13 13 L15 15" stroke="#333" strokeWidth="2" fill="none" />
                      <path d="M15 15 L17 13 L19 15" stroke="#333" strokeWidth="2" fill="none" />
                    </>
                  ) : catExpression === 'wink' ? (
                    <>
                      <circle cx="11" cy="15" r="2" fill="#333" />
                      <path d="M17 13 Q19 15 17 17" stroke="#333" strokeWidth="2" fill="none" />
                    </>
                  ) : (
                    <>
                      <circle cx="11" cy="15" r="2" fill="#333" />
                      <circle cx="19" cy="15" r="2" fill="#333" />
                    </>
                  )}
                  {/* Рот */}
                  <path d="M12 22 Q15 25 18 22" stroke="#333" strokeWidth="1.5" fill="none" />
                </g>
              </g>
            </svg>
          </div>
        );
        
      case 'premium':
        return (
          <div className="relative">
            <svg width={catSize} height={catSize} viewBox="0 0 100 100">
              <g transform="translate(10, 10)">
                {/* Корона */}
                <path d="M20 20 L25 10 L30 15 L35 5 L40 15 L45 10 L50 20 Z" fill="#FFD700" />
                <circle cx="35" cy="12" r="3" fill="#FF69B4" />
                
                {/* Тело */}
                <ellipse cx="35" cy="55" rx="25" ry="30" fill="#9370DB" />
                {/* Голова */}
                <circle cx="35" cy="30" r="18" fill="#9370DB" />
                {/* Ушки */}
                <path d="M23 18 L28 8 L33 18" fill="#9370DB" />
                <path d="M37 18 L42 8 L47 18" fill="#9370DB" />
                {/* Глаза */}
                <path d="M29 26 Q33 22 37 26" stroke="#333" strokeWidth="2" fill="none" />
                <path d="M33 26 Q37 22 41 26" stroke="#333" strokeWidth="2" fill="none" />
                {/* Рот */}
                <path d="M27 38 Q35 46 43 38" stroke="#333" strokeWidth="2" fill="none" />
                {/* Лапы машущие */}
                <ellipse 
                  cx="15" 
                  cy="45" 
                  rx="8" 
                  ry="15" 
                  fill="#9370DB"
                  className={isHovered ? "animate-wiggle" : ""}
                />
                <ellipse cx="55" cy="45" rx="8" ry="15" fill="#9370DB" />
              </g>
            </svg>
          </div>
        );
        
      default:
        return null;
    }
  };

  const getCardGradient = () => {
    switch (type) {
      case 'debit':
        return 'from-fun-yellow to-fun-orange';
      case 'credit':
        return 'from-fun-blue to-fun-purple';
      case 'deposit':
        return 'from-fun-green to-fun-blue';
      case 'premium':
        return 'from-fun-purple to-fun-pink';
      default:
        return 'from-fun-blue to-fun-yellow';
    }
  };

  return (
    <div 
      className={`relative p-6 rounded-2xl bg-gradient-to-br ${getCardGradient()} shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={handleHover}
    >
      {/* Декоративные элементы */}
      <div className="absolute top-2 right-2 opacity-20">
        <div className="w-8 h-8 rounded-full bg-white animate-pulse"></div>
      </div>
      <div className="absolute bottom-2 left-2 opacity-20">
        <div className="w-6 h-6 rounded-full bg-white animate-pulse delay-500"></div>
      </div>
      
      {/* Основной контент */}
      <div className="relative z-10">
        {/* Заголовок карты */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <div className="text-white opacity-80 text-sm font-medium">FiFiCard</div>
        </div>
        
        {/* Анимированный кот */}
        <div className="flex justify-center mb-4">
          {getCatComponent()}
        </div>
        
        {/* Описание */}
        <p className="text-white/90 text-sm mb-3 min-h-[40px]">{description}</p>
        
        {/* Мемная фраза */}
        <div className={`transition-all duration-300 ${showMemeText ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'}`}>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-3">
            <p className="text-white font-medium text-center text-sm italic">"{memeText}"</p>
          </div>
        </div>
        
        {/* Бонус */}
        <div className="bg-white/30 rounded-lg p-2 mb-4">
          <p className="text-white text-xs font-bold text-center">{bonus}</p>
        </div>
        
        {/* Кнопки */}
        <div className="flex gap-2">
          <Button 
            className="flex-1 bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs"
            variant="outline"
            onClick={(e) => {
              e.stopPropagation();
              playSound?.();
            }}
          >
            Заказать
          </Button>
          {onShare && (
            <Button 
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 text-xs px-3"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                onShare();
              }}
            >
              📤
            </Button>
          )}
        </div>
      </div>
      
      {/* Фоновая анимация */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-white rounded-full animate-bounce delay-500"></div>
      </div>
    </div>
  );
}