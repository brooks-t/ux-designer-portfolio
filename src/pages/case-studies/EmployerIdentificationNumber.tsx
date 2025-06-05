
import React from 'react';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { Bookmark, Users, LineChart, Lightbulb, Layout, CheckCircle } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const EmployerIdentificationNumber = () => {
  const { theme } = useTheme();
  const darkMode = theme === 'dark';
  
  return (
    <CaseStudyLayout
      title="Employer Identification Number Modernization"
      category="UX Design | GovTech | Web App | Prototype"
      heroImage="/lovable-uploads/ein-landing-page.png"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-primary/70 mb-4">
            The EIN modernization project focused on improving the user experience for employers applying for an Employer Identification Number through the IRS online system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">My Role</p>
              <p className="text-primary/70">Lead UX Designer</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">Key Responsibilities</p>
              <p className="text-primary/70">UI/UX Design & Prototyping</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">Tools Used</p>
              <p className="text-primary/70">Figma, Sketch, Axure</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-primary/70 mb-4">
            The legacy EIN application system presented several challenges for employers trying to obtain their federal tax identification number:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <Users className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Complex application process</p>
                <p className="text-primary/70">Users struggled with a lengthy, confusing application process that wasn't intuitive for business owners.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <Bookmark className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Outdated interface design</p>
                <p className="text-primary/70">The legacy system used outdated design patterns that didn't meet modern accessibility and usability standards.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <LineChart className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">High abandonment rates</p>
                <p className="text-primary/70">Many users abandoned the application mid-process due to confusion and technical difficulties.</p>
              </div>
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Research & Discovery</h2>
          <p className="text-primary/70 mb-6">
            We conducted comprehensive research to understand user needs and identify pain points in the EIN application process:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">User Interviews</h3>
              <p className="text-primary/70">Conducted interviews with small business owners and tax professionals</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Analytics Review</h3>
              <p className="text-primary/70">Analyzed existing system usage data and drop-off points</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Usability Testing</h3>
              <p className="text-primary/70">Tested current system with representative users</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Stakeholder Workshops</h3>
              <p className="text-primary/70">Collaborated with IRS stakeholders to understand business requirements</p>
            </div>
          </div>
          <div className={`${darkMode ? 'bg-amber-900' : 'bg-amber-50'} border ${darkMode ? 'border-amber-800' : 'border-amber-100'} rounded-lg p-5`}>
            <h3 className="font-medium flex items-center mb-2">
              <Lightbulb className={`w-5 h-5 ${darkMode ? 'text-amber-400' : 'text-amber-500'} mr-2`} /> Key Insights
            </h3>
            <ul className={`space-y-2 ${darkMode ? 'text-amber-100' : 'text-primary/70'}`}>
              <li>• Users needed clearer guidance on eligibility requirements</li>
              <li>• The application flow was too complex and needed simplification</li>
              <li>• Better error handling and validation was required</li>
              <li>• Mobile responsiveness was essential for modern users</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Design Solutions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Streamlined Application Flow
              </h3>
              <p className="text-primary/70 mb-4">
                Redesigned the application process with a clear step-by-step flow and progress indicators.
              </p>
              <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/ein-landing-page.png" 
                  alt="EIN application landing page redesign" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Enhanced Form Design
              </h3>
              <p className="text-primary/70 mb-4">
                Created intuitive form layouts with clear labels, helpful tooltips, and real-time validation.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Mobile-First Approach
              </h3>
              <p className="text-primary/70 mb-4">
                Designed responsive layouts that work seamlessly across all device sizes.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
          <p className="text-primary/70 mb-6">
            The modernized EIN application system delivered significant improvements in user experience and operational efficiency:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className={`${darkMode ? 'bg-green-900' : 'bg-green-50'} p-5 rounded-lg`}>
              <div className="flex items-start">
                <CheckCircle className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-500'} mr-2`} />
                <div>
                  <p className="font-semibold text-2xl mb-1">Improved completion</p>
                  <p className={darkMode ? 'text-green-100' : 'text-primary/70'}>Higher application completion rates</p>
                </div>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-green-900' : 'bg-green-50'} p-5 rounded-lg`}>
              <div className="flex items-start">
                <CheckCircle className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-500'} mr-2`} />
                <div>
                  <p className="font-semibold text-2xl mb-1">Reduced errors</p>
                  <p className={darkMode ? 'text-green-100' : 'text-primary/70'}>Fewer application errors and resubmissions</p>
                </div>
              </div>
            </div>
            <div className={`${darkMode ? 'bg-green-900' : 'bg-green-50'} p-5 rounded-lg`}>
              <div className="flex items-start">
                <CheckCircle className={`w-6 h-6 ${darkMode ? 'text-green-400' : 'text-green-500'} mr-2`} />
                <div>
                  <p className="font-semibold text-2xl mb-1">Better accessibility</p>
                  <p className={darkMode ? 'text-green-100' : 'text-primary/70'}>Improved accessibility compliance</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/10 pt-6">
            <blockquote className="italic text-primary/80 pl-4 border-l-2 border-primary/20">
              "The new EIN application process is so much clearer and easier to navigate."
              <footer className="mt-2 font-medium text-primary not-italic">— Small Business Owner</footer>
            </blockquote>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default EmployerIdentificationNumber;
