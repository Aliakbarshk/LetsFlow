
import React from 'react';
import { SERVICES } from '../constants';
import ScrollReveal from './ScrollReveal';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-40 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="space-y-6">
            <span className="text-[#00f2ff] text-xs font-black tracking-[0.5em] uppercase">Core Protocols</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">The <br/>Architecture</h2>
          </div>
          <p className="text-white/30 text-xl max-w-md font-medium leading-relaxed italic">
            "Automation is no longer an option; it's the baseline of brand survival."
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8">
          {SERVICES.map((service, idx) => {
            // Create a bento layout feel by alternating column spans
            const span = idx % 4 === 0 || idx % 4 === 3 ? 'lg:col-span-7' : 'lg:col-span-5';
            return (
              <ScrollReveal 
                key={idx} 
                delay={idx * 150}
                className={`${span} group relative h-[450px]`}
              >
                <div className="absolute inset-0 bg-white/[0.02] rounded-[3rem] border border-white/10 transition-all duration-700 group-hover:bg-[#00f2ff]/5 group-hover:border-[#00f2ff]/30"></div>
                <div className="relative h-full p-12 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {service.icon}
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-white rounded-full text-black">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-4xl font-black uppercase tracking-tight leading-none group-hover:text-[#00f2ff] transition-colors">{service.title}</h3>
                    <p className="text-white/30 text-lg leading-relaxed font-medium">
                      {service.description}
                    </p>
                    <div className="pt-8 border-t border-white/5 flex items-center space-x-4 opacity-40 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 rounded-full bg-[#00f2ff]"></div>
                      <span className="text-[10px] font-black uppercase tracking-widest">Protocol Active</span>
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
