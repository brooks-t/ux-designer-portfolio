
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="content-container">
        <div className="flex flex-col items-center">
          {isHomePage ? (
            <a 
              href="#home" 
              className="text-2xl font-display font-bold tracking-tight mb-8"
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
            {isHomePage ? (
              <>
                <a href="#home" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard">Home</a>
                <a href="#projects" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard">Projects</a>
                <a href="#skills" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard">Skills</a>
                <a href="#about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard">About</a>
                <a href="#contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard">Contact</a>
              </>
            ) : (
              <>
                <Link to="/#home" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard">Home</Link>
                <Link to="/#projects" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard">Projects</Link>
                <Link to="/#skills" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard">Skills</Link>
                <Link to="/#about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard">About</Link>
                <Link to="/#contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard">Contact</Link>
              </>
            )}
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
