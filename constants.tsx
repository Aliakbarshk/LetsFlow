
import React from 'react';
import { 
  MessageSquare, 
  Layers, 
  Zap, 
  Bot, 
  Clock,
  Building2,
  Users,
  Workflow,
  CalendarCheck2
} from 'lucide-react';
import { ServiceItem, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    title: "Hospital & Healthcare Automation",
    description: "Streamline patient enquiry routing, OPD timings, appointment reminders, and repetitive operational communication with zero clinical friction.",
    icon: <Building2 className="w-6 h-6 text-[#00f2ff]" />
  },
  {
    title: "Custom Lead Management Systems",
    description: "Capture enquiries across channels, automatically organize prospect data, notify duty staff, schedule follow-ups, and track lead status end-to-end.",
    icon: <Users className="w-6 h-6 text-[#25d366]" />
  },
  {
    title: "WhatsApp Bots & Conversational Flows",
    description: "Built on official Meta WhatsApp Business API. Deploy support bots, enquiry intake bots, booking assistants, and custom conversational workflows.",
    icon: <Bot className="w-6 h-6 text-emerald-400" />
  },
  {
    title: "Scheduled Messaging & Triggers",
    description: "Automate timed appointment confirmations, patient visit follow-ups, scheduled check-ins, and policy-compliant customer updates.",
    icon: <CalendarCheck2 className="w-6 h-6 text-yellow-400" />
  },
  {
    title: "Custom Workflow Automation",
    description: "Have a workflow that doesn't fit standard software? We map your existing manual operational tasks into tailored, automated systems.",
    icon: <Workflow className="w-6 h-6 text-purple-400" />
  },
  {
    title: "Data & Process Synchronization",
    description: "Unite WhatsApp channels, spreadsheets, internal databases, webhooks, and third-party APIs into synchronized, dependable pipelines.",
    icon: <Layers className="w-6 h-6 text-blue-400" />
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What makes Let's Flow specialized in hospital and healthcare automation?",
    answer: "Hospitals handle repetitive operational volume every day—managing patient enquiries, scheduling appointments, sending reminders, and organizing incoming leads. We engineer reliable operational systems using official WhatsApp API, webhooks, databases, and schedulers to eliminate manual bottlenecks, allowing administrative teams to operate smoothly."
  },
  {
    question: "Do you only work with hospitals, or do you automate other businesses too?",
    answer: "Healthcare is our primary specialization, but we are not limited to hospitals. We build custom lead management systems, official WhatsApp bots, scheduled messaging pipelines, and multi-step process automations for any business looking to streamline operational workflows."
  },
  {
    question: "Can multiple automation systems work together for one business?",
    answer: "Yes, this is our core approach. Rather than selling a standalone chatbot, we connect multiple modules together—such as Lead Management + WhatsApp Bot + Scheduled Messages + Staff Notifications + Database Sync—working as an integrated automation stack."
  },
  {
    question: "Does your automation replace hospital doctors or provide medical advice?",
    answer: "No. Our solutions strictly handle operational, communication, and administrative tasks—such as enquiry intake, clinic timing information, appointment scheduling reminders, and lead routing. We do not provide medical diagnosis, clinical advice, or replace medical staff."
  },
  {
    question: "Are your WhatsApp solutions built on official Meta infrastructure?",
    answer: "Yes. We build exclusively using official Meta WhatsApp Business API channels, adhering to security guidelines, template messaging regulations, and privacy standards."
  },
  {
    question: "How can I contact the Let's Flow team to discuss my workflow?",
    answer: "You can call or WhatsApp our desk at +91 84829 34502, email letsflowmanagement@gmail.com, or use the project initiation tool on this page to tell us what your team does manually."
  }
];
