
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhatsAppDemo from '../components/WhatsAppDemo';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <Services />
      <WhatsAppDemo />
      <ContactForm />
    </div>
  );
};

export default Home;
