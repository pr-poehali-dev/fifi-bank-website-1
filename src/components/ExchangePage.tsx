import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';
import FiFiToken, { FiFiTokenButton } from './FiFiToken';

interface CryptoData {
  name: string;
  symbol: string;
  price: number;
  change: number;
  volume: string;
}

export default function ExchangePage() {
  const [fifiPrice, setFifiPrice] = useState(1.25);
  const [previousFifiPrice, setPreviousFifiPrice] = useState(1.25);
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Симуляция изменения цены FiFiToken
  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousFifiPrice(fifiPrice);
      const change = (Math.random() - 0.5) * 0.1;
      setFifiPrice(prev => Math.max(0.1, prev + change));
    }, 5000);

    return () => clearInterval(interval);
  }, [fifiPrice]);

  const cryptoData: CryptoData[] = [
    {
      name: "FiFiToken",
      symbol: "FIFI",
      price: fifiPrice,
      change: ((fifiPrice - previousFifiPrice) / previousFifiPrice * 100),
      volume: "1.2M"
    },
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: 43250.00,
      change: 2.5,
      volume: "890M"
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: 2580.45,
      change: -1.2,
      volume: "456M"
    },
    {
      name: "Cardano",
      symbol: "ADA",
      price: 0.45,
      change: 5.8,
      volume: "123M"
    }
  ];

  const handleBuy = async () => {
    setIsLoading(true);
    // Симуляция покупки
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setAmount('');
  };

  const handleSell = async () => {
    setIsLoading(true);
    // Симуляция продажи
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setAmount('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-6 lg:py-8">
      {/* Контейнер с максимальной шириной */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Навигационная панель */}
        <div className="flex items-center justify-between mb-6 lg:mb-8">
          <Button 
            onClick={() => window.location.href = '/'}
            variant="outline"
            className="flex items-center gap-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-all duration-200 px-4 py-2 h-10"
          >
            <Icon name="ArrowLeft" size={18} />
            <span className="hidden sm:inline">Вернуться на главную</span>
            <span className="sm:hidden">Главная</span>
          </Button>
          
          {/* Мини-виджет курса */}
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-200 shadow-sm">
            <FiFiToken size="small" price={fifiPrice} previousPrice={previousFifiPrice} />
            <div className="text-sm">
              <span className="font-semibold text-slate-800">${fifiPrice.toFixed(4)}</span>
              <span className={`ml-2 ${fifiPrice >= previousFifiPrice ? 'text-green-600' : 'text-red-600'}`}>
                {fifiPrice >= previousFifiPrice ? '+' : ''}
                {((fifiPrice - previousFifiPrice) / previousFifiPrice * 100).toFixed(2)}%
              </span>
            </div>
          </div>
        </div>

        {/* Заголовок страницы */}
        <div className="text-center mb-8 lg:mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <FiFiToken size="xl" glowing className="animate-token-breath" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              ФиФи Биржа
            </h1>
          </div>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Торгуйте FiFiToken и другими криптовалютами с выгодными условиями
          </p>
        </div>

        {/* Оптимизированная сетка для десктопов */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Основная торговая область */}
          <div className="xl:col-span-3 lg:col-span-2 space-y-6 lg:space-y-8">
            {/* График и основная информация */}
            <Card className="bg-white/90 backdrop-blur-sm border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <FiFiToken 
                      size="large" 
                      price={fifiPrice} 
                      previousPrice={previousFifiPrice}
                    />
                    <div>
                      <span className="text-xl lg:text-2xl xl:text-3xl font-bold">FiFiToken (FIFI)</span>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800">
                          ${fifiPrice.toFixed(4)}
                        </span>
                        <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                          fifiPrice >= previousFifiPrice 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {fifiPrice >= previousFifiPrice ? '+' : ''}
                          {((fifiPrice - previousFifiPrice) / previousFifiPrice * 100).toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Статистика в заголовке для больших экранов */}
                  <div className="hidden xl:flex gap-6 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-slate-800">1.2M</div>
                      <div className="text-slate-500">Объём 24ч</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-slate-800">750K</div>
                      <div className="text-slate-500">В обращении</div>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl p-8 lg:p-10">
                  <div className="flex items-center justify-center text-slate-600 min-h-[120px] lg:min-h-[150px]">
                    <Icon name="TrendingUp" size={64} className="text-slate-400" />
                    <div className="ml-4 text-center">
                      <div className="text-lg lg:text-xl font-medium">График торгов</div>
                      <div className="text-sm text-slate-500 mt-1">Будет добавлен в следующих обновлениях</div>
                    </div>
                  </div>
                </div>
                
                {/* Быстрые действия */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  <FiFiTokenButton 
                    onClick={handleBuy}
                    className="bg-green-50 hover:bg-green-100 border-green-200 text-green-700 h-14 text-lg"
                    price={fifiPrice}
                    previousPrice={previousFifiPrice}
                  >
                    <span className="font-semibold">Купить FIFI</span>
                  </FiFiTokenButton>
                  
                  <FiFiTokenButton 
                    onClick={handleSell}
                    className="bg-red-50 hover:bg-red-100 border-red-200 text-red-700 h-14 text-lg"
                  >
                    <span className="font-semibold">Продать FIFI</span>
                  </FiFiTokenButton>
                </div>
              </CardContent>
            </Card>

            {/* Список всех криптовалют */}
            <Card className="bg-white/90 backdrop-blur-sm border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Icon name="BarChart3" size={24} />
                  Рынок криптовалют
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Таблица для больших экранов */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-5 gap-4 pb-4 mb-4 border-b border-slate-200 text-sm font-medium text-slate-600">
                    <div>Актив</div>
                    <div className="text-right">Цена</div>
                    <div className="text-right">Изменение 24ч</div>
                    <div className="text-right">Объём</div>
                    <div className="text-right">Действия</div>
                  </div>
                  <div className="space-y-3">
                    {cryptoData.map((crypto) => (
                      <div 
                        key={crypto.symbol}
                        className="grid grid-cols-5 gap-4 items-center p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          {crypto.symbol === 'FIFI' ? (
                            <FiFiToken size="medium" />
                          ) : (
                            <div className="w-10 h-10 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {crypto.symbol.slice(0, 2)}
                            </div>
                          )}
                          <div>
                            <h3 className="font-semibold text-slate-800">{crypto.name}</h3>
                            <p className="text-sm text-slate-500">{crypto.symbol}</p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-bold text-slate-800 text-lg">
                            ${crypto.symbol === 'FIFI' ? crypto.price.toFixed(4) : crypto.price.toLocaleString()}
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            crypto.change >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
                          </span>
                        </div>
                        
                        <div className="text-right text-slate-600 font-medium">
                          {crypto.volume}
                        </div>
                        
                        <div className="text-right">
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-slate-300 hover:bg-slate-100"
                          >
                            Торговать
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Карточки для мобильных экранов */}
                <div className="lg:hidden space-y-4">
                  {cryptoData.map((crypto) => (
                    <div 
                      key={crypto.symbol}
                      className="p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {crypto.symbol === 'FIFI' ? (
                            <FiFiToken size="medium" />
                          ) : (
                            <div className="w-10 h-10 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {crypto.symbol.slice(0, 2)}
                            </div>
                          )}
                          <div>
                            <h3 className="font-semibold text-slate-800">{crypto.name}</h3>
                            <p className="text-sm text-slate-500">{crypto.symbol}</p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-bold text-slate-800">
                            ${crypto.symbol === 'FIFI' ? crypto.price.toFixed(4) : crypto.price.toLocaleString()}
                          </p>
                          <p className={`text-sm ${crypto.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-slate-500">
                        <span>Объём: {crypto.volume}</span>
                        <Button size="sm" variant="outline">Торговать</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Правая колонка - Торговая форма */}
          <div className="space-y-6">
            <Card className="bg-white/95 backdrop-blur-sm border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 lg:sticky lg:top-8">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Icon name="ArrowUpDown" size={24} />
                  Торговля
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    Количество FIFI
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-4 py-4 text-lg border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <FiFiToken size="small" />
                    </div>
                  </div>
                  
                  {/* Быстрые кнопки */}
                  <div className="grid grid-cols-4 gap-2 mt-3">
                    {[10, 50, 100, 500].map((preset) => (
                      <Button
                        key={preset}
                        variant="outline"
                        size="sm"
                        onClick={() => setAmount(preset.toString())}
                        className="text-xs h-8 border-slate-300 hover:bg-slate-100"
                      >
                        {preset}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-slate-600">Примерная стоимость:</span>
                    <span className="font-bold text-lg text-slate-800">
                      ${amount ? (parseFloat(amount) * fifiPrice).toFixed(2) : '0.00'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600">Комиссия (0.1%):</span>
                    <span className="text-sm text-slate-600">
                      ${amount ? ((parseFloat(amount) * fifiPrice) * 0.001).toFixed(2) : '0.00'}
                    </span>
                  </div>
                  <div className="border-t border-slate-200 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700">Итого к оплате:</span>
                      <span className="font-bold text-lg text-slate-800">
                        ${amount ? ((parseFloat(amount) * fifiPrice) * 1.001).toFixed(2) : '0.00'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <Button 
                    onClick={handleBuy}
                    disabled={!amount || isLoading}
                    className="bg-green-600 hover:bg-green-700 text-white h-12 text-lg font-semibold"
                  >
                    {isLoading ? (
                      <Icon name="Loader2" className="animate-spin mr-2" />
                    ) : (
                      <>
                        <Icon name="TrendingUp" className="mr-2" size={18} />
                        Купить FIFI
                      </>
                    )}
                  </Button>
                  <Button 
                    onClick={handleSell}
                    disabled={!amount || isLoading}
                    variant="outline"
                    className="border-red-300 text-red-600 hover:bg-red-50 h-12 text-lg font-semibold"
                  >
                    {isLoading ? (
                      <Icon name="Loader2" className="animate-spin mr-2" />
                    ) : (
                      <>
                        <Icon name="TrendingDown" className="mr-2" size={18} />
                        Продать FIFI
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Информация о токене */}
            <Card className="bg-white/95 backdrop-blur-sm border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <FiFiToken size="medium" glowing />
                  О FiFiToken
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium text-slate-600">Общий объём:</span>
                    <span className="font-bold text-slate-800">1,000,000 FIFI</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium text-slate-600">В обращении:</span>
                    <span className="font-bold text-slate-800">750,000 FIFI</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <span className="text-sm font-medium text-slate-600">Рыночная кап.:</span>
                    <span className="font-bold text-green-700">
                      ${(fifiPrice * 750000).toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-200">
                  <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg p-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      FiFiToken — это официальная криптовалюта ФиФи банка, созданная для удобных и быстрых транзакций в экосистеме банка.
                    </p>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-slate-300 hover:bg-slate-100"
                  onClick={() => alert('Подробнее о FiFiToken - функция в разработке!')}
                >
                  <Icon name="Info" className="mr-2" size={16} />
                  Подробнее о токене
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}