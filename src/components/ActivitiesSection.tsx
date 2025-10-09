import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Trophy, Star, Award, Users, Rocket, Mic, Calendar, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Activity {
  name: string;
  category: string;
  isWinner?: boolean;
  isSpecial?: boolean;
}

const ActivitiesSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const activities: Activity[] = [
    { name: "🏆 Aleph 2025 (Track Citrea) - GANADOR", category: "blockchain", isWinner: true },
    { name: "🏆 Stellar ConstellAr - GANADOR (Mejor Proyecto con ReFinance)", category: "blockchain", isWinner: true },
    { name: "🌟 Midnight Hackathon - Mención Especial", category: "blockchain", isSpecial: true },
    { name: "Meridian 2025 - Rio de Janeiro (5to lugar)", category: "blockchain", isSpecial: true },
    { name: "Pitch Competition - Cardano", category: "blockchain" },
    { name: "Expo EFI Argentina - CEA", category: "finance" },
    { name: "Markets Experience - Rankia", category: "finance" },
    { name: "Finanzas del Futuro - Vibrant", category: "finance" },
    { name: "Valuación de Empresas - UCEMA", category: "finance" },
    { name: "Abriendo Cocos - Cocoscap", category: "finance" },
    { name: "Ivan Scherman - BC Talks", category: "blockchain" },
    { name: "Aleph Hackathon", category: "blockchain" },
    { name: "Aleph de Verano Hackathon", category: "blockchain" },
    { name: "Bitcoin Day - Fundación BTC", category: "blockchain" },
    { name: "Tech Builders - Rather Labs", category: "blockchain" },
    { name: "Copa América Solana Hackathon", category: "blockchain" },
    { name: "Nerdconf Polkadot Hackathon", category: "blockchain" },
    { name: "Hackathon Stellar - Becado", category: "blockchain" }
  ];

  const memberships: Activity[] = [
    { name: "Club Cripto UCEMA", category: "membership" },
    { name: "Club de Finanzas UBA", category: "membership" },
    { name: "Club de Finanzas UCEMA", category: "membership" }
  ];

  const ambassadorships: Activity[] = [
    { name: "Embajador y Speaker - Cultura C3", category: "ambassador" },
    { name: "Embajador y Speaker - Bitcoin Argentina", category: "ambassador" },
    { name: "Embajador - Stellar", category: "ambassador" }
  ];

  const speakerActivities: Activity[] = [
    { name: "Taller Finanzas Descentralizadas - DescentralizAR - ONG Bitcoin Argentina", category: "speaker" },
    { name: "Debate - El poder de descentralizar - DescentralizAR - ONG Bitcoin Argentina", category: "speaker" }
  ];

  const eventAttendance: Activity[] = [
    { name: "Meridian 2025 - Rio de Janeiro", category: "eventos" },
    { name: "Rio Construction Summit 2025 - Rio de Janeiro", category: "eventos" },
    { name: "Nerdearla - 2025", category: "eventos" }
  ];

  const courses: Activity[] = [
    { name: "Bootcamp Avalanche 2025 - 10/25 a actualidad", category: "cursos" }
  ];

  const allActivities = [...activities, ...memberships, ...ambassadorships, ...speakerActivities, ...eventAttendance, ...courses];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'blockchain': return <Star className="text-purple-600" size={14} />;
      case 'finance': return <Award className="text-green-600" size={14} />;
      case 'tech': return <Users className="text-blue-600" size={14} />;
      case 'membership': return <Users className="text-indigo-600" size={14} />;
      case 'ambassador': return <Trophy className="text-orange-600" size={14} />;
      case 'speaker': return <Mic className="text-amber-600" size={14} />;
      case 'eventos': return <Calendar className="text-cyan-600" size={14} />;
      case 'cursos': return <GraduationCap className="text-emerald-600" size={14} />;
      default: return <Trophy className="text-yellow-600" size={14} />;
    }
  };

  const getCategoryColor = (category: string, isWinner?: boolean, isSpecial?: boolean) => {
    if (isWinner) return 'from-yellow-400 via-orange-400 to-red-400 border-orange-500 hover:from-yellow-500 hover:via-orange-500 hover:to-red-500';
    if (isSpecial) return 'from-purple-400 via-blue-400 to-indigo-400 border-purple-500 hover:from-purple-500 hover:via-blue-500 hover:to-indigo-500';
    
    switch (category) {
      case 'blockchain': return 'from-purple-50 to-purple-100 border-purple-200 hover:from-purple-100 hover:to-purple-200';
      case 'finance': return 'from-green-50 to-green-100 border-green-200 hover:from-green-100 hover:to-green-200';
      case 'tech': return 'from-blue-50 to-blue-100 border-blue-200 hover:from-blue-100 hover:to-blue-200';
      case 'membership': return 'from-indigo-50 to-indigo-100 border-indigo-200 hover:from-indigo-100 hover:to-indigo-200';
      case 'ambassador': return 'from-orange-50 to-orange-100 border-orange-200 hover:from-orange-100 hover:to-orange-200';
      case 'speaker': return 'from-amber-50 to-amber-100 border-amber-200 hover:from-amber-100 hover:to-amber-200';
      case 'eventos': return 'from-cyan-50 to-cyan-100 border-cyan-200 hover:from-cyan-100 hover:to-cyan-200';
      case 'cursos': return 'from-emerald-50 to-emerald-100 border-emerald-200 hover:from-emerald-100 hover:to-emerald-200';
      default: return 'from-yellow-50 to-yellow-100 border-yellow-200 hover:from-yellow-100 hover:to-yellow-200';
    }
  };

  const groupedActivities = allActivities.reduce((acc, activity) => {
    if (!acc[activity.category]) {
      acc[activity.category] = [];
    }
    acc[activity.category].push(activity);
    return acc;
  }, {} as Record<string, Activity[]>);

  const categoryLabels = {
    blockchain: 'Blockchain & Crypto',
    finance: 'Finanzas',
    tech: 'Tecnología',
    membership: 'Membresías',
    ambassador: 'Embajador & Speaker',
    speaker: 'Speaker & Presentaciones',
    eventos: 'Asistencia a Eventos',
    cursos: 'Cursos & Bootcamps'
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-gradient-to-r hover:from-slate-50 hover:to-yellow-50 transition-all duration-200">
            <CardTitle className="flex items-center justify-between text-2xl text-slate-800">
              <span className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg shadow-sm">
                  <Trophy className="text-white" size={24} />
                </div>
                Actividades y Participaciones
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-normal text-slate-500">{allActivities.length} actividades</span>
                {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
              </div>
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0">
            {/* Bitcoin.Defi Project Link */}
            <Link to="/bitcoin-defi">
              <div className="mb-6 p-6 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-xl border-2 border-blue-400 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      src="/lovable-uploads/ef8778f2-a78c-4887-b7f6-9a1238a486ea.png" 
                      alt="Bitcoin.defi Logo" 
                      className="w-16 h-16 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Rocket className="text-white" size={20} />
                      <h3 className="text-xl font-bold text-white">Bitcoin.Defi</h3>
                    </div>
                    <p className="text-blue-100 text-sm">Click aquí para ver proyectos Web3 y DeFi</p>
                  </div>
                  <Button 
                    className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
                    size="sm"
                  >
                    Ver Portfolio →
                  </Button>
                </div>
              </div>
            </Link>

            <div className="space-y-3">
              {Object.entries(groupedActivities).map(([category, categoryActivities]) => (
                <div key={category} className="space-y-1.5">
                  <h3 className="font-semibold text-slate-700 text-sm flex items-center gap-1.5 border-b border-slate-200 pb-1">
                    {getCategoryIcon(category)}
                    {categoryLabels[category as keyof typeof categoryLabels]}
                    <span className="text-xs font-normal text-slate-500 ml-auto">
                      {categoryActivities.length} {categoryActivities.length === 1 ? 'evento' : 'eventos'}
                    </span>
                  </h3>
                  <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {categoryActivities.map((activity, index) => (
                      <div 
                        key={index} 
                        className={`group flex items-center gap-2 bg-gradient-to-r ${getCategoryColor(category, activity.isWinner, activity.isSpecial)} p-2 rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer ${activity.isWinner || activity.isSpecial ? 'shadow-lg' : ''}`}
                      >
                        <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                          {activity.isWinner ? <Trophy className="text-slate-900" size={14} /> : activity.isSpecial ? <Star className="text-white" size={14} /> : getCategoryIcon(category)}
                        </div>
                        <span className={`text-xs font-medium transition-colors leading-tight ${activity.isWinner ? 'text-slate-900 font-bold' : activity.isSpecial ? 'text-white font-bold' : 'text-slate-800 group-hover:text-slate-900'}`}>
                          {activity.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default ActivitiesSection;
