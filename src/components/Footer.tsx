
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="content-container">
        <div className="flex flex-col items-center">
          <a 
            href="#home" 
            className="text-2xl font-display font-bold tracking-tight mb-8"
          >
            port<span className="bg-white/90 bg-clip-text text-transparent">folio</span>
          </a>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard">Home</a>
            <a href="#skills" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard">Skills</a>
            <a href="#projects" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard">Projects</a>
            <a href="#about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard">About</a>
            <a href="#contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-standard">Contact</a>
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
