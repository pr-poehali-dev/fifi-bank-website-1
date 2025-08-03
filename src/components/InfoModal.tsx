import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  playSound: () => void;
}

type InfoSection = 'main' | 'bank' | 'actions' | 'telegram' | 'secret';

const sections = {
  bank: {
    title: "О ФиФи банке 🏦",
    content: "Мы - первый банк, где смех принимается как валюта! Основанный котами-банкирами в 2025 году, мы предлагаем уникальные финансовые продукты с гарантией улыбки.",
    emoji: "🏦",
    meme: "Наш девиз: 'Деньги приходят к тем, кто умеет смеяться!' 😸"
  },
  actions: {
    title: "Мемные акции 🎯",
    content: "Каждый месяц у нас новые акции! Приведи друга - получи мем в подарок! Открой депозит и получи годовую подписку на наши шутки. Чем больше смеёшься, тем больше бонусов!",
    emoji: "🎯",
    meme: "Акция месяца: 'Смейся и копи!' - за каждый смех начисляем 0.01 ФиФиКоина! 🪙"
  },
  telegram: {
    title: "Telegram бонусы 📱",
    content: "Подписывайся на наш Telegram-канал и получай эксклюзивные мемы, промокоды и первым узнавай о новых продуктах! Каждую неделю разыгрываем призы среди подписчиков.",
    emoji: "📱",
    meme: "Подписчики канала получают доступ к секретным котам-консультантам! 🐱‍💼"
  },
  secret: {
    title: "Секретный раздел 🔐",
    content: "Псс... Здесь живут самые смешные коты-банкиры! Они знают секреты успешных инвестиций и готовы поделиться ими за... ещё одну шутку! Доступ только для VIP-клиентов.",
    emoji: "🔐",
    meme: "Секретная формула успеха: Смех + Деньги = Счастье! Но это между нами... 🤫"
  }
};

export default function InfoModal({ isOpen, onClose, playSound }: InfoModalProps) {
  const [currentSection, setCurrentSection] = useState<InfoSection>('main');
  const [catComment, setCatComment] = useState("Мяу! Выбирай, что хочешь узнать! 😸");

  const handleSectionSelect = (section: InfoSection) => {
    setCurrentSection(section);
    playSound();
    
    const comments = [
      "Отличный выбор! 😸",
      "Мур-мур, интересно! 🐱",
      "Это мой любимый раздел! 😻",
      "Умный котик! 🧠",
      "Ты на правильном пути! ✨"
    ];
    
    setCatComment(comments[Math.floor(Math.random() * comments.length)]);
  };

  const goBack = () => {
    setCurrentSection('main');
    setCatComment("Мяу! Выбирай, что хочешь узнать! 😸");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl transform transition-all duration-500 max-h-[90vh] overflow-y-auto ${
        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        
        {currentSection === 'main' ? (
          // Главное меню
          <>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4 animate-bounce">🐱‍💼</div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-fun-blue to-fun-yellow bg-clip-text text-transparent mb-2">
                Что хочешь узнать?
              </h2>
              <div className="bg-gradient-to-r from-fun-blue/10 to-fun-yellow/10 rounded-xl p-3">
                <p className="text-sm text-gray-600 italic">{catComment}</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <Button 
                onClick={() => handleSectionSelect('bank')}
                className="w-full bg-gradient-to-r from-fun-blue to-fun-blue/80 hover:from-fun-blue/80 hover:to-fun-blue transform hover:scale-105 transition-all duration-300 justify-start"
              >
                <span className="text-2xl mr-3">🏦</span>
                О ФиФи банке
              </Button>
              
              <Button 
                onClick={() => handleSectionSelect('actions')}
                className="w-full bg-gradient-to-r from-fun-yellow to-fun-orange hover:from-fun-orange hover:to-fun-yellow transform hover:scale-105 transition-all duration-300 justify-start text-black"
              >
                <span className="text-2xl mr-3">🎯</span>
                Мемные акции
              </Button>
              
              <Button 
                onClick={() => handleSectionSelect('telegram')}
                className="w-full bg-gradient-to-r from-fun-green to-fun-green/80 hover:from-fun-green/80 hover:to-fun-green transform hover:scale-105 transition-all duration-300 justify-start"
              >
                <span className="text-2xl mr-3">📱</span>
                Telegram бонусы
              </Button>
              
              <Button 
                onClick={() => handleSectionSelect('secret')}
                className="w-full bg-gradient-to-r from-fun-pink to-fun-pink/80 hover:from-fun-pink/80 hover:to-fun-pink transform hover:scale-105 transition-all duration-300 justify-start"
              >
                <span className="text-2xl mr-3">🔐</span>
                Секретный раздел
              </Button>
            </div>
          </>
        ) : (
          // Детальная информация
          <>
            <div className="text-center mb-6">
              <div className="text-5xl mb-4 animate-pulse">{sections[currentSection].emoji}</div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-fun-blue to-fun-yellow bg-clip-text text-transparent mb-4">
                {sections[currentSection].title}
              </h2>
            </div>

            <div className="bg-gradient-to-r from-fun-blue/10 to-fun-yellow/10 rounded-2xl p-6 mb-4">
              <p className="text-gray-700 leading-relaxed mb-4">
                {sections[currentSection].content}
              </p>
              <div className="bg-white/50 rounded-xl p-4 border-l-4 border-fun-yellow">
                <p className="text-sm font-medium text-gray-600 italic">
                  💭 {sections[currentSection].meme}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-fun-blue/5 to-fun-yellow/5 rounded-xl p-4 mb-6">
              <p className="text-sm text-center text-gray-600 italic animate-pulse">
                😸 {catComment}
              </p>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={goBack}
                variant="outline"
                className="flex-1 border-fun-blue text-fun-blue hover:bg-fun-blue hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                <Icon name="ArrowLeft" className="w-4 h-4 mr-2" />
                Назад
              </Button>
            </div>
          </>
        )}

        {/* Кнопка закрытия */}
        <div className="flex justify-center mt-4">
          <Button 
            onClick={onClose}
            variant="ghost"
            className="text-gray-500 hover:text-gray-700"
          >
            <Icon name="X" className="w-4 h-4 mr-2" />
            Закрыть
          </Button>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-fun-yellow rounded-full animate-ping"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-fun-blue rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -left-1 w-2 h-2 bg-fun-pink rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}