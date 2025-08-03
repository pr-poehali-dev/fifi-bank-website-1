import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  playSound: () => void;
}

export default function HeroSection({ playSound }: HeroSectionProps) {
  return (
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
            <Button onClick={playSound} size="lg" className="bg-gradient-to-r from-fun-yellow to-fun-orange text-black hover:from-fun-orange hover:to-fun-yellow text-xl px-12 py-4 transform hover:scale-110 transition-all duration-300 hover:animate-bounce-fun active:animate-bounce-fun">
              <Icon name="Smile" className="w-6 h-6 mr-2" />
              Начать смеяться 😂
            </Button>
            <Button onClick={playSound} variant="outline" size="lg" className="border-2 border-fun-blue text-fun-blue hover:bg-fun-blue hover:text-white text-xl px-12 py-4 transform hover:scale-110 transition-all duration-300 hover:animate-bounce-fun active:animate-bounce-fun">
              <Icon name="Heart" className="w-6 h-6 mr-2" />
              Узнать больше ❤️
            </Button>
          </div>

          {/* Fun Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-fun-yellow/20">
              <div className="text-4xl font-bold text-fun-blue">1M+</div>
              <div className="text-gray-600">Счастливых клиентов 😊</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-fun-blue/20">
              <div className="text-4xl font-bold text-fun-yellow">999%</div>
              <div className="text-gray-600">Улыбок в день 😄</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-fun-orange/20">
              <div className="text-4xl font-bold text-fun-orange">24/7</div>
              <div className="text-gray-600">Веселье без остановки 🎉</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 transform hover:scale-105 transition-all duration-300 hover:bg-fun-pink/20">
              <div className="text-4xl font-bold text-fun-pink">∞</div>
              <div className="text-gray-600">Количество шуток 🤣</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}