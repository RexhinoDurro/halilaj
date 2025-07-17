// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logolong from '../assets/images/logoLong.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navigationItems = [
    { id: '/shop-departments', label: 'Shop departments', href: '/shop-departments' },
    { id: '/', label: 'Home', href: '/' },
    { id: '/products', label: 'Products', href: '/products' },
    { id: '/about', label: 'About us', href: '/about' },
    { id: '/applications', label: 'Applications', href: '/applications' },
    { id: '/news', label: 'News', href: '/news' },
    { id: '/contact', label: 'Contact us', href: '/contact' }
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <>
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-gray-200/50' 
        : 'bg-gradient-to-b from-black/30 via-black/20 to-transparent backdrop-blur-sm shadow-lg border-white/10'
    } border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            aria-label="Tola Tiles - Go to homepage"
          >
            <img 
              src={logolong} 
              alt="Tola Tiles Logo" 
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              width="160"
              height="32"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  to={item.href}
                  className={`font-medium transition-all duration-300 transform hover:scale-105 relative px-3 py-2 rounded-lg ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                      : 'text-white hover:text-blue-300 hover:bg-white/10 drop-shadow-md'
                  } ${isActiveRoute(item.href) ? (isScrolled ? 'text-blue-600 bg-blue-50' : 'text-blue-300 bg-white/10') : ''}`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 transition-all duration-300 ${
                    isActiveRoute(item.href) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-all duration-300 p-2 rounded-lg relative z-50 ${
              isScrolled 
                ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                : 'text-white hover:text-blue-300 hover:bg-white/10 drop-shadow-md'
            }`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 top-3' : ''
              }`}></span>
              <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 top-3' : ''
              }`}></span>
            </div>
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu - Compact dropdown below navbar */}
    {isMobileMenuOpen && (
      <div className="md:hidden fixed top-20 right-4 z-40 w-[40%] max-w-xs">
        {/* Menu Content */}
        <div className="bg-white/70 backdrop-blur-md shadow-xl border border-gray-200/30 rounded-xl max-h-[50vh] overflow-y-auto">
          <nav className="px-4 py-3 space-y-1" role="navigation" aria-label="Mobile navigation">
            {navigationItems.map((item) => (
              <div key={item.id}>
                <Link
                  to={item.href}
                  className={`block w-full text-left py-2 px-2 font-medium transition-all duration-200 rounded-md text-xs ${
                    isActiveRoute(item.href) ? 'text-blue-600 bg-blue-50/60' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/60'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
        
        {/* Subtle background overlay */}
        <div 
          className="fixed inset-0 bg-black/10 -z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      </div>
    )}
    </>
  );
};

export default Navbar;