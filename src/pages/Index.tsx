
import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ActivitiesSection from '../components/ActivitiesSection';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const sections = [
    {
      id: 'experience',
      title: 'Experiencia Profesional',
      component: <ExperienceSection />,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'education',
      title: 'Educación y Formación',
      component: <EducationSection />,
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 'skills',
      title: 'Habilidades Técnicas',
      component: <SkillsSection />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'activities',
      title: 'Actividades y Logros',
      component: <ActivitiesSection />,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background decoration */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-100 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="animate-fade-in mb-12">
          <ProfileHeader />
        </div>
        
        {/* Sections Container */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300">
                <CardContent className="p-0">
                  {section.component}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="text-center py-8 text-slate-500 text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p>Curriculum Vitae - Enzo Leonardo Cagliero Shictong</p>
          <p className="mt-1">Actualizado en {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
