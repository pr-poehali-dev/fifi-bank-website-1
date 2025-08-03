import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import FiFiCoin from "@/components/FiFiCoin";

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
type CatBreed = 'tabby' | 'siamese' | 'persian' | 'maine-coon';

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
    
    switch (type) {
      case 'debit':
        // Рыжий табби кот с полосками - весёлый тип
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
        
      case 'credit':
        // Сиамский кот - элегантный и креативный
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
        
      case 'deposit':
        // Персидский кот - пушистый и заботливый охранник
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
        
      case 'premium':
        // Мейн-кун - крупный и важный VIP кот
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