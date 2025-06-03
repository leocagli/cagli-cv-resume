
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, GraduationCap, Calendar } from 'lucide-react';

const EducationSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const education = [
    {
      title: "Licenciatura en Administración de Empresas",
      institution: "UCASAL",
      period: "Enero 2018 - Actualidad",
      details: "45 de 49 materias completadas"
    },
    {
      title: "Gestión Estratégica, Liderazgo y Toma de Decisiones",
      institution: "CAME - ITBA",
      period: "Mayo 2025 - Actualidad"
    },
    {
      title: "Crecimiento - AWS Startups",
      institution: "Founders School",
      period: "Enero 2025 - Marzo 2025"
    },
    {
      title: "Bootcamp Avalanche",
      institution: "UTN.BA",
      period: "Octubre 2024"
    },
    {
      title: "Ethereum Developer Pack",
      institution: "UCEMA - ETHKIPU",
      period: "Septiembre 2024 - Octubre 2024"
    },
    {
      title: "Back Office para Mercado de Capitales",
      institution: "Bolsa de Comercio de Buenos Aires",
      period: "Agosto 2024 - Octubre 2024"
    },
    {
      title: "Excel Avanzado - Power BI - SQL Inicial",
      institution: "B.A Multiplica 2.0 - UTN",
      period: "Septiembre 2023 - Diciembre 2023"
    },
    {
      title: "Experto Universitario en Mercado de Capitales",
      institution: "UTN.BA",
      period: "Septiembre 2019 - Agosto 2020"
    }
  ];

  return (
    <Card className="shadow-lg">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-slate-50 transition-colors">
            <CardTitle className="flex items-center justify-between text-2xl text-slate-800">
              <span className="flex items-center gap-2">
                <GraduationCap className="text-green-600" />
                Educación
              </span>
              {isOpen ? <ChevronUp /> : <ChevronDown />}
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-green-50 p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-800 mb-2 leading-tight">{edu.title}</h3>
                  <p className="font-semibold text-green-700 mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-slate-600 text-sm mb-2">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  {edu.details && (
                    <p className="text-xs text-slate-600 bg-white/60 px-2 py-1 rounded">{edu.details}</p>
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
