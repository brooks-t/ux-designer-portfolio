
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { getBuildTime, formatLastUpdated } from '../utils/dateUtils';

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const [lastUpdated, setLastUpdated] = useState<string>('');
  
  useEffect(() => {
    // Get and format the last updated date
    const buildTime = getBuildTime();
    setLastUpdated(formatLastUpdated(buildTime));
  }, []);
  
  const handleNavigation = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home with the section anchor
      navigate(`/#${sectionId}`);
    }
  };
  
  return (
    <footer className={`py-12 ${theme === 'dark' ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground'}`}>
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
              brooks<span className="text-gradient">tiffany</span>
            </a>
          ) : (
            <button 
              onClick={() => navigate('/')}
              className="text-2xl font-display font-bold tracking-tight mb-8"
            >
              brooks<span className="text-gradient">tiffany</span>
            </button>
          )}
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="#home" 
              className={`text-sm ${theme === 'dark' ? 'text-secondary-foreground/80 hover:text-secondary-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'} transition-standard`}
              onClick={(e) => handleNavigation('home', e)}
            >
              Home
            </a>
            <a 
              href="#projects" 
              className={`text-sm ${theme === 'dark' ? 'text-secondary-foreground/80 hover:text-secondary-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'} transition-standard`}
              onClick={(e) => handleNavigation('projects', e)}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className={`text-sm ${theme === 'dark' ? 'text-secondary-foreground/80 hover:text-secondary-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'} transition-standard`}
              onClick={(e) => handleNavigation('skills', e)}
            >
              Skills
            </a>
            <a 
              href="#about" 
              className={`text-sm ${theme === 'dark' ? 'text-secondary-foreground/80 hover:text-secondary-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'} transition-standard`}
              onClick={(e) => handleNavigation('about', e)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className={`text-sm ${theme === 'dark' ? 'text-secondary-foreground/80 hover:text-secondary-foreground' : 'text-primary-foreground/80 hover:text-primary-foreground'} transition-standard`}
              onClick={(e) => handleNavigation('contact', e)}
            >
              Contact
            </a>
          </div>
          
          <div className={`text-sm ${theme === 'dark' ? 'text-secondary-foreground/60' : 'text-primary-foreground/60'}`}>
            &copy; {currentYear} UX Designer Portfolio. All rights reserved.
          </div>
          
          {lastUpdated && (
            <div className={`text-xs mt-2 ${theme === 'dark' ? 'text-secondary-foreground/50' : 'text-primary-foreground/50'}`}>
              This website was last updated at {lastUpdated}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
