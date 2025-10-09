import { useRef } from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ActivitiesSection from '../components/ActivitiesSection';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const Index = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    if (!cvRef.current) return;

    const opt = {
      margin: 0.5,
      filename: 'CV_Enzo_Cagliero_Shictong.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as const }
    };

    html2pdf().set(opt).from(cvRef.current).save();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Botón de descarga flotante */}
      <div className="fixed top-4 right-4 z-50">
        <Button 
          onClick={handleDownloadPDF}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          <Download className="mr-2" size={20} />
          Descargar CV (PDF)
        </Button>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-4" ref={cvRef}>
        <ProfileHeader />
        
        <div className="space-y-4 mt-4">
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ActivitiesSection />
        </div>
        
        <div className="text-center py-4 text-slate-500 text-xs">
          <p>Curriculum Vitae - Enzo Leonardo Cagliero Shictong</p>
          <p className="mt-0.5">Actualizado en {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
