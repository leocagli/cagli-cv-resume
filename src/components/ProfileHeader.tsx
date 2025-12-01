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
    <header className="space-y-8">
      {/* Hero Section - Name and Title */}
      <Card className="bg-background border border-border p-8 md:p-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-sm overflow-hidden border-2 border-foreground">
              <img 
                src={profileImage} 
                alt="Enzo Leonardo Cagliero Shictong"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Role */}
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight text-foreground">
                ENZO LEONARDO<br />
                CAGLIERO SHICTONG
              </h1>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl uppercase tracking-wide">
              CONTROLLER FINANCIERO | ANALISTA DE DATOS | DESARROLLADOR BLOCKCHAIN
            </p>
          </div>
        </div>
      </Card>

      {/* About Me Section */}
      <Card className="bg-background border border-border p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            SOBRE MÍ
          </h2>
          <Button 
            variant="default"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-sm uppercase text-xs font-bold"
          >
            MI PERFIL →
          </Button>
        </div>
        
        <p className="text-foreground text-sm md:text-base leading-relaxed max-w-4xl">
          +13 años de experiencia en mercados de capitales y criptoactivos. Controller Financiero con expertise en análisis de datos y desarrollo blockchain. 
          <span className="font-bold"> 🏆 Ganador de x4 hackathons internacionales</span> y embajador de tecnologías emergentes. Fundador de bitcoin.defi, especializado en Web3, estrategias DeFi, activos tokenizados y programación de smart contracts.
        </p>
      </Card>

      {/* Contact & Actions */}
      <Card className="bg-background border border-border p-6 md:p-8">
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            CONTACTO
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <a 
            href="mailto:leocagli@gmail.com"
            className="flex items-center gap-3 p-3 border border-border hover:bg-accent transition-colors"
          >
            <Mail size={20} className="text-foreground flex-shrink-0" />
            <span className="text-foreground text-sm font-medium">leocagli@gmail.com</span>
          </a>
          
          <a 
            href="tel:+543875110520"
            className="flex items-center gap-3 p-3 border border-border hover:bg-accent transition-colors"
          >
            <Phone size={20} className="text-foreground flex-shrink-0" />
            <span className="text-foreground text-sm font-medium">+54 387 511 0520</span>
          </a>
          
          <div className="flex items-center gap-3 p-3 border border-border">
            <MapPin size={20} className="text-foreground flex-shrink-0" />
            <span className="text-foreground text-sm font-medium">Buenos Aires, Argentina</span>
          </div>
          
          <a 
            href="https://linkedin.com/in/leocagli" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 border border-border hover:bg-accent transition-colors"
          >
            <Linkedin size={20} className="text-foreground flex-shrink-0" />
            <span className="text-foreground text-sm font-medium">linkedin.com/in/leocagli</span>
          </a>
          
          <a 
            href="https://github.com/leocagli" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 border border-border hover:bg-accent transition-colors"
          >
            <Github size={20} className="text-foreground flex-shrink-0" />
            <span className="text-foreground text-sm font-medium">github.com/leocagli</span>
          </a>

          <a 
            href="/bitcoin-defi"
            className="flex items-center gap-3 p-3 border border-border hover:bg-accent transition-colors"
          >
            <img 
              src="/lovable-uploads/ef8778f2-a78c-4887-b7f6-9a1238a486ea.png" 
              alt="Bitcoin.defi" 
              className="w-5 h-5 rounded flex-shrink-0"
            />
            <span className="text-foreground text-sm font-medium">bitcoin.defi</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button 
            onClick={onDownloadCV}
            variant="default"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-sm uppercase text-xs font-bold"
          >
            <Download className="mr-2" size={16} />
            CV COMPLETO
          </Button>
          
          <Button 
            onClick={onDownloadSummary}
            variant="outline"
            className="border-2 border-foreground rounded-sm uppercase text-xs font-bold hover:bg-foreground hover:text-background"
          >
            <FileText className="mr-2" size={16} />
            RESUMEN (1 PÁG)
          </Button>
        </div>
      </Card>

      {/* Skills Section */}
      <Card className="bg-background border border-border p-6 md:p-8">
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            COMPETENCIAS
          </h2>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {[
            'Controller Financiero', 'Python', 'SQL', 'Power BI', 'Excel Avanzado',
            'Blockchain', 'Stellar', 'Avalanche', 'Data Analysis', 'Financial Planning',
            'Budget Management', 'Cost Analysis', 'Financial Reporting', 'Business Intelligence'
          ].map((skill) => (
            <Badge 
              key={skill} 
              variant="outline" 
              className="border-foreground text-foreground rounded-sm px-3 py-1 text-xs font-medium uppercase"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </Card>

      {/* Keywords for ATS */}
      <div className="hidden">
        <span>Controller, Analista Financiero, Python, SQL, Power BI, Blockchain, Stellar, Avalanche, Excel, Finanzas, Buenos Aires, Argentina, Data Analysis, Financial Controller, Business Intelligence, Cryptocurrency, DeFi, Smart Contracts, Financial Planning, Budget Management, Cost Analysis, Financial Reporting, Hackathon Winner, Aleph 2025, Citrea, Midnight, ConstellAr, Blockchain Developer, Innovation, Problem Solving</span>
      </div>
    </header>
  );
};

export default ProfileHeader;