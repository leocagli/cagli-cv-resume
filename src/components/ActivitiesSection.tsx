
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Trophy, Star, Award, Users } from 'lucide-react';

const ActivitiesSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const activities = [
    { name: "Pitch Competition - Cardano", category: "blockchain" },
    { name: "Club de Finanzas - UBA", category: "finance" },
    { name: "Expo EFI Argentina - CEA", category: "finance" },
    { name: "Markets Experience - Rankia", category: "finance" },
    { name: "Finanzas del Futuro - Vibrant", category: "finance" },
    { name: "Ivan Scherman - BC Talks", category: "blockchain" },
    { name: "Aleph Hackathon", category: "blockchain" },
    { name: "Aleph de Verano Hackathon", category: "blockchain" },
    { name: "Bitcoin Day - Fundación BTC", category: "blockchain" },
    { name: "Valuación de Empresas - UCEMA", category: "finance" },
    { name: "Tech Builders - Rather Labs", category: "blockchain" },
    { name: "Copa América Solana Hackathon", category: "blockchain" },
    { name: "Nerdconf Polkadot Hackathon", category: "blockchain" }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'blockchain': return <Star className="text-purple-600" size={14} />;
      case 'finance': return <Award className="text-green-600" size={14} />;
      case 'tech': return <Users className="text-blue-600" size={14} />;
      default: return <Trophy className="text-yellow-600" size={14} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'blockchain': return 'from-purple-50 to-purple-100 border-purple-200 hover:from-purple-100 hover:to-purple-200';
      case 'finance': return 'from-green-50 to-green-100 border-green-200 hover:from-green-100 hover:to-green-200';
      case 'tech': return 'from-blue-50 to-blue-100 border-blue-200 hover:from-blue-100 hover:to-blue-200';
      default: return 'from-yellow-50 to-yellow-100 border-yellow-200 hover:from-yellow-100 hover:to-yellow-200';
    }
  };

  const groupedActivities = activities.reduce((acc, activity) => {
    if (!acc[activity.category]) {
      acc[activity.category] = [];
    }
    acc[activity.category].push(activity);
    return acc;
  }, {} as Record<string, typeof activities>);

  const categoryLabels = {
    blockchain: 'Blockchain & Crypto',
    finance: 'Finanzas',
    tech: 'Tecnología'
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
                <span className="text-sm font-normal text-slate-500">{activities.length} eventos</span>
                {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
              </div>
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0">
            <div className="space-y-6">
              {Object.entries(groupedActivities).map(([category, categoryActivities]) => (
                <div key={category} className="space-y-3">
                  <h3 className="font-semibold text-slate-700 text-lg flex items-center gap-2 border-b border-slate-200 pb-2">
                    {getCategoryIcon(category)}
                    {categoryLabels[category as keyof typeof categoryLabels]}
                    <span className="text-sm font-normal text-slate-500 ml-auto">
                      {categoryActivities.length} {categoryActivities.length === 1 ? 'evento' : 'eventos'}
                    </span>
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {categoryActivities.map((activity, index) => (
                      <div 
                        key={index} 
                        className={`group flex items-center gap-3 bg-gradient-to-r ${getCategoryColor(category)} p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer`}
                      >
                        <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                          {getCategoryIcon(category)}
                        </div>
                        <span className="text-sm font-medium text-slate-800 group-hover:text-slate-900 transition-colors leading-tight">
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
