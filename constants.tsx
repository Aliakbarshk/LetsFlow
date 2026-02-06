
import React from 'react';
import { 
  MessageSquare, 
  Layers, 
  Zap, 
  Bot, 
  Share2, 
  Clock 
} from 'lucide-react';
import { ServiceItem, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    title: "WhatsApp Bots",
    description: "Highly efficient, non-stop agents that interact with your customers around the clock, eliminating the need for manual customer service.",
    icon: <Bot className="w-6 h-6 text-[#25d366]" />
  },
  {
    title: "Automation Workflows",
    description: "Eliminate manual labor. We build end-to-end flows that handle bookings, payments, and complex data entry automatically.",
    icon: <Zap className="w-6 h-6 text-yellow-400" />
  },
  {
    title: "Bulk Query Systems",
    description: "Our core specialty: manage thousands of simultaneous conversations on WhatsApp without losing quality or speed.",
    icon: <Layers className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Scale Engineering",
    description: "Scalable official API solutions that turn your communication channel into a high-performance growth engine.",
    icon: <MessageSquare className="w-6 h-6 text-[#25d366]" />
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is this official WhatsApp API?",
    answer: "Yes, we exclusively build on the official Meta WhatsApp Business API for security, scalability, and absolute compliance."
  },
  {
    question: "Can it manage bulk messages and queries?",
    answer: "Absolutely. Our systems are specifically engineered to handle massive volumes of simultaneous queries, ensuring zero manual labor for your team."
  },
  {
    question: "What are the benefits of removing manual labor?",
    answer: "By automating repetitive communication, you reduce costs, eliminate human error, and allow your brand to scale 24/7 without being limited by headcount."
  }
];
