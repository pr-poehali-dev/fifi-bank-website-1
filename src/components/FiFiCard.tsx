import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import DebitCat from "@/components/cats/DebitCat";
import CreditCat from "@/components/cats/CreditCat";
import DepositCat from "@/components/cats/DepositCat";
import PremiumCat from "@/components/cats/PremiumCat";

interface FiFiCardProps {
  type: 'debit' | 'credit' | 'deposit' | 'premium';
  title: string;
  description: string;
  memeText: string;
  bonus: string;
  catPhrase: string;
  onShare?: () => void;
  playSound?: () => void;
}

type CatExpression = 'happy' | 'surprised' | 'content' | 'guard' | 'wink' | 'excited' | 'sleepy' | 'love';

export default function FiFiCard({ 
  type, 
  title, 
  description, 
  memeText, 
  bonus, 
  catPhrase,
  onShare, 
  playSound 
}: FiFiCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [catExpression, setCatExpression] = useState<CatExpression>('happy');
  const [showMemeText, setShowMemeText] = useState(false);
  const [showCatPhrase, setShowCatPhrase] = useState(false);
  const [isTreasureOpen, setIsTreasureOpen] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [tailWag, setTailWag] = useState(false);
  const [earTwitch, setEarTwitch] = useState(false);

  // Автоматические анимации
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (!isHovered) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 3000 + Math.random() * 2000);

    const tailInterval = setInterval(() => {
      if (!isHovered) {
        setTailWag(true);
        setTimeout(() => setTailWag(false), 800);
      }
    }, 4000 + Math.random() * 3000);

    const earInterval = setInterval(() => {
      setEarTwitch(true);
      setTimeout(() => setEarTwitch(false), 400);
    }, 6000 + Math.random() * 4000);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(tailInterval);
      clearInterval(earInterval);
    };
  }, [isHovered]);

  const handleHover = () => {
    setIsHovered(true);
    setShowMemeText(true);
    setShowCatPhrase(true);
    playSound?.();
    
    if (type === 'credit') {
      setCatExpression('surprised');
      setTimeout(() => setCatExpression('content'), 800);
    } else if (type === 'debit') {
      setCatExpression('love');
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
    setShowCatPhrase(false);
    setCatExpression('happy');
    setIsTreasureOpen(false);
  };

  const getCatComponent = () => {
    const catSize = 100;
    const commonProps = {
      catExpression,
      isBlinking,
      tailWag,
      earTwitch,
      catSize
    };
    
    switch (type) {
      case 'debit':
        return <DebitCat {...commonProps} />;
      case 'credit':
        return <CreditCat {...commonProps} />;
      case 'deposit':
        return <DepositCat {...commonProps} isTreasureOpen={isTreasureOpen} />;
      case 'premium':
        return <PremiumCat {...commonProps} isHovered={isHovered} />;
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
        
        {/* Анимированный кот-банкир */}
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
        
        {/* Фраза от кота */}
        <div className={`transition-all duration-500 ${showCatPhrase ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'}`}>
          <div className="bg-white/30 backdrop-blur-sm rounded-lg p-2 mb-3 relative">
            <div className="absolute -top-2 left-6 w-4 h-4 bg-white/30 transform rotate-45"></div>
            <p className="text-white text-xs font-bold text-center">🐱 {catPhrase}</p>
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