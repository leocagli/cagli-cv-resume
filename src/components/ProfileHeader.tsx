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
      <Card className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-primary/5 shadow-xl border-border/50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
        
        <div className="relative p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div className="relative w-40 h-40 lg:w-48 lg:h-48">
                <img 
                  src={profileImage} 
                  alt="Enzo Leonardo Cagliero Shictong - Controller Financiero y Desarrollador Blockchain"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl ring-4 ring-background"
                />
              </div>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  Enzo Leonardo Cagliero Shictong
                </h1>
                
                <div>
                  <h2 className="sr-only">Título Profesional</h2>
                  <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2 text-base font-semibold rounded-full shadow-lg">
                    CONTROLLER FINANCIERO | ANALISTA DE DATOS | DESARROLLADOR BLOCKCHAIN
                  </Badge>
                </div>

                {/* Botones de descarga integrados */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <Button 
                    onClick={onDownloadCV}
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                    size="default"
                  >
                    <Download className="mr-2" size={18} />
                    CV Completo (PDF)
                  </Button>
                  
                  <Button 
                    onClick={onDownloadSummary}
                    variant="outline"
                    className="bg-background/50 backdrop-blur-sm border-2 border-primary/20 hover:bg-primary/10 hover:border-primary/40 shadow-md hover:shadow-lg transition-all duration-300"
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
                <h2 className="text-lg font-semibold text-foreground mb-2">Resumen Profesional</h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  +13 años de experiencia en mercados de capitales y criptoactivos. Controller Financiero con expertise en análisis de datos y desarrollo blockchain. 
                  <span className="font-semibold text-accent">🏆 Ganador de x4 hackathons internacionales</span> y embajador de tecnologías emergentes.
                </p>
              </div>

              {/* Core Skills */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Competencias Clave</h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {[
                    'Controller Financiero', 'Python', 'SQL', 'Power BI', 'Excel Avanzado',
                    'Blockchain', 'Stellar', 'Avalanche', 'Data Analysis', 'Financial Planning',
                    'Budget Management', 'Cost Analysis', 'Financial Reporting', 'Business Intelligence'
                  ].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bitcoin.defi Link */}
              <div>
                <a 
                  href="/bitcoin-defi"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
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
                  className="group flex items-center gap-3 bg-card/80 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-card transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md border border-border/50"
                >
                  <Mail size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-foreground group-hover:text-primary transition-colors">leocagli@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+543875110520"
                  className="group flex items-center gap-3 bg-card/80 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-card transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md border border-border/50"
                >
                  <Phone size={18} className="text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-foreground group-hover:text-accent transition-colors">+54 387 511 0520</span>
                </a>
                
                <div className="group flex items-center gap-3 bg-card/80 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-card transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md border border-border/50">
                  <MapPin size={18} className="text-destructive group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span className="text-foreground group-hover:text-destructive transition-colors">Buenos Aires, Argentina</span>
                </div>
                
                <a 
                  href="https://linkedin.com/in/leocagli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-card/80 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-card transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md border border-border/50"
                >
                  <Linkedin size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-foreground group-hover:text-primary transition-colors">linkedin.com/in/leocagli</span>
                </a>
                
                <a 
                  href="https://github.com/leocagli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-card/80 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-card transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md border border-border/50"
                >
                  <Github size={18} className="text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-foreground group-hover:text-accent transition-colors">github.com/leocagli</span>
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