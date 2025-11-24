import { useRef, useState } from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ActivitiesSection from '../components/ActivitiesSection';
import CVSummary from '../components/CVSummary';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import html2pdf from 'html2pdf.js';

const Index = () => {
  const cvRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const [showSummaryDialog, setShowSummaryDialog] = useState(false);

  const handleDownloadPDF = () => {
    if (!cvRef.current) return;

    const opt = {
      margin: 0.5,
      filename: 'CV_Completo_Enzo_Cagliero.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as const }
    };

    html2pdf().set(opt).from(cvRef.current).save();
  };

  const handleDownloadSummaryPDF = () => {
    if (!summaryRef.current) return;

    const opt = {
      margin: 0.3,
      filename: 'CV_Resumen_Enzo_Cagliero.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' as const }
    };

    html2pdf().set(opt).from(summaryRef.current).save();
  };

  const handleOpenSummaryDialog = () => {
    setShowSummaryDialog(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <Dialog open={showSummaryDialog} onOpenChange={setShowSummaryDialog}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Resumen de CV - Una Página</DialogTitle>
            <Button 
              onClick={handleDownloadSummaryPDF}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
            >
              <Download className="mr-2" size={16} />
              Descargar Resumen PDF
            </Button>
          </DialogHeader>
          <div ref={summaryRef}>
            <CVSummary />
          </div>
        </DialogContent>
      </Dialog>

      <div className="max-w-4xl mx-auto px-4 py-4" ref={cvRef}>
        <ProfileHeader 
          onDownloadCV={handleDownloadPDF}
          onDownloadSummary={handleOpenSummaryDialog}
        />
        
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
