
import ProfileHeader from '../components/ProfileHeader';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ActivitiesSection from '../components/ActivitiesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <ProfileHeader />
        
        <div className="space-y-8 mt-12">
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ActivitiesSection />
        </div>
        
        <div className="text-center py-8 text-slate-500 text-sm">
          <p>Curriculum Vitae - Enzo Leonardo Cagliero Shictong</p>
          <p className="mt-1">Actualizado en {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
