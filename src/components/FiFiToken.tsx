import { useState, useEffect } from 'react';

interface FiFiTokenProps {
  size?: 'small' | 'medium' | 'large' | 'xl';
  animated?: boolean;
  glowing?: boolean;
  price?: number;
  previousPrice?: number;
  className?: string;
}

export default function FiFiToken({ 
  size = 'medium', 
  animated = true, 
  glowing = false,
  price,
  previousPrice,
  className = '' 
}: FiFiTokenProps) {
  const [isGrowing, setIsGrowing] = useState(false);

  // Определяем размеры
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  // Эффект роста при изменении цены
  useEffect(() => {
    if (price && previousPrice && price > previousPrice) {
      setIsGrowing(true);
      const timer = setTimeout(() => setIsGrowing(false), 600);
      return () => clearTimeout(timer);
    }
  }, [price, previousPrice]);

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Фоновое свечение */}
      {(glowing || isGrowing) && (
        <div 
          className={`absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-30 blur-md scale-110 ${
            animated ? 'animate-pulse' : ''
          } ${isGrowing ? 'animate-ping' : ''}`}
        />
      )}
      
      {/* Основная монета */}
      <div 
        className={`relative w-full h-full rounded-full bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 shadow-lg border-2 border-slate-300 overflow-hidden ${
          animated ? 'animate-spin-slow' : ''
        } ${isGrowing ? 'animate-bounce-fun scale-110' : ''} transition-all duration-300`}
        style={{
          background: 'conic-gradient(from 0deg, #e2e8f0, #cbd5e1, #94a3b8, #cbd5e1, #e2e8f0)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 2px 8px rgba(255,255,255,0.3), inset 0 -2px 8px rgba(0,0,0,0.1)'
        }}
      >
        {/* Внутреннее свечение */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
        
        {/* Центральная буква F */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`font-bold text-slate-600 ${
            size === 'small' ? 'text-xs' :
            size === 'medium' ? 'text-sm' :
            size === 'large' ? 'text-lg' :
            'text-2xl'
          } drop-shadow-sm`}>
            F
          </div>
        </div>
        
        {/* Цифровой акцент */}
        <div className="absolute top-1 right-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse opacity-40" />
        
        {/* Неоновый ободок */}
        <div className="absolute inset-0 rounded-full border border-cyan-200/50 animate-pulse" />
      </div>
      
      {/* Отражение света */}
      <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full blur-sm" />
    </div>
  );
}

// Экспорт дополнительных вариантов
export function FiFiTokenIcon({ className = '' }: { className?: string }) {
  return <FiFiToken size="small" animated={false} className={className} />;
}

export function FiFiTokenButton({ 
  children, 
  onClick, 
  className = '',
  price,
  previousPrice 
}: { 
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  price?: number;
  previousPrice?: number;
}) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 rounded-lg border border-slate-300 transition-all duration-200 hover:shadow-lg ${className}`}
    >
      <FiFiToken size="small" price={price} previousPrice={previousPrice} />
      {children}
    </button>
  );
}