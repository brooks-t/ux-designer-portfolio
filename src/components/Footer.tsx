
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
            {isHomePage ? (
              <>
                <a 
                  href="#home" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Home
                </a>
                <a 
                  href="#projects" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Projects
                </a>
                <a 
                  href="#skills" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Skills
                </a>
                <a 
                  href="#about" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard"
                >
                  Home
                </Link>
                <Link 
                  to="/#projects" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/#projects';
                  }}
                >
                  Projects
                </Link>
                <Link 
                  to="/#skills" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/#skills';
                  }}
                >
                  Skills
                </Link>
                <Link 
                  to="/#about" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/#about';
                  }}
                >
                  About
                </Link>
                <Link 
                  to="/#contact" 
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/#contact';
                  }}
                >
                  Contact
                </Link>
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
