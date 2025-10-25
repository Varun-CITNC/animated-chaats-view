import { useEffect } from "react";

export const CursorTrail = () => {
  useEffect(() => {
    let trailTimer: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(trailTimer);
      trailTimer = setTimeout(() => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `
          position: fixed;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(233, 30, 99, 0.6) 0%, transparent 70%);
          pointer-events: none;
          z-index: 9998;
          left: ${e.pageX}px;
          top: ${e.pageY}px;
          animation: cursorFade 0.6s ease-out forwards;
        `;
        document.body.appendChild(trail);
        setTimeout(() => trail.remove(), 600);
      }, 50);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(trailTimer);
    };
  }, []);

  return (
    <style>{`
      @keyframes cursorFade {
        to {
          opacity: 0;
          transform: scale(2);
        }
      }
    `}</style>
  );
};

export default CursorTrail;