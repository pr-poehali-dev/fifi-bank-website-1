import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { Button } from "@/components/ui/button";

interface TradingChartProps {
  symbol: string;
  currentPrice: number;
  previousPrice: number;
}

type TimeRange = '1D' | '1W' | '1M' | '3M' | '1Y';

interface CandlestickData {
  x: number;
  y: [number, number, number, number]; // [open, high, low, close]
}

export default function TradingChart({ symbol, currentPrice, previousPrice }: TradingChartProps) {
  const [timeRange, setTimeRange] = useState<TimeRange>('1D');
  const [chartData, setChartData] = useState<CandlestickData[]>([]);
  const [volumeData, setVolumeData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Генерация реалистичных данных для демонстрации
  const generateChartData = (range: TimeRange) => {
    const now = Date.now();
    let dataPoints = 0;
    let timeStep = 0;
    
    switch (range) {
      case '1D':
        dataPoints = 24;
        timeStep = 60 * 60 * 1000; // 1 hour
        break;
      case '1W':
        dataPoints = 7;
        timeStep = 24 * 60 * 60 * 1000; // 1 day
        break;
      case '1M':
        dataPoints = 30;
        timeStep = 24 * 60 * 60 * 1000; // 1 day
        break;
      case '3M':
        dataPoints = 90;
        timeStep = 24 * 60 * 60 * 1000; // 1 day
        break;
      case '1Y':
        dataPoints = 52;
        timeStep = 7 * 24 * 60 * 60 * 1000; // 1 week
        break;
    }

    const data: CandlestickData[] = [];
    const volume: any[] = [];
    let price = currentPrice;

    for (let i = dataPoints; i >= 0; i--) {
      const timestamp = now - (i * timeStep);
      const volatility = 0.02; // 2% volatility
      
      const open = price;
      const change = (Math.random() - 0.5) * 2 * volatility * price;
      const close = Math.max(0.001, open + change);
      
      const high = Math.max(open, close) * (1 + Math.random() * 0.01);
      const low = Math.min(open, close) * (1 - Math.random() * 0.01);
      
      data.push({
        x: timestamp,
        y: [open, high, low, close]
      });
      
      volume.push({
        x: timestamp,
        y: Math.floor(Math.random() * 1000000) + 100000
      });
      
      price = close;
    }

    return { candlestick: data, volume };
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const { candlestick, volume } = generateChartData(timeRange);
      setChartData(candlestick);
      setVolumeData(volume);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [timeRange, currentPrice]);

  const chartOptions = {
    chart: {
      type: 'candlestick' as const,
      height: 400,
      background: 'transparent',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: true,
        type: 'x' as const,
        autoScaleYaxis: true
      },
      animations: {
        enabled: true,
        easing: 'easeinout' as const,
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    theme: {
      mode: 'dark' as const
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#00ff88',
          downward: '#ff0066'
        },
        wick: {
          useFillColor: true
        }
      }
    },
    xaxis: {
      type: 'datetime' as const,
      labels: {
        style: {
          colors: '#8892b0',
          fontSize: '11px',
          fontWeight: 500
        },
        datetimeFormatter: {
          year: 'yyyy',
          month: 'MMM',
          day: 'dd MMM',
          hour: 'HH:mm'
        }
      },
      axisBorder: {
        show: true,
        color: '#233554'
      },
      axisTicks: {
        show: true,
        color: '#233554'
      }
    },
    yaxis: {
      tooltip: {
        enabled: true
      },
      labels: {
        style: {
          colors: '#8892b0',
          fontSize: '11px',
          fontWeight: 500
        },
        formatter: (value: number) => `$${value.toFixed(4)}`
      }
    },
    grid: {
      borderColor: '#233554',
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    tooltip: {
      theme: 'dark',
      style: {
        fontSize: '12px'
      },
      custom: ({ seriesIndex, dataPointIndex, w }: any) => {
        const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
        const [open, high, low, close] = data.y;
        const change = close - open;
        const changePercent = ((change / open) * 100).toFixed(2);
        
        return `
          <div class="bg-slate-900/95 border border-cyan-400/50 rounded-lg p-3 shadow-lg backdrop-blur-sm">
            <div class="text-cyan-400 font-semibold mb-2">${symbol}</div>
            <div class="grid grid-cols-2 gap-2 text-xs">
              <div class="text-slate-300">Open: <span class="text-white">$${open.toFixed(4)}</span></div>
              <div class="text-slate-300">High: <span class="text-green-400">$${high.toFixed(4)}</span></div>
              <div class="text-slate-300">Low: <span class="text-red-400">$${low.toFixed(4)}</span></div>
              <div class="text-slate-300">Close: <span class="text-white">$${close.toFixed(4)}</span></div>
            </div>
            <div class="mt-2 pt-2 border-t border-slate-700">
              <span class="text-slate-300">Change: </span>
              <span class="${change >= 0 ? 'text-green-400' : 'text-red-400'}">
                ${change >= 0 ? '+' : ''}${change.toFixed(4)} (${changePercent}%)
              </span>
            </div>
          </div>
        `;
      }
    }
  };

  const timeRanges: { key: TimeRange; label: string }[] = [
    { key: '1D', label: '1D' },
    { key: '1W', label: '1W' },
    { key: '1M', label: '1M' },
    { key: '3M', label: '3M' },
    { key: '1Y', label: '1Y' }
  ];

  return (
    <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-2xl">
      {/* Заголовок с переключателями времени */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold text-white">{symbol} Trading Chart</h3>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">
              ${currentPrice.toFixed(4)}
            </span>
            <span className={`text-sm px-2 py-1 rounded-md font-medium ${
              currentPrice >= previousPrice 
                ? 'bg-green-400/20 text-green-400 border border-green-400/30' 
                : 'bg-red-400/20 text-red-400 border border-red-400/30'
            }`}>
              {currentPrice >= previousPrice ? '+' : ''}
              {((currentPrice - previousPrice) / previousPrice * 100).toFixed(2)}%
            </span>
          </div>
        </div>
        
        {/* Переключатели времени */}
        <div className="flex items-center gap-1 bg-slate-800/50 rounded-lg p-1 border border-slate-600/50">
          {timeRanges.map(({ key, label }) => (
            <Button
              key={key}
              onClick={() => setTimeRange(key)}
              variant="ghost"
              size="sm"
              className={`h-8 px-3 text-xs font-medium transition-all duration-300 ${
                timeRange === key
                  ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/50 shadow-lg shadow-cyan-400/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/50 border border-transparent'
              }`}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      {/* График */}
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 rounded-lg z-10">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-cyan-400 font-medium">Loading chart data...</span>
            </div>
          </div>
        )}
        
        <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700/30">
          <Chart
            options={chartOptions}
            series={[{
              name: symbol,
              data: chartData
            }]}
            type="candlestick"
            height={400}
          />
        </div>
      </div>

      {/* Объем торгов */}
      <div className="mt-4 bg-slate-950/50 rounded-lg p-4 border border-slate-700/30">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
          <span className="text-sm font-medium text-slate-300">Volume</span>
        </div>
        <Chart
          options={{
            chart: {
              type: 'bar',
              height: 100,
              background: 'transparent',
              toolbar: { show: false },
              sparkline: { enabled: true }
            },
            theme: { mode: 'dark' },
            plotOptions: {
              bar: {
                colors: {
                  ranges: [{
                    from: 0,
                    to: 1000000,
                    color: '#60a5fa'
                  }]
                }
              }
            },
            tooltip: {
              theme: 'dark',
              y: {
                formatter: (value: number) => `${(value / 1000).toFixed(0)}K`
              }
            },
            xaxis: {
              type: 'datetime',
              labels: { show: false },
              axisBorder: { show: false },
              axisTicks: { show: false }
            },
            yaxis: {
              labels: { show: false }
            },
            grid: { show: false }
          }}
          series={[{
            name: 'Volume',
            data: volumeData
          }]}
          type="bar"
          height={100}
        />
      </div>
    </div>
  );
}