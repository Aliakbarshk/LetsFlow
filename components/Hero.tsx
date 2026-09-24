
import React from 'react';
import { Sparkles, ArrowRight, Layers, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 md:pt-40 px-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#25d366]/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        <ScrollReveal delay={50}>
          <div 
            onClick={() => scrollTo('contact')}
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-[#00f2ff]/10 via-[#25d366]/15 to-[#00f2ff]/10 hover:from-[#00f2ff]/20 hover:to-[#25d366]/25 border border-[#00f2ff]/30 px-6 py-3 rounded-full mb-10 backdrop-blur-md transition-all shadow-[0_0_30px_rgba(0,242,255,0.15)] cursor-pointer hover:scale-[1.02]"
          >
            <span className="flex h-2.5 w-2.5 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f2ff]"></span>
            </span>
            <span className="text-xs sm:text-sm md:text-base font-black tracking-wider uppercase text-white">
              “Doctor, is your hospital ready for a smart upgrade?”
            </span>
            <ArrowRight size={15} className="text-[#00f2ff] group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <h1 className="text-4xl sm:text-6xl md:text-[6.5rem] font-black leading-[0.9] tracking-tighter mb-8 uppercase">
            Automation Built for Hospitals. <br />
            <span className="text-[#25d366]">Designed for Scale.</span>
          </h1>
          <p className="text-white/40 text-sm sm:text-base md:text-xl font-bold uppercase tracking-[0.35em] mb-8">
            Built for Healthcare • Flexible for Every Business
          </p>
        </ScrollReveal>

        <ScrollReveal delay={500} className="max-w-3xl">
          <p className="text-base sm:text-lg md:text-2xl text-white/50 font-normal leading-relaxed mb-12">
            We build WhatsApp bots, lead-management systems, scheduled messaging, and custom workflows that reduce repetitive manual work across hospitals, healthcare businesses, and other organizations.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={700}>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button 
              type="button"
              onClick={() => scrollTo('demo')}
              className="group flex items-center space-x-4 px-10 py-5 bg-[#25d366] text-black font-black rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,211,102,0.2)] cursor-pointer"
            >
              <span className="uppercase tracking-widest text-xs">Explore the Demo</span>
              <ArrowRight size={18} />
            </button>
            <button 
              type="button"
              onClick={() => scrollTo('healthcare')}
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all uppercase tracking-widest text-xs cursor-pointer active:scale-95"
            >
              Healthcare Focus
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={900} className="w-full mt-20">
          <div 
            onClick={() => scrollTo('demo')}
            className="aspect-[21/9] sm:aspect-[21/8] w-full bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 flex items-center justify-center relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#25d366]/5 via-transparent to-[#00f2ff]/5"></div>
            
            {/* Visual indicators of multi-system automation */}
            <div className="grid grid-cols-3 gap-8 md:gap-24 opacity-25 group-hover:opacity-45 transition-opacity">
               <Layers size={48} className="text-[#25d366] animate-pulse" />
               <Zap size={48} className="text-[#00f2ff] animate-bounce" style={{animationDuration: '3s'}} />
               <Layers size={48} className="text-[#25d366] animate-pulse" style={{animationDelay: '1s'}} />
            </div>

            <div className="absolute inset-x-0 bottom-8 flex flex-col items-center space-y-2 px-4 text-center">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-black text-white/30 group-hover:text-[#25d366] transition-colors">
                Lead Management • WhatsApp Bots • Scheduled Reminders • Multi-Step Pipelines
              </p>
              <p className="text-[9px] uppercase tracking-widest text-white/20">Click to test interactive demo environment</p>
            </div>
            {/* Minimal Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
