import React from 'react';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { Bookmark, Users, LineChart, Lightbulb, Layout, CheckCircle } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const FreeFile = () => {
  const { theme } = useTheme();
  const darkMode = theme === 'dark';
  
  return (
    <CaseStudyLayout
      title="IRS Free File Design Improvement"
      category="UX Design | Web App"
      heroImage="/lovable-uploads/free-file-hero.png"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-primary/70 mb-4">
            The Free File project aimed to improve the user experience of the IRS Free File application to help taxpayers confidently select free tax preparation software.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">My Role</p>
              <p className="text-primary/70">Lead UX Designer</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">Key Responsibilities</p>
              <p className="text-primary/70">UI/IX Design</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">Tools Used</p>
              <p className="text-primary/70">Figma, Sketch, InVision</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-primary/70 mb-4">
            Taxpayers face confusion and frustration when trying to navigate the complex landscape of free tax preparation software options:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <Users className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Language and terminology</p>
                <p className="text-primary/70">Particpants were confused by language and terminology used in the app, such as the term "offers" and the difference between "browse" and "find."</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <Bookmark className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Navigation and page titles</p>
                <p className="text-primary/70">Taxpayers were disoriented by navigation and page titles, which implied filing taxes directly with the IRS rather than finding partner tax software.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <LineChart className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">AGI explanation</p>
                <p className="text-primary/70">Adjusted Gross Income (AGI) needed to be better explained throughout the app, including on the landing page and in the "Find a trusted partner" tool.</p>
              </div>
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Research & Discovery</h2>
          <p className="text-primary/70 mb-6">
            We underwent a comprehensive research phase to understand user needs and pain points:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Heuristic Analysis</h3>
              <p className="text-primary/70">Experts reviewed both desktop and mobile designs</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Competitive Analysis</h3>
              <p className="text-primary/70">Evaluated competitor tax preparation software and guidance tools</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Usability Testing</h3>
              <p className="text-primary/70">Compared usability of prototype to existing Free File app</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Stakeholder Collaboration</h3>
              <p className="text-primary/70">Collaborated with stakeholders to understand goals and constraints</p>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-amber-900' : 'bg-amber-50'} border ${darkMode ? 'border-amber-800' : 'border-amber-100'} rounded-lg p-5`}>
            <h3 className="font-medium flex items-center mb-2">
              <Lightbulb className={`w-5 h-5 ${darkMode ? 'text-amber-400' : 'text-amber-500'} mr-2`} /> Key Insights
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-amber-100' : 'text-primary/70'}`}>
              <li>• Taxpayers were confused by inconsistent terminology and unclear tool options</li>
              <li>• Navigation issues led to confusion about filing directly with the IRS</li>
              <li>• Insufficient partner information hindered informed decision-making</li>
              <li>• The number of choices and decision steps overwhelmed users</li>
              <li>• AGI estimation and filtering posed significant challenges</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Design Solutions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Redesigned Navigation and Page Titles
              </h3>
              <p className="text-primary/70 mb-4">
                Simplified navigation and implemented clear and direct language to accurately reflect Free File's purpose.
              </p>
              <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/app-main-border.png" 
                  alt="updated free file main page" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Enhanced Partner Information Display
              </h3>
              <p className="text-primary/70 mb-4">
                Created a more comprehensive and organized display of partner information with clear eligibility details.
              </p>
              <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/browse-all.png" 
                  alt="updated browse all page" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Simplified Filtering and Decision Process
              </h3>
              <p className="text-primary/70 mb-4">
                Streamlined the filtering process and reduced the number of decisions that the user needed to make while going through the app.
              </p>
              <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/filter-results.png" 
                  alt="Budgeting tools" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
          <p className="text-primary/70 mb-6">
            The <a href="https://apps.irs.gov/app/freeFile/" className="text-blue-600 underline hover:text-blue-800">updated app launched recently</a> in preparation for tax season. While the tax season is ongoing and data is being collected, we hypothesize the following results:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className={`${darkMode ? 'bg-green-900' : 'bg-green-50'} p-5 rounded-lg`}>
              <div className="flex items-start">
                <CheckCircle className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-500'} mr-2`} />
                <div>
                  <p className="font-semibold text-2xl mb-1">Clarity and language</p>
                  <p className={darkMode ? 'text-green-100' : 'text-primary/70'}>Improved user understanding</p>
                </div>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-green-900' : 'bg-green-50'} p-5 rounded-lg`}>
              <div className="flex items-start">
                <CheckCircle className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-500'} mr-2`} />
                <div>
                  <p className="font-semibold text-2xl mb-1">Simplified choices</p>
                  <p className={darkMode ? 'text-green-100' : 'text-primary/70'}>Reduced user frustration</p>
                </div>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-green-900' : 'bg-green-50'} p-5 rounded-lg`}>
              <div className="flex items-start">
                <CheckCircle className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-500'} mr-2`} />
                <div>
                  <p className="font-semibold text-2xl mb-1">Streamlined filter</p>
                  <p className={darkMode ? 'text-green-100' : 'text-primary/70'}>Faster partner selection</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/10 pt-6">
            <blockquote className="italic text-primary/80 pl-4 border-l-2 border-primary/20">
              "The updated Free File application made it much easier for me to find the right tax software."
              <footer className="mt-2 font-medium text-primary not-italic">— Usability test quote</footer>
            </blockquote>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default FreeFile;
