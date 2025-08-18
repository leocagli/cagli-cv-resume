import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Trophy, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import profileImage from '@/assets/profile-photo.jpg';

const ProfileHeader = () => {
  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 shadow-2xl border-0">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      
      <div className="relative p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="relative w-48 h-48 lg:w-56 lg:h-56">
              <img 
                src={profileImage} 
                alt="Enzo Leonardo Cagliero Shictong"
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
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                  CONTROLLER / ANALISTA FINANCIERO
                </Badge>
              </div>
              
            </div>
            
            {/* Hackathon Winner Highlight */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-slate-900 px-4 py-2 rounded-xl font-semibold text-sm shadow-lg mb-4">
              <Trophy size={16} />
              🏆 Ganador Hackathon Stellar ConstellAr
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
                <span className="text-slate-700 group-hover:text-red-600 transition-colors">Recoleta - CABA / Salta</span>
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
  );
};

export default ProfileHeader;