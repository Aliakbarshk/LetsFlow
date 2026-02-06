
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-40 pb-20 max-w-3xl mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <h1 className="text-5xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
      <p className="text-gray-400 text-center mb-16">
        Everything you need to know about starting your automation journey with Let's Flow.
      </p>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div key={idx} className="glass rounded-3xl border-white/5 overflow-hidden">
            <button 
              className="w-full p-8 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="font-bold text-lg">{faq.question}</span>
              {openIndex === idx ? <ChevronUp className="text-emerald-400" /> : <ChevronDown className="text-gray-500" />}
            </button>
            {openIndex === idx && (
              <div className="px-8 pb-8 text-gray-400 leading-relaxed animate-in slide-in-from-top-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
