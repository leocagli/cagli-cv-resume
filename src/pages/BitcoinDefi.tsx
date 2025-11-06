import React from 'react';
import { ArrowLeft, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import ProjectCard from '@/components/ProjectCard';

const BitcoinDefi = () => {
  const projects = [
    {
      title: "TrueBlock",
      description: "🏆 Proyecto ganador de Aleph Hackathon 2025 (Citrea Track). Ecosistema descentralizado diseñado para combatir la desinformación mediante validación pública de noticias con IA, comunidad de validadores y blockchain para garantizar transparencia e inmutabilidad.",
      technologies: ["Citrea", "Bitcoin L2", "AI", "Blockchain", "Web3"],
      status: "live" as const,
      category: "Hackathon Winner",
      externalLink: "https://github.com/leocagli/trueblock"
    },
    {
      title: "ReFinance",
      description: "🏆 Ganador del hackathon de Stellar ConstellAr con menciones especiales del equipo core. Nombrado como el proyecto mejor puntuado del evento. Plataforma DeFi para refinanciamiento de préstamos y optimización de tasas en Stellar.",
      technologies: ["Stellar", "Soroban", "DeFi", "Web3", "ONG"],
      status: "live" as const,
      category: "Hackathon Winner"
    },
    {
      title: "Antidote",
      description: "Aplicación de seguridad para Web3 que implementa filtros anti-spam y protege contra intentos de phishing y poisoning de wallets. Utiliza tácticas de ataque simuladas para identificar y mitigar riesgos en contratos inteligentes y dApps, garantizando la integridad de los activos digitales.",
      technologies: ["Web3", "Security", "Smart Contracts", "Blockchain"],
      status: "live" as const,
      category: "Security"
    },
    {
      title: "Registro.Blockchain",
      description: "Solución blockchain para el registro automotor argentino que aborda los altos impuestos y tasas asociados con los registros tradicionales. Propone implementar un alivio tributario mediante tecnología blockchain tokenizando los automotores, reduciendo costos y mejorando eficiencia.",
      technologies: ["Blockchain", "DeFi", "Finanzas", "Criptomonedas", "GovTech"],
      status: "live" as const,
      category: "GovTech"
    },
    {
      title: "Tralala Contracts",
      description: "🌟 Mención Especial en Meridian 2025 - 5to lugar (entre 500+ participantes). Proyecto de educación Web3 - compilador de contratos inteligentes accesible para adultos y niños, democratizando el acceso a la tecnología blockchain.",
      image: "/lovable-uploads/tralala-logo.jpeg",
      technologies: ["Stellar", "Soroban", "Education", "Smart Contracts", "Web3"],
      status: "live" as const,
      category: "Hackathon"
    },
    {
      title: "ZkLeaks",
      description: "🌟 Mención especial en hackathon. Proyecto destinado a modernizar Wikileaks con ZK proof (Zero-Knowledge proofs) para proteger la identidad de informantes mientras se mantiene la integridad de la información.",
      technologies: ["Zero-Knowledge", "Privacy", "Web3", "Blockchain"],
      status: "live" as const,
      category: "Hackathon"
    },
    {
      title: "Portfolio Diversificado BTC + Metales",
      description: "Plataforma de diversificación inteligente para Bitcoin y metales preciosos tokenizados. Calculadora con precios en tiempo real para construir portafolios equilibrados en DeFi.",
      image: "/lovable-uploads/ef8778f2-a78c-4887-b7f6-9a1238a486ea.png",
      technologies: ["React", "TypeScript", "Chart.js", "CoinGecko API", "Tailwind CSS"],
      status: "development" as const,
      internalLink: "/bitcoin-defi/calculator",
      category: "DeFi"
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
