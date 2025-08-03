import { useState, useEffect, useCallback } from 'react';

interface CatAssistantProps {
  playSound?: () => void;
}

type CatMood = 'happy' | 'greeting' | 'playful' | 'satisfied' | 'excited' | 'sleepy';
type CatPose = 'sitting' | 'waving' | 'jumping' | 'sleeping' | 'thinking';

const CAT_PHRASES = {
  scroll: [
    'С такой скоростью прокрутки ты заработаешь миллион в шутку!',
    'Мяу! Вижу, активно изучаешь наши предложения!',
    'Держи хвост пистолетом, скролл идёт отлично!',
    'Быстро листаешь? Наши тарифы тоже быстрые!'
  ],
  products: [
    'Вижу, ты наводишь порядок в финансах — мурлычу от радости!',
    'Держи хвост пистолетом, у нас тут выгодные предложения!',
    'Эти продукты прямо как рыбка — невозможно устоять!'
  ],
  memes: [
    'Ха-ха! Эти мемы лучше котиков в интернете!',
    'Смеяться полезно для здоровья... и кошелька!',
    'Мяу! Даже я не могу сдержать смех!'
  ],
  contacts: [
    'Пора открыть счёт… или хотя бы посмеяться!',
    'Мяу! Готов помочь с выбором банковских услуг!',
    'Наш кот всегда на страже твоих финансов!'
  ],
  advantages: [
    'Преимущества как у кота — всегда приземляемся на лапы!',
    'Мурр! Выгода очевидна даже для кошачьих мозгов!',
    'Я б сам открыл счёт, но лапы не приспособлены для подписи!'
  ],
  default: [
    'Мяу! Добро пожаловать в ФиФи банк!',
    'Я твой персональный финансовый кот-консультант!',
    'Наш кот всегда на страже твоих финансов и хорошего настроения!'
  ]
};

export default function CatAssistant({ playSound }: CatAssistantProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [showBubble, setShowBubble] = useState(false);
  const [catMood, setCatMood] = useState<CatMood>('happy');
  const [catPose, setCatPose] = useState<CatPose>('sitting');
  const [currentSection, setCurrentSection] = useState('default');

  const showRandomPhrase = useCallback((section: string) => {
    const phrases = CAT_PHRASES[section as keyof typeof CAT_PHRASES] || CAT_PHRASES.default;
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setCurrentPhrase(randomPhrase);
    setShowBubble(true);
    
    // Звуковой эффект
    if (playSound) {
      playSound();
    }

    // Скрыть через 4 секунды
    setTimeout(() => {
      setShowBubble(false);
    }, 4000);
  }, [playSound]);

  // Отслеживание скролла и определение секций
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTime = Date.now();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Показать кота после скролла на 200px
      if (scrollY > 200 && !isVisible) {
        setIsVisible(true);
        setCatPose('waving');
        setCatMood('greeting');
        showRandomPhrase('default');
        
        setTimeout(() => {
          setCatPose('sitting');
          setCatMood('happy');
        }, 2000);
      }

      // Определение текущей секции
      const sections = ['hero', 'products', 'memes', 'advantages', 'contacts'];
      let activeSection = 'default';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            activeSection = section;
            break;
          }
        }
      }

      // Реакция на смену секции
      if (activeSection !== currentSection && isVisible) {
        setCurrentSection(activeSection);
        
        // Устанавливаем настроение и позу в зависимости от секции
        switch (activeSection) {
          case 'products':
            setCatMood('satisfied');
            setCatPose('thinking');
            break;
          case 'memes':
            setCatMood('playful');
            setCatPose('jumping');
            break;
          case 'advantages':
            setCatMood('excited');
            setCatPose('waving');
            break;
          case 'contacts':
            setCatMood('greeting');
            setCatPose('waving');
            break;
          default:
            setCatMood('happy');
            setCatPose('sitting');
        }

        showRandomPhrase(activeSection);
      }

      // Реакция на быстрый скролл
      const now = Date.now();
      if (now - lastScrollTime > 100) { // Быстрый скролл
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          if (isVisible && Math.random() > 0.7) { // 30% шанс
            setCatPose('jumping');
            showRandomPhrase('scroll');
            
            setTimeout(() => {
              setCatPose('sitting');
            }, 1500);
          }
        }, 500);
      }
      lastScrollTime = now;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isVisible, currentSection, showRandomPhrase]);

  // Рендер кота в зависимости от настроения и позы
  const renderCat = () => {
    const baseClasses = "text-6xl transition-all duration-500 transform select-none";
    
    let catEmoji = '😸';
    let transform = '';
    
    switch (catMood) {
      case 'happy':
        catEmoji = '😸';
        break;
      case 'greeting':
        catEmoji = '😺';
        break;
      case 'playful':
        catEmoji = '😹';
        break;
      case 'satisfied':
        catEmoji = '😻';
        break;
      case 'excited':
        catEmoji = '🙀';
        break;
      case 'sleepy':
        catEmoji = '😴';
        break;
    }

    switch (catPose) {
      case 'waving':
        transform = 'rotate-12 scale-110';
        break;
      case 'jumping':
        transform = 'translateY-4 scale-125';
        break;
      case 'sleeping':
        transform = 'rotate-45';
        break;
      case 'thinking':
        transform = 'rotate-6';
        break;
      default:
        transform = '';
    }

    return (
      <div className={`${baseClasses} ${transform}`}>
        {catEmoji}
      </div>
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Речевой пузырь */}
      {showBubble && currentPhrase && (
        <div className="mb-4 max-w-xs animate-in slide-in-from-right duration-300">
          <div className="bg-white border-2 border-fun-blue rounded-2xl px-4 py-3 shadow-lg relative">
            <p className="text-sm text-gray-800 font-medium">{currentPhrase}</p>
            
            {/* Хвостик пузыря */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r-2 border-b-2 border-fun-blue transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Кот */}
      <div 
        className="bg-gradient-to-br from-fun-yellow/20 to-fun-blue/20 rounded-full p-3 cursor-pointer hover:scale-110 transition-all duration-300 shadow-lg backdrop-blur-sm border border-white/30"
        onClick={() => {
          setCatPose('jumping');
          showRandomPhrase(currentSection);
          setTimeout(() => setCatPose('sitting'), 1000);
        }}
        onMouseEnter={() => {
          setCatMood('excited');
          setCatPose('waving');
        }}
        onMouseLeave={() => {
          setCatMood('happy');
          setCatPose('sitting');
        }}
      >
        {renderCat()}
      </div>

      {/* Мигающие эффекты */}
      <div className="absolute -top-2 -right-2 w-3 h-3 bg-fun-yellow rounded-full animate-ping opacity-60"></div>
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-fun-blue rounded-full animate-pulse"></div>
    </div>
  );
}