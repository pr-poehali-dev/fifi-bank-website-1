import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface JokeModalProps {
  isOpen: boolean;
  onClose: () => void;
  playSound: () => void;
}

const jokes = [
  {
    text: "Почему банкиры носят очки? Потому что им нужно видеть проценты! 🤓",
    emoji: "🤓",
    animation: "animate-bounce"
  },
  {
    text: "Как называется кот, который работает в банке? Кредитный котэ! 😸",
    emoji: "😸",
    animation: "animate-pulse"
  },
  {
    text: "Что говорит банкомат, когда у вас заканчиваются деньги? 'До свидания!' 👋",
    emoji: "👋",
    animation: "animate-wiggle"
  },
  {
    text: "Почему депозит всегда спокоен? Потому что он под процентами! 😌",
    emoji: "😌",
    animation: "animate-spin"
  },
  {
    text: "Как банкир говорит 'привет'? 'Добро пожаловать в мир финансов!' 💰",
    emoji: "💰",
    animation: "animate-ping"
  }
];

export default function JokeModal({ isOpen, onClose, playSound }: JokeModalProps) {
  const [currentJoke, setCurrentJoke] = useState(jokes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      setCurrentJoke(randomJoke);
      setIsAnimating(true);
      playSound();
      
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [isOpen, playSound]);

  const getNewJoke = () => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    setCurrentJoke(randomJoke);
    setIsAnimating(true);
    playSound();
    
    setTimeout(() => setIsAnimating(false), 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-500 ${
        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {/* Заголовок */}
        <div className="text-center mb-6">
          <div className={`text-6xl mb-4 ${isAnimating ? currentJoke.animation : ''}`}>
            {currentJoke.emoji}
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-fun-blue to-fun-yellow bg-clip-text text-transparent">
            Шутка дня от ФиФи банка! 🎭
          </h2>
        </div>

        {/* Шутка */}
        <div className="bg-gradient-to-r from-fun-blue/10 to-fun-yellow/10 rounded-2xl p-6 mb-6">
          <p className="text-lg text-center text-gray-700 leading-relaxed">
            {currentJoke.text}
          </p>
        </div>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={getNewJoke}
            className="flex-1 bg-gradient-to-r from-fun-yellow to-fun-orange hover:from-fun-orange hover:to-fun-yellow transform hover:scale-105 transition-all duration-300"
          >
            <Icon name="RefreshCw" className="w-4 h-4 mr-2" />
            Ещё шутку! 😂
          </Button>
          <Button 
            onClick={onClose}
            variant="outline"
            className="flex-1 border-fun-blue text-fun-blue hover:bg-fun-blue hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            <Icon name="X" className="w-4 h-4 mr-2" />
            Закрыть
          </Button>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-fun-yellow rounded-full animate-ping"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-fun-blue rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}