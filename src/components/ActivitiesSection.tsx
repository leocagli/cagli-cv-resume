
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Trophy, Star } from 'lucide-react';

const ActivitiesSection = () => {
  const [isOpen, setIsOpen] = useState(true);

  const activities = [
    "Pitch Competition - Cardano",
    "Club de Finanzas - UBA",
    "Expo EFI Argentina - CEA",
    "Markets Experience - Rankia",
    "Finanzas del Futuro - Vibrant",
    "Ivan Scherman - BC Talks",
    "Hackaton - Aleph",
    "Bitcoin Day - Fundación BTC",
    "Valuación de Empresas - UCEMA",
    "Tech Builders - Rather Labs",
    "Copa América - Solana",
    "Nerdconf - Polkadot"
  ];

  return (
    <Card className="shadow-lg">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-slate-50 transition-colors">
            <CardTitle className="flex items-center justify-between text-2xl text-slate-800">
              <span className="flex items-center gap-2">
                <Trophy className="text-yellow-600" />
                Actividades y Participaciones
              </span>
              {isOpen ? <ChevronUp /> : <ChevronDown />}
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {activities.map((activity, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg border border-yellow-200 hover:from-yellow-100 hover:to-orange-100 transition-all duration-200 hover:scale-105"
                >
                  <Star size={16} className="text-yellow-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{activity}</span>
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
