
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-40 pb-20 max-w-4xl mx-auto px-6 animate-in fade-in duration-700">
      <h1 className="text-5xl font-bold mb-12">Terms & Conditions</h1>
      
      <div className="prose prose-invert max-w-none space-y-8 text-gray-400">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
          <p>
            Welcome to Let's Flow. These terms and conditions outline the rules and regulations for the use of Let's Flow's Website and Services. By accessing this website we assume you accept these terms and conditions. Do not continue to use Let's Flow if you do not agree to take all of the terms and conditions stated on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Service Usage</h2>
          <p>
            Let's Flow provides automation and AI agent development services. Use of the WhatsApp API through our platform must comply with Meta's Official WhatsApp Business Policy. We are not liable for account suspensions resulting from user-initiated policy violations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
          <p>
            Unless otherwise stated, Let's Flow and/or its licensors own the intellectual property rights for all material on Let's Flow. All intellectual property rights are reserved. You may access this from Let's Flow for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Data Privacy</h2>
          <p>
            We take data privacy seriously. Any data processed through our AI agents or WhatsApp bots is handled according to our Privacy Policy and relevant international data protection laws (GDPR/CCPA).
          </p>
        </section>
        
        <div className="p-8 glass rounded-3xl border-emerald-500/20 bg-emerald-500/5 text-sm">
          <strong>Note:</strong> These terms are subject to change. We recommend checking this page regularly for updates.
        </div>
      </div>
    </div>
  );
};

export default Terms;
