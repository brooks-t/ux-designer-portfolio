
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
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={`${link.path}${link.href}`}
                    className="text-sm font-medium text-primary/80 hover:text-primary transition-standard relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle - Moved outside the nav to ensure higher z-index */}
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
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={`${link.path}${link.href}`}
                  className="text-2xl font-medium text-primary hover:text-gradient transition-standard"
                  onClick={() => setMobileMenuOpen(false)}
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
