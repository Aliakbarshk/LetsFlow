
import React from 'react';
import { SERVICES } from '../constants';
import ScrollReveal from './ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const handleServiceClick = (title: string) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const textarea = el.querySelector('textarea');
      if (textarea) {
        textarea.value = `Inquiry regarding ${title}: `;
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        textarea.focus();
      }
    }
  };

  return (
    <section id="services" className="py-40 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="space-y-4">
            <span className="text-[#00f2ff] text-xs font-black tracking-[0.5em] uppercase">Core Capabilities</span>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">Services & <br/>Systems</h2>
          </div>
          <p className="text-white/50 text-base sm:text-lg max-w-md font-medium leading-relaxed">
            Reliable automation infrastructure engineered to eliminate repetitive manual communication and route operational workflows with precision.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            return (
              <ScrollReveal 
                key={idx} 
                delay={idx * 100}
                className="group relative min-h-[380px] cursor-pointer flex flex-col justify-between"
              >
                <div 
                  onClick={() => handleServiceClick(service.title)}
                  className="absolute inset-0 bg-white/[0.02] rounded-[2.5rem] border border-white/10 transition-all duration-500 group-hover:bg-[#00f2ff]/5 group-hover:border-[#00f2ff]/30"
                ></div>
                <div className="relative h-full p-8 sm:p-10 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start pointer-events-auto">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {service.icon}
                    </div>
                    <button 
                      type="button"
                      onClick={() => handleServiceClick(service.title)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity p-2.5 bg-white hover:bg-[#00f2ff] rounded-full text-black cursor-pointer shadow-lg"
                      title={`Inquire about ${service.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                  
                  <div className="space-y-4 mt-8">
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight group-hover:text-[#00f2ff] transition-colors">{service.title}</h3>
                    <p className="text-white/40 text-sm sm:text-base leading-relaxed font-medium">
                      {service.description}
                    </p>
                    <div className="pt-6 border-t border-white/5 flex items-center space-x-3 opacity-40 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 rounded-full bg-[#00f2ff]"></div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/60">System Ready</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
