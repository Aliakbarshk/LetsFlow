
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }
      
      if (bubbleRef.current) {
        // Use requestAnimationFrame for smoother following of the bubble
        requestAnimationFrame(() => {
          if (bubbleRef.current) {
            bubbleRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
          }
        });
      }
    };

    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div className={`pointer-events-none hidden md:block ${isActive ? 'cursor-active' : ''}`}>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={bubbleRef} className="cursor-bubble transition-transform duration-300 ease-out" />
    </div>
  );
};

export default CustomCursor;
