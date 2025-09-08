import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ArrowLeft, Calculator, TrendingUp, Shield, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Link } from 'react-router-dom';

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
                    onValueChange={(value) => setAllocations({...allocations, btc: value[0]})}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label className="text-white mb-2 block">Oro (PAXG): {allocations.gold}%</Label>
                  <Slider
                    value={[allocations.gold]}
                    onValueChange={(value) => setAllocations({...allocations, gold: value[0]})}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label className="text-white mb-2 block">Plata: {allocations.silver}%</Label>
                  <Slider
                    value={[allocations.silver]}
                    onValueChange={(value) => setAllocations({...allocations, silver: value[0]})}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
                <div>
                  <Label className="text-white mb-2 block">Platino: {allocations.platinum}%</Label>
                  <Slider
                    value={[allocations.platinum]}
                    onValueChange={(value) => setAllocations({...allocations, platinum: value[0]})}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">Asignación Calculada</h3>
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