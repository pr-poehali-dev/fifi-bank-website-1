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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="container mx-auto px-4">
        {/* Заголовок страницы */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <FiFiToken size="xl" glowing className="animate-token-breath" />
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
              ФиФи Биржа
            </h1>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Торгуйте FiFiToken и другими криптовалютами с выгодными условиями
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Левая колонка - Торговля */}
          <div className="lg:col-span-2 space-y-6">
            {/* График и основная информация */}
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FiFiToken 
                    size="large" 
                    price={fifiPrice} 
                    previousPrice={previousFifiPrice}
                  />
                  <div>
                    <span className="text-2xl font-bold">FiFiToken (FIFI)</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-3xl font-bold text-slate-800">
                        ${fifiPrice.toFixed(4)}
                      </span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        fifiPrice >= previousFifiPrice 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {fifiPrice >= previousFifiPrice ? '+' : ''}
                        {((fifiPrice - previousFifiPrice) / previousFifiPrice * 100).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-center text-slate-600">
                    <Icon name="TrendingUp" size={48} />
                    <span className="ml-2 text-lg">График будет добавлен в следующих обновлениях</span>
                  </div>
                </div>
                
                {/* Быстрые действия */}
                <div className="grid grid-cols-2 gap-4">
                  <FiFiTokenButton 
                    onClick={handleBuy}
                    className="bg-green-50 hover:bg-green-100 border-green-200 text-green-700"
                    price={fifiPrice}
                    previousPrice={previousFifiPrice}
                  >
                    <span className="font-semibold">Купить FIFI</span>
                  </FiFiTokenButton>
                  
                  <FiFiTokenButton 
                    onClick={handleSell}
                    className="bg-red-50 hover:bg-red-100 border-red-200 text-red-700"
                  >
                    <span className="font-semibold">Продать FIFI</span>
                  </FiFiTokenButton>
                </div>
              </CardContent>
            </Card>

            {/* Список всех криптовалют */}
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart3" />
                  Рынок криптовалют
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {cryptoData.map((crypto, index) => (
                    <div 
                      key={crypto.symbol}
                      className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
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
                        <p className="font-bold text-slate-800">
                          ${crypto.symbol === 'FIFI' ? crypto.price.toFixed(4) : crypto.price.toLocaleString()}
                        </p>
                        <p className={`text-sm ${crypto.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {crypto.change >= 0 ? '+' : ''}{crypto.change.toFixed(2)}%
                        </p>
                      </div>
                      
                      <div className="text-right text-sm text-slate-500">
                        <p>Объём: {crypto.volume}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Правая колонка - Торговая форма */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-slate-200 shadow-lg sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="ArrowUpDown" />
                  Торговля
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Количество FIFI
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                <div className="bg-slate-100 rounded-lg p-4">
                  <div className="flex justify-between text-sm text-slate-600 mb-2">
                    <span>Примерная стоимость:</span>
                    <span>${amount ? (parseFloat(amount) * fifiPrice).toFixed(2) : '0.00'}</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Комиссия (0.1%):</span>
                    <span>${amount ? ((parseFloat(amount) * fifiPrice) * 0.001).toFixed(2) : '0.00'}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    onClick={handleBuy}
                    disabled={!amount || isLoading}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    {isLoading ? (
                      <Icon name="Loader2" className="animate-spin" />
                    ) : (
                      'Купить'
                    )}
                  </Button>
                  <Button 
                    onClick={handleSell}
                    disabled={!amount || isLoading}
                    variant="outline"
                    className="border-red-300 text-red-600 hover:bg-red-50"
                  >
                    {isLoading ? (
                      <Icon name="Loader2" className="animate-spin" />
                    ) : (
                      'Продать'
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Информация о токене */}
            <Card className="bg-white/90 backdrop-blur-sm border-slate-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FiFiToken size="medium" />
                  О FiFiToken
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Общий объём:</span>
                  <span className="font-semibold">1,000,000 FIFI</span>
                </div>
                <div className="flex justify-between">
                  <span>В обращении:</span>
                  <span className="font-semibold">750,000 FIFI</span>
                </div>
                <div className="flex justify-between">
                  <span>Рыночная кап.:</span>
                  <span className="font-semibold">${(fifiPrice * 750000).toLocaleString()}</span>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <p className="text-xs">
                    FiFiToken — это официальная криптовалюта ФиФи банка, созданная для удобных и быстрых транзакций в экосистеме банка.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}