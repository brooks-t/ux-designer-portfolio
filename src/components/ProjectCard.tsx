
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  category, 
  image, 
  index 
}) => {
  return (
    <div 
      className={cn(
        "group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/5 transition-standard hover:shadow-xl",
        index % 2 === 0 ? "lg:col-span-2" : "lg:col-span-1"
      )}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-standard group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6 lg:p-8">
        <span className="inline-block py-1 px-3 mb-3 text-xs font-medium border border-primary/10 rounded-full bg-primary/5">
          {category}
        </span>
        <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-balance">{title}</h3>
        <p className="text-primary/70 mb-4 text-balance">{description}</p>
        
        <a 
          href="#" 
          className="inline-flex items-center text-primary font-medium transition-standard hover:translate-x-2"
        >
          View Case Study <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
