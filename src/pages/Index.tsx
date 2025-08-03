import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-fun-blue/10 via-white to-fun-yellow/10">
      {/* Header */}
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
              <Button variant="outline" className="hidden sm:inline-flex border-fun-blue text-fun-blue hover:bg-fun-blue hover:text-white">
                Войти с улыбкой 😊
              </Button>
              <Button className="bg-gradient-to-r from-fun-blue to-fun-yellow hover:from-fun-yellow hover:to-fun-blue transition-all duration-300 transform hover:scale-105">
                Открыть счет
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
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
              <Button size="lg" className="bg-gradient-to-r from-fun-yellow to-fun-orange text-black hover:from-fun-orange hover:to-fun-yellow text-xl px-12 py-4 transform hover:scale-110 transition-all duration-300">
                <Icon name="Smile" className="w-6 h-6 mr-2" />
                Начать смеяться 😂
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-fun-blue text-fun-blue hover:bg-fun-blue hover:text-white text-xl px-12 py-4 transform hover:scale-110 transition-all duration-300">
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

      {/* Products Section */}
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
                <Button className="w-full bg-fun-yellow text-black hover:bg-fun-orange transform hover:scale-105 transition-all">
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
                <Button className="w-full bg-fun-pink text-white hover:bg-fun-purple transform hover:scale-105 transition-all" variant="outline">
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
                <Button className="w-full bg-fun-green text-white hover:bg-fun-blue transform hover:scale-105 transition-all" variant="outline">
                  Взять смешной кредит! 🤪
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-r from-fun-blue/10 to-fun-yellow/10">
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
              <div className="w-24 h-24 bg-gradient-to-br from-fun-blue to-fun-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                <span className="text-5xl">📶</span>
              </div>
              <h3 className="text-xl font-semibold text-fun-blue mb-3">Надёжность</h3>
              <p className="text-gray-600">Даже Wi-Fi у нас стабилен! И это не шутка... или шутка? 🤔</p>
            </div>

            <div className="text-center group transform hover:scale-110 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-fun-yellow to-fun-orange rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                <span className="text-5xl">🛋️</span>
              </div>
              <h3 className="text-xl font-semibold text-fun-yellow mb-3">Удобство</h3>
              <p className="text-gray-600">Открываешь счёт, не отходя от дивана. Можно даже в пижаме! 👔</p>
            </div>

            <div className="text-center group transform hover:scale-110 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-fun-pink to-fun-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                <span className="text-5xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-fun-pink mb-3">Инновации</h3>
              <p className="text-gray-600">Наша карта умеет улыбаться и даже подмигивать! 😉</p>
            </div>

            <div className="text-center group transform hover:scale-110 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-fun-green to-fun-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce">
                <span className="text-5xl">🎧</span>
              </div>
              <h3 className="text-xl font-semibold text-fun-green mb-3">Поддержка 24/7</h3>
              <p className="text-gray-600">Круглосуточный чат с вашим новым другом-ботом! Он знает 1000 шуток! 🤣</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-fun-blue via-fun-yellow to-fun-orange text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-5xl font-bold mb-6 animate-pulse">Готовы повеселиться? 🎊</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Присоединяйтесь к самому весёлому банку в галактике! Гарантируем улыбку или возвращаем ваше настроение! 😄
          </p>
          <Button size="lg" className="bg-white text-fun-blue hover:bg-gray-100 text-2xl px-16 py-6 transform hover:scale-110 transition-all duration-300">
            <span className="mr-2">🎪</span>
            Стать клиентом-комедиантом!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-gray-900 text-white py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-fun-blue to-fun-yellow rounded-full flex items-center justify-center">
                  <span className="text-2xl">😄</span>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-fun-blue to-fun-yellow bg-clip-text text-transparent">
                    ФиФи банк
                  </span>
                  <div className="text-xs text-gray-400">Банк с чувством юмора!</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Где финансы встречаются с весельем! 🎭💰
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-fun-blue rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <span>📘</span>
                </div>
                <div className="w-8 h-8 bg-fun-yellow rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <span>🐦</span>
                </div>
                <div className="w-8 h-8 bg-fun-pink rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <span>📷</span>
                </div>
                <div className="w-8 h-8 bg-fun-green rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <span>🎬</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-fun-yellow">Продукты-приколы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-fun-blue transition-colors">💳 Карты-мемы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-fun-blue transition-colors">🐷 Депозиты-шутки</a></li>
                <li><a href="#" className="text-gray-400 hover:text-fun-blue transition-colors">💸 Кредиты-приколы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-fun-blue transition-colors">🎯 Инвест-игры</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-fun-blue">Услуги</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-fun-yellow transition-colors">🌐 Интернет-банк-тв</a></li>
                <li><a href="#" className="text-gray-400 hover:text-fun-yellow transition-colors">📱 Мем-приложение</a></li>
                <li><a href="#" className="text-gray-400 hover:text-fun-yellow transition-colors">💌 Переводы-открытки</a></li>
                <li><a href="#" className="text-gray-400 hover:text-fun-yellow transition-colors">🎪 Весёлые платежи</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-fun-pink">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-lg mr-3">📞</span>
                  <span className="text-gray-400">8 800 ХА-ХА-ХА</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg mr-3">📧</span>
                  <span className="text-gray-400">smile@fifibank.fun</span>
                </div>
                <div className="flex items-start">
                  <span className="text-lg mr-3 mt-1">📍</span>
                  <span className="text-gray-400">Москва, ул. Смеховая, д. 😄</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 ФиФи банк. Все шутки защищены авторским правом! 😂 Пожалуйста, не копируйте наш юмор без улыбки.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-fun-yellow text-sm transition-colors">🔒 Политика смеха</a>
                <a href="#" className="text-gray-400 hover:text-fun-yellow text-sm transition-colors">📜 Соглашение о веселье</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}