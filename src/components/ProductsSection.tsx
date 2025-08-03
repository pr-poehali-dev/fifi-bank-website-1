import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import FiFiCard from "@/components/FiFiCard";
import FiFiToken from "@/components/FiFiToken";

interface ProductsSectionProps {
  playSound: () => void;
}

export default function ProductsSection({ playSound }: ProductsSectionProps) {
  const handleShare = (productType: string) => {
    if (navigator.share) {
      navigator.share({
        title: `FiFiCard ${productType}`,
        text: `Посмотри на мою новую мемную карту от ФиФи банк!`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      // Fallback for browsers that don't support Web Share API
      const text = `Посмотри на мою новую мемную карту от ФиФи банк! ${window.location.href}`;
      navigator.clipboard.writeText(text).then(() => {
        alert('Ссылка скопирована в буфер обмена!');
      }).catch(() => {
        alert('Не удалось скопировать ссылку');
      });
    }
    playSound();
  };

  return (
    <section id="products" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-fun-blue to-fun-yellow bg-clip-text text-transparent mb-4">
            Наши мемные FiFiCard 🎯
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждая карта с уникальным котом-банкиром! Выбирай свой стиль 🎪
          </p>
        </div>

        {/* Новые FiFiCard */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FiFiCard
            type="debit"
            title="FiFi Дебетовая"
            description="Рыжий табби обнимает гигантскую FiFiCoin!"
            memeText="Пополнить счёт котиками?"
            catPhrase="Мур-мур, больше монет!"
            bonus="Бонус: +10 к котовому настроению!"
            onShare={() => handleShare('Дебетовая')}
            playSound={playSound}
          />
          
          <FiFiCard
            type="credit"
            title="FiFi Кредитная"
            description="Элегантный сиамский кот: от удивления к довольству!"
            memeText="Потратить — не значит расстроиться!"
            catPhrase="Мяу! Трачу с умом!"
            bonus="Кэшбэк за каждое 'мяу': до 5%"
            onShare={() => handleShare('Кредитная')}
            playSound={playSound}
          />
          
          <FiFiCard
            type="deposit"
            title="FiFi Депозитная"
            description="Пушистый персидский охранник сундуков!"
            memeText="Проценты растут как усы у кота!"
            catPhrase="Фурр! Деньги под охраной!"
            bonus="До 20% годовых за анекдоты"
            onShare={() => handleShare('Депозитная')}
            playSound={playSound}
          />
          
          <FiFiCard
            type="premium"
            title="FiFi Premium"
            description="Королевский мейн-кун в короне VIP!"
            memeText="Элитный сервис для элитных котов!"
            catPhrase="Прр-р! Я король банка!"
            bonus="Личный кот-консультант 24/7"
            onShare={() => handleShare('Premium')}
            playSound={playSound}
          />
        </div>

        {/* Старые карточки для совместимости */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">Дополнительные услуги</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Новая карточка FiFiToken */}
          <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-slate-100 border-2 border-slate-300/50">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <FiFiToken size="xl" glowing className="group-hover:animate-token-glow" />
              </div>
              <CardTitle className="text-2xl text-slate-700 font-bold">FiFiToken</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-gray-600 mb-6 text-lg">
                Официальная криптовалюта ФиФи банка! Торгуйте, зарабатывайте и получайте бонусы! 🪙
              </CardDescription>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <span className="text-lg mr-2">📈</span>
                  Стабильный рост курса
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-lg mr-2">🎁</span>
                  Бонусы за использование
                </li>
                <li className="flex items-center text-sm">
                  <span className="text-lg mr-2">⚡</span>
                  Мгновенные переводы
                </li>
              </ul>
              <Button 
                onClick={() => window.location.href = '/exchange'} 
                className="w-full bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-700 hover:to-slate-800 transform hover:scale-105 transition-all hover:animate-bounce-fun active:animate-bounce-fun"
              >
                Купить FIFI 🚀
              </Button>
            </CardContent>
          </Card>
          
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