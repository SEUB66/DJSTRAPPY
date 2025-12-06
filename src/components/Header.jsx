import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Header Component
 * 
 * Site-wide navigation header with logo and menu links.
 * Includes links to Login, Man Cave, and User pages.
 */
function Header() {
  const [logoError, setLogoError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/devhub', label: 'Man Cave' },
    { path: '/user', label: 'Profile' },
    { path: '/login', label: 'Login' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="container py-4 px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {!logoError && (
              <img 
                src="/seublogo.png" 
                alt="APPLEPUNK Logo" 
                className="w-10 h-10 object-contain rounded-lg"
                onError={() => setLogoError(true)}
              />
            )}
            <span className="text-xl font-bold gradient-text hidden sm:block">APPLEPUNK</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden mt-4 pb-2 border-t border-gray-800 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium py-2 transition-colors ${
                    isActive(link.path)
                      ? 'text-cyan-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
