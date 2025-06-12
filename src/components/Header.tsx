
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Header = () => {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-2xl">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full translate-y-48 -translate-x-48"></div>
      
      <div className="relative p-8 md:p-12">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
              Enzo Leonardo Cagliero Shictong
            </h1>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-slate-900 px-8 py-3 rounded-full font-bold text-lg md:text-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Briefcase size={20} />
              CONTROLLER / ANALISTA FINANCIERO
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 text-sm">
            <a 
              href="mailto:leocagli@gmail.com"
              className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Mail size={16} className="text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-yellow-100 transition-colors">leocagli@gmail.com</span>
            </a>
            
            <a 
              href="tel:+543875110520"
              className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Phone size={16} className="text-green-400 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-green-100 transition-colors">+54 387 511 0520</span>
            </a>
            
            <div className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
              <MapPin size={16} className="text-red-400 group-hover:scale-110 transition-transform flex-shrink-0" />
              <span className="group-hover:text-red-100 transition-colors">Recoleta - CABA / Salta</span>
            </div>
            
            <a 
              href="https://linkedin.com/in/leocagli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Linkedin size={16} className="text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-blue-100 transition-colors">linkedin.com/in/leocagli</span>
            </a>
            
            <a 
              href="https://github.com/leocagli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20"
            >
              <Github size={16} className="text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-purple-100 transition-colors">github.com/leocagli</span>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Header;
