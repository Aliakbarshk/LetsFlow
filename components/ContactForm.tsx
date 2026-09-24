import React, { useState } from "react";
import { ArrowRight, Terminal, Phone, Mail, Copy, Check, ArrowUpRight, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [showChannelModal, setShowChannelModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleInitiateClick = (e: React.FormEvent) => {
    e.preventDefault();
    setShowChannelModal(true);
  };

  const handleOpenChannel = (channel: 'whatsapp' | 'email') => {
    // Send background submission to backend if there's any data
    if (formData.name || formData.email || formData.message) {
      fetch("https://letsflowbackend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => {});
    }

    if (channel === 'whatsapp') {
      const waText = encodeURIComponent(
        `Hello Let's Flow team, I would like to initiate an automation project.\n` +
        `Name: ${formData.name || 'Prospective Client'}\n` +
        `Email: ${formData.email || 'Not provided'}\n` +
        `Objective: ${formData.message || 'Custom WhatsApp / workflow automation'}`
      );
      window.open(`https://wa.me/918482934502?text=${waText}`, '_blank');
    } else if (channel === 'email') {
      const subject = encodeURIComponent(`Project Initiation - ${formData.name || 'New Client'}`);
      const body = encodeURIComponent(
        `Hello Let's Flow Team,\n\n` +
        `Name: ${formData.name || 'Not provided'}\n` +
        `Email: ${formData.email || 'Not provided'}\n` +
        `Objective: ${formData.message || 'Custom WhatsApp / workflow automation'}\n\n` +
        `Looking forward to hearing from you.`
      );
      window.open(`mailto:letsflowmanagement@gmail.com?subject=${subject}&body=${body}`, '_blank');
    }

    setShowChannelModal(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleDirectServerSubmit = async () => {
    if (loading) return;
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch(
        "https://letsflowbackend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setErrorMessage(null);
        setFormData({ name: "", email: "", message: "" });
        setShowChannelModal(false);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setErrorMessage("Server not responding. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-40 relative bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <span className="text-[#00f2ff] text-xs font-black tracking-[0.4em] uppercase block mb-4">Start Your Automation</span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight mb-8">
            Tell us what your team does manually. <br />
            <span className="text-[#00f2ff]">We'll map what can be automated.</span>
          </h2>

          <p className="text-white/50 text-base sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Built for healthcare organizations and flexible for every business. Connect directly via WhatsApp, phone, or email, or share your workflow below to explore an automated solution.
          </p>
        </ScrollReveal>

        {/* DIRECT CHANNELS CARDS */}
        <ScrollReveal delay={150} className="mb-20">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Phone & WhatsApp Card */}
            <div className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#25d366]/50 hover:bg-[#25d366]/5 transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#25d366] group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => copyToClipboard('+91 84829 34502', 'phone')}
                      className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors cursor-pointer"
                      title="Copy Phone Number"
                    >
                      {copiedField === 'phone' ? (
                        <Check size={16} className="text-[#25d366]" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                    <a
                      href="https://wa.me/918482934502?text=Hello%20Let's%20Flow%20team,%20I%20am%20interested%20in%20your%20WhatsApp%20automation%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-[#25d366]/20 hover:bg-[#25d366] text-[#25d366] hover:text-black transition-all cursor-pointer flex items-center justify-center"
                      title="Open WhatsApp Chat"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>

                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#25d366] block mb-2">
                  Direct Phone & WhatsApp
                </span>
                
                <a
                  href="tel:+918482934502"
                  className="text-2xl md:text-3xl font-black text-white group-hover:text-[#25d366] transition-colors tracking-tight block"
                >
                  +91 84829 34502
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
                <span>Immediate direct response</span>
                <span className="text-[#25d366] font-bold uppercase tracking-widest text-[10px]">Active</span>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#00f2ff]/50 hover:bg-[#00f2ff]/5 transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00f2ff] group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => copyToClipboard('letsflowmanagement@gmail.com', 'email')}
                      className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors cursor-pointer"
                      title="Copy Email Address"
                    >
                      {copiedField === 'email' ? (
                        <Check size={16} className="text-[#00f2ff]" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                    <a
                      href="mailto:letsflowmanagement@gmail.com?subject=Automation%20Inquiry%20-%20Let's%20Flow"
                      className="p-2.5 rounded-full bg-[#00f2ff]/20 hover:bg-[#00f2ff] text-[#00f2ff] hover:text-black transition-all cursor-pointer flex items-center justify-center"
                      title="Send Email"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>

                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00f2ff] block mb-2">
                  Management & Strategic Desk
                </span>
                
                <a
                  href="mailto:letsflowmanagement@gmail.com?subject=Automation%20Inquiry%20-%20Let's%20Flow"
                  className="text-lg md:text-2xl font-black text-white group-hover:text-[#00f2ff] transition-colors tracking-tight block break-all"
                >
                  letsflowmanagement@gmail.com
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
                <span>Official communications</span>
                <span className="text-[#00f2ff] font-bold uppercase tracking-widest text-[10px]">24/7 Monitored</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* SECTION DIVIDER */}
        <div className="relative flex items-center justify-center mb-20">
          <div className="border-t border-white/10 w-full"></div>
          <span className="bg-black px-6 text-[10px] uppercase font-black tracking-[0.4em] text-white/30 whitespace-nowrap">
            Or Dispatch Project Transmission
          </span>
          <div className="border-t border-white/10 w-full"></div>
        </div>

        {/* FORM */}
        <ScrollReveal delay={200}>
          <form onSubmit={handleInitiateClick} className="space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* NAME */}
              <div className="group border-b border-white/10 focus-within:border-[#00f2ff] transition-colors pb-4">
                <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 mb-4 block group-focus-within:text-[#00f2ff]">
                  Identification
                </label>

                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent text-2xl font-bold focus:outline-none placeholder:text-white/5"
                  placeholder="Your Full Name"
                />
              </div>

              {/* EMAIL */}
              <div className="group border-b border-white/10 focus-within:border-[#00f2ff] transition-colors pb-4">
                <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 mb-4 block group-focus-within:text-[#00f2ff]">
                  Communication
                </label>

                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent text-2xl font-bold focus:outline-none placeholder:text-white/5"
                  placeholder="email@address.com"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="group border-b border-white/10 focus-within:border-[#00f2ff] transition-colors pb-4">
              <label className="text-[10px] uppercase font-black tracking-[0.4em] text-white/20 mb-4 block group-focus-within:text-[#00f2ff]">
                Objective
              </label>

              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent text-lg sm:text-xl font-medium focus:outline-none resize-none placeholder:text-white/20 text-white leading-relaxed"
                placeholder="Describe what your team currently does manually (e.g., patient appointment follow-ups, enquiry logging, WhatsApp lead routing, scheduled reminders)..."
              />
            </div>

            {/* BUTTON */}
            <div className="flex flex-col items-center pt-8">
              <button
                type="submit"
                className="group flex items-center space-x-6 text-white transition-all cursor-pointer"
              >
                <span className="text-3xl md:text-5xl font-black uppercase tracking-tighter group-hover:text-[#00f2ff] transition-colors">
                  Initiate Project
                </span>

                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00f2ff] group-hover:bg-[#00f2ff] group-hover:text-black transition-all">
                  <ArrowRight size={40} className="md:w-12 md:h-12 w-8 h-8" />
                </div>
              </button>

              {/* SUCCESS MESSAGE */}
              {submitted && (
                <div className="mt-12 flex items-center space-x-3 text-[#00f2ff] animate-pulse">
                  <Terminal size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                    Transmission Success. Standing by...
                  </span>
                </div>
              )}

              {/* ERROR MESSAGE */}
              {errorMessage && (
                <div className="mt-8 flex items-center space-x-3 text-rose-400 bg-rose-500/10 border border-rose-500/20 px-6 py-3 rounded-full">
                  <Terminal size={16} />
                  <span className="text-xs font-bold tracking-wider">
                    {errorMessage}
                  </span>
                </div>
              )}
            </div>
          </form>
        </ScrollReveal>
      </div>

      {/* POPUP MODAL: CONTACT THROUGH WHATSAPP OR EMAIL */}
      {showChannelModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-lg bg-[#0e161a] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl text-center space-y-8 animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowChannelModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors cursor-pointer"
              title="Close"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="space-y-3">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00f2ff]">
                Initiate Project
              </span>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                Choose Contact Medium
              </h3>
              <p className="text-white/40 text-sm max-w-sm mx-auto leading-relaxed">
                How would you like to connect with the Let's Flow team?
              </p>
            </div>

            {/* Channels */}
            <div className="space-y-4">
              {/* WhatsApp Button */}
              <button
                type="button"
                onClick={() => handleOpenChannel('whatsapp')}
                className="w-full p-5 rounded-2xl bg-[#25d366]/10 hover:bg-[#25d366] border border-[#25d366]/30 text-white hover:text-black transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25d366]/20 group-hover:bg-black/20 flex items-center justify-center text-[#25d366] group-hover:text-black transition-colors">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-base font-black uppercase tracking-wider">
                      Contact through WhatsApp
                    </h4>
                    <p className="text-xs text-white/60 group-hover:text-black/80 font-medium">
                      +91 84829 34502 • Instant direct chat
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {/* Email Button */}
              <button
                type="button"
                onClick={() => handleOpenChannel('email')}
                className="w-full p-5 rounded-2xl bg-[#00f2ff]/10 hover:bg-[#00f2ff] border border-[#00f2ff]/30 text-white hover:text-black transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00f2ff]/20 group-hover:bg-black/20 flex items-center justify-center text-[#00f2ff] group-hover:text-black transition-colors">
                    <Mail size={24} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-base font-black uppercase tracking-wider">
                      Contact through Email
                    </h4>
                    <p className="text-xs text-white/60 group-hover:text-black/80 font-medium">
                      letsflowmanagement@gmail.com
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Direct Server Option */}
            <div className="pt-2 border-t border-white/5 flex flex-col items-center">
              <button
                type="button"
                onClick={handleDirectServerSubmit}
                disabled={loading}
                className="text-[11px] font-bold text-white/40 hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
              >
                {loading ? "Transmitting..." : "Or Dispatch Direct Server Transmission"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
