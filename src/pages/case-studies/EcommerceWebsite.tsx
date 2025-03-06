
import React from 'react';
import CaseStudyLayout from '@/components/CaseStudyLayout';
import { ShoppingCart, TrendingUp, Users, Search, Layout, CheckCircle } from 'lucide-react';

const EcommerceWebsite = () => {
  return (
    <CaseStudyLayout
      title="E-commerce Website Redesign"
      category="Web Design"
      heroImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-primary/70 mb-4">
            I led the complete redesign of an established e-commerce platform selling handcrafted home goods. 
            The goal was to modernize the user experience, streamline the purchase journey, and increase conversion rates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">Timeline</p>
              <p className="text-primary/70">16 weeks</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">My Role</p>
              <p className="text-primary/70">UX/UI Designer</p>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-medium">Tools Used</p>
              <p className="text-primary/70">Figma, Hotjar, Adobe XD</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-primary/70 mb-4">
            The client was experiencing several issues with their existing e-commerce site:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <ShoppingCart className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">High cart abandonment rate (78%)</p>
                <p className="text-primary/70">Users were dropping off during the checkout process</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <Search className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Poor product discovery</p>
                <p className="text-primary/70">Users struggled to find products despite a large inventory</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-100 p-1 rounded mr-3 mt-1">
                <TrendingUp className="w-4 h-4 text-red-500" />
              </span>
              <div>
                <p className="font-medium">Declining conversion rate</p>
                <p className="text-primary/70">Only 1.2% of visitors completed a purchase</p>
              </div>
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Research & Strategy</h2>
          <p className="text-primary/70 mb-6">
            I conducted extensive research to understand user behaviors and pain points:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">User Surveys</h3>
              <p className="text-primary/70">Collected feedback from 250+ existing customers about their shopping experience</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Heatmap Analysis</h3>
              <p className="text-primary/70">Used Hotjar to analyze user interactions on key pages</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Checkout Funnel Analysis</h3>
              <p className="text-primary/70">Identified specific pain points in the conversion funnel</p>
            </div>
            <div className="border border-primary/10 rounded-lg p-5">
              <h3 className="font-medium mb-2">Competitive Analysis</h3>
              <p className="text-primary/70">Evaluated 5 competing e-commerce sites for best practices</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80" 
                alt="User journey map" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80" 
                alt="User testing session" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Design Solutions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Reimagined Product Discovery
              </h3>
              <p className="text-primary/70 mb-4">
                Designed an intelligent filtering system with visual category navigation and personalized recommendations.
              </p>
              <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" 
                  alt="Product discovery interface" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Simplified Checkout Process
              </h3>
              <p className="text-primary/70 mb-4">
                Reduced the checkout flow from 5 steps to 2, with guest checkout option and clearer shipping information.
              </p>
              <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80" 
                  alt="Checkout process" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium flex items-center mb-3">
                <Layout className="w-5 h-5 text-primary mr-2" /> Enhanced Product Pages
              </h3>
              <p className="text-primary/70 mb-4">
                Created immersive product pages with high-quality imagery, video content, and social proof elements.
              </p>
              <div className="aspect-[16/9] bg-slate-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586282391129-76a6df230234?auto=format&fit=crop&w=800&q=80" 
                  alt="Product page" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Implementation & Testing</h2>
          <p className="text-primary/70 mb-6">
            I worked closely with developers to ensure the design was implemented correctly:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                <Users className="w-4 h-4 text-blue-500" />
              </span>
              <div>
                <p className="font-medium">Staged rollout with A/B testing</p>
                <p className="text-primary/70">Released features incrementally to measure impact</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                <Users className="w-4 h-4 text-blue-500" />
              </span>
              <div>
                <p className="font-medium">Usability testing with 20 participants</p>
                <p className="text-primary/70">Refined designs based on observed user behaviors</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 p-1 rounded-full mr-3 mt-0.5">
                <Users className="w-4 h-4 text-blue-500" />
              </span>
              <div>
                <p className="font-medium">Performance optimization</p>
                <p className="text-primary/70">Ensured fast load times across all device types</p>
              </div>
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
          <p className="text-primary/70 mb-6">
            The redesigned e-commerce site launched with impressive results:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-green-50 p-5 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <div>
                  <p className="font-semibold text-2xl mb-1">+37%</p>
                  <p className="text-primary/70">Conversion rate increase</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-5 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <div>
                  <p className="font-semibold text-2xl mb-1">-42%</p>
                  <p className="text-primary/70">Cart abandonment</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-5 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <div>
                  <p className="font-semibold text-2xl mb-1">+28%</p>
                  <p className="text-primary/70">Avg. order value</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-5 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <div>
                  <p className="font-semibold text-2xl mb-1">+52%</p>
                  <p className="text-primary/70">Mobile conversions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/10 pt-6">
            <blockquote className="italic text-primary/80 pl-4 border-l-2 border-primary/20">
              "The new website has transformed our business. It's not only beautiful but has directly contributed to significant revenue growth."
              <footer className="mt-2 font-medium text-primary not-italic">— Client Testimonial</footer>
            </blockquote>
          </div>
        </section>
      </div>
    </CaseStudyLayout>
  );
};

export default EcommerceWebsite;
