
import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-4 group">
              <Hexagon size={48} className="text-[#25d366] group-hover:rotate-180 transition-transform duration-1000" />
              <h3 className="text-3xl font-black uppercase tracking-tighter">Let's Flow</h3>
            </Link>
            <p className="text-xl font-light text-white/30 max-w-sm leading-relaxed italic">
              "Infinite Scale. Zero Manual Labor."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#25d366]">Systems</h4>
              <ul className="space-y-3 text-sm font-bold opacity-40">
                <li>WhatsApp Bots</li>
                <li>Automation</li>
                <li>Workflows</li>
                <li>Bulk Queries</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">Agency</h4>
              <ul className="space-y-3 text-sm font-bold opacity-40">
                <li><Link to="/faq">Intel (FAQ)</Link></li>
                <li><Link to="/terms">Protocol (Terms)</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/10">
            &copy; {new Date().getFullYear()} Let's Flow - Scale Smarter.
          </p>
          <div className="flex items-center space-x-3">
             <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-4 h-4" alt="WA" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Official Business Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
