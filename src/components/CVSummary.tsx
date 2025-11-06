import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Globe, Trophy, Briefcase, GraduationCap } from 'lucide-react';

const CVSummary = () => {
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b-4 border-blue-600 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Enzo Leonardo Cagliero Shictong</h1>
        <p className="text-xl text-slate-700 mb-3">Blockchain & DeFi Developer | Business Administrator</p>
        
        <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>leocagli@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+54 387 511 0520</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin size={14} />
            <span>linkedin.com/in/leocagli</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>
      </div>

      {/* Profile Summary */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
          <div className="w-1 h-6 bg-blue-600"></div>
          Perfil Profesional
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Desarrollador Blockchain y administrador de empresas con amplia experiencia en proyectos DeFi y Web3. 
          Ganador de múltiples hackathons (Aleph 2025 Citrea Track, Stellar ConstellAr). Especializado en 
          desarrollo de soluciones financieras descentralizadas, smart contracts y aplicaciones blockchain. 
          Embajador y speaker activo en comunidades crypto de Argentina y LATAM.
        </p>
      </div>

      {/* Experience Highlights */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
          <div className="w-1 h-6 bg-blue-600"></div>
          <Briefcase size={20} />
          Experiencia Destacada
        </h2>
        <div className="space-y-3">
          <div className="border-l-2 border-blue-600 pl-3">
            <h3 className="font-bold text-slate-900 text-sm">Analista Logístico - Supervisor</h3>
            <p className="text-xs text-slate-600 mb-1">Food Packaging | Sep 2023 - Ene 2024</p>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Facturación y control de rutas de distribución</li>
              <li>• Elaboración de reportes ejecutivos con Excel y Power BI</li>
            </ul>
          </div>
          <div className="border-l-2 border-slate-400 pl-3">
            <h3 className="font-bold text-slate-900 text-sm">Analista Financiero - Responsable de Pagos</h3>
            <p className="text-xs text-slate-600 mb-1">Congress Rental | Nov 2022 - Sep 2023</p>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Gestión de órdenes de pago y retenciones fiscales</li>
              <li>• Conciliaciones bancarias y contables con sistemas ERP</li>
            </ul>
          </div>
          <div className="border-l-2 border-slate-400 pl-3">
            <h3 className="font-bold text-slate-900 text-sm">Asesor Financiero - Bitcoin.Defi</h3>
            <p className="text-xs text-slate-600 mb-1">Dic 2020 - Actualidad</p>
            <ul className="text-xs text-slate-700 space-y-1">
              <li>• Asesoramiento en inversiones en criptomonedas</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Education */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <div className="w-1 h-5 bg-blue-600"></div>
            <GraduationCap size={18} />
            Educación
          </h2>
          <div className="space-y-2 text-xs">
            <div>
              <p className="font-bold text-slate-900">Lic. Administración de Empresas</p>
              <p className="text-slate-600">UCASAL | En curso (45/49 materias)</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">Gestión Estratégica y Liderazgo</p>
              <p className="text-slate-600">CAME - ITBA | 2025</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">Bootcamp Avalanche 2025</p>
              <p className="text-slate-600">UTN.BA | En curso</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">Ethereum Developer Pack</p>
              <p className="text-slate-600">UCEMA - ETHKIPU | 2024</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <div className="w-1 h-5 bg-blue-600"></div>
            Habilidades Técnicas
          </h2>
          <div className="space-y-2 text-xs">
            <div>
              <p className="font-semibold text-slate-900">Blockchain & DeFi:</p>
              <p className="text-slate-700">Stellar, Soroban, Citrea, Cardano, Solidity, Smart Contracts</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Desarrollo:</p>
              <p className="text-slate-700">React, TypeScript, Node.js, Python, SQL</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Finanzas:</p>
              <p className="text-slate-700">DeFi, Tokenomics, Valuación, Mercado de Capitales</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Herramientas:</p>
              <p className="text-slate-700">Git, Power BI, Excel Avanzado, Tango Gestión</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
          <div className="w-1 h-5 bg-blue-600"></div>
          <Trophy size={18} />
          Logros Destacados
        </h2>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-yellow-50 border-l-2 border-yellow-500 pl-2 py-1">
            <p className="font-bold text-slate-900">🏆 Aleph 2025 (Citrea) - Ganador</p>
          </div>
          <div className="bg-yellow-50 border-l-2 border-yellow-500 pl-2 py-1">
            <p className="font-bold text-slate-900">🏆 Stellar ConstellAr - Ganador</p>
          </div>
          <div className="bg-purple-50 border-l-2 border-purple-500 pl-2 py-1">
            <p className="font-bold text-slate-900">🌟 Midnight Hackathon - Mención Especial</p>
          </div>
          <div className="bg-purple-50 border-l-2 border-purple-500 pl-2 py-1">
            <p className="font-bold text-slate-900">Meridian 2025 - 5to lugar</p>
          </div>
        </div>
      </div>

      {/* Additional Activities */}
      <div className="border-t-2 border-slate-200 pt-4">
        <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <div className="w-1 h-5 bg-blue-600"></div>
          Actividades Complementarias
        </h2>
        <div className="grid grid-cols-3 gap-2 text-xs text-slate-700">
          <div>
            <p className="font-semibold">Embajador & Speaker:</p>
            <p>Cultura C3, Bitcoin Argentina, Stellar</p>
          </div>
          <div>
            <p className="font-semibold">Membresías:</p>
            <p>Club Cripto UCEMA, Club Finanzas UBA</p>
          </div>
          <div>
            <p className="font-semibold">Eventos:</p>
            <p>Meridian 2025, Rio Construction Summit, Nerdearla</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-xs text-slate-500">
        <p>Referencias disponibles a solicitud</p>
      </div>
    </div>
  );
};

export default CVSummary;
