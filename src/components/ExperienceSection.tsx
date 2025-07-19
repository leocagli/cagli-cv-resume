
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Building2, Calendar, Phone } from 'lucide-react';

const ExperienceSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const experiences = [
    {
      title: "Embajador - Finanzas",
      company: "Comunidad Cripto \"Cultura C3\"",
      period: "Marzo 2025 - Actualidad",
      responsibilities: [
        "Desarrollo de estrategias financieras en ecosistema cripto",
        "Educación y capacitación en finanzas descentralizadas"
      ]
    },
    {
      title: "Analista Logístico - Supervisor",
      company: "Food Packaging",
      period: "Septiembre 2023 - Enero 2024",
      responsibilities: [
        "Facturación y control de rutas de distribución",
        "Profesionalización de procesos logísticos",
        "Elaboración de reportes ejecutivos",
        "Supervisión y control de operaciones"
      ],
      reference: "Manuel Mosquera - Jefe de Logística - 1125350522"
    },
    {
      title: "Analista Financiero - Responsable de Pagos",
      company: "Congress Rental",
      period: "Noviembre 2022 - Septiembre 2023",
      responsibilities: [
        "Gestión de órdenes de pago y retenciones",
        "Administración de IVA, IIBB y Ganancias",
        "Conciliaciones bancarias y contables",
        "Asistencia en auditorías externas"
      ],
      reference: "Andrea Santana - CFO - 1134444990"
    },
    {
      title: "Técnico IT - Auxiliar de Eventos",
      company: "Congress Rental y otros",
      period: "Noviembre 2021 - Diciembre 2022",
      responsibilities: [
        "Soporte técnico en eventos corporativos",
        "Instalación y configuración de equipos audiovisuales"
      ]
    },
    {
      title: "Propietario",
      company: "Comidas Regionales \"La Casonita\"",
      period: "Octubre 2021 - Actualidad",
      responsibilities: [
        "Gestión integral del negocio gastronómico",
        "Control financiero y administrativo"
      ]
    },
    {
      title: "Propietario - Asesor Financiero",
      company: "Asesoría Financiera \"Bitcoin.Defi\"",
      period: "Diciembre 2020 - Actualidad",
      responsibilities: [
        "Asesoramiento en inversiones en criptomonedas",
        "Análisis de mercados financieros digitales"
      ]
    },
    {
      title: "Creativo TICs - Asistente Operativo",
      company: "Municipalidad de Salta",
      period: "Julio 2019 - Abril 2021",
      responsibilities: [
        "Desarrollo de contenido digital gubernamental",
        "Asistencia en operaciones administrativas"
      ],
      reference: "Agustina Gallo - Ex Jefa de Gabinete - 3874880497"
    },
    {
      title: "Propietario",
      company: "Dietéticas \"Nature and Fitness\"",
      period: "Diciembre 2017 - Actualidad",
      responsibilities: [
        "Gestión integral del negocio",
        "Administración y ventas"
      ]
    },
    {
      title: "Fichero",
      company: "Mac Group - Silver Dreams",
      period: "Marzo 2017 - Septiembre 2017",
      responsibilities: [
        "Gestión de base de datos",
        "Atención al cliente"
      ],
      reference: "Mariela Nasser - Ex Gerente Zonal - 3888433382"
    },
    {
      title: "Vendedor - Guía Turístico",
      company: "Flecha Bus Viajes - Dask Travel",
      period: "Abril 2012 - Diciembre 2016",
      responsibilities: [
        "Venta de paquetes turísticos",
        "Guía y acompañamiento de turistas"
      ],
      reference: "Matías Dousset - CEO - 3876840405"
    }
  ];

  return (
    <Card className="shadow-lg">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-slate-50 transition-colors">
            <CardTitle className="flex items-center justify-between text-2xl text-slate-800">
              <span className="flex items-center gap-2">
                <Building2 className="text-blue-600" />
                Experiencia Laboral
              </span>
              {isOpen ? <ChevronUp /> : <ChevronDown />}
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6 pb-6 last:pb-0 relative">
                <div className="absolute left-[-8px] top-2 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg text-slate-800 mb-1">{exp.title}</h3>
                  <p className="font-semibold text-blue-700 mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-slate-600 text-sm mb-3">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <ul className="space-y-1 text-sm text-slate-700">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.reference && (
                    <div className="mt-3 p-2 bg-slate-50 rounded text-xs text-slate-600 flex items-center gap-2">
                      <Phone size={12} />
                      <span className="italic">{exp.reference}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default ExperienceSection;
