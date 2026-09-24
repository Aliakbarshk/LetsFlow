
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/thelogo.png';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (id: string) => {
    if (location.pathname === '/') {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(`/${id}`);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-4 group">
              <img
                src={logo}
                alt="Let's Flow"
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </Link>
            <p className="text-lg font-light text-white/40 max-w-sm leading-relaxed">
              "Built for Healthcare. Flexible for Every Business."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#25d366]">Systems</h4>
              <ul className="space-y-3 text-sm font-bold opacity-40">
                <li>
                  <button 
                    type="button" 
                    onClick={() => handleScrollTo('healthcare')} 
                    className="hover:text-[#00f2ff] transition-colors cursor-pointer text-left"
                  >
                    Hospital Automation
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => handleScrollTo('services')} 
                    className="hover:text-[#25d366] transition-colors cursor-pointer text-left"
                  >
                    Lead Management
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => handleScrollTo('demo')} 
                    className="hover:text-[#25d366] transition-colors cursor-pointer text-left"
                  >
                    WhatsApp Bots
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => handleScrollTo('services')} 
                    className="hover:text-[#00f2ff] transition-colors cursor-pointer text-left"
                  >
                    Scheduled Messaging
                  </button>
                </li>
                <li>
                  <button 
                    type="button" 
                    onClick={() => handleScrollTo('custom-automation')} 
                    className="hover:text-[#00f2ff] transition-colors cursor-pointer text-left"
                  >
                    Custom Workflows
                  </button>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Agency</h4>
              <ul className="space-y-3 text-sm font-bold opacity-40">
                <li><Link to="/faq" className="hover:text-[#00f2ff] transition-colors">Intel (FAQ)</Link></li>
                <li><Link to="/terms" className="hover:text-[#00f2ff] transition-colors">Protocol (Terms)</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00f2ff]">Direct Channels</h4>
              <ul className="space-y-3 text-sm font-bold opacity-50">
                <li>
                  <a 
                    href="tel:+918482934502" 
                    className="hover:text-[#25d366] transition-colors block"
                  >
                    +91 84829 34502
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/918482934502" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#25d366] transition-colors block text-xs"
                  >
                    WhatsApp Chat ↗
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:letsflowmanagement@gmail.com" 
                    className="hover:text-[#00f2ff] transition-colors block break-all text-xs"
                  >
                    letsflowmanagement@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10">
            &copy; {new Date().getFullYear()} Let's Flow - Scale Smarter.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
