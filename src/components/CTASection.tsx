import { Button } from "@/components/ui/button";

interface CTASectionProps {
  playSound: () => void;
}

export default function CTASection({ playSound }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-fun-blue via-fun-yellow to-fun-orange text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-5xl font-bold mb-6 animate-pulse">Готовы повеселиться? 🎊</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Присоединяйтесь к самому весёлому банку в галактике! Гарантируем улыбку или возвращаем ваше настроение! 😄
        </p>
        <Button onClick={playSound} size="lg" className="bg-white text-fun-blue hover:bg-gray-100 text-2xl px-16 py-6 transform hover:scale-110 transition-all duration-300 hover:animate-bounce-fun active:animate-bounce-fun">
          <span className="mr-2">🎪</span>
          Стать клиентом-комедиантом!
        </Button>
      </div>
    </section>
  );
}