
import React from 'react';
import Header from '../components/Header';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ActivitiesSection from '../components/ActivitiesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background decoration */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-100 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8 space-y-8">
        <div className="animate-fade-in">
          <Header />
        </div>
        
        <div className="grid gap-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <ExperienceSection />
        </div>
        
        <div className="grid gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <EducationSection />
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <SkillsSection />
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <ActivitiesSection />
        </div>
        
        {/* Footer decoration */}
        <div className="text-center py-8 text-slate-500 text-sm">
          <p>Curriculum Vitae - Enzo Leonardo Cagliero Shictong</p>
          <p className="mt-1">Actualizado en {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
