
import React from 'react';
import Header from '../components/Header';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ActivitiesSection from '../components/ActivitiesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Header />
        <div className="grid gap-8 mt-8">
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ActivitiesSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
