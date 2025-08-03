import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProductsSectionProps {
  playSound: () => void;
}

export default function ProductsSection({ playSound }: ProductsSectionProps) {
  return (
    <section id="products" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-fun-blue to-fun-yellow bg-clip-text text-transparent mb-4">
            Наши мемные продукты 🎯
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Финансы могут быть веселыми! Проверьте сами 🎪
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-fun-blue/5 border-2 border-fun-blue/20">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-fun-yellow to-fun-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <span className="text-4xl">💳</span>
              </div>
              <CardTitle className="text-2xl text-fun-blue font-bold">Карты-мемы</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 mb-6 text-lg">
                Карты, которые сами платят за мемы! Чем смешнее пост, тем больше кэшбэк! 🤑
              </CardDescription>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-lg mr-2">😂</span>
                  Кэшбэк за лайки: до 10%
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-lg mr-2">🎭</span>
                  Бесплатное обслуживание с шутками
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-lg mr-2">🎪</span>
                  Карта меняет дизайн по настроению
                </li>
              </ul>
              <Button onClick={playSound} className="w-full bg-fun-yellow text-black hover:bg-fun-orange transform hover:scale-105 transition-all hover:animate-bounce-fun active:animate-bounce-fun">
                Хочу мемную карту! 🎊
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-fun-yellow/5 border-2 border-fun-yellow/20">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-fun-pink to-fun-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <span className="text-4xl">🐷</span>
              </div>
              <CardTitle className="text-2xl text-fun-yellow font-bold">Депозиты-шутки</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 mb-6 text-lg">
                Чем больше анекдотов рассказываете, тем выше процент! Смех = деньги! 💰
              </CardDescription>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-lg mr-2">🎭</span>
                  До 20% годовых за юмор
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-lg mr-2">🎪</span>
                  Бонус за рассказанные анекдоты
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-lg mr-2">🤡</span>
                  Досрочное снятие со скидкой
                </li>
              </ul>
              <Button onClick={playSound} className="w-full bg-fun-pink text-white hover:bg-fun-purple transform hover:scale-105 transition-all hover:animate-bounce-fun active:animate-bounce-fun" variant="outline">
                Открыть веселый депозит! 🎉
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-fun-green/5 border-2 border-fun-green/20">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-fun-green to-fun-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <span className="text-4xl">💸</span>
              </div>
              <CardTitle className="text-2xl text-fun-green font-bold">Кредиты-приколы</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 mb-6 text-lg">
                Одобряем всех! Даже если ваша кредитная история - это комедия! 🎭
              </CardDescription>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-lg mr-2">🎯</span>
                  От 0.1% (если очень смешно)
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-lg mr-2">⚡</span>
                  Решение за время анекдота
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-lg mr-2">🎁</span>
                  До 10 млн виртуальных рублей
                </li>
              </ul>
              <Button onClick={playSound} className="w-full bg-fun-green text-white hover:bg-fun-blue transform hover:scale-105 transition-all hover:animate-bounce-fun active:animate-bounce-fun" variant="outline">
                Взять смешной кредит! 🤪
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}