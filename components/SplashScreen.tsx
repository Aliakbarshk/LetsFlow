
import React, { useEffect, useState } from 'react';
import { Hexagon, Loader2 } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 15;
      });
    }, 150);

    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 1000);
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[100] bg-black flex items-center justify-center ${isExiting ? 'splash-exit' : ''}`}>
      <div className="flex flex-col items-center space-y-12 w-full max-w-xs">
        <div className="relative group">
          <div className="absolute inset-0 bg-[#00f2ff]/30 blur-[60px] animate-pulse"></div>
          <Hexagon size={80} className="text-white animate-spin-slow relative z-10" style={{ animationDuration: '10s' }} />
          <div className="absolute inset-0 flex items-center justify-center font-black text-2xl z-10">F</div>
        </div>
        
        <div className="w-full space-y-4 text-center">
          <div className="flex space-x-1 justify-center">
            {"INITIALIZING FLOW".split("").map((char, i) => (
              <span 
                key={i} 
                className="text-[10px] font-black tracking-widest text-white/40 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </div>
          
          <div className="h-[2px] w-full bg-white/5 relative overflow-hidden rounded-full">
            <div 
              className="absolute inset-y-0 left-0 bg-[#00f2ff] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between items-center text-[8px] font-black uppercase tracking-[0.4em] text-white/20">
            <span>Protocol v4.0.2</span>
            <span>{Math.min(100, Math.floor(progress))}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
