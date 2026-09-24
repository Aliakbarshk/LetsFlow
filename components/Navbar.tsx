
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

import logo from '@/assets/thelogo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInitiateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/contact');
    }
  };

  const handleFlowClick = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  const navLinks = [
    { name: "Letsflow", path: '/', action: handleFlowClick },
    { name: 'Healthcare', path: '/#healthcare', action: () => handleScrollToSection('healthcare') },
    { name: 'Systems', path: '/#services', action: () => handleScrollToSection('services') },
    { name: 'Intel', path: '/faq' },
    { name: 'Protocol', path: '/terms' },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className={`w-full transition-all duration-700 ${scrolled ? 'py-2' : 'py-4'}`}>
        <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${scrolled ? 'glass-bespoke rounded-full py-2.5 px-8 mx-6 md:mx-auto border-white/10' : ''}`}>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={handleFlowClick} className="flex items-center space-x-3 group">
              <img
                src={logo}
                alt="Letsflow"
                className="h-8 md:h-9 w-auto object-contain"
                loading="lazy"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link) => (
                link.action ? (
                  <button 
                    key={link.name} 
                    type="button"
                    onClick={link.action}
                    className="text-[10px] font-black uppercase tracking-[0.4em] transition-all text-white/40 hover:text-[#00f2ff] cursor-pointer"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:text-[#00f2ff] ${location.pathname === link.path ? 'text-[#00f2ff]' : 'text-white/40'}`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <button 
                type="button"
                onClick={handleInitiateClick} 
                className="px-6 py-2 border border-white/10 hover:border-[#00f2ff] rounded-full text-[10px] font-black uppercase tracking-widest flex items-center group transition-all cursor-pointer text-white"
              >
                Initiate
                <ArrowUpRight className="ml-2 w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            <button className="md:hidden text-white/50 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 bg-black z-[-1] flex flex-col items-center justify-center space-y-10 animate-in fade-in zoom-in-95">
            {navLinks.map((link) => (
              link.action ? (
                <button 
                  key={link.name} 
                  type="button"
                  onClick={link.action}
                  className="text-3xl font-black uppercase tracking-widest text-white/40 hover:text-[#00f2ff] transition-all cursor-pointer"
                >
                  {link.name}
                </button>
              ) : (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className="text-3xl font-black uppercase tracking-widest text-white/40 hover:text-[#00f2ff] transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <button 
              type="button"
              onClick={handleInitiateClick}
              className="text-xl font-black uppercase tracking-widest text-[#00f2ff] cursor-pointer pt-4"
            >
              Initiate Contact
            </button>
            <button onClick={() => setIsOpen(false)} className="mt-8 p-4 border border-white/10 rounded-full cursor-pointer">
              <X size={24} />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
