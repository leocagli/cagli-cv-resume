
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
      title: "Gestión Estratégica, Liderazgo y Toma de Decisiones",
      institution: "CAME - ITBA",
      period: "Mayo 2025 - Actualidad",
      status: "En curso",
      type: "management",
      priority: 2
    },
    {
      title: "Bootcamp Avalanche 2025",
      institution: "UTN.BA",
      period: "Octubre 2025 - Actualidad",
      status: "En curso",
      type: "blockchain",
      priority: 3
    },
    {
      title: "0 a dApp con Rust + Stellar",
      institution: "Odisea - Stellar",
      period: "Octubre 2025 - Noviembre 2025",
      details: "Curso intensivo de desarrollo dApps",
      status: "Completado",
      type: "blockchain",
      priority: 4
    },
    {
      title: "Avalanche Fundamentals",
      institution: "Avalanche Academy",
      period: "Octubre 2025",
      status: "Completado",
      type: "blockchain",
      priority: 5
    },
    {
      title: "Crecimiento - AWS Startups",
      institution: "Founders School",
      period: "Enero 2025 - Marzo 2025",
      status: "Completado",
      type: "management",
      priority: 6
    },
    {
      title: "Bootcamp Avalanche",
      institution: "UTN.BA",
      period: "Julio - Agosto 2024",
      status: "Completado",
      type: "blockchain",
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
      title: "Onchain Builder Lab",
      institution: "EDUCATETH",
      period: "Septiembre 2024 - Diciembre 2024",
      status: "Completado",
      type: "blockchain",
      priority: 9
    },
    {
      title: "Back Office para Mercado de Capitales",
      institution: "Bolsa de Comercio de Buenos Aires",
      period: "Agosto 2024 - Octubre 2024",
      status: "Completado",
      type: "finance",
      priority: 10
    },
    {
      title: "Excel Avanzado - Power BI - SQL Inicial",
      institution: "B.A Multiplica 2.0 - UTN",
      period: "Septiembre 2023 - Diciembre 2023",
      status: "Completado",
      type: "tech",
      priority: 11
    },
    {
      title: "Tango Gestión - Contabilidad",
      institution: "Axoft - UNSA",
      period: "Agosto 2023 - Octubre 2023",
      status: "Completado",
      type: "tech",
      priority: 12
    },
    {
      title: "Productividad con CHAT GPT-4",
      institution: "UTN.BA",
      period: "Junio 2023 - Agosto 2023",
      status: "Completado",
      type: "tech",
      priority: 13
    },
    {
      title: "Big Data - Codo a Codo",
      institution: "Gob.AR",
      period: "Marzo 2023 - Agosto 2023",
      status: "Completado",
      type: "tech",
      priority: 14
    },
    {
      title: "Python Inicial",
      institution: "UTN.BA",
      period: "Febrero 2022 - Abril 2022",
      status: "Completado",
      type: "tech",
      priority: 15
    },
    {
      title: "Diplomatura en Marketing Político",
      institution: "UTN.BA",
      period: "Marzo 2020 - Agosto 2020",
      status: "Completado",
      type: "management",
      priority: 16
    },
    {
      title: "Experto Universitario en Mercado de Capitales",
      institution: "UTN.BA",
      period: "Septiembre 2019 - Agosto 2020",
      status: "Completado",
      type: "finance",
      priority: 17
    },
    {
      title: "Administración de Empresas Petroleras",
      institution: "ITP Neuquén",
      period: "Marzo 2016 - Diciembre 2016",
      status: "Completado",
      type: "management",
      priority: 18
    },
    {
      title: "Herramientas Administrativas - Excel Avanzado",
      institution: "Fundación Romero",
      period: "Agosto 2012 - Diciembre 2012",
      status: "Completado",
      type: "tech",
      priority: 19
    },
    {
      title: "Tango Gestión",
      institution: "Fundación Romero",
      period: "Marzo 2012 - Junio 2012",
      status: "Completado",
      type: "tech",
      priority: 20
    },
    {
      title: "Excel Avanzado: Toma de Decisiones para PYMES",
      institution: "UTN + CAME",
      period: "2025",
      details: "20 horas",
      status: "Completado",
      type: "management",
      priority: 21
    },
    {
      title: "Educación Financiera para PYMES",
      institution: "UTN + CAME",
      period: "2025",
      details: "20 horas",
      status: "Completado",
      type: "finance",
      priority: 22
    },
    {
      title: "Planificación y Gestión de Inventarios",
      institution: "UTN + CAME",
      period: "2025",
      details: "20 horas",
      status: "Completado",
      type: "management",
      priority: 23
    },
    {
      title: "Gestión de Costos y Precios para la Industria PyME",
      institution: "UTN + CAME",
      period: "2025",
      details: "20 horas",
      status: "Completado",
      type: "finance",
      priority: 24
    },
    {
      title: "Excel Avanzado: Análisis de Datos para PYMES",
      institution: "UTN + CAME",
      period: "2025",
      details: "20 horas",
      status: "Completado",
      type: "tech",
      priority: 25
    },
    {
      title: "Negociaciones: Teoría, Prácticas y Nuevos Enfoques",
      institution: "UTN + CAME",
      period: "2025",
      details: "20 horas",
      status: "Completado",
      type: "management",
      priority: 26
    },
    {
      title: "Formación en Mercado de Capitales para PYMES",
      institution: "UTN + CAME",
      period: "2025",
      details: "20 horas",
      status: "Completado",
      type: "finance",
      priority: 27
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
    <section>
      <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-gradient-to-r hover:from-slate-50 hover:to-blue-50 transition-all duration-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl text-slate-800 flex items-center gap-3 font-bold">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-sm">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  Educación y Formación | Education & Training
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-normal text-slate-500">{education.length} programas</span>
                  {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
                </div>
              </div>
              {/* Keywords for ATS */}
              <div className="hidden">
                <span>Education, Educación, University, Universidad, Business Administration, Administración de Empresas, Leadership, Liderazgo, Management, AWS, Blockchain, Stellar, Avalanche, Degree, Licenciatura, Certificate, Professional Development, UCASAL, ITBA, MBA, Controller Training, Financial Education</span>
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="pt-0">
              <div className="grid gap-3 md:grid-cols-2">
                {education.map((edu, index) => (
                  <article 
                    key={index} 
                    className={`group bg-gradient-to-br ${getTypeColor(edu.type)} p-3 rounded-lg border-2 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] relative overflow-hidden`}
                  >
                    <div className="absolute top-0 right-0 w-12 h-12 bg-white/20 rounded-bl-full"></div>
                    {getPriorityIndicator(edu.priority)}
                    
                    <div className="flex justify-between items-start mb-1.5">
                      <h3 className="font-bold text-slate-800 mb-0.5 leading-tight text-xs group-hover:text-slate-900 transition-colors">
                        {edu.title}
                      </h3>
                      {getStatusBadge(edu.status)}
                    </div>
                    
                    <p className="font-semibold text-slate-700 mb-1.5 text-xs">{edu.institution}</p>
                    
                    <div className="flex items-center gap-1.5 text-slate-600 text-[10px] mb-1.5">
                      <Calendar size={10} className="flex-shrink-0" />
                      <span>{edu.period}</span>
                    </div>
                    
                    {edu.details && (
                      <div className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg">
                        <p className="text-[10px] text-slate-700 font-medium">{edu.details}</p>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </section>
  );
};

export default EducationSection;
