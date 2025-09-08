import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, ArrowLeft, Calculator, TrendingUp, Shield, Zap, Save, Download } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const BitcoinDefi = () => {
  const [btcPrice, setBtcPrice] = useState(null);
  const [paxgPrice, setPaxgPrice] = useState(null);
  const [capital, setCapital] = useState(10000);
  const [allocations, setAllocations] = useState({
    btc: 40,
    gold: 30,
    silver: 20,
    platinum: 10
  });
  const [calculationResult, setCalculationResult] = useState('');

  // Fetch prices from CoinGecko
  const loadPrices = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,pax-gold&vs_currencies=usd&include_24hr_change=true'
      );
      const data = await response.json();
      
      if (data.bitcoin) {
        setBtcPrice(data.bitcoin);
      }
      if (data['pax-gold']) {
        setPaxgPrice(data['pax-gold']);
      }
    } catch (error) {
      console.error('Error fetching prices:', error);
    }
  };

  useEffect(() => {
    loadPrices();
    const interval = setInterval(loadPrices, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  // Load preset from localStorage on component mount
  useEffect(() => {
    const savedPreset = localStorage.getItem('bitcoin_defi_preset');
    if (savedPreset) {
      try {
        const preset = JSON.parse(savedPreset);
        if (preset.pct) {
          setAllocations({
            btc: preset.pct.btc || 40,
            gold: preset.pct.gold || 30,
            silver: preset.pct.silver || 20,
            platinum: preset.pct.platinum || 10
          });
        }
        if (preset.capital) {
          setCapital(preset.capital);
        }
      } catch (e) {
        console.error('Error loading preset:', e);
      }
    }
  }, []);

  // Normalize allocations to sum 100%
  const normalizeAllocations = (newAllocations) => {
    const values = [newAllocations.btc, newAllocations.gold, newAllocations.silver, newAllocations.platinum];
    const sum = values.reduce((a, b) => a + b, 0);
    
    if (sum === 100) return newAllocations;
    
    const target = 100;
    const scaled = values.map(v => Math.max(0, (v / sum) * target));
    
    return {
      btc: Math.round(scaled[0]),
      gold: Math.round(scaled[1]),
      silver: Math.round(scaled[2]),
      platinum: Math.round(scaled[3])
    };
  };

  const handleAllocationChange = (key, value) => {
    const newAllocations = { ...allocations, [key]: value };
    const normalized = normalizeAllocations(newAllocations);
    setAllocations(normalized);
  };

  const formatUSD = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  const calculateAllocation = () => {
    const results = {
      btc: (capital * allocations.btc) / 100,
      gold: (capital * allocations.gold) / 100,
      silver: (capital * allocations.silver) / 100,
      platinum: (capital * allocations.platinum) / 100
    };

    const btcUnits = btcPrice ? results.btc / btcPrice.usd : 0;
    const paxgUnits = paxgPrice ? results.gold / paxgPrice.usd : 0;

    return { results, btcUnits, paxgUnits };
  };

  const performCalculation = () => {
    const { results, btcUnits, paxgUnits } = calculateAllocation();
    
    const output = [];
    output.push(`Capital: ${formatUSD(capital)}`);
    output.push('---');
    output.push(`BTC: ${btcUnits.toFixed(6)} BTC  (~${formatUSD(results.btc)})`);
    output.push(`PAXG: ${paxgUnits.toFixed(6)} PAXG  (~${formatUSD(results.gold)})`);
    output.push(`Plata (XAG): ~${formatUSD(results.silver)} asignados`);
    output.push(`Platino (XPT): ~${formatUSD(results.platinum)} asignados`);
    output.push('---');
    output.push('Nota: unidades de Plata/Platino requieren precio de referencia del broker/DEX elegido.');
    
    setCalculationResult(output.join('\n'));
  };

  const savePreset = () => {
    const preset = {
      pct: {
        btc: allocations.btc,
        gold: allocations.gold,
        silver: allocations.silver,
        platinum: allocations.platinum
      },
      capital: capital
    };
    localStorage.setItem('bitcoin_defi_preset', JSON.stringify(preset));
    alert('Preset guardado localmente.');
  };

  // Chart.js data
  const chartData = {
    labels: ['BTC', 'Oro (PAXG)', 'Plata', 'Platino'],
    datasets: [{
      data: [allocations.btc, allocations.gold, allocations.silver, allocations.platinum],
      backgroundColor: [
        '#F7931A', // Bitcoin orange
        '#FFD700', // Gold
        '#C0C0C0', // Silver
        '#E5E4E2'  // Platinum
      ],
      borderColor: '#1e40af',
      borderWidth: 2
    }]
  };

  const chartOptions = {
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#cfe4ff',
          font: {
            size: 12
          }
        }
      }
    },
    maintainAspectRatio: true
  };

  const { results, btcUnits, paxgUnits } = calculateAllocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Header */}
      <header className="border-b border-blue-700/20 bg-blue-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-blue-200 hover:text-white">
                  <ArrowLeft size={16} className="mr-2" />
                  Volver al CV
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/ef8778f2-a78c-4887-b7f6-9a1238a486ea.png" 
                  alt="Bitcoin.defi Logo" 
                  className="w-10 h-10 rounded-lg"
                />
                <h1 className="text-2xl font-bold text-white">Bitcoin.defi</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                En Desarrollo
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/ef8778f2-a78c-4887-b7f6-9a1238a486ea.png" 
              alt="Bitcoin.defi - Diversificación Inteligente en DeFi"
              className="w-32 h-32 mx-auto rounded-2xl shadow-2xl mb-6"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Bitcoin.defi
            </h1>
            <p className="text-xl text-blue-200 mb-6 max-w-3xl mx-auto">
              Plataforma de diversificación inteligente para Bitcoin y metales preciosos tokenizados. 
              Construye portafolios equilibrados en el ecosistema DeFi.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-blue-800/30 border-blue-600/30 p-6">
              <Calculator className="text-blue-300 mb-4 mx-auto" size={32} />
              <h3 className="text-white text-lg font-semibold mb-2">Calculadora de Asignación</h3>
              <p className="text-blue-200 text-sm">Optimiza tu portafolio con herramientas avanzadas</p>
            </Card>
            <Card className="bg-blue-800/30 border-blue-600/30 p-6">
              <TrendingUp className="text-green-300 mb-4 mx-auto" size={32} />
              <h3 className="text-white text-lg font-semibold mb-2">Precios en Tiempo Real</h3>
              <p className="text-blue-200 text-sm">Datos actualizados de Bitcoin y tokens de metales</p>
            </Card>
            <Card className="bg-blue-800/30 border-blue-600/30 p-6">
              <Shield className="text-purple-300 mb-4 mx-auto" size={32} />
              <h3 className="text-white text-lg font-semibold mb-2">Diversificación Inteligente</h3>
              <p className="text-blue-200 text-sm">Reduce riesgo con activos descorrelacionados</p>
            </Card>
          </div>
        </div>

        {/* Price Dashboard */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-blue-800/30 border-blue-600/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Bitcoin (BTC)</h2>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                Crypto
              </Badge>
            </div>
            {btcPrice ? (
              <>
                <div className="text-3xl font-bold text-white mb-2">
                  {formatUSD(btcPrice.usd)}
                </div>
                <div className={`text-sm ${btcPrice.usd_24h_change >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                  {btcPrice.usd_24h_change?.toFixed(2)}% 24h
                </div>
              </>
            ) : (
              <div className="text-blue-300">Cargando precio...</div>
            )}
          </Card>

          <Card className="bg-blue-800/30 border-blue-600/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Oro (PAXG)</h2>
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                Metales
              </Badge>
            </div>
            {paxgPrice ? (
              <>
                <div className="text-3xl font-bold text-white mb-2">
                  {formatUSD(paxgPrice.usd)}
                </div>
                <div className={`text-sm ${paxgPrice.usd_24h_change >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                  {paxgPrice.usd_24h_change?.toFixed(2)}% 24h
                </div>
              </>
            ) : (
              <div className="text-blue-300">Cargando precio...</div>
            )}
          </Card>
        </div>

        {/* Portfolio Calculator */}
        <Card className="bg-blue-800/30 border-blue-600/30 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Calculator size={24} />
            Calculadora de Portafolio
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <Label htmlFor="capital" className="text-white mb-2 block">
                  Capital Total (USD)
                </Label>
                <Input
                  id="capital"
                  type="number"
                  value={capital}
                  onChange={(e) => setCapital(Number(e.target.value))}
                  className="bg-blue-900/50 border-blue-600/30 text-white"
                  placeholder="10000"
                />
              </div>

              {/* Allocation Sliders */}
              <div className="space-y-4">
                <div>
                  <Label className="text-white mb-2 block">Bitcoin: {allocations.btc}%</Label>
                  <Slider
                    value={[allocations.btc]}
                    onValueChange={(value) => handleAllocationChange('btc', value[0])}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label className="text-white mb-2 block">Oro (PAXG): {allocations.gold}%</Label>
                  <Slider
                    value={[allocations.gold]}
                    onValueChange={(value) => handleAllocationChange('gold', value[0])}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label className="text-white mb-2 block">Plata: {allocations.silver}%</Label>
                  <Slider
                    value={[allocations.silver]}
                    onValueChange={(value) => handleAllocationChange('silver', value[0])}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label className="text-white mb-2 block">Platino: {allocations.platinum}%</Label>
                  <Slider
                    value={[allocations.platinum]}
                    onValueChange={(value) => handleAllocationChange('platinum', value[0])}
                    max={100}
                    step={1}
                    className="w-full"
                  />
                </div>

                {/* Control Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    onClick={performCalculation}
                    className="bg-blue-600 hover:bg-blue-500 text-white flex-1"
                  >
                    <Calculator size={16} className="mr-2" />
                    Calcular
                  </Button>
                  <Button 
                    onClick={savePreset}
                    variant="outline"
                    className="border-blue-600 text-blue-300 hover:bg-blue-600 hover:text-white"
                  >
                    <Save size={16} className="mr-2" />
                    Guardar
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Visualización del Portafolio</h3>
              
              {/* Pie Chart */}
              <div className="bg-blue-900/50 p-4 rounded-lg mb-4">
                <div className="w-full max-w-sm mx-auto">
                  <Pie data={chartData} options={chartOptions} />
                </div>
              </div>

              {/* Quick Allocation Display */}
              <div className="space-y-3">
                <div className="bg-blue-900/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Bitcoin</span>
                    <span className="text-white font-semibold">{formatUSD(results.btc)}</span>
                  </div>
                  {btcPrice && (
                    <div className="text-sm text-blue-300 mt-1">
                      ≈ {btcUnits.toFixed(6)} BTC
                    </div>
                  )}
                </div>
                <div className="bg-blue-900/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Oro (PAXG)</span>
                    <span className="text-white font-semibold">{formatUSD(results.gold)}</span>
                  </div>
                  {paxgPrice && (
                    <div className="text-sm text-blue-300 mt-1">
                      ≈ {paxgUnits.toFixed(6)} PAXG
                    </div>
                  )}
                </div>
                <div className="bg-blue-900/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Plata</span>
                    <span className="text-white font-semibold">{formatUSD(results.silver)}</span>
                  </div>
                </div>
                <div className="bg-blue-900/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200">Platino</span>
                    <span className="text-white font-semibold">{formatUSD(results.platinum)}</span>
                  </div>
                </div>
              </div>

              {/* Calculation Result */}
              {calculationResult && (
                <div className="bg-blue-900/50 p-4 rounded-lg mt-4">
                  <h4 className="text-white font-semibold mb-2">Resultado del Cálculo:</h4>
                  <pre className="text-blue-200 text-sm whitespace-pre-wrap font-mono">
                    {calculationResult}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Contact Section */}
        <Card className="bg-blue-800/30 border-blue-600/30 p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">¿Interesado en el Proyecto?</h2>
          <p className="text-blue-200 mb-6">
            Bitcoin.defi está en desarrollo. Contacta conmigo para más información sobre esta innovadora plataforma.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:leocagli@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Mail size={16} />
              leocagli@gmail.com
            </a>
            <a 
              href="https://linkedin.com/in/leocagli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-blue-700/20 bg-blue-900/50 backdrop-blur-sm mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} Bitcoin.defi - Desarrollado por Enzo Leonardo Cagliero Shictong
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BitcoinDefi;