
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const handleNavigation = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If on home page, scroll to section
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home page with anchor
      window.location.href = `/${url}`;
    }
  };
  
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="content-container">
        <div className="flex flex-col items-center">
          {isHomePage ? (
            <a 
              href="#home" 
              className="text-2xl font-display font-bold tracking-tight mb-8"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              brooks<span className="bg-white/90 bg-clip-text text-transparent"> tiffany</span>
            </a>
          ) : (
            <Link 
              to="/" 
              className="text-2xl font-display font-bold tracking-tight mb-8"
            >
              brooks<span className="bg-white/90 bg-clip-text text-transparent"> tiffany</span>
            </Link>
          )}
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="#home" 
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard"
              onClick={(e) => handleNavigation('#home', e)}
            >
              Home
            </a>
            <a 
              href="#projects" 
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard"
              onClick={(e) => handleNavigation('#projects', e)}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard"
              onClick={(e) => handleNavigation('#skills', e)}
            >
              Skills
            </a>
            <a 
              href="#about" 
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard"
              onClick={(e) => handleNavigation('#about', e)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard"
              onClick={(e) => handleNavigation('#contact', e)}
            >
              Contact
            </a>
          </div>
          
          <div className="text-sm text-primary-foreground/60">
            &copy; {currentYear} UX Designer Portfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
