import React from 'react';
import { ArrowLeft, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import ProjectCard from '@/components/ProjectCard';

const BitcoinDefi = () => {
  const projects = [
    {
      title: "Portfolio Diversificado BTC + Metales",
      description: "Plataforma de diversificación inteligente para Bitcoin y metales preciosos tokenizados. Calculadora con precios en tiempo real para construir portafolios equilibrados en DeFi.",
      image: "/lovable-uploads/ef8778f2-a78c-4887-b7f6-9a1238a486ea.png",
      technologies: ["React", "TypeScript", "Chart.js", "CoinGecko API", "Tailwind CSS"],
      status: "development" as const,
      internalLink: "/bitcoin-defi/calculator",
      category: "DeFi"
    },
    {
      title: "Aleph 2025 - Track Citrea",
      description: "🏆 Proyecto ganador del Hackathon Aleph 2025 en el track de Citrea. Solución innovadora en el ecosistema Bitcoin Layer 2.",
      technologies: ["Bitcoin", "Citrea", "Smart Contracts", "Web3"],
      status: "live" as const,
      category: "Hackathon Winner"
    },
    {
      title: "Stellar ConstellAr",
      description: "🏆 Ganador como Mejor Proyecto con ReFinance. Plataforma financiera descentralizada construida sobre Stellar Network.",
      technologies: ["Stellar", "Soroban", "ReFinance", "DeFi"],
      status: "live" as const,
      category: "Hackathon Winner"
    },
    {
      title: "Midnight Hackathon",
      description: "🌟 Mención Especial en el Hackathon Midnight. Proyecto enfocado en privacidad y seguridad en blockchain.",
      technologies: ["Midnight", "Privacy", "Zero-Knowledge"],
      status: "live" as const,
      category: "Hackathon"
    }
  ];

  const upcomingProjects = [
    {
      title: "Proyecto DeFi 2.0",
      description: "Nueva plataforma DeFi en desarrollo. Más detalles próximamente.",
      technologies: ["TBA"],
      status: "coming-soon" as const,
      category: "DeFi"
    },
    {
      title: "NFT Marketplace",
      description: "Marketplace descentralizado para activos digitales.",
      technologies: ["TBA"],
      status: "coming-soon" as const,
      category: "NFT"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Header */}
      <header className="border-b border-blue-700/20 bg-blue-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-blue-200 hover:text-white hover:bg-blue-800/50">
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
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
              Portfolio Web3
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="text-blue-300" size={40} />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Bitcoin.Defi
            </h1>
          </div>
          <p className="text-2xl text-blue-200 mb-4">
            Portfolio de Proyectos Web3 y DeFi
          </p>
          <p className="text-lg text-blue-300 max-w-3xl mx-auto">
            Explora mis proyectos en el ecosistema blockchain, DeFi y Web3. 
            De hackathons ganadores a plataformas en producción.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">Proyectos Destacados</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Upcoming Projects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white">En Desarrollo</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center bg-blue-800/30 border border-blue-600/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">¿Interesado en Colaborar?</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-lg">
            Siempre estoy buscando nuevos desafíos y oportunidades en Web3. 
            Contacta conmigo para discutir proyectos, colaboraciones o ideas innovadoras.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:leocagli@gmail.com">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white">
                Contactar por Email
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/leonardo-cagliero/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-blue-600 text-blue-300 hover:bg-blue-600 hover:text-white">
                Ver LinkedIn
              </Button>
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-blue-700/20 bg-blue-900/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p className="text-blue-300">
            © 2025 Leonardo Cagliero - Bitcoin.defi Portfolio
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BitcoinDefi;
