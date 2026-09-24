import React from 'react';
import { 
  Building2, 
  CalendarClock, 
  Users, 
  MessageSquare, 
  BellRing, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Database,
  Share2
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const REPETITIVE_WORKFLOWS = [
  {
    title: "Incoming Lead & Patient Enquiries",
    desc: "Instantly capture, acknowledge, and qualify patient or customer enquiries across WhatsApp and web portals.",
    icon: <Users className="w-5 h-5 text-[#00f2ff]" />
  },
  {
    title: "Appointment Confirmations & Reminders",
    desc: "Send automated booking acknowledgments, timed pre-visit reminders, and rescheduling instructions.",
    icon: <CalendarClock className="w-5 h-5 text-[#25d366]" />
  },
  {
    title: "Routine OPD & Department Queries",
    desc: "Handle frequent questions on doctor timings, OPD schedules, department directions, and test report availability.",
    icon: <MessageSquare className="w-5 h-5 text-emerald-400" />
  },
  {
    title: "Structured Follow-up Workflows",
    desc: "Trigger timely post-consultation check-in messages and follow-up reminders automatically.",
    icon: <BellRing className="w-5 h-5 text-yellow-400" />
  },
  {
    title: "Enquiry Data & Staff Routing",
    desc: "Log prospect details into secure databases/spreadsheets and immediately alert front-desk or department coordinators.",
    icon: <Database className="w-5 h-5 text-blue-400" />
  },
  {
    title: "Cross-Department Communication",
    desc: "Route requests seamlessly between reception, diagnostic coordination, and patient relationship teams.",
    icon: <Share2 className="w-5 h-5 text-purple-400" />
  }
];

const STACK_BADGES = [
  "Official Meta WhatsApp API",
  "Webhooks & Event Triggers",
  "Databases & Google Sheets",
  "Custom Schedulers",
  "Rest APIs & Webhook Routing"
];

const HealthcareSpecialization: React.FC = () => {
  const scrollToContact = (context?: string) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (context) {
        const textarea = el.querySelector('textarea');
        if (textarea) {
          textarea.value = `Healthcare Automation Requirement: ${context}\n`;
          textarea.dispatchEvent(new Event('input', { bubbles: true }));
          textarea.focus();
        }
      }
    }
  };

  return (
    <section id="healthcare" className="py-32 bg-black relative border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#00f2ff]/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/20 text-[#00f2ff] text-xs font-black uppercase tracking-widest">
              <Building2 className="w-4 h-4" />
              <span>Primary Specialization</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none text-white">
              Built for <br />
              <span className="text-[#00f2ff]">Healthcare.</span>
            </h2>
            <p className="text-white/60 text-lg sm:text-xl font-medium pt-2 leading-relaxed">
              Flexible for Every Business.
            </p>
          </div>

          <div className="max-w-md space-y-4 text-white/50 text-sm sm:text-base leading-relaxed">
            <p>
              Hospitals and healthcare organizations operate around repetitive, high-touch administrative tasks. 
              Let's Flow designs reliable automation systems for non-clinical communication, patient enquiry routing, and administrative follow-ups.
            </p>
            {/* Non-clinical compliance badge */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-white/40 leading-snug">
                <strong className="text-white/70 block mb-0.5">Strictly Operational & Administrative</strong>
                Our systems streamline communication workflows and lead logistics. We do not provide clinical advice, medical diagnoses, or replace healthcare staff.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Repetitive Workflows Grid */}
        <div className="mb-16">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">
              Common Hospital Workflows We Automate
            </h3>
            <span className="text-[11px] text-[#00f2ff] font-mono">01 // OPERATIONAL MODULES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REPETITIVE_WORKFLOWS.map((flow, idx) => (
              <ScrollReveal 
                key={idx} 
                delay={idx * 100}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#00f2ff]/40 hover:bg-[#00f2ff]/[0.02] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {flow.icon}
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-[#00f2ff] transition-colors">
                    {flow.title}
                  </h4>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {flow.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/30">Automated Pipeline</span>
                  <button 
                    type="button"
                    onClick={() => scrollToContact(flow.title)}
                    className="text-xs text-[#00f2ff] hover:text-white font-bold flex items-center space-x-1 cursor-pointer transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Tech Backbone & Dual Positioning Callout */}
        <ScrollReveal delay={300}>
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#25d366]">How We Build It</span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  Engineered with Enterprise-Grade Infrastructure
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  We connect WhatsApp Business APIs, webhooks, databases, schedulers, and internal software into a cohesive pipeline tailored to your institution’s daily operating routine.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {STACK_BADGES.map((badge, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 font-mono">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-white/10 space-y-4">
                <div className="flex items-center space-x-2 text-[#00f2ff]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-xs font-black uppercase tracking-widest">Not Just for Hospitals</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  While healthcare is our core specialty, the exact same high-reliability systems powers lead management, WhatsApp bots, and custom workflow automations for retail, education, and service enterprises.
                </p>
                <button
                  type="button"
                  onClick={() => scrollToContact("Custom Business Automation")}
                  className="w-full py-3 px-4 bg-white/10 hover:bg-[#00f2ff] hover:text-black text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all cursor-pointer text-center"
                >
                  Discuss Your Business Workflow
                </button>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default HealthcareSpecialization;
