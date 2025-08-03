import { Button } from "@/components/ui/button";

interface HeaderProps {
  playSound: () => void;
}

export default function Header({ playSound }: HeaderProps) {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-fun-blue/20">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-fun-blue to-fun-yellow rounded-full flex items-center justify-center animate-pulse">
              <span className="text-2xl">😄</span>
            </div>
            <div>
              <span className="text-3xl font-bold bg-gradient-to-r from-fun-blue to-fun-yellow bg-clip-text text-transparent">
                ФиФи банк
              </span>
              <div className="text-xs text-gray-500">Банк с юмором!</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-fun-blue transition-colors hover:scale-105 transform">Главная</a>
            <a href="#products" className="text-gray-700 hover:text-fun-blue transition-colors hover:scale-105 transform">Продукты</a>
            <a href="#about" className="text-gray-700 hover:text-fun-blue transition-colors hover:scale-105 transform">О нас</a>
            <a href="#contacts" className="text-gray-700 hover:text-fun-blue transition-colors hover:scale-105 transform">Контакты</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button onClick={playSound} variant="outline" className="hidden sm:inline-flex border-fun-blue text-fun-blue hover:bg-fun-blue hover:text-white hover:animate-bounce-fun active:animate-bounce-fun">
              Войти с улыбкой 😊
            </Button>
            <Button onClick={playSound} className="bg-gradient-to-r from-fun-blue to-fun-yellow hover:from-fun-yellow hover:to-fun-blue transition-all duration-300 transform hover:scale-105 hover:animate-bounce-fun active:animate-bounce-fun">
              Открыть счет
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}