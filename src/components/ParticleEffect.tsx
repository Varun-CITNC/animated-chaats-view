import { useEffect } from "react";

export const ParticleEffect = () => {
  useEffect(() => {
    const createParticle = (x: number, y: number) => {
      const particles = ['✨', '⭐', '💫', '🌟', '💥'];
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.textContent = particles[Math.floor(Math.random() * particles.length)];
      particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        font-size: 2rem;
        pointer-events: none;
        z-index: 9999;
        animation: floatParticle 3s ease-out forwards;
      `;
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 3000);
    };

    let clickCount = 0;
    const handleClick = (e: MouseEvent) => {
      clickCount++;
      if (clickCount % 3 === 0) {
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            createParticle(
              e.clientX + (Math.random() - 0.5) * 100,
              e.clientY + (Math.random() - 0.5) * 100
            );
          }, i * 100);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <style>{`
      @keyframes floatParticle {
        0% {
          opacity: 1;
          transform: translateY(0) rotate(0deg);
        }
        100% {
          opacity: 0;
          transform: translateY(-150px) rotate(360deg);
        }
      }
    `}</style>
  );
};

export default ParticleEffect;