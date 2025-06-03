
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Header = () => {
  return (
    <Card className="p-8 bg-gradient-to-r from-slate-900 to-blue-900 text-white shadow-xl">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
          Enzo Leonardo Cagliero Shictong
        </h1>
        <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-6 py-2 rounded-full font-semibold text-lg mb-6">
          CONTROLLER / ANALISTA FINANCIERO
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm">
          <div className="flex items-center justify-center gap-2 hover:text-yellow-400 transition-colors">
            <Mail size={16} />
            <span>leocagli@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-2 hover:text-yellow-400 transition-colors">
            <Phone size={16} />
            <span>+54 387 511 0520</span>
          </div>
          <div className="flex items-center justify-center gap-2 hover:text-yellow-400 transition-colors">
            <MapPin size={16} />
            <span>Recoleta - CABA / Salta</span>
          </div>
          <div className="flex items-center justify-center gap-2 hover:text-yellow-400 transition-colors">
            <Linkedin size={16} />
            <span>linkedin.com/in/leocagli</span>
          </div>
          <div className="flex items-center justify-center gap-2 hover:text-yellow-400 transition-colors">
            <Github size={16} />
            <span>github.com/leocagli</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Header;
