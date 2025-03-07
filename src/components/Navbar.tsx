
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, User, BookOpen, Briefcase, Mail, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleScroll();
    handleResize();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check if we need to scroll to a section after navigation
  useEffect(() => {
    // This runs after the component mounts or updates
    if (isHomePage && location.hash) {
      const sectionId = location.hash.replace('#', '');
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Small delay to ensure the DOM is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [isHomePage, location.hash]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Home', url: 'home', icon: Home },
    { name: 'Projects', url: 'projects', icon: Briefcase },
    { name: 'Skills', url: 'skills', icon: BookOpen },
    { name: 'About', url: 'about', icon: User },
    { name: 'Contact', url: 'contact', icon: Mail }
  ];

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo(0, 0);
    } else {
      navigate('/');
    }
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const handleNavigation = (sectionId: string) => {
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
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-standard',
        isScrolled
          ? 'py-3 glass-effect'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="content-container">
        <div className="flex items-center justify-between">
          <button 
            className="text-2xl font-display font-bold tracking-tight text-primary"
            onClick={handleLogoClick}
          >
            brooks<span className="text-gradient"> tiffany</span>
          </button>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleNavigation(item.url)}
                    className="px-4 py-2 rounded-md text-primary/80 hover:text-primary hover:bg-primary/5 transition-colors flex items-center gap-1.5"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
              <ThemeToggle className="ml-2" />
            </nav>
          )}

          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            {/* Mobile Menu Toggle */}
            <button 
              className="p-2 rounded-full bg-primary/10 text-primary"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-background/95 backdrop-blur-lg rounded-lg border border-primary/10 shadow-lg animate-fade-in">
            <nav className="flex flex-col space-y-3 px-4">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/10 text-primary/80 hover:text-primary transition-colors"
                    onClick={() => handleNavigation(item.url)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
