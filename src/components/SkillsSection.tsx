
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Code, Users } from 'lucide-react';

const SkillsSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const technicalSkills = [
    "Python", "SQL", "Power BI", "Excel Avanzado", "Looker Studio", "Tango Gestión",
    "Google Analytics", "Visual Basic", "GitHub", "Blockchain", "Solidity", "Web3",
    "Canva", "Office 365", "Deepnote", "Telemetría", "N8N", "Lovable", "Cursor", "GitHub Copilot"
  ];

  const softSkills = [
    "Liderazgo", "Negociación", "Toma de Decisiones", "Pensamiento Crítico",
    "Análisis Estratégico", "Resolución de Conflictos", "Innovación",
    "Trabajo bajo Presión", "Inglés B2"
  ];

  return (
    <Card className="shadow-lg">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-slate-50 transition-colors">
            <CardTitle className="flex items-center justify-between text-2xl text-slate-800">
              <span className="flex items-center gap-2">
                <Code className="text-purple-600" />
                Habilidades
              </span>
              {isOpen ? <ChevronUp /> : <ChevronDown />}
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="space-y-6">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4">
                <Code size={20} className="text-purple-600" />
                Habilidades Técnicas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {technicalSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 px-3 py-2 rounded-lg text-center text-sm font-medium text-slate-700 hover:from-purple-100 hover:to-blue-100 transition-all duration-200 hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4">
                <Users size={20} className="text-orange-600" />
                Habilidades Blandas
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 px-3 py-2 rounded-lg text-center text-sm font-medium text-slate-700 hover:from-orange-100 hover:to-yellow-100 transition-all duration-200 hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default SkillsSection;
