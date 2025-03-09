
import React from 'react';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { Heart, Shield, UsersRound, Lightbulb, Layout, CheckCircle } from 'lucide-react';

const HealthcarePatientPortal = () => {
  return (
    <CaseStudyLayout
      title="Smoking Cessation App (GEMS)"
      category="UX Research & Design"
      heroImage="/lovable-uploads/gems-hero.png"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-primary/70 mb-4">
            The GEMS project aimed to design and evaluate a mobile health intervention for smokers ambivalent about quitting, using personal experiments to enhance motivation and ability to quit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">My Role</p>
              <p className="text-primary/70">Lead UX Researcher & Designer</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">Key Responsibilities</p>
              <p className="text-primary/70">User Research, UI/UX Design, Protoyping and Testing</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">Tools Used</p>
              <p className="text-primary/70">Adobe XD, Illustrator, InVision</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-primary/70 mb-4">
            We needed to figure out how to effectively implement and evaluate an intervention for an ambivalent audience:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <UsersRound className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Identifying ambivalent smoker's needs</p>
                <p className="text-primary/70">The majority of smokers want to quit but aren't ready for long-term abstinence. Existing treatments don't cater to their ambivalence</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <Shield className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Catering to their specific needs</p>
                <p className="text-primary/70">Designing interventions that don't require a commitment to quit but explore their willingness to quit while assisting with gradual behavior change</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <Heart className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Measuring usefulness, difficulty and satisfaction</p>
                <p className="text-primary/70">Capturing and analyzing data from users with a combination of qualitative and quantitative methods</p>
              </div>
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Research Approach</h2>
          <p className="text-primary/70 mb-6">
            We conducted a thorough and iterative research phase:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Literature Review</h3>
              <p className="text-primary/70">Examined existing research on smoking cessation and interventions</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Competitive Analysis</h3>
              <p className="text-primary/70">Reviewed existing smoking cessations apps features and functionaliy </p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">User Interviews</h3>
              <p className="text-primary/70">Refined content and gathered feedback on the concept of personal experiments</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Usability Tests</h3>
              <p className="text-primary/70">Tested multiple prototypes both in the lab and in the field</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-5">
            <h3 className="font-medium flex items-center mb-2">
              <Lightbulb className="w-5 h-5 text-amber-500 mr-2" /> Key Research Insights
            </h3>
            <ul className="space-y-2 text-primary/70">
              <li>• Ambivalent smokers are receptive to mHealth interventions</li>
              <li>• Personal experiments are a promising approach to enhance motivation and ability to quit smoking</li>
              <li>• Interventions should be flexible and responsive to changes in motivation</li>
              <li>• Existing apps do not cater to ambivalents smokers or leverage personal experiments as a feature</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Design Solutions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Designed a Series of "Personal Experiments"
              </h3>
              <p className="text-primary/70 mb-4">
                These cognitive and behavioral tasks, designed to boost readiness for change, were distilled from a much larger list of experimetns through rigorous research and debate.
              </p>
              <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  alt="Healthcare dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Created Multiple Prototypes
              </h3>
              <p className="text-primary/70 mb-4">
                Designed and tested multiple prototypes of varying degrees of fidelity through an iterative process. These prototypes included an initial program orientation and seven personal experiments..
              </p>
              <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1557825835-a526494be845?auto=format&fit=crop&w=800&q=80" 
                  alt="Appointment scheduling" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Addressed User Feedback
              </h3>
              <p className="text-primary/70 mb-4">
                Refined the intervention based on user interviews, usability tests and pilot study results.
              </p>
              <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80" 
                  alt="Test results interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Accessibility Considerations</h2>
          <p className="text-primary/70 mb-6">
            Accessibility was a core focus throughout the design process:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start p-4 bg-primary/5 rounded-lg">
              <Shield className="w-5 h-5 text-primary mr-3 mt-0.5" />
              <div>
                <p className="font-medium">WCAG 2.1 AA Compliance</p>
                <p className="text-primary/70 text-sm">All screens were tested and certified compliant</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-primary/5 rounded-lg">
              <Shield className="w-5 h-5 text-primary mr-3 mt-0.5" />
              <div>
                <p className="font-medium">Screen Reader Optimization</p>
                <p className="text-primary/70 text-sm">Tested with JAWS, NVDA, and VoiceOver</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-primary/5 rounded-lg">
              <Shield className="w-5 h-5 text-primary mr-3 mt-0.5" />
              <div>
                <p className="font-medium">Keyboard Navigation</p>
                <p className="text-primary/70 text-sm">Full functionality without requiring mouse input</p>
              </div>
            </div>
            <div className="flex items-start p-4 bg-primary/5 rounded-lg">
              <Shield className="w-5 h-5 text-primary mr-3 mt-0.5" />
              <div>
                <p className="font-medium">Color Contrast Verification</p>
                <p className="text-primary/70 text-sm">All text meets AAA contrast requirements</p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
          <p className="text-primary/70 mb-6">
            The redesigned patient portal has had a significant positive impact:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 p-5 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <div>
                  <p className="font-semibold text-2xl mb-1">76%</p>
                  <p className="text-primary/70">Patient adoption rate (up from 28%)</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-5 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <div>
                  <p className="font-semibold text-2xl mb-1">-32%</p>
                  <p className="text-primary/70">Reduction in support calls</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-5 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <div>
                  <p className="font-semibold text-2xl mb-1">91%</p>
                  <p className="text-primary/70">Patient satisfaction rating</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/10 pt-6">
            <blockquote className="italic text-primary/80 pl-4 border-l-2 border-primary/20">
              "The new patient portal has been transformative for our practice. Our staff spends less time on the phone and more time with patients, while patients feel more empowered in managing their health."
              <footer className="mt-2 font-medium text-primary not-italic">— Dr. Sarah Chen, Medical Director</footer>
            </blockquote>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default HealthcarePatientPortal;
