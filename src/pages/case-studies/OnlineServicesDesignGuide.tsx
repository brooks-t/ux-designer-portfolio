
import React from 'react';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { Bookmark, Users, LineChart, Lightbulb, Layout, CheckCircle, Palette, Code } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const OnlineServicesDesignGuide = () => {
  const { theme } = useTheme();
  const darkMode = theme === 'dark';
  
  return (
    <CaseStudyLayout
      title="IRS Online Services Design Guide"
      category="UX Design | GovTech | Design System | UI Kit"
      heroImage="/lovable-uploads/odg-ui-kit.png"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-primary/70 mb-4">
            The IRS Online Services Design Guide is a comprehensive design system that provides guidelines, components, and templates for creating consistent and accessible digital experiences across all IRS online services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">My Role</p>
              <p className="text-primary/70">Design System Lead</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">Key Responsibilities</p>
              <p className="text-primary/70">Design System & UI Kit</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">Tools Used</p>
              <p className="text-primary/70">Figma, Sketch, Zeplin</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-primary/70 mb-4">
            The IRS needed a unified design system to ensure consistency and efficiency across multiple digital platforms:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <Users className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Inconsistent user experiences</p>
                <p className="text-primary/70">Multiple teams were creating different interface patterns, leading to a fragmented user experience across IRS platforms.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <Bookmark className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Inefficient development</p>
                <p className="text-primary/70">Teams were recreating similar components and patterns, wasting time and resources.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <LineChart className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Accessibility compliance</p>
                <p className="text-primary/70">Ensuring consistent accessibility standards across all digital touchpoints was challenging without centralized guidelines.</p>
              </div>
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Research & Discovery</h2>
          <p className="text-primary/70 mb-6">
            We conducted extensive research to create a comprehensive design system that would serve all IRS digital products:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Design Audit</h3>
              <p className="text-primary/70">Comprehensive review of existing IRS digital properties</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Stakeholder Interviews</h3>
              <p className="text-primary/70">Gathered requirements from designers, developers, and product managers</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Accessibility Research</h3>
              <p className="text-primary/70">Studied WCAG guidelines and government accessibility requirements</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Best Practices Analysis</h3>
              <p className="text-primary/70">Reviewed successful design systems from other organizations</p>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-amber-900' : 'bg-amber-50'} border ${darkMode ? 'border-amber-800' : 'border-amber-100'} rounded-lg p-5`}>
            <h3 className="font-medium flex items-center mb-2">
              <Lightbulb className={`w-5 h-5 ${darkMode ? 'text-amber-400' : 'text-amber-500'} mr-2`} /> Key Insights
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-amber-100' : 'text-primary/70'}`}>
              <li>• Need for scalable component library with clear documentation</li>
              <li>• Importance of accessibility-first design principles</li>
              <li>• Requirement for flexible tokens and variables system</li>
              <li>• Essential to provide both design and development resources</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Design System Components</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Palette className="w-5 h-5 text-primary mr-2" /> Foundation Elements
              </h3>
              <p className="text-primary/70 mb-4">
                Created a comprehensive foundation with color palettes, typography scales, spacing systems, and iconography that align with federal design standards.
              </p>
              <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/odg-ui-kit.png" 
                  alt="Design system foundation elements" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Component Library
              </h3>
              <p className="text-primary/70 mb-4">
                Developed a comprehensive library of reusable UI components including forms, navigation, buttons, cards, and data visualization elements.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Code className="w-5 h-5 text-primary mr-2" /> Templates & Patterns
              </h3>
              <p className="text-primary/70 mb-4">
                Created page templates and interaction patterns for common use cases across IRS digital services.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
          <p className="text-primary/70 mb-6">
            The Online Services Design Guide has become the foundation for all IRS digital experiences, delivering significant value:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className={`${darkMode ? 'bg-green-900' : 'bg-green-50'} p-5 rounded-lg`}>
              <div className="flex items-start">
                <CheckCircle className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-500'} mr-2`} />
                <div>
                  <p className="font-semibold text-2xl mb-1">Unified experience</p>
                  <p className={darkMode ? 'text-green-100' : 'text-primary/70'}>Consistent design across all platforms</p>
                </div>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-green-900' : 'bg-green-50'} p-5 rounded-lg`}>
              <div className="flex items-start">
                <CheckCircle className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-500'} mr-2`} />
                <div>
                  <p className="font-semibold text-2xl mb-1">Faster development</p>
                  <p className={darkMode ? 'text-green-100' : 'text-primary/70'}>Reduced development time by 40%</p>
                </div>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-green-900' : 'bg-green-50'} p-5 rounded-lg`}>
              <div className="flex items-start">
                <CheckCircle className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-500'} mr-2`} />
                <div>
                  <p className="font-semibold text-2xl mb-1">Accessibility compliance</p>
                  <p className={darkMode ? 'text-green-100' : 'text-primary/70'}>100% WCAG 2.1 AA compliance</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/10 pt-6">
            <blockquote className="italic text-primary/80 pl-4 border-l-2 border-primary/20">
              "The design guide has transformed how we build digital products at the IRS. It's made our team so much more efficient."
              <footer className="mt-2 font-medium text-primary not-italic">— IRS Development Team Lead</footer>
            </blockquote>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default OnlineServicesDesignGuide;
