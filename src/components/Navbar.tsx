
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '#home', path: '/' },
  { name: 'Projects', href: '#projects', path: '/' },
  { name: 'Skills', href: '#skills', path: '/' },
  { name: 'About', href: '#about', path: '/' },
  { name: 'Contact', href: '#contact', path: '/' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // This helper ensures we're navigating to sections properly
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
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
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-display font-bold tracking-tight text-primary"
            onClick={() => window.scrollTo(0, 0)}
          >
            brooks<span className="text-gradient"> tiffany</span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                {isHomePage ? (
                  <a
                    href={link.href}
                    className="text-sm font-medium text-primary/80 hover:text-primary transition-standard relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                    onClick={scrollToSection(link.href)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={`/${link.href}`}
                    className="text-sm font-medium text-primary/80 hover:text-primary transition-standard relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = link.href.substring(1); // Remove the # character
                      
                      // Navigate to home page with the specific section
                      window.location.href = `/${link.href}`;
                    }}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button 
            className="md:hidden text-primary focus:outline-none z-[60]" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={cn(
            'fixed inset-0 bg-background glass-effect md:hidden z-50 transition-standard',
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              isHomePage ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-medium text-primary hover:text-gradient transition-standard"
                  onClick={scrollToSection(link.href)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={`/${link.href}`}
                  className="text-2xl font-medium text-primary hover:text-gradient transition-standard"
                  onClick={(e) => {
                    // Close the mobile menu
                    setMobileMenuOpen(false);
                    
                    // Navigate to the home page with the specific section
                    e.preventDefault();
                    window.location.href = `/${link.href}`;
                  }}
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
