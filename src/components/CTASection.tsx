import { Button } from "@/components/ui/button";

interface CTASectionProps {
  playSound: () => void;
}

export default function CTASection({ playSound }: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-fun-blue via-fun-yellow to-fun-orange text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 animate-pulse px-4 sm:px-0">Откройте счёт в ФиФи банке! 🎊</h2>
        <p className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed px-4 sm:px-0">
          Стартуйте своё финансовое путешествие с самыми выгодными условиями и индивидуальным подходом! 💫
        </p>
        <Button 
          onClick={playSound} 
          size="lg" 
          className="bg-white text-fun-blue hover:bg-gray-100 text-lg sm:text-xl lg:text-2xl px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 transform hover:scale-105 sm:hover:scale-110 transition-all duration-300 hover:animate-bounce-fun active:animate-bounce-fun min-h-[56px] w-full sm:w-auto"
        >
          <span className="mr-2">🏦</span>
          Открыть счёт
        </Button>
      </div>
    </section>
  );
}