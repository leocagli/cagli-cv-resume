
import React, { useState } from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ActivitiesSection from '../components/ActivitiesSection';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  
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

  useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap())
    })
  }, [api])

  const navigateToSection = (index: number) => {
    setCurrentSlide(index);
    api?.scrollTo(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-100 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="animate-fade-in mb-12">
          <ProfileHeader />
        </div>
        
        {/* Navigation Pills */}
        <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="flex gap-2 p-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => navigateToSection(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  currentSlide === index
                    ? `bg-gradient-to-r ${section.color} text-white shadow-lg scale-105`
                    : 'text-slate-600 hover:text-slate-800 hover:bg-white/80'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Carousel Container */}
        <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Carousel 
            setApi={setApi}
            className="w-full" 
            opts={{
              align: "start",
              loop: false,
            }}
          >
            <CarouselContent className="ml-0">
              {sections.map((section, index) => (
                <CarouselItem key={section.id} className="pl-4 basis-full">
                  <div className="p-1">
                    <Card className="border-0 shadow-2xl">
                      <CardContent className="p-0">
                        {section.component}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative translate-y-0 left-0 bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <ChevronLeft size={20} />
              </CarouselPrevious>
              
              <CarouselNext className="relative translate-y-0 right-0 bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <ChevronRight size={20} />
              </CarouselNext>
            </div>
          </Carousel>
        </div>
        
        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => navigateToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? `bg-gradient-to-r ${section.color} scale-125 shadow-lg`
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
        
        {/* Footer */}
        <div className="text-center py-8 text-slate-500 text-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p>Curriculum Vitae - Enzo Leonardo Cagliero Shictong</p>
          <p className="mt-1">Actualizado en {new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
