
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Code, Users, Award } from 'lucide-react';

const SkillsSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const technicalSkills = [
    "Python Programming", "SQL Database", "Microsoft Excel Advanced", "Power BI", "Business Intelligence", 
    "Looker Studio", "Google Analytics", "ERP Systems", "Tango Gestión", "Financial Analysis",
    "Visual Basic", "GitHub", "Version Control", "Blockchain Development", "Solidity", "Web3", 
    "Smart Contracts", "Stellar Network", "Avalanche", "DeFi", "Cryptocurrency",
    "Canva Design", "Office 365", "Microsoft Suite", "Deepnote", "Data Science", "ETL",
    "N8N Automation", "Lovable", "Cursor IDE", "GitHub Copilot", "AI Tools"
  ];

  const softSkills = [
    "Leadership", "Team Management", "Negotiation", "Decision Making", "Critical Thinking",
    "Strategic Analysis", "Problem Solving", "Conflict Resolution", "Innovation", "Creativity",
    "Time Management", "Project Management", "Communication", "Presentation Skills",
    "Adaptability", "Work Under Pressure", "English B2 Level", "Spanish Native"
  ];

  const certifications = [
    "Financial Controller", "Data Analysis", "Blockchain Development", "Stellar Ambassador",
    "Avalanche Bootcamp Graduate", "Hackathon Winner", "AWS Startups Program"
  ];

  return (
    <section>
      <Card className="shadow-lg">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl text-slate-800 flex items-center gap-2 font-bold">
                  <Code className="text-purple-600" />
                  Habilidades Técnicas y Competencias | Skills & Competencies
                </h2>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
              </div>
              {/* Keywords for ATS */}
              <div className="hidden">
                <span>Skills, Competencies, Technical Skills, Programming, Python, SQL, Excel, Power BI, Leadership, Financial Analysis, Blockchain, Controller, Data Analysis, Business Intelligence, Project Management, Team Leadership</span>
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Code className="text-blue-600" size={20} />
                  Competencias Técnicas | Technical Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="bg-blue-50 px-3 py-2 rounded-lg text-sm text-blue-800 font-medium hover:bg-blue-100 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Users className="text-green-600" size={20} />
                  Habilidades Blandas | Soft Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="bg-green-50 px-3 py-2 rounded-lg text-sm text-green-800 font-medium hover:bg-green-100 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Award className="text-orange-600" size={20} />
                  Certificaciones y Logros | Certifications & Achievements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="bg-orange-50 px-3 py-2 rounded-lg text-sm text-orange-800 font-medium hover:bg-orange-100 transition-colors">
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </section>
  );
};

export default SkillsSection;
