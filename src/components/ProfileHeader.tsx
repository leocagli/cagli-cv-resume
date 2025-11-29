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
        
        <div className="relative p-6 md:p-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* Columna Izquierda - Foto de Perfil */}
            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <img 
                src={profileImage} 
                alt="Enzo Leonardo Cagliero Shictong - Controller Financiero y Desarrollador Blockchain"
                className="w-48 h-48 lg:w-56 lg:h-56 object-cover rounded-3xl shadow-2xl ring-4 ring-white"
              />
            </div>
            
            {/* Columna Derecha - Toda la información */}
            <div className="flex-1 space-y-5 text-center lg:text-left">
              {/* Nombre y título */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800 leading-tight">
                  Enzo Leonardo Cagliero Shictong
                </h1>
                
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm md:text-base font-semibold rounded-full shadow-lg inline-block">
                  CONTROLLER FINANCIERO | ANALISTA DE DATOS | DESARROLLADOR BLOCKCHAIN
                </Badge>
              </div>

              {/* Botones de descarga y link bitcoin.defi */}
              <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
                <Button 
                  onClick={onDownloadCV}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download className="mr-2" size={18} />
                  CV Completo (PDF)
                </Button>
                
                <Button 
                  onClick={onDownloadSummary}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FileText className="mr-2" size={18} />
                  Resumen (1 Página)
                </Button>

                <a 
                  href="/bitcoin-defi"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img 
                    src="/lovable-uploads/ef8778f2-a78c-4887-b7f6-9a1238a486ea.png" 
                    alt="Bitcoin.defi" 
                    className="w-5 h-5 rounded"
                  />
                  bitcoin.defi
                </a>
              </div>

              {/* Resumen Profesional */}
              <div>
                <h2 className="text-lg font-bold text-slate-800 mb-2">Resumen Profesional</h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  +13 años de experiencia en mercados de capitales y criptoactivos. Controller Financiero con expertise en análisis de datos y desarrollo blockchain. 
                  <span className="font-bold text-orange-600"> 🏆 Ganador de x4 hackathons internacionales</span> y embajador de tecnologías emergentes.
                </p>
              </div>

              {/* Competencias Clave */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Competencias Clave</h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {[
                    'Controller Financiero', 'Python', 'SQL', 'Power BI', 'Excel Avanzado',
                    'Blockchain', 'Stellar', 'Avalanche', 'Data Analysis', 'Financial Planning',
                    'Budget Management', 'Cost Analysis', 'Financial Reporting', 'Business Intelligence'
                  ].map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs px-3 py-1 bg-white/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Información de Contacto */}
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">Contacto</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a 
                    href="mailto:leocagli@gmail.com"
                    className="group flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    <Mail size={16} className="text-blue-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-slate-700 group-hover:text-blue-600 transition-colors text-sm">leocagli@gmail.com</span>
                  </a>
                  
                  <a 
                    href="tel:+543875110520"
                    className="group flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    <Phone size={16} className="text-green-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-slate-700 group-hover:text-green-600 transition-colors text-sm">+54 387 511 0520</span>
                  </a>
                  
                  <div className="group flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md">
                    <MapPin size={16} className="text-red-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-slate-700 group-hover:text-red-600 transition-colors text-sm">Buenos Aires, Argentina</span>
                  </div>
                  
                  <a 
                    href="https://linkedin.com/in/leocagli" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    <Linkedin size={16} className="text-blue-700 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-slate-700 group-hover:text-blue-700 transition-colors text-sm">linkedin.com/in/leocagli</span>
                  </a>
                  
                  <a 
                    href="https://github.com/leocagli" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    <Github size={16} className="text-purple-600 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="text-slate-700 group-hover:text-purple-600 transition-colors text-sm">github.com/leocagli</span>
                  </a>
                </div>
              </div>

              {/* Keywords for ATS */}
              <div className="hidden">
                <span>Controller, Analista Financiero, Python, SQL, Power BI, Blockchain, Stellar, Avalanche, Excel, Finanzas, Buenos Aires, Argentina, Data Analysis, Financial Controller, Business Intelligence, Cryptocurrency, DeFi, Smart Contracts, Financial Planning, Budget Management, Cost Analysis, Financial Reporting, Hackathon Winner, Aleph 2025, Citrea, Midnight, ConstellAr, Blockchain Developer, Innovation, Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </header>
  );
};

export default ProfileHeader;