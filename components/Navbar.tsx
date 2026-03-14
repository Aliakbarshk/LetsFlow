
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

import logo from '@/assets/thelogo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Flow', path: '/' },
    { name: 'Intel', path: '/faq' },
    { name: 'Protocol', path: '/terms' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${scrolled ? 'glass-bespoke rounded-full py-3 px-8 mx-6 md:mx-auto border-white/10' : ''}`}>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={logo}
              alt="Let's Flow"
              className="h-9 w-auto object-contain"
              loading="lazy"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:text-[#00f2ff] ${location.pathname === link.path ? 'text-[#00f2ff]' : 'text-white/40'}`}
              >
                {link.name}
              </Link>
            ))}
            <a href="#contact" className="px-6 py-2 border border-white/10 hover:border-[#00f2ff] rounded-full text-[10px] font-black uppercase tracking-widest flex items-center group transition-all">
              Initiate
              <ArrowUpRight className="ml-2 w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <button className="md:hidden text-white/50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-[-1] flex flex-col items-center justify-center space-y-12 animate-in fade-in zoom-in-95">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-4xl font-black uppercase tracking-widest text-white/20 hover:text-[#00f2ff] transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a href="#contact" className="text-xl font-black uppercase tracking-widest text-[#00f2ff]" onClick={() => setIsOpen(false)}>
            Initiate Contact
          </a>
          <button onClick={() => setIsOpen(false)} className="mt-12 p-4 border border-white/10 rounded-full">
            <X size={24} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
