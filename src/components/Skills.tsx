
import React from 'react';
import { Monitor, PenTool, Users, Layers, Search, Code } from 'lucide-react';

const skillsData = [
  {
    title: 'UI Design',
    description: 'Creating visually appealing interfaces that align with brand identity and user expectations.',
    icon: <Monitor className="w-8 h-8" />
  },
  {
    title: 'UX Research',
    description: 'Conducting user research to understand behaviors, needs, and motivations.',
    icon: <Search className="w-8 h-8" />
  },
  {
    title: 'Wireframing',
    description: 'Building low-fidelity mockups to establish information architecture and layout.',
    icon: <PenTool className="w-8 h-8" />
  },
  {
    title: 'User Testing',
    description: 'Evaluating designs with real users to validate concepts and identify improvements.',
    icon: <Users className="w-8 h-8" />
  },
  {
    title: 'Prototyping',
    description: 'Creating interactive models to simulate user flows and interactions.',
    icon: <Layers className="w-8 h-8" />
  },
  {
    title: 'Front-end Skills',
    description: 'Working knowledge of HTML, CSS and basic JavaScript to collaborate effectively with developers.',
    icon: <Code className="w-8 h-8" />
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="content-container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 mb-3 text-sm font-medium border border-primary/10 rounded-full bg-primary/5">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            My Design <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="text-primary/70">
            I leverage a combination of design thinking, technical skills, and collaborative approaches to create exceptional user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-primary/5 transition-standard hover:shadow-md hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 text-primary">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-primary/70">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
