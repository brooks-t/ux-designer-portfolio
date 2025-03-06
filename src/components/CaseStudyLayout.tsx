
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface CaseStudyLayoutProps {
  title: string;
  category: string;
  heroImage: string;
  children: React.ReactNode;
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  title,
  category,
  heroImage,
  children
}) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="w-full h-[50vh] relative">
          <img 
            src={heroImage} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90"></div>
        </div>
        
        <div className="content-container">
          <div className="max-w-3xl mx-auto -mt-20 bg-white rounded-2xl p-8 shadow-sm border border-primary/5 relative">
            <Link 
              to="/#projects" 
              className="inline-flex items-center text-primary/70 font-medium mb-4 hover:text-primary transition-standard"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Projects
            </Link>
            
            <span className="inline-block py-1 px-3 mb-3 text-xs font-medium border border-primary/10 rounded-full bg-primary/5">
              {category}
            </span>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              {title}
            </h1>
            
            {children}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudyLayout;
