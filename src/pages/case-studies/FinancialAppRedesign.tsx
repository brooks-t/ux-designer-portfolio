
import React from 'react';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { Bookmark, Users, LineChart, Lightbulb, Layout, CheckCircle } from 'lucide-react';

const FinancialAppRedesign = () => {
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
            The existing Free File application had several usability issues:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <Users className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Language and terminology</p>
                <p className="text-primary/70">Particpants were confused by language and terminology used in the app</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <Bookmark className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Navigation and page titles</p>
                <p className="text-primary/70">Taxpayers were confused by navigation and page titles, which implied filing taxes directly with the IRS rather than finding partner tax software.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <LineChart className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Declining satisfaction scores</p>
                <p className="text-primary/70">Customer satisfaction had dropped to 3.2/5 in the past year</p>
              </div>
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Research & Discovery</h2>
          <p className="text-primary/70 mb-6">
            I led a comprehensive research phase to understand user needs and pain points:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">User Interviews</h3>
              <p className="text-primary/70">Conducted 25 in-depth interviews with users across different demographics</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Competitive Analysis</h3>
              <p className="text-primary/70">Analyzed 8 competing financial apps to identify best practices and opportunities</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Analytics Review</h3>
              <p className="text-primary/70">Examined app usage data to identify drop-off points and user flows</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Usability Testing</h3>
              <p className="text-primary/70">Conducted 15 usability tests on the existing app to document pain points</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-5">
            <h3 className="font-medium flex items-center mb-2">
              <Lightbulb className="w-5 h-5 text-amber-500 mr-2" /> Key Insights
            </h3>
            <ul className="space-y-2 text-primary/70">
              <li>• Users found the account overview confusing and data visualization unclear</li>
              <li>• Transaction history was difficult to search and filter</li>
              <li>• Budget tools were hidden in submenus and rarely discovered</li>
              <li>• Users wanted personalized insights about their spending habits</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Design Solutions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Redesigned Dashboard
              </h3>
              <p className="text-primary/70 mb-4">
                Created a new dashboard with clear, scannable financial information and personalized insights at a glance.
              </p>
              <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                  alt="Redesigned dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Simplified Transaction History
              </h3>
              <p className="text-primary/70 mb-4">
                Reimagined the transaction list with powerful filters, search, and categorization to help users find what they need.
              </p>
              <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                  alt="Transaction history" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Intelligent Budgeting Tools
              </h3>
              <p className="text-primary/70 mb-4">
                Developed intuitive budgeting tools with automated categorization and visual spending breakdowns.
              </p>
              <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80" 
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
            The redesigned app launched after extensive usability testing and iterative improvements. Post-launch metrics showed:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 p-5 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <div>
                  <p className="font-semibold text-2xl mb-1">+45%</p>
                  <p className="text-primary/70">Increase in user retention</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-5 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <div>
                  <p className="font-semibold text-2xl mb-1">+68%</p>
                  <p className="text-primary/70">Increase in feature adoption</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-5 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <div>
                  <p className="font-semibold text-2xl mb-1">4.7/5</p>
                  <p className="text-primary/70">New customer satisfaction</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/10 pt-6">
            <blockquote className="italic text-primary/80 pl-4 border-l-2 border-primary/20">
              "The new app has transformed how I manage my finances. It's intuitive, beautiful, and actually makes me want to check my accounts regularly."
              <footer className="mt-2 font-medium text-primary not-italic">— App Store Review</footer>
            </blockquote>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default FinancialAppRedesign;
