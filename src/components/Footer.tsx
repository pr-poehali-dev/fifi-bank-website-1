export default function Footer() {
  return (
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
  );
}