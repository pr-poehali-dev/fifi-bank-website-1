import { useState, useEffect } from 'react';

interface DeviceOptimization {
  isLowPerformance: boolean;
  isMobile: boolean;
  isTablet: boolean;
  screenSize: string;
  prefersReducedMotion: boolean;
  enableComplexAnimations: boolean;
}

export function useDeviceOptimization(): DeviceOptimization {
  const [optimization, setOptimization] = useState<DeviceOptimization>({
    isLowPerformance: false,
    isMobile: false,
    isTablet: false,
    screenSize: 'desktop',
    prefersReducedMotion: false,
    enableComplexAnimations: true,
  });

  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent.toLowerCase();
      
      // Определение типа устройства
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      
      // Определение размера экрана
      let screenSize = 'desktop';
      if (width < 640) screenSize = 'sm';
      else if (width < 768) screenSize = 'md';
      else if (width < 1024) screenSize = 'lg';
      else if (width < 1280) screenSize = 'xl';
      else screenSize = '2xl';

      // Проверка на слабые устройства
      const isLowPerformance = 
        // Старые браузеры или мобильные устройства с низкой производительностью
        userAgent.includes('android') && userAgent.includes('chrome/5') ||
        userAgent.includes('iphone') && userAgent.includes('os 10_') ||
        // Медленное соединение
        (navigator as any).connection?.effectiveType === 'slow-2g' ||
        (navigator as any).connection?.effectiveType === '2g' ||
        // Малое количество памяти
        (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;

      // Проверка на предпочтения пользователя
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Определение возможности сложных анимаций
      const enableComplexAnimations = !isLowPerformance && !prefersReducedMotion && !isMobile;

      setOptimization({
        isLowPerformance,
        isMobile,
        isTablet,
        screenSize,
        prefersReducedMotion,
        enableComplexAnimations,
      });
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  return optimization;
}

// Хук для адаптивных классов анимации
export function useAdaptiveAnimation(baseAnimation: string, simpleAnimation?: string) {
  const { enableComplexAnimations, prefersReducedMotion } = useDeviceOptimization();
  
  if (prefersReducedMotion) {
    return '';
  }
  
  if (!enableComplexAnimations && simpleAnimation) {
    return simpleAnimation;
  }
  
  return baseAnimation;
}