import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import FiFiCoinF from "@/components/FiFiCoinF";
import TelegramButton from "@/components/TelegramButton";

interface HeaderProps {
  playSound: () => void;
}

export default function Header({ playSound }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-fun-blue/20 sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <nav className="flex items-center justify-between">
          {/* Логотип - адаптивный размер */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <FiFiCoinF size={window.innerWidth < 640 ? 32 : 40} onClick={playSound} />
            <div>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-fun-blue to-fun-yellow bg-clip-text text-transparent">
                ФиФи банк
              </span>
              <div className="text-xs text-gray-500 hidden sm:block">Банк с юмором!</div>
            </div>
          </div>
          
          {/* Десктопное меню */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#" className="text-gray-700 hover:text-fun-blue transition-colors hover:scale-105 transform text-sm lg:text-base min-h-[44px] flex items-center">Главная</a>
            <a href="#products" className="text-gray-700 hover:text-fun-blue transition-colors hover:scale-105 transform text-sm lg:text-base min-h-[44px] flex items-center">Продукты</a>
            <a href="/exchange" className="text-gray-700 hover:text-fun-blue transition-colors hover:scale-105 transform text-sm lg:text-base min-h-[44px] flex items-center">🪙 Биржа</a>
            <a href="#about" className="text-gray-700 hover:text-fun-blue transition-colors hover:scale-105 transform text-sm lg:text-base min-h-[44px] flex items-center">О нас</a>
            <a href="#contacts" className="text-gray-700 hover:text-fun-blue transition-colors hover:scale-105 transform text-sm lg:text-base min-h-[44px] flex items-center">Контакты</a>
          </div>

          {/* Мобильные кнопки */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {/* Telegram кнопка - скрываем на очень маленьких экранах */}
            <div className="hidden xs:block">
              <TelegramButton playSound={playSound} />
            </div>
            
            {/* Кнопка входа - скрываем на мобильных */}
            <Button 
              onClick={playSound} 
              variant="outline" 
              size={window.innerWidth < 640 ? "sm" : "default"}
              className="hidden md:inline-flex border-fun-blue text-fun-blue hover:bg-fun-blue hover:text-white hover:animate-bounce-fun active:animate-bounce-fun min-h-[44px] px-3 lg:px-4"
            >
              <span className="hidden lg:inline">Войти с улыбкой 😊</span>
              <span className="lg:hidden">Войти 😊</span>
            </Button>
            
            {/* Основная кнопка - адаптивная */}
            <Button 
              onClick={playSound} 
              size={window.innerWidth < 640 ? "sm" : "default"}
              className="bg-gradient-to-r from-fun-blue to-fun-yellow hover:from-fun-yellow hover:to-fun-blue transition-all duration-300 transform hover:scale-105 hover:animate-bounce-fun active:animate-bounce-fun min-h-[44px] px-3 sm:px-4 lg:px-6 text-sm sm:text-base"
            >
              <span className="hidden sm:inline">Открыть счет</span>
              <span className="sm:hidden">Счет</span>
            </Button>

            {/* Мобильное меню-гамбургер */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden min-h-[44px] min-w-[44px] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
            </Button>
          </div>
        </nav>

        {/* Мобильное выпадающее меню */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-fun-blue/20 pt-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              <a 
                href="#" 
                className="text-gray-700 hover:text-fun-blue transition-colors py-3 px-4 rounded-lg hover:bg-fun-blue/10 min-h-[44px] flex items-center font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🏠 Главная
              </a>
              <a 
                href="#products" 
                className="text-gray-700 hover:text-fun-blue transition-colors py-3 px-4 rounded-lg hover:bg-fun-blue/10 min-h-[44px] flex items-center font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🏦 Продукты
              </a>
              <a 
                href="/exchange" 
                className="text-gray-700 hover:text-fun-blue transition-colors py-3 px-4 rounded-lg hover:bg-fun-blue/10 min-h-[44px] flex items-center font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🪙 Биржа
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-fun-blue transition-colors py-3 px-4 rounded-lg hover:bg-fun-blue/10 min-h-[44px] flex items-center font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                💡 О нас
              </a>
              <a 
                href="#contacts" 
                className="text-gray-700 hover:text-fun-blue transition-colors py-3 px-4 rounded-lg hover:bg-fun-blue/10 min-h-[44px] flex items-center font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                📞 Контакты
              </a>
              
              {/* Telegram кнопка в мобильном меню */}
              <div className="xs:hidden pt-2">
                <TelegramButton playSound={playSound} />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}