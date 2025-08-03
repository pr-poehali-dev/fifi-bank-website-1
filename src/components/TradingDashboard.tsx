import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

interface TradingData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: string;
  high24h: number;
  low24h: number;
  marketCap: string;
}

interface TradingDashboardProps {
  data: TradingData[];
}

export default function TradingDashboard({ data }: TradingDashboardProps) {
  const [selectedCrypto, setSelectedCrypto] = useState(0);
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy');
  const [orderMode, setOrderMode] = useState<'market' | 'limit'>('market');
  const [amount, setAmount] = useState('');
  const [price, setPrice] = useState('');

  const currentData = data[selectedCrypto];

  // Анимация обновления цены
  const [priceAnimationClass, setPriceAnimationClass] = useState('');

  useEffect(() => {
    setPriceAnimationClass('animate-pulse');
    const timer = setTimeout(() => setPriceAnimationClass(''), 600);
    return () => clearTimeout(timer);
  }, [currentData.price]);

  const formatPrice = (price: number) => {
    if (price < 1) return price.toFixed(6);
    if (price < 100) return price.toFixed(4);
    return price.toLocaleString();
  };

  return (
    <div className="space-y-6">
      {/* Список криптовалют */}
      <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-700/50">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
            Live Markets
          </h3>
        </div>
        
        <div className="divide-y divide-slate-700/30">
          {data.map((crypto, index) => (
            <div
              key={crypto.symbol}
              onClick={() => setSelectedCrypto(index)}
              className={`p-4 cursor-pointer transition-all duration-300 hover:bg-slate-800/50 ${
                selectedCrypto === index 
                  ? 'bg-cyan-400/10 border-l-4 border-cyan-400 shadow-lg shadow-cyan-400/20' 
                  : 'hover:bg-slate-800/30'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-white font-bold text-sm border-2 ${
                    selectedCrypto === index ? 'border-cyan-400' : 'border-slate-600'
                  }`}>
                    {crypto.symbol.slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{crypto.symbol}</div>
                    <div className="text-xs text-slate-400">Vol: {crypto.volume}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`font-bold text-lg ${
                    selectedCrypto === index && priceAnimationClass
                  } text-white`}>
                    ${formatPrice(crypto.price)}
                  </div>
                  <div className={`text-sm font-medium ${
                    crypto.change >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {crypto.change >= 0 ? '+' : ''}{crypto.changePercent.toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Панель торговли */}
      <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-2xl">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
          <h3 className="text-lg font-bold text-white">Trading Panel</h3>
        </div>

        {/* Переключатель Buy/Sell */}
        <div className="flex bg-slate-800/50 rounded-lg p-1 mb-6 border border-slate-600/50">
          <Button
            onClick={() => setOrderType('buy')}
            className={`flex-1 h-10 text-sm font-medium transition-all duration-300 ${
              orderType === 'buy'
                ? 'bg-green-400/20 text-green-400 border border-green-400/50 shadow-lg shadow-green-400/20'
                : 'text-slate-400 hover:text-white bg-transparent border border-transparent'
            }`}
          >
            <Icon name="TrendingUp" size={16} className="mr-2" />
            BUY
          </Button>
          <Button
            onClick={() => setOrderType('sell')}
            className={`flex-1 h-10 text-sm font-medium transition-all duration-300 ${
              orderType === 'sell'
                ? 'bg-red-400/20 text-red-400 border border-red-400/50 shadow-lg shadow-red-400/20'
                : 'text-slate-400 hover:text-white bg-transparent border border-transparent'
            }`}
          >
            <Icon name="TrendingDown" size={16} className="mr-2" />
            SELL
          </Button>
        </div>

        {/* Переключатель Market/Limit */}
        <div className="flex bg-slate-800/50 rounded-lg p-1 mb-6 border border-slate-600/50">
          <Button
            onClick={() => setOrderMode('market')}
            className={`flex-1 h-8 text-xs font-medium transition-all duration-300 ${
              orderMode === 'market'
                ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/50'
                : 'text-slate-400 hover:text-white bg-transparent border border-transparent'
            }`}
          >
            Market
          </Button>
          <Button
            onClick={() => setOrderMode('limit')}
            className={`flex-1 h-8 text-xs font-medium transition-all duration-300 ${
              orderMode === 'limit'
                ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/50'
                : 'text-slate-400 hover:text-white bg-transparent border border-transparent'
            }`}
          >
            Limit
          </Button>
        </div>

        <div className="space-y-4">
          {/* Цена (только для limit) */}
          {orderMode === 'limit' && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Price ({currentData.symbol})
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder={formatPrice(currentData.price)}
                  className="w-full h-12 px-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-slate-400">
                  USD
                </div>
              </div>
            </div>
          )}

          {/* Количество */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Amount ({currentData.symbol})
            </label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full h-12 px-4 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-slate-400">
                {currentData.symbol}
              </div>
            </div>
          </div>

          {/* Быстрые кнопки процентов */}
          <div className="grid grid-cols-4 gap-2">
            {[25, 50, 75, 100].map((percent) => (
              <Button
                key={percent}
                onClick={() => setAmount((1000 * percent / 100).toString())}
                variant="outline"
                size="sm"
                className="h-8 text-xs border-slate-600/50 text-slate-400 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300"
              >
                {percent}%
              </Button>
            ))}
          </div>

          {/* Общая стоимость */}
          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-slate-400">Total</span>
              <span className="text-lg font-bold text-white">
                ${amount && (orderMode === 'market' ? currentData.price : parseFloat(price || '0')) ? 
                  ((parseFloat(amount || '0')) * (orderMode === 'market' ? currentData.price : parseFloat(price || '0'))).toFixed(2) : 
                  '0.00'
                }
              </span>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-500">
              <span>Fee (0.1%)</span>
              <span>
                ${amount && (orderMode === 'market' ? currentData.price : parseFloat(price || '0')) ? 
                  (((parseFloat(amount || '0')) * (orderMode === 'market' ? currentData.price : parseFloat(price || '0'))) * 0.001).toFixed(2) : 
                  '0.00'
                }
              </span>
            </div>
          </div>

          {/* Кнопка торговли */}
          <Button
            className={`w-full h-12 font-bold text-lg transition-all duration-300 ${
              orderType === 'buy'
                ? 'bg-green-400/20 text-green-400 border-2 border-green-400/50 hover:bg-green-400/30 hover:shadow-lg hover:shadow-green-400/30'
                : 'bg-red-400/20 text-red-400 border-2 border-red-400/50 hover:bg-red-400/30 hover:shadow-lg hover:shadow-red-400/30'
            }`}
            disabled={!amount}
          >
            {orderType.toUpperCase()} {currentData.symbol}
          </Button>
        </div>
      </div>

      {/* Статистика */}
      <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-2xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
          <h3 className="text-lg font-bold text-white">24h Statistics</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
            <div className="text-xs text-slate-400 mb-1">24h High</div>
            <div className="text-lg font-bold text-green-400">
              ${formatPrice(currentData.high24h)}
            </div>
          </div>
          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
            <div className="text-xs text-slate-400 mb-1">24h Low</div>
            <div className="text-lg font-bold text-red-400">
              ${formatPrice(currentData.low24h)}
            </div>
          </div>
          <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30 col-span-2">
            <div className="text-xs text-slate-400 mb-1">Market Cap</div>
            <div className="text-lg font-bold text-cyan-400">
              {currentData.marketCap}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}