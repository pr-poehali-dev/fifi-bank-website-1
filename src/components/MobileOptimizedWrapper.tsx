import { useEffect, useState } from 'react';

interface MobileOptimizedWrapperProps {
  children: React.ReactNode;
}

export default function MobileOptimizedWrapper({ children }: MobileOptimizedWrapperProps) {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [touchDevice, setTouchDevice] = useState(false);

  useEffect(() => {
    // Определение производительности устройства
    const checkPerformance = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const connection = (navigator as any).connection;
      const deviceMemory = (navigator as any).deviceMemory;
      
      const isSlowDevice = 
        // Старые мобильные браузеры
        (userAgent.includes('android') && userAgent.includes('chrome/')) ||
        // Медленное соединение
        (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) ||
        // Мало памяти
        (deviceMemory && deviceMemory < 4) ||
        // Проверка на старые устройства
        window.innerWidth < 768 && window.devicePixelRatio < 2;

      setIsLowPerformance(isSlowDevice);
    };

    // Определение touch устройства
    const checkTouch = () => {
      setTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkPerformance();
    checkTouch();

    // Добавляем CSS классы для оптимизации
    if (isLowPerformance) {
      document.body.classList.add('low-performance');
    }
    
    if (touchDevice) {
      document.body.classList.add('touch-device');
    }

    // Проверка на prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.body.classList.add('reduced-motion');
    }

    return () => {
      document.body.classList.remove('low-performance', 'touch-device', 'reduced-motion');
    };
  }, [isLowPerformance, touchDevice]);

  return (
    <div 
      className={`
        min-h-screen
        ${isLowPerformance ? 'performance-optimized' : ''}
        ${touchDevice ? 'touch-optimized' : ''}
      `}
      style={{
        // Принудительная оптимизация рендеринга
        willChange: 'auto',
        transform: 'translateZ(0)', // Принудительное GPU ускорение
      }}
    >
      {children}
    </div>
  );
}