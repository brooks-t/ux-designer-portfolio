
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
            I designed an accessible, patient-centered portal for a regional healthcare provider, 
            allowing patients to easily manage their healthcare journey—from scheduling appointments 
            to reviewing test results and communicating with providers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">Timeline</p>
              <p className="text-primary/70">22 weeks</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">My Role</p>
              <p className="text-primary/70">Lead UX Researcher & Designer</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">Tools Used</p>
              <p className="text-primary/70">Figma, Miro, UserZoom</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-primary/70 mb-4">
            The healthcare provider faced significant challenges with their existing patient portal:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <UsersRound className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Low adoption rate (only 28% of patients)</p>
                <p className="text-primary/70">Patients preferred calling the office rather than using the portal</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <Shield className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Accessibility issues</p>
                <p className="text-primary/70">The existing portal failed WCAG compliance tests</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <Heart className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Patient confusion about health information</p>
                <p className="text-primary/70">Medical test results were presented in technical jargon without context</p>
              </div>
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Research Approach</h2>
          <p className="text-primary/70 mb-6">
            I conducted comprehensive research to understand diverse patient needs:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Patient Interviews</h3>
              <p className="text-primary/70">30 in-depth interviews across diverse age groups and abilities</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Healthcare Provider Insights</h3>
              <p className="text-primary/70">Shadowed 8 healthcare professionals to understand workflow</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Accessibility Audit</h3>
              <p className="text-primary/70">Comprehensive WCAG 2.1 AA compliance assessment</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Support Call Analysis</h3>
              <p className="text-primary/70">Analyzed common support issues from call center data</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-lg p-5">
            <h3 className="font-medium flex items-center mb-2">
              <Lightbulb className="w-5 h-5 text-amber-500 mr-2" /> Key Research Findings
            </h3>
            <ul className="space-y-2 text-primary/70">
              <li>• Older patients (65+) found the login process confusing and often locked themselves out</li>
              <li>• Patients were overwhelmed by medical terminology in test results</li>
              <li>• Many used workarounds for appointment booking due to complexity</li>
              <li>• Screen reader users found the interface nearly impossible to navigate</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Patient Personas</h2>
          <p className="text-primary/70 mb-6">
            I developed three key patient personas to guide the design process:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-primary/10 rounded-xl p-5">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <img 
                  src="https://randomuser.me/api/portraits/women/79.jpg" 
                  alt="Eleanor profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-medium text-lg mb-1">Eleanor, 72</h3>
              <p className="text-sm text-primary/50 mb-3">Retired Teacher</p>
              <p className="text-primary/70 text-sm">
                "I want to manage my healthcare independently, but I get frustrated when technology doesn't work as expected."
              </p>
            </div>
            <div className="border border-primary/10 rounded-xl p-5">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <img 
                  src="https://randomuser.me/api/portraits/men/42.jpg" 
                  alt="Marcus profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-medium text-lg mb-1">Marcus, 38</h3>
              <p className="text-sm text-primary/50 mb-3">IT Professional with Vision Impairment</p>
              <p className="text-primary/70 text-sm">
                "I need a portal that works well with my screen reader so I can manage my family's healthcare needs."
              </p>
            </div>
            <div className="border border-primary/10 rounded-xl p-5">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <img 
                  src="https://randomuser.me/api/portraits/women/33.jpg" 
                  alt="Sophia profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-medium text-lg mb-1">Sophia, 29</h3>
              <p className="text-sm text-primary/50 mb-3">Busy Parent</p>
              <p className="text-primary/70 text-sm">
                "I need to quickly schedule appointments and get information about my children's health on the go."
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Design Solutions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Simplified Dashboard
              </h3>
              <p className="text-primary/70 mb-4">
                Created an intuitive dashboard with clear information hierarchy and quick access to common tasks.
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
                <Layout className="w-5 h-5 text-primary mr-2" /> Accessible Appointment Scheduling
              </h3>
              <p className="text-primary/70 mb-4">
                Redesigned the appointment booking flow with fewer steps and clearer language.
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
                <Layout className="w-5 h-5 text-primary mr-2" /> Plain-Language Test Results
              </h3>
              <p className="text-primary/70 mb-4">
                Developed a system that presents medical results with plain-language explanations and visual indicators.
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
