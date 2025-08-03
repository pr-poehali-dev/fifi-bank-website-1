import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Landmark" className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-bank-navy">ФиФи банк</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#products" className="text-gray-700 hover:text-primary transition-colors">Продукты</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О банке</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden sm:inline-flex">
                Войти
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                Открыть счет
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Банк нового<br />
                <span className="text-bank-accent">поколения</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Современные банковские решения для бизнеса и частных лиц. 
                Удобно, безопасно, выгодно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-3">
                  Открыть счет
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3">
                  Узнать больше
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">2.5M+</div>
                    <div className="text-white/80">Клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">15%</div>
                    <div className="text-white/80">Ставка по депозитам</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-white/80">Поддержка</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-white/80">Отделений</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bank-navy mb-4">Наши продукты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр банковских услуг для комфортной жизни и успешного бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="CreditCard" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-bank-navy">Банковские карты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-6">
                  Дебетовые и кредитные карты с выгодным кэшбэком и без комиссий
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Кэшбэк до 5%
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Бесплатное обслуживание
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Снятие без комиссии
                  </li>
                </ul>
                <Button className="w-full">Выбрать карту</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-bank-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="PiggyBank" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-bank-navy">Депозиты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-6">
                  Выгодные вклады с высокой доходностью и гибкими условиями
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    До 15% годовых
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Страхование АСВ
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Досрочное расторжение
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Открыть депозит</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-bank-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name="Banknote" className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-bank-navy">Кредиты</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-6">
                  Кредиты на любые цели с низкой ставкой и быстрым решением
                </CardDescription>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    От 8.9% годовых
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    Решение за 5 минут
                  </li>
                  <li className="flex items-center text-sm">
                    <Icon name="Check" className="w-4 h-4 text-green-500 mr-2" />
                    До 5 млн рублей
                  </li>
                </ul>
                <Button className="w-full" variant="outline">Получить кредит</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bank-navy mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Современные технологии и индивидуальный подход к каждому клиенту
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Shield" className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-bank-navy mb-3">Безопасность</h3>
              <p className="text-gray-600">Многоуровневая защита данных и 3D Secure</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary to-bank-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Zap" className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-bank-navy mb-3">Скорость</h3>
              <p className="text-gray-600">Мгновенные переводы и быстрые решения</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-bank-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Headphones" className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-bank-navy mb-3">Поддержка 24/7</h3>
              <p className="text-gray-600">Круглосуточная помощь наших специалистов</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon name="Smartphone" className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-bank-navy mb-3">Мобильный банк</h3>
              <p className="text-gray-600">Удобное приложение для всех операций</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Откройте счет в ФиФи банке сегодня и получите доступ к современным банковским услугам
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-12 py-4">
            Открыть счет онлайн
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-bank-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Landmark" className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">ФиФи банк</span>
              </div>
              <p className="text-gray-400 mb-4">
                Современный банк для современных людей
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Twitter" className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Instagram" className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Icon name="Youtube" className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Продукты</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Карты</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Депозиты</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Кредиты</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Инвестиции</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Интернет-банк</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Мобильное приложение</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Переводы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Платежи</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Phone" className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-400">8 800 555-00-00</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-400">info@fifibank.ru</span>
                </div>
                <div className="flex items-start">
                  <Icon name="MapPin" className="w-5 h-5 text-gray-400 mr-3 mt-1" />
                  <span className="text-gray-400">Москва, ул. Банковская, 1</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 ФиФи банк. Все права защищены.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Политика конфиденциальности</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Пользовательское соглашение</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}