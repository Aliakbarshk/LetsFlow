
import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCheck, Paperclip, Search, MoreVertical, Smile, Phone, Video, ChevronLeft, Zap, Info } from 'lucide-react';
import { Message } from '../types';
import ScrollReveal from './ScrollReveal';

interface PreRecordedScenario {
  id: string;
  label: string;
  icon: string;
  userText: string;
  botResponse: string;
}

const SCENARIOS: PreRecordedScenario[] = [
  {
    id: 'customer_support',
    label: 'Customer Support Bot',
    icon: '🎧',
    userText: 'I have an issue with my recent delivery.',
    botResponse: 'I am sorry to hear that! 📦 I have located your order #LF-992. Our logistics team is resolving it right now. You will receive an update in 15 mins. Anything else?'
  },
  {
    id: 'coffee_shop',
    label: 'Coffee Shop Parody',
    icon: '☕',
    userText: 'Can I get a large Iced Latte with extra foam?',
    botResponse: 'Coming right up! 🧊 One Large Iced Latte. Your total is $5.50. You can pick it up at the counter in 5 minutes!'
  },
  {
    id: 'bulk_query',
    label: 'Bulk Query Manager',
    userText: 'Can you handle 10,000 queries at once?',
    icon: '📊',
    botResponse: 'Absolutely. 🚀 Our architecture manages millions of bulk queries simultaneously using the official WhatsApp API, ensuring zero manual labor for your team.'
  },
  {
    id: 'demo_book',
    label: 'Strategy Booking',
    icon: '📅',
    userText: 'I want to schedule a strategy call.',
    botResponse: 'Great choice! 🗓️ Our next availability is tomorrow at 10:00 AM. Would you like to confirm this slot?'
  }
];

const WhatsAppDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: "Hello! Select a pre-recorded scenario on the left to see our bots in action. 🚀",
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleScenarioClick = (scenario: PreRecordedScenario) => {
    if (isTyping) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      text: scenario.userText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    
    // Simulate typing
    setIsTyping(true);
    
    // Add bot response
    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: scenario.botResponse,
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <section id="demo" className="py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <ScrollReveal className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Demo</h2>
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <Info size={14} className="text-[#25d366]" />
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">
              This is a virtually created environment, not actual WhatsApp
            </p>
          </div>
        </ScrollReveal>

        <div className="w-full grid lg:grid-cols-12 bg-[#111b21] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl h-[700px]">
          
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
                  className="w-full p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl flex items-center space-x-4 transition-all text-left group disabled:opacity-50"
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
              
              <div className="mt-8 p-6 bg-black/20 rounded-2xl border border-dashed border-white/10 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/10">Parody Lab</p>
                <p className="text-[9px] text-white/20 mt-2 italic">We can create custom parodies for any industry to showcase flow logic.</p>
              </div>
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
                  <h3 className="text-sm font-bold">Let's Flow Bot Agent</h3>
                  <span className="text-[10px] text-[#25d366] font-bold tracking-widest">ONLINE</span>
                </div>
              </div>
              <div className="flex space-x-6 text-white/60">
                <Video size={20} />
                <Phone size={20} />
                <MoreVertical size={20} />
              </div>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="relative z-10 flex-grow overflow-y-auto p-6 space-y-3 custom-scrollbar">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3 rounded-xl text-sm shadow-md relative ${
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

            {/* WA Footer */}
            <div className="relative z-10 bg-[#202c33] p-4 flex items-center space-x-4">
              <Smile size={24} className="text-white/40" />
              <Paperclip size={24} className="text-white/40" />
              <div className="flex-grow bg-[#2a3942] rounded-xl px-4 py-3 text-sm text-white/20">
                Tap a scenario to start a chat...
              </div>
              <div className="w-12 h-12 bg-[#25d366] rounded-full flex items-center justify-center text-black shadow-lg">
                <Send size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppDemo;
