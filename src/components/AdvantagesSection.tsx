interface AdvantagesSectionProps {
  playSound: () => void;
}

export default function AdvantagesSection({ playSound }: AdvantagesSectionProps) {
  return (
    <section id="advantages" className="py-20 bg-gradient-to-r from-fun-blue/10 to-fun-yellow/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-fun-blue to-fun-yellow bg-clip-text text-transparent mb-4">
            Почему мы самые крутые? 🚀
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Потому что банкинг может быть веселым! 🎪
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group transform hover:scale-110 transition-all duration-300">
            <div 
              onClick={playSound}
              className="w-24 h-24 bg-gradient-to-br from-fun-blue to-fun-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce cursor-pointer hover:animate-bounce-fun"
            >
              <span className="text-5xl">📶</span>
            </div>
            <h3 className="text-xl font-semibold text-fun-blue mb-3">Надёжность</h3>
            <p className="text-gray-600">Даже Wi-Fi у нас стабилен! И это не шутка... или шутка? 🤔</p>
          </div>

          <div className="text-center group transform hover:scale-110 transition-all duration-300">
            <div 
              onClick={playSound}
              className="w-24 h-24 bg-gradient-to-br from-fun-yellow to-fun-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce cursor-pointer hover:animate-bounce-fun"
            >
              <span className="text-5xl">🛋️</span>
            </div>
            <h3 className="text-xl font-semibold text-fun-yellow mb-3">Удобство</h3>
            <p className="text-gray-600">Открываешь счёт, не отходя от дивана. Можно даже в пижаме! 👔</p>
          </div>

          <div className="text-center group transform hover:scale-110 transition-all duration-300">
            <div 
              onClick={playSound}
              className="w-24 h-24 bg-gradient-to-br from-fun-pink to-fun-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce cursor-pointer hover:animate-bounce-fun"
            >
              <span className="text-5xl">🤖</span>
            </div>
            <h3 className="text-xl font-semibold text-fun-pink mb-3">Инновации</h3>
            <p className="text-gray-600">Наша карта умеет улыбаться и даже подмигивать! 😉</p>
          </div>

          <div className="text-center group transform hover:scale-110 transition-all duration-300">
            <div 
              onClick={playSound}
              className="w-24 h-24 bg-gradient-to-br from-fun-green to-fun-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce cursor-pointer hover:animate-bounce-fun"
            >
              <span className="text-5xl">🎧</span>
            </div>
            <h3 className="text-xl font-semibold text-fun-green mb-3">Поддержка 24/7</h3>
            <p className="text-gray-600">Круглосуточный чат с вашим новым другом-ботом! Он знает 1000 шуток! 🤣</p>
          </div>
        </div>
      </div>
    </section>
  );
}