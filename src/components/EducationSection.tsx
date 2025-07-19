
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, GraduationCap, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const education = [
    {
      title: "Licenciatura en Administración de Empresas",
      institution: "UCASAL",
      period: "Enero 2018 - Actualidad",
      details: "45 de 49 materias completadas",
      status: "En curso",
      type: "degree",
      priority: 1
    },
    {
      title: "Experto Universitario en Mercado de Capitales",
      institution: "UTN.BA",
      period: "Septiembre 2019 - Agosto 2020",
      status: "Completado",
      type: "finance",
      priority: 2
    },
    {
      title: "Gestión Estratégica, Liderazgo y Toma de Decisiones",
      institution: "CAME - ITBA",
      period: "Mayo 2025 - Actualidad",
      status: "En curso",
      type: "management",
      priority: 3
    },
    {
      title: "Dominando DeFi",
      institution: "UCEMA",
      period: "Mayo 2025 - Junio 2025",
      status: "Completado",
      type: "blockchain",
      priority: 4
    },
    {
      title: "Back Office para Mercado de Capitales",
      institution: "Bolsa de Comercio de Buenos Aires",
      period: "Agosto 2024 - Octubre 2024",
      status: "Completado",
      type: "finance",
      priority: 5
    },
    {
      title: "Excel Avanzado - Power BI - SQL Inicial",
      institution: "B.A Multiplica 2.0 - UTN",
      period: "Septiembre 2023 - Diciembre 2023",
      status: "Completado",
      type: "tech",
      priority: 6
    },
    {
      title: "Crecimiento - AWS Startups",
      institution: "Founders School",
      period: "Enero 2025 - Marzo 2025",
      status: "Completado",
      type: "tech",
      priority: 7
    },
    {
      title: "Ethereum Developer Pack",
      institution: "UCEMA - ETHKIPU",
      period: "Septiembre 2024 - Octubre 2024",
      status: "Completado",
      type: "blockchain",
      priority: 8
    },
    {
      title: "Bootcamp Avalanche",
      institution: "UTN.BA",
      period: "Octubre 2024",
      status: "Completado",
      type: "blockchain",
      priority: 9
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'degree': return 'from-blue-50 to-blue-100 border-blue-200';
      case 'finance': return 'from-green-50 to-green-100 border-green-200';
      case 'management': return 'from-indigo-50 to-indigo-100 border-indigo-200';
      case 'tech': return 'from-orange-50 to-orange-100 border-orange-200';
      case 'blockchain': return 'from-purple-50 to-purple-100 border-purple-200';
      default: return 'from-gray-50 to-gray-100 border-gray-200';
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === 'En curso') {
      return (
        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          En curso
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
        <Award size={12} />
        Completado
      </span>
    );
  };

  const getPriorityIndicator = (priority: number) => {
    if (priority <= 3) {
      return (
        <div className="absolute top-2 left-2 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-sm"></div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 transition-all duration-200">
            <CardTitle className="flex items-center justify-between text-2xl text-slate-800">
              <span className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-sm">
                  <GraduationCap className="text-white" size={24} />
                </div>
                Educación
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-normal text-slate-500">{education.length} programas</span>
                {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
              </div>
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0">
            <div className="grid gap-6 md:grid-cols-2">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className={`group bg-gradient-to-br ${getTypeColor(edu.type)} p-5 rounded-xl border-2 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-bl-full"></div>
                  {getPriorityIndicator(edu.priority)}
                  
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-slate-800 mb-1 leading-tight text-sm group-hover:text-slate-900 transition-colors">
                      {edu.title}
                    </h3>
                    {getStatusBadge(edu.status)}
                  </div>
                  
                  <p className="font-semibold text-slate-700 mb-3 text-sm">{edu.institution}</p>
                  
                  <div className="flex items-center gap-2 text-slate-600 text-xs mb-3">
                    <Calendar size={12} className="flex-shrink-0" />
                    <span>{edu.period}</span>
                  </div>
                  
                  {edu.details && (
                    <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg">
                      <p className="text-xs text-slate-700 font-medium">{edu.details}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default EducationSection;
