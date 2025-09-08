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
        
        <div className="relative p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                <img 
                  src={profileImage} 
                  alt="Enzo Leonardo Cagliero Shictong - Controller Financiero y Desarrollador Blockchain"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl ring-4 ring-white"
                />
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full p-3 shadow-lg animate-pulse">
                  <Trophy className="text-white" size={24} />
                </div>
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-slate-800 leading-tight">
                  Enzo Leonardo Cagliero Shictong
                </h1>
                
                <div className="mb-4">
                  <h2 className="sr-only">Título Profesional</h2>
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                    CONTROLLER FINANCIERO | ANALISTA DE DATOS | DESARROLLADOR BLOCKCHAIN
                  </Badge>
                </div>
                
                {/* Keywords for ATS */}
                <div className="hidden">
                  <span>Controller, Analista Financiero, Python, SQL, Power BI, Blockchain, Stellar, Avalanche, Excel, Finanzas, Buenos Aires, Argentina, Data Analysis, Financial Controller, Business Intelligence, Cryptocurrency, DeFi, Smart Contracts, Financial Planning, Budget Management, Cost Analysis, Financial Reporting, Hackathon Winner, Aleph 2025, Citrea, Midnight, ConstellAr, Blockchain Developer, Innovation, Problem Solving</span>
                </div>
              </div>
              
              {/* Professional Summary */}
              <div className="mb-6 text-left">
                <h2 className="text-xl font-semibold text-slate-700 mb-3">Resumen Profesional</h2>
                <p className="text-slate-600 leading-relaxed">
                  Controller Financiero con expertise en análisis de datos y desarrollo blockchain. 
                  Especialista en Python, SQL y Power BI con experiencia en ecosistemas Stellar y Avalanche. 
                  Ganador de hackathons internacionales y embajador de tecnologías emergentes.
                </p>
              </div>
              
              {/* Hackathon Achievements */}
              <div className="space-y-2 mb-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-slate-900 px-4 py-2 rounded-xl font-semibold text-sm shadow-lg">
                  <Trophy size={16} />
                  🏆 Hackathon Winner - Aleph 2025 (Track Citrea)
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-slate-900 px-4 py-2 rounded-xl font-semibold text-sm shadow-lg">
                  <Trophy size={16} />
                  🏆 Hackathon Winner - Stellar ConstellAr
                </div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-lg">
                  <Star size={16} />
                  🌟 Mención Especial - Hackathon Midnight
                </div>
              </div>

              {/* Core Skills */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-700 mb-3">Competencias Clave</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Controller Financiero', 'Python', 'SQL', 'Power BI', 'Excel Avanzado',
                    'Blockchain', 'Stellar', 'Avalanche', 'Data Analysis', 'Financial Planning',
                    'Budget Management', 'Cost Analysis', 'Financial Reporting', 'Business Intelligence'
                  ].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bitcoin.defi Link */}
              <div className="mb-4">
                <a 
                  href="/bitcoin-defi"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img 
                    src="/lovable-uploads/ef8778f2-a78c-4887-b7f6-9a1238a486ea.png" 
                    alt="Bitcoin.defi" 
                    className="w-5 h-5 rounded"
                  />
                  Ver Bitcoin.defi - Mi Proyecto DeFi
                </a>
              </div>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                <a 
                  href="mailto:leocagli@gmail.com"
                  className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <Mail size={16} className="text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">leocagli@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+543875110520"
                  className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <Phone size={16} className="text-green-600 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 group-hover:text-green-600 transition-colors">+54 387 511 0520</span>
                </a>
                
                <div className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <MapPin size={16} className="text-red-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-slate-700 group-hover:text-red-600 transition-colors">Buenos Aires, Argentina</span>
                </div>
                
                <a 
                  href="https://linkedin.com/in/leocagli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <Linkedin size={16} className="text-blue-700 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 group-hover:text-blue-700 transition-colors">linkedin.com/in/leocagli</span>
                </a>
                
                <a 
                  href="https://github.com/leocagli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <Github size={16} className="text-purple-600 group-hover:scale-110 transition-transform" />
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