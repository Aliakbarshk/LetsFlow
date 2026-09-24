
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import HealthcareSpecialization from '../components/HealthcareSpecialization';
import Services from '../components/Services';
import CustomAutomationSection from '../components/CustomAutomationSection';
import WhatsAppDemo from '../components/WhatsAppDemo';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Letsflow | Hospital & Business Automation Systems";
  }, []);

  useEffect(() => {
    const rawPath = location.pathname.replace('/', '').toLowerCase();
    const hash = location.hash ? location.hash.replace('#', '').toLowerCase() : '';
    const target = rawPath || hash;

    if (target && ['demo', 'services', 'contact', 'healthcare', 'custom-automation'].includes(target)) {
      const el = document.getElementById(target);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <HealthcareSpecialization />
      <Services />
      <CustomAutomationSection />
      <WhatsAppDemo />
      <ContactForm />
    </div>
  );
};

export default Home;
