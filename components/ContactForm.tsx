
import React, { useState } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-40 relative bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8">Ready to <br/><span className="text-[#00f2ff]">Flow?</span></h2>
          <p className="text-white/40 text-xl font-medium">Let's map your brand's automated future today.</p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="group border-b border-white/10 focus-within:border-[#00f2ff] transition-colors pb-4">
                <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 mb-4 block group-focus-within:text-[#00f2ff]">Identification</label>
                <input 
                  type="text" required value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent text-2xl font-bold focus:outline-none placeholder:text-white/5"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="group border-b border-white/10 focus-within:border-[#00f2ff] transition-colors pb-4">
                <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 mb-4 block group-focus-within:text-[#00f2ff]">Communication</label>
                <input 
                  type="email" required value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent text-2xl font-bold focus:outline-none placeholder:text-white/5"
                  placeholder="email@address.com"
                />
              </div>
            </div>
            
            <div className="group border-b border-white/10 focus-within:border-[#00f2ff] transition-colors pb-4">
              <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 mb-4 block group-focus-within:text-[#00f2ff]">Objective</label>
              <textarea 
                required rows={2} value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-transparent text-2xl font-bold focus:outline-none resize-none placeholder:text-white/5"
                placeholder="What objective are we automating?"
              ></textarea>
            </div>

            <div className="flex flex-col items-center pt-8">
              <button 
                type="submit" 
                className="group flex items-center space-x-6 text-white transition-all"
              >
                <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:text-[#00f2ff] transition-colors">Initiate Project</span>
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00f2ff] group-hover:bg-[#00f2ff] group-hover:text-black transition-all">
                  <ArrowRight size={40} className="md:w-12 md:h-12 w-8 h-8" />
                </div>
              </button>
              {submitted && (
                <div className="mt-12 flex items-center space-x-3 text-[#00f2ff] animate-pulse">
                  <Terminal size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Transmission Success. Standing by...</span>
                </div>
              )}
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactForm;
