import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import TradingChart from './TradingChart';
import TradingDashboard from './TradingDashboard';

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

  // Симуляция изменения цены FiFiToken
  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousFifiPrice(fifiPrice);
      const change = (Math.random() - 0.5) * 0.1;
      setFifiPrice(prev => Math.max(0.1, prev + change));
    }, 5000);

    return () => clearInterval(interval);
  }, [fifiPrice]);

  // Данные для торговой панели
  const tradingData = [
    {
      symbol: "FIFI",
      price: fifiPrice,
      change: fifiPrice - previousFifiPrice,
      changePercent: ((fifiPrice - previousFifiPrice) / previousFifiPrice * 100),
      volume: "1.2M",
      high24h: fifiPrice * 1.1,
      low24h: fifiPrice * 0.9,
      marketCap: `$${(fifiPrice * 750000).toLocaleString()}`
    },
    {
      symbol: "BTC",
      price: 43250.00,
      change: 1080.75,
      changePercent: 2.5,
      volume: "890M",
      high24h: 44100.00,
      low24h: 42800.00,
      marketCap: "$841.2B"
    },
    {
      symbol: "ETH",
      price: 2580.45,
      change: -31.22,
      changePercent: -1.2,
      volume: "456M",
      high24h: 2650.00,
      low24h: 2520.00,
      marketCap: "$310.1B"
    },
    {
      symbol: "ADA",
      price: 0.45,
      change: 0.025,
      changePercent: 5.8,
      volume: "123M",
      high24h: 0.48,
      low24h: 0.42,
      marketCap: "$15.8B"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-6 lg:py-8">
      {/* Контейнер с максимальной шириной */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Навигационная панель в неоновом стиле */}
        <div className="flex items-center justify-between mb-6 lg:mb-8">
          <Button 
            onClick={() => window.location.href = '/'}
            variant="outline"
            className="flex items-center gap-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 px-4 py-2 h-10 bg-slate-900/50 backdrop-blur-sm"
          >
            <Icon name="ArrowLeft" size={18} />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Home</span>
          </Button>
          
          {/* Статус биржи */}
          <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-green-400/50 shadow-lg shadow-green-400/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            <span className="text-green-400 font-medium text-sm">Exchange Online</span>
          </div>
        </div>

        {/* Заголовок в неоновом стиле */}
        <div className="text-center mb-8 lg:mb-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/50 animate-pulse">
              <Icon name="TrendingUp" size={32} className="text-slate-900" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-mono tracking-wider">
              FIFI EXCHANGE
            </h1>
          </div>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Professional Cryptocurrency Trading Platform
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-cyan-400 font-mono">REAL-TIME DATA</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Профессиональная сетка биржи */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Основная область с графиком */}
          <div className="xl:col-span-3 lg:col-span-2 space-y-6">
            {/* Торговый график */}
            <TradingChart 
              symbol="FIFI"
              currentPrice={fifiPrice}
              previousPrice={previousFifiPrice}
            />
          </div>
          
          {/* Торговая панель */}
          <div className="xl:col-span-1 lg:col-span-1">
            <TradingDashboard data={tradingData} />
          </div>
        </div>
      </div>
    </div>
  );
}