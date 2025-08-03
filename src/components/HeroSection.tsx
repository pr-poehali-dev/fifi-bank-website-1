import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import JokeModal from "@/components/JokeModal";
import InfoModal from "@/components/InfoModal";

interface HeroSectionProps {
  playSound: () => void;
}

export default function HeroSection({ playSound }: HeroSectionProps) {
  const [isJokeModalOpen, setIsJokeModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isLaughButtonAnimating, setIsLaughButtonAnimating] = useState(false);
  const [isInfoButtonAnimating, setIsInfoButtonAnimating] = useState(false);

  const handleLaughClick = () => {
    setIsLaughButtonAnimating(true);
    playSound();
    
    setTimeout(() => {
      setIsJokeModalOpen(true);
      setIsLaughButtonAnimating(false);
    }, 500);
  };

  const handleInfoClick = () => {
    setIsInfoButtonAnimating(true);
    playSound();
    
    setTimeout(() => {
      setIsInfoModalOpen(true);
      setIsInfoButtonAnimating(false);
    }, 300);
  };

  return (
    <>
      <section id="hero" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fun-blue/20 via-transparent to-fun-yellow/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-fun-blue via-fun-yellow to-fun-blue bg-clip-text text-transparent animate-pulse">
              ФиФи банк
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              Банк, где даже смех — валюта! 🤑
            </p>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Кредиты под улыбку, депозиты в шутках и карты с мемами. 
              У нас даже банкоматы говорят "спасибо"! 🏧✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                onClick={handleLaughClick}
                size="lg" 
                className={`
                  bg-gradient-to-r from-fun-yellow to-fun-orange text-black 
                  hover:from-fun-orange hover:to-fun-yellow text-xl px-12 py-4 
                  transform transition-all duration-300 
                  hover:scale-110 hover:shadow-2xl
                  active:scale-95
                  ${isLaughButtonAnimating ? 'animate-bounce scale-110' : ''}
                  relative overflow-hidden group
                `}
              >
                {/* Эффект свечения */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Содержимое кнопки */}
                <div className="relative flex items-center">
                  <Icon 
                    name="Smile" 
                    className={`w-6 h-6 mr-2 transition-transform duration-300 ${
                      isLaughButtonAnimating ? 'animate-spin' : 'group-hover:scale-125'
                    }`} 
                  />
                  <span className={isLaughButtonAnimating ? 'animate-pulse' : ''}>
                    Начать смеяться 😂
                  </span>
                </div>

                {/* Анимированные частицы при наведении */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                </div>
              </Button>

              <Button 
                onClick={handleInfoClick}
                variant="outline" 
                size="lg" 
                className={`
                  border-2 border-fun-blue text-fun-blue 
                  hover:bg-fun-blue hover:text-white hover:border-fun-blue
                  text-xl px-12 py-4 
                  transform transition-all duration-300 
                  hover:scale-110 hover:shadow-2xl
                  active:scale-95
                  ${isInfoButtonAnimating ? 'animate-pulse scale-110 bg-fun-blue text-white' : ''}
                  relative overflow-hidden group
                `}
              >
                {/* Эффект заполнения */}
                <div className="absolute inset-0 bg-fun-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                {/* Содержимое кнопки */}
                <div className="relative flex items-center">
                  <Icon 
                    name="Heart" 
                    className={`w-6 h-6 mr-2 transition-all duration-300 ${
                      isInfoButtonAnimating ? 'animate-bounce text-white' : 'group-hover:scale-125 group-hover:text-white'
                    }`} 
                  />
                  <span className={`transition-colors duration-300 ${
                    isInfoButtonAnimating ? 'text-white' : 'group-hover:text-white'
                  }`}>
                    Узнать больше ❤️
                  </span>
                </div>

                {/* Магический блеск */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
                </div>
              </Button>
            </div>

            {/* Fun Stats */}
            <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-fun-yellow/20 group">
                <div className="text-4xl font-bold text-fun-blue group-hover:animate-bounce">1M+</div>
                <div className="text-gray-600">Счастливых клиентов 😊</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-fun-blue/20 group">
                <div className="text-4xl font-bold text-fun-yellow group-hover:animate-pulse">999%</div>
                <div className="text-gray-600">Улыбок в день 😄</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-fun-orange/20 group">
                <div className="text-4xl font-bold text-fun-orange group-hover:animate-wiggle">24/7</div>
                <div className="text-gray-600">Веселье без остановки 🎉</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-fun-pink/20 group">
                <div className="text-4xl font-bold text-fun-pink group-hover:animate-spin">∞</div>
                <div className="text-gray-600">Количество шуток 🤣</div>
              </div>
            </div>
          </div>
        </div>

        {/* Плавающие декоративные элементы */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-fun-yellow/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-fun-blue/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-fun-pink/30 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-10 w-5 h-5 bg-fun-green/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      </section>

      {/* Модальные окна */}
      <JokeModal 
        isOpen={isJokeModalOpen} 
        onClose={() => setIsJokeModalOpen(false)} 
        playSound={playSound}
      />
      <InfoModal 
        isOpen={isInfoModalOpen} 
        onClose={() => setIsInfoModalOpen(false)} 
        playSound={playSound}
      />
    </>
  );
}