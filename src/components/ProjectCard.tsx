import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  status: 'live' | 'development' | 'coming-soon';
  link?: string;
  internalLink?: string;
  category?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  status, 
  link, 
  internalLink,
  category 
}: ProjectCardProps) => {
  const statusConfig = {
    live: { label: 'En Vivo', className: 'bg-green-500/20 text-green-300 border-green-500/30' },
    development: { label: 'En Desarrollo', className: 'bg-blue-500/20 text-blue-300 border-blue-500/30' },
    'coming-soon': { label: 'Próximamente', className: 'bg-purple-500/20 text-purple-300 border-purple-500/30' }
  };

  const currentStatus = statusConfig[status];

  return (
    <Card className="group bg-blue-800/30 border-blue-600/30 hover:bg-blue-800/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
      {image && (
        <div className="w-full h-48 overflow-hidden bg-blue-900/50">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-xl text-white group-hover:text-blue-200 transition-colors">
            {title}
          </CardTitle>
          <Badge className={currentStatus.className}>
            {currentStatus.label}
          </Badge>
        </div>
        {category && (
          <Badge variant="outline" className="border-blue-500/30 text-blue-300 w-fit">
            {category}
          </Badge>
        )}
        <CardDescription className="text-blue-200 mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-blue-700/30 text-blue-200 border-blue-600/30"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        {(link || internalLink) && (
          <div className="flex gap-2 pt-2">
            {internalLink && (
              <Link to={internalLink} className="flex-1">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                >
                  <Rocket size={16} className="mr-2" />
                  Ver Proyecto
                </Button>
              </Link>
            )}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button 
                  variant="outline"
                  className="w-full border-blue-600 text-blue-300 hover:bg-blue-600 hover:text-white"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Enlace
                </Button>
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
