import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import profileImage from '/lovable-uploads/74e0b6e2-f1b5-4142-b1ea-0539f1dc52c5.png';

interface ProfileHeaderProps {
  onDownloadCV: () => void;
  onDownloadSummary: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ onDownloadCV, onDownloadSummary }) => {
  return (
    <header>
      <Card className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 shadow-xl border-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        
        <div className="relative p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div className="relative w-40 h-40 lg:w-48 lg:h-48">
                <img 
                  src={profileImage} 
                  alt="Enzo Leonardo Cagliero Shictong - Controller Financiero y Desarrollador Blockchain"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl ring-4 ring-white"
                />
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800">
                  Enzo Leonardo Cagliero Shictong
                </h1>
                
                <div>
                  <h2 className="sr-only">Título Profesional</h2>
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-base font-semibold rounded-full shadow-lg">
                    CONTROLLER FINANCIERO | ANALISTA DE DATOS | DESARROLLADOR BLOCKCHAIN
                  </Badge>
                </div>

                {/* Botones de descarga integrados */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Button 
                    onClick={onDownloadCV}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    size="default"
                  >
                    <Download className="mr-2" size={18} />
                    CV Completo (PDF)
                  </Button>
                  
                  <Button 
                    onClick={onDownloadSummary}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    size="default"
                  >
                    <FileText className="mr-2" size={18} />
                    Resumen (1 Página)
                  </Button>
                </div>
                
                {/* Keywords for ATS */}
                <div className="hidden">
                  <span>Controller, Analista Financiero, Python, SQL, Power BI, Blockchain, Stellar, Avalanche, Excel, Finanzas, Buenos Aires, Argentina, Data Analysis, Financial Controller, Business Intelligence, Cryptocurrency, DeFi, Smart Contracts, Financial Planning, Budget Management, Cost Analysis, Financial Reporting, Hackathon Winner, Aleph 2025, Citrea, Midnight, ConstellAr, Blockchain Developer, Innovation, Problem Solving</span>
                </div>
              </div>
              
              {/* Professional Summary */}
              <div className="text-left">
                <h2 className="text-lg font-semibold text-slate-700 mb-2">Resumen Profesional</h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  +13 años de experiencia en mercados de capitales y criptoactivos. Controller Financiero con expertise en análisis de datos y desarrollo blockchain. 
                  <span className="font-semibold text-orange-600">🏆 Ganador de x4 hackathons internacionales</span> y embajador de tecnologías emergentes.
                </p>
              </div>

              {/* Core Skills */}
              <div>
                <h3 className="text-lg font-semibold text-slate-700 mb-3">Competencias Clave</h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {[
                    'Controller Financiero', 'Python', 'SQL', 'Power BI', 'Excel Avanzado',
                    'Blockchain', 'Stellar', 'Avalanche', 'Data Analysis', 'Financial Planning',
                    'Budget Management', 'Cost Analysis', 'Financial Reporting', 'Business Intelligence'
                  ].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bitcoin.defi Link */}
              <div>
                <a 
                  href="/bitcoin-defi"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <img 
                    src="/lovable-uploads/ef8778f2-a78c-4887-b7f6-9a1238a486ea.png" 
                    alt="Bitcoin.defi" 
                    className="w-6 h-6 rounded"
                  />
                  bitcoin.defi (servicios web3)
                </a>
              </div>

              {/* Contact Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                <a 
                  href="mailto:leocagli@gmail.com"
                  className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <Mail size={18} className="text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 group-hover:text-blue-600 transition-colors">leocagli@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+543875110520"
                  className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <Phone size={18} className="text-green-600 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 group-hover:text-green-600 transition-colors">+54 387 511 0520</span>
                </a>
                
                <div className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
                  <MapPin size={18} className="text-red-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-slate-700 group-hover:text-red-600 transition-colors">Buenos Aires, Argentina</span>
                </div>
                
                <a 
                  href="https://linkedin.com/in/leocagli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <Linkedin size={18} className="text-blue-700 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 group-hover:text-blue-700 transition-colors">linkedin.com/in/leocagli</span>
                </a>
                
                <a 
                  href="https://github.com/leocagli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <Github size={18} className="text-purple-600 group-hover:scale-110 transition-transform" />
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