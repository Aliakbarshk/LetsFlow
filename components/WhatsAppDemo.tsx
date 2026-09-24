
import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCheck, Paperclip, MoreVertical, Smile, Phone, Video, PhoneOff, Zap, Info, RotateCcw, FileText, X } from 'lucide-react';
import { Message } from '../types';
import ScrollReveal from './ScrollReveal';
import { getAIAgentResponse } from '../services/geminiService';

interface PreRecordedScenario {
  id: string;
  label: string;
  icon: string;
  userText: string;
  botResponse: string;
}

const SCENARIOS: PreRecordedScenario[] = [
  {
    id: 'hospital_enquiry',
    label: 'Hospital OPD & Timings Bot',
    icon: '🏥',
    userText: 'What are the OPD consultation hours for Cardiology this week?',
    botResponse: 'Cardiology OPD with Dr. Sharma is open Mon, Wed & Fri from 10:00 AM – 1:30 PM. Room #204, Block B. Would you like to request an appointment slot or front-desk callback?'
  },
  {
    id: 'appointment_reminder',
    label: 'Appointment & Rescheduling',
    icon: '📅',
    userText: 'Can I reschedule my check-up appointment from tomorrow?',
    botResponse: 'Certainly! Your current slot is tomorrow at 11:00 AM. Available alternate slots are Thursday at 2:00 PM or Friday at 11:30 AM. Reply 1 or 2 to confirm your new time.'
  },
  {
    id: 'lead_qualification',
    label: 'Lead Capture & Intake Bot',
    icon: '⚡',
    userText: 'We receive 200+ enquiries daily and need an automated workflow.',
    botResponse: 'We can automate that! 🚀 Our pipeline captures each lead, organizes details in your database, immediately alerts your sales team on WhatsApp, and schedules follow-up messages.'
  },
  {
    id: 'customer_support',
    label: 'Customer Support Bot',
    icon: '🎧',
    userText: 'I have an issue with my service account #LF-992.',
    botResponse: 'Ticket #LF-992 is logged. Our support desk has received your request and assigned it to a representative. Expected response time is within 15 minutes.'
  }
];

const PARODY_SCENARIOS = [
  {
    label: 'Hospital Lab Report Bot',
    icon: '🩺',
    userText: 'Is my blood pathology test report ready for download?',
    botResponse: 'Yes! Report for Patient ID #P-4821 is verified. We have sent the secure PDF download link to your registered mobile number.'
  },
  {
    label: 'Diagnostic Center Booking',
    icon: '🔬',
    userText: 'I need to schedule an ultrasound scan for Saturday morning.',
    botResponse: 'Available slots for Saturday Ultrasound are 9:30 AM and 11:00 AM at the West Wing Diagnostic Center. Fasting instructions will follow confirmation.'
  },
  {
    label: 'Corporate Lead Intake',
    icon: '🏢',
    userText: 'We need custom workflow automation between our web form and WhatsApp.',
    botResponse: 'Understood! We map your webhooks to our official WhatsApp API gateway, triggering automatic staff notifications and scheduled prospect follow-ups.'
  }
];

const QUICK_EMOJIS = ['🚀', '🤖', '⚡', '📦', '☕', '💡', '✅', '🔥'];

const WhatsAppDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: "Hello! Select a pre-recorded scenario on the left or type your own question below. 🚀",
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [activeCall, setActiveCall] = useState<'voice' | 'video' | null>(null);
  const [callDuration, setCallDuration] = useState(0);
  const [parodyIndex, setParodyIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (activeCall) {
      setCallDuration(0);
      timer = setInterval(() => {
        setCallDuration(d => d + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [activeCall]);

  const showToast = (text: string) => {
    setToastMessage(text);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleScenarioClick = (scenario: PreRecordedScenario) => {
    if (isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: scenario.userText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: scenario.botResponse,
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const handleParodyClick = () => {
    if (isTyping) return;
    const parody = PARODY_SCENARIOS[parodyIndex % PARODY_SCENARIOS.length];
    setParodyIndex(prev => prev + 1);

    const userMsg: Message = {
      id: Date.now().toString(),
      text: parody.userText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: parody.botResponse,
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1100);
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = inputText.trim();
    if (!text || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);
    setShowEmojis(false);

    try {
      const aiResponse = await getAIAgentResponse(text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch {
      const fallbackMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: "Letsflow is standing by. We deploy WhatsApp bots handling 10,000+ simultaneous queries with zero manual labor.",
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleAttachDocument = () => {
    if (isTyping) return;
    const attachMsg: Message = {
      id: Date.now().toString(),
      text: "📎 Attached: automation_workflow_blueprint.pdf (1.4 MB)",
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, attachMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: "Document received and analyzed! 📄 Found 4 workflow friction points ready for automated routing.",
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: Date.now().toString(),
        text: "Chat refreshed. Choose a scenario or send a question to test live responses. 🚀",
        sender: 'agent',
        timestamp: new Date()
      }
    ]);
    setShowMenu(false);
    showToast("Chat reset successfully");
  };

  const handleSimulateBulk = () => {
    setShowMenu(false);
    showToast("Simulating 10,000 bulk query workload...");
    setIsTyping(true);

    setTimeout(() => {
      const bulkMsg: Message = {
        id: Date.now().toString(),
        text: "⚡ Bulk Query Burst Handled: 10,240 queries routed in 0.8s with 99.98% delivery rate across 4 regional clusters.",
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, bulkMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <section id="demo" className="py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <ScrollReveal className="text-center mb-16 space-y-4">
          <span className="text-[#25d366] text-xs font-black tracking-[0.4em] uppercase">Interactive Automation Sandbox</span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">System Demo</h2>
          <p className="text-sm text-white/50 max-w-xl mx-auto">
            Test simulated conversational workflows below. These scenarios illustrate possible automation patterns across patient enquiries, scheduling, and lead routing.
          </p>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <Info size={14} className="text-[#25d366]" />
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
              This is a virtually created environment, not actual WhatsApp
            </p>
          </div>
        </ScrollReveal>

        {/* Global Toast for feedback */}
        {toastMessage && (
          <div className="fixed bottom-8 right-8 z-50 bg-[#202c33] border border-[#25d366]/40 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 text-xs font-bold animate-in fade-in slide-in-from-bottom-4">
            <div className="w-2 h-2 rounded-full bg-[#25d366] animate-ping" />
            <span>{toastMessage}</span>
          </div>
        )}

        <div className="w-full grid lg:grid-cols-12 bg-[#111b21] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl h-[720px] relative">
          
          {/* Active Call Simulator Overlay */}
          {activeCall && (
            <div className="absolute inset-0 z-40 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-10 animate-in fade-in zoom-in-95">
              <div className="flex flex-col items-center space-y-3 pt-6">
                <div className="w-24 h-24 rounded-full bg-[#202c33] border-2 border-[#25d366] flex items-center justify-center text-4xl shadow-xl">
                  {activeCall === 'video' ? '📹' : '🤖'}
                </div>
                <h3 className="text-xl font-black uppercase tracking-wider text-white">Letsflow Voice Agent</h3>
                <p className="text-xs text-[#25d366] font-bold tracking-widest uppercase animate-pulse">
                  {activeCall === 'video' ? 'Encrypted HD Video Session' : 'Voice Automation Protocol Connected'}
                </p>
                <div className="text-sm font-mono text-white/60 tracking-widest">
                  00:{callDuration < 10 ? `0${callDuration}` : callDuration}
                </div>
              </div>

              {/* Audio wave simulation bars */}
              <div className="flex items-center space-x-1.5 h-12">
                {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 60].map((h, i) => (
                  <div 
                    key={i} 
                    className="w-1.5 bg-[#25d366] rounded-full animate-pulse" 
                    style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} 
                  />
                ))}
              </div>

              <div className="pb-6">
                <button
                  type="button"
                  onClick={() => setActiveCall(null)}
                  className="px-8 py-4 bg-rose-600 hover:bg-rose-500 text-white rounded-full flex items-center space-x-3 text-xs font-black uppercase tracking-widest shadow-xl transition-transform hover:scale-105 cursor-pointer"
                >
                  <PhoneOff size={18} />
                  <span>End Call</span>
                </button>
              </div>
            </div>
          )}

          {/* Sidebar: Pre-recorded Messages */}
          <div className="lg:col-span-4 border-r border-white/5 bg-[#111b21] flex flex-col h-full">
            <div className="p-6 bg-[#202c33] flex justify-between items-center border-b border-black/20">
              <span className="text-sm font-black uppercase tracking-widest text-[#25d366]">Pre-recorded Scenarios</span>
              <Zap size={18} className="text-white/20" />
            </div>
            
            <div className="p-4 space-y-3 overflow-y-auto custom-scrollbar flex-grow">
              {SCENARIOS.map((s) => (
                <button 
                  key={s.id}
                  onClick={() => handleScenarioClick(s)}
                  disabled={isTyping}
                  className="w-full p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl flex items-center space-x-4 transition-all text-left group disabled:opacity-50 cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-[#202c33] flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-white/80 group-hover:text-[#25d366] transition-colors">{s.label}</h4>
                    <p className="text-[10px] text-white/20 truncate w-32 md:w-48 italic">"{s.userText}"</p>
                  </div>
                </button>
              ))}
              
              <button 
                type="button"
                onClick={handleParodyClick}
                disabled={isTyping}
                className="w-full mt-4 p-5 bg-black/30 hover:bg-black/50 rounded-2xl border border-dashed border-white/15 text-center transition-all group cursor-pointer disabled:opacity-50"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-sm">🧪</span>
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#00f2ff] group-hover:text-white transition-colors">
                    Click to Test Parody Lab
                  </p>
                </div>
                <p className="text-[9px] text-white/40 mt-1 italic">
                  Cycle through real-world parody bots (Real Estate, E-Comm, Clinics)
                </p>
              </button>
            </div>
          </div>

          {/* Main: WhatsApp UI Simulator */}
          <div className="lg:col-span-8 flex flex-col bg-[#0b141a] relative h-full">
            <div className="wa-bg-pattern"></div>
            
            {/* WA Header */}
            <div className="relative z-10 bg-[#202c33] p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6" alt="WA" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Letsflow Bot Agent</h3>
                  <span className="text-[10px] text-[#25d366] font-bold tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] animate-pulse"></span>
                    ONLINE
                  </span>
                </div>
              </div>

              {/* Action buttons in header */}
              <div className="flex items-center space-x-5 text-white/60 relative">
                <button 
                  type="button"
                  onClick={() => setActiveCall('video')}
                  className="hover:text-[#25d366] transition-colors cursor-pointer p-1.5 rounded-full hover:bg-white/5"
                  title="Simulate Video Agent"
                >
                  <Video size={20} />
                </button>
                <button 
                  type="button"
                  onClick={() => setActiveCall('voice')}
                  className="hover:text-[#25d366] transition-colors cursor-pointer p-1.5 rounded-full hover:bg-white/5"
                  title="Simulate Voice Call"
                >
                  <Phone size={20} />
                </button>
                
                <div className="relative">
                  <button 
                    type="button"
                    onClick={() => setShowMenu(!showMenu)}
                    className="hover:text-white transition-colors cursor-pointer p-1.5 rounded-full hover:bg-white/5"
                    title="Menu Options"
                  >
                    <MoreVertical size={20} />
                  </button>

                  {/* Dropdown Menu */}
                  {showMenu && (
                    <div className="absolute right-0 top-10 w-56 bg-[#202c33] border border-white/10 rounded-2xl p-2 shadow-2xl z-30 space-y-1 animate-in fade-in zoom-in-95">
                      <button 
                        type="button"
                        onClick={handleClearChat}
                        className="w-full px-4 py-2.5 text-left text-xs font-bold text-white/80 hover:bg-white/10 rounded-xl flex items-center space-x-2 cursor-pointer transition-colors"
                      >
                        <RotateCcw size={14} className="text-[#25d366]" />
                        <span>Clear Chat History</span>
                      </button>
                      <button 
                        type="button"
                        onClick={handleSimulateBulk}
                        className="w-full px-4 py-2.5 text-left text-xs font-bold text-white/80 hover:bg-white/10 rounded-xl flex items-center space-x-2 cursor-pointer transition-colors"
                      >
                        <Zap size={14} className="text-[#00f2ff]" />
                        <span>Test 10k Bulk Burst</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="relative z-10 flex-grow overflow-y-auto p-6 space-y-3 custom-scrollbar">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3.5 rounded-xl text-sm shadow-md relative leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-[#005c4b] text-white rounded-tr-none' 
                        : 'bg-[#202c33] text-white/90 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                    <div className="mt-1 flex items-center justify-end space-x-1 opacity-40 text-[9px] uppercase tracking-tighter">
                      <span>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      {msg.sender === 'user' && <CheckCheck size={12} className="text-[#34b7f1]" />}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#202c33] p-3 rounded-xl rounded-tl-none flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Emoji Bar */}
            {showEmojis && (
              <div className="relative z-20 bg-[#1c272e] border-t border-white/5 px-4 py-2 flex items-center space-x-3 overflow-x-auto">
                {QUICK_EMOJIS.map((emoji, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setInputText(prev => prev + emoji);
                      inputRef.current?.focus();
                    }}
                    className="text-xl hover:scale-125 transition-transform cursor-pointer p-1"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}

            {/* WA Footer Form */}
            <form 
              onSubmit={handleSendMessage}
              className="relative z-10 bg-[#202c33] p-4 flex items-center space-x-3"
            >
              <button
                type="button"
                onClick={() => setShowEmojis(!showEmojis)}
                className={`p-2 rounded-full transition-colors cursor-pointer ${showEmojis ? 'text-[#25d366] bg-white/10' : 'text-white/40 hover:text-white'}`}
                title="Emojis"
              >
                <Smile size={22} />
              </button>
              
              <button
                type="button"
                onClick={handleAttachDocument}
                disabled={isTyping}
                className="p-2 text-white/40 hover:text-white rounded-full transition-colors cursor-pointer disabled:opacity-40"
                title="Attach Document Simulation"
              >
                <Paperclip size={22} />
              </button>

              <div className="flex-grow bg-[#2a3942] rounded-xl px-4 py-2 flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message or test bot logic..."
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                  disabled={isTyping}
                />
              </div>

              <button
                type="submit"
                disabled={isTyping || !inputText.trim()}
                className="w-11 h-11 bg-[#25d366] disabled:bg-white/10 disabled:text-white/20 text-black rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer disabled:cursor-not-allowed"
                title="Send Message"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppDemo;
