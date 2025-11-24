import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Trophy, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import profileImage from '/lovable-uploads/74e0b6e2-f1b5-4142-b1ea-0539f1dc52c5.png';

const ProfileHeader = () => {
  return (
    <header>
      <Card className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 shadow-2xl border-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        
        <div className="relative p-4 md:p-6">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <img 
                  src={profileImage} 
                  alt="Enzo Leonardo Cagliero Shictong - Controller Financiero y Desarrollador Blockchain"
                  className="w-full h-full object-cover rounded-2xl shadow-xl ring-2 ring-white"
                />
                <div className="absolute -top-1 -right-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full p-2 shadow-lg animate-pulse">
                  <Trophy className="text-white" size={16} />
                </div>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-3">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-tight text-slate-800 leading-tight">
                  Enzo Leonardo Cagliero Shictong
                </h1>
                
                <div className="mb-2">
                  <h2 className="sr-only">Título Profesional</h2>
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    CONTROLLER FINANCIERO | ANALISTA DE DATOS | DESARROLLADOR BLOCKCHAIN
                  </Badge>
                </div>
                
                {/* Keywords for ATS */}
                <div className="hidden">
                  <span>Controller, Analista Financiero, Python, SQL, Power BI, Blockchain, Stellar, Avalanche, Excel, Finanzas, Buenos Aires, Argentina, Data Analysis, Financial Controller, Business Intelligence, Cryptocurrency, DeFi, Smart Contracts, Financial Planning, Budget Management, Cost Analysis, Financial Reporting, Hackathon Winner, Aleph 2025, Citrea, Midnight, ConstellAr, Blockchain Developer, Innovation, Problem Solving</span>
                </div>
              </div>
              
              {/* Professional Summary */}
              <div className="mb-3 text-left">
                <h2 className="text-base font-semibold text-slate-700 mb-1.5">Resumen Profesional</h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  +13 años de experiencia en mercados de capitales y criptoactivos. Controller Financiero con expertise en análisis de datos y desarrollo blockchain. 
                  <span className="font-semibold text-orange-600">🏆 Ganador de x4 hackathons internacionales</span> y embajador de tecnologías emergentes.
                </p>
              </div>

              {/* Core Skills */}
              <div className="mb-3">
                <h3 className="text-base font-semibold text-slate-700 mb-1.5">Competencias Clave</h3>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Controller Financiero', 'Python', 'SQL', 'Power BI', 'Excel Avanzado',
                    'Blockchain', 'Stellar', 'Avalanche', 'Data Analysis', 'Financial Planning',
                    'Budget Management', 'Cost Analysis', 'Financial Reporting', 'Business Intelligence'
                  ].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-[10px] px-2 py-0.5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bitcoin.defi Link */}
              <div className="mb-2">
                <a 
                  href="/bitcoin-defi"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img 
                    src="/lovable-uploads/ef8778f2-a78c-4887-b7f6-9a1238a486ea.png" 
                    alt="Bitcoin.defi" 
                    className="w-4 h-4 rounded"
                  />
                  bitcoin.defi (servicios web3)
                </a>
              </div>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
                <a 
                  href="mailto:leocagli@gmail.com"
                  className="group flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <Mail size={14} className="text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">leocagli@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+543875110520"
                  className="group flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <Phone size={14} className="text-green-600 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 group-hover:text-green-600 transition-colors">+54 387 511 0520</span>
                </a>
                
                <div className="group flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
                  <MapPin size={14} className="text-red-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-slate-700 group-hover:text-red-600 transition-colors">Buenos Aires, Argentina</span>
                </div>
                
                <a 
                  href="https://linkedin.com/in/leocagli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <Linkedin size={14} className="text-blue-700 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 group-hover:text-blue-700 transition-colors">linkedin.com/in/leocagli</span>
                </a>
                
                <a 
                  href="https://github.com/leocagli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <Github size={14} className="text-purple-600 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 group-hover:text-purple-600 transition-colors">github.com/leocagli</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </header>
  );
};

export default ProfileHeader;