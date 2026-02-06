
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import Terms from './pages/Terms';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <div className="flex flex-col min-h-screen selection:bg-emerald-500 selection:text-black">
        <CustomCursor />
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
        
        {!showSplash && (
          <div className="flex flex-col min-h-screen animate-in fade-in duration-1000">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </main>
            <Footer />
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
