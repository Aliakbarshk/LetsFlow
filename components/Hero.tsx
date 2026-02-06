
import React from 'react';
import { Sparkles, ArrowRight, Layers, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#25d366]/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        <ScrollReveal delay={100}>
          <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full mb-12 backdrop-blur-md">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
            <span className="text-[11px] font-black tracking-[0.3em] uppercase text-white/60">Powered by Official WhatsApp API</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <h1 className="text-5xl md:text-[7.5rem] font-black leading-[0.85] tracking-tighter mb-8 uppercase italic">
            Infinite Scale. <br />
            <span className="text-[#25d366]">Zero Manual Labor.</span>
          </h1>
          <p className="text-white/20 text-xl md:text-3xl font-bold uppercase tracking-[0.5em] mb-12">
            The Flow of Automation.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={500} className="max-w-3xl">
          <p className="text-lg md:text-2xl text-white/40 font-medium leading-relaxed mb-12">
            If manual labor is removed and you utilize our specialized automation, you will receive significant benefits. 
            We build high-performance WhatsApp bots that manage bulk queries simultaneously, allowing your brand to scale without limits.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={700}>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#demo" className="group flex items-center space-x-4 px-10 py-5 bg-[#25d366] text-black font-black rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,211,102,0.2)]">
              <span className="uppercase tracking-widest text-xs">Explore the Demo</span>
              <ArrowRight size={18} />
            </a>
            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all uppercase tracking-widest text-xs">
              View Workflows
            </button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={900} className="w-full mt-24">
          <div className="aspect-[21/9] w-full bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#25d366]/5 to-transparent"></div>
            
            {/* Visual indicator of bulk processing */}
            <div className="grid grid-cols-3 gap-8 md:gap-24 opacity-20 group-hover:opacity-40 transition-opacity">
               <Layers size={48} className="text-[#25d366] animate-pulse" />
               <Zap size={48} className="text-[#25d366] animate-bounce" style={{animationDuration: '3s'}} />
               <Layers size={48} className="text-[#25d366] animate-pulse" style={{animationDelay: '1s'}} />
            </div>

            <div className="absolute inset-x-0 bottom-8 flex flex-col items-center space-y-4">
              <p className="text-[10px] uppercase tracking-[0.5em] font-black text-white/20">Handling 10k+ Simultaneous Queries</p>
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
