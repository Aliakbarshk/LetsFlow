import React, { useState } from 'react';
import { 
  Workflow, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Plus, 
  Layers, 
  MessageSquare, 
  Users, 
  CalendarClock, 
  Bell, 
  Database,
  ArrowDown
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface WorkflowExample {
  title: string;
  category: string;
  steps: {
    label: string;
    sub: string;
    tag: string;
  }[];
}

const WORKFLOW_EXAMPLES: WorkflowExample[] = [
  {
    title: "Healthcare Patient Enquiry & Intake Flow",
    category: "Hospital Example",
    steps: [
      { label: "Enquiry Received", sub: "Via WhatsApp / Web Form", tag: "Trigger" },
      { label: "Data Organized", sub: "Department & Contact Logged", tag: "Intake" },
      { label: "Duty Staff Alerted", sub: "Instant Reception / OPD Alert", tag: "Routing" },
      { label: "WhatsApp Confirmation", sub: "Timings & Visit Prep Sent", tag: "Direct Comm" },
      { label: "Timed Reminder", sub: "Pre-Consultation SMS/WA Alert", tag: "Scheduler" }
    ]
  },
  {
    title: "Omnichannel Lead Qualification Flow",
    category: "General Business Example",
    steps: [
      { label: "New Lead Inbound", sub: "Meta Ads / Google / Website", tag: "Capture" },
      { label: "Instant Qualification", sub: "WhatsApp Bot Interactive Prompts", tag: "Filter" },
      { label: "Lead Assigned & Synced", sub: "CRM / Database / Team Sheet", tag: "Routing" },
      { label: "Automated Follow-Up", sub: "Day 1 & Day 3 Follow-Up Triggers", tag: "Scheduler" },
      { label: "Status Tracked", sub: "Pipeline Stage Updated", tag: "Management" }
    ]
  },
  {
    title: "Consultation & Booking Flow",
    category: "Booking Example",
    steps: [
      { label: "Booking Initiated", sub: "Client Requests Date / Time", tag: "Trigger" },
      { label: "Availability Checked", sub: "Slot Reserved in Calendar", tag: "Validation" },
      { label: "Confirmation Delivered", sub: "Official WhatsApp Message", tag: "Notification" },
      { label: "Staff Schedule Updated", sub: "Internal Calendar Synced", tag: "Internal Ops" },
      { label: "Post-Event Check-in", sub: "Automated Review / Follow-up", tag: "Retarget" }
    ]
  }
];

const MULTI_SYSTEM_MODULES = [
  { name: "Lead Management", icon: <Users className="w-4 h-4 text-[#00f2ff]" /> },
  { name: "WhatsApp Bot", icon: <MessageSquare className="w-4 h-4 text-[#25d366]" /> },
  { name: "Scheduled Messages", icon: <CalendarClock className="w-4 h-4 text-yellow-400" /> },
  { name: "Team Notifications", icon: <Bell className="w-4 h-4 text-purple-400" /> },
  { name: "Data Sync & Sheets", icon: <Database className="w-4 h-4 text-blue-400" /> },
  { name: "Follow-up Automation", icon: <Workflow className="w-4 h-4 text-emerald-400" /> },
];

const CustomAutomationSection: React.FC = () => {
  const [activeWorkflowIdx, setActiveWorkflowIdx] = useState(0);

  const scrollToContactWithPrompt = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const textarea = el.querySelector('textarea');
      if (textarea) {
        textarea.value = `Here is what my team currently does manually:\n1. \n2. \n3. \nCan you map an automation system for this?`;
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        textarea.focus();
      }
    }
  };

  const activeFlow = WORKFLOW_EXAMPLES[activeWorkflowIdx];

  return (
    <section id="custom-automation" className="py-36 bg-black relative border-t border-white/5">
      {/* Ambience */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#25d366]/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#25d366]/10 border border-[#25d366]/20 text-[#25d366] text-xs font-black uppercase tracking-widest">
              <Workflow className="w-4 h-4" />
              <span>Tailored Architecture</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none text-white">
              Your Workflow. <br />
              <span className="text-[#25d366]">Automated.</span>
            </h2>
            <p className="text-white/60 text-lg sm:text-xl font-medium pt-2 leading-relaxed">
              Have a workflow that doesn't fit a standard bot? We build the automation around your process.
            </p>
          </div>

          <div className="max-w-md space-y-4 text-white/50 text-sm sm:text-base leading-relaxed">
            <p>
              You don’t have to force your business into rigid, one-size-fits-all software. 
              Explain what your team currently handles manually—from lead intake to team alerts and client reminders—and we engineer the custom automation pipeline to carry that workload.
            </p>
            <p className="text-xs text-white/40 italic">
              *Illustrative examples shown below. Every solution is custom-architected based on client operational requirements and technical feasibility.
            </p>
          </div>
        </ScrollReveal>

        {/* Multiple Systems Working Together (Partner positioning) */}
        <ScrollReveal delay={150} className="mb-20">
          <div className="p-8 sm:p-10 rounded-[2rem] bg-white/[0.02] border border-white/10 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 block mb-2">
                  Unified System Architecture
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                  Multiple Automations Working as One
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-white/50 max-w-md">
                Let's Flow is an automation engineering partner. We don't just deploy a disconnected chatbot; we unite all your operational touchpoints into a unified stack.
              </p>
            </div>

            {/* Modular Chips interconnected */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {MULTI_SYSTEM_MODULES.map((mod, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-2xl bg-black/60 border border-white/10 flex flex-col items-center justify-center text-center space-y-2 hover:border-[#25d366]/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
                    {mod.icon}
                  </div>
                  <span className="text-xs font-bold text-white/80">{mod.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-2 text-center">
              <span className="text-xs text-white/30 font-mono">
                [ Lead Management ] + [ WhatsApp Bot ] + [ Scheduled Messages ] + [ Notifications ] + [ Database Sync ]
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Workflow Pipeline Demonstrator */}
        <ScrollReveal delay={250} className="mb-20">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/40 mb-1">
                  Step-By-Step Workflow Logic
                </h3>
                <p className="text-lg font-bold text-white">
                  See how manual operations convert into automated triggers
                </p>
              </div>

              {/* Selector Tabs */}
              <div className="flex flex-wrap gap-2">
                {WORKFLOW_EXAMPLES.map((wf, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveWorkflowIdx(idx)}
                    className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                      activeWorkflowIdx === idx 
                        ? 'bg-[#25d366] text-black shadow-[0_0_20px_rgba(37,211,102,0.3)]' 
                        : 'bg-white/5 hover:bg-white/10 text-white/60'
                    }`}
                  >
                    {wf.category}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Workflow Pipeline Visual */}
            <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#090d10] border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-[#25d366] animate-pulse"></div>
                  <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                    {activeFlow.title}
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-white/40 hidden sm:inline-block">
                  FLOW DIAGRAM // {activeFlow.steps.length} STAGES
                </span>
              </div>

              {/* Steps Linear Flow */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                {activeFlow.steps.map((step, idx) => (
                  <div key={idx} className="relative flex flex-col">
                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#25d366]/30 flex flex-col justify-between h-full min-h-[160px] group transition-all">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-mono font-bold text-white/30">0{idx + 1}</span>
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-[#25d366]">
                            {step.tag}
                          </span>
                        </div>
                        <h5 className="text-base font-black uppercase text-white mb-1.5 leading-snug group-hover:text-[#25d366] transition-colors">
                          {step.label}
                        </h5>
                        <p className="text-xs text-white/40 leading-relaxed">
                          {step.sub}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Indicator for Desktop */}
                    {idx < activeFlow.steps.length - 1 && (
                      <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-[#111b21] border border-white/20 items-center justify-center text-white/40">
                        <ArrowRight size={12} />
                      </div>
                    )}
                    {/* Arrow Indicator for Mobile */}
                    {idx < activeFlow.steps.length - 1 && (
                      <div className="flex md:hidden justify-center py-2 text-white/30">
                        <ArrowDown size={14} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bottom CTA within custom automation */}
              <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <p className="text-sm font-bold text-white">Have a unique manual routine at your organization?</p>
                  <p className="text-xs text-white/40">We map the exact actions into webhooks, APIs, and WhatsApp triggers.</p>
                </div>
                <button
                  type="button"
                  onClick={scrollToContactWithPrompt}
                  className="px-8 py-3.5 bg-[#25d366] hover:bg-[#20ba5a] text-black font-black text-xs uppercase tracking-widest rounded-full transition-all cursor-pointer shadow-[0_0_20px_rgba(37,211,102,0.2)] flex items-center space-x-2"
                >
                  <span>Map Your Custom Workflow</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default CustomAutomationSection;
