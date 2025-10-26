import { useEffect, useRef, useState } from "react";

interface MenuItem {
  name: string;
  price: string;
  key: string;
}

interface MenuBoardProps {
  title: string;
  items: MenuItem[];
  gradient: string;
  onItemClick: (key: string) => void;
}

const MenuBoard = ({ title, items, gradient, onItemClick }: MenuBoardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`rounded-[20px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-1000 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 rotate-0"
          : "opacity-0 translate-y-32 scale-75 rotate-3"
      } hover:-translate-y-6 hover:scale-[1.05] hover:rotate-1 hover:shadow-[0_25px_60px_rgba(233,30,99,0.5)] group`}
      style={{ 
        background: gradient,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <div
        className="absolute -inset-[3px] rounded-[20px] -z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"
        style={{
          background: "linear-gradient(45deg, #e91e63, #9575cd, #4fc3f7, #e91e63)",
          backgroundSize: "400% 400%",
          animation: "gradient-shift 4s ease infinite",
        }}
      />
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-white/10 animate-[ripple_2s_ease-out_infinite]" />
      </div>
      
      {/* Sparkle effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-[sparkle_1s_ease-in-out_infinite]" />
        <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-white rounded-full animate-[sparkle_1s_ease-in-out_0.3s_infinite]" />
        <div className="absolute top-12 right-8 w-1 h-1 bg-white rounded-full animate-[sparkle_1s_ease-in-out_0.6s_infinite]" />
      </div>
      <h3 className="relative text-3xl font-black text-center mb-6 uppercase tracking-wider text-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] group-hover:scale-110 group-hover:tracking-[0.3em] transition-all duration-500">
        {title}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-white/50 group-hover:w-3/4 transition-all duration-500 rounded-full" />
      </h3>
      
      <style>{`
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.5;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => onItemClick(item.key)}
            className={`relative flex justify-between items-center p-3 border-b border-white/20 rounded-lg cursor-pointer transition-all duration-700 hover:pl-7 hover:bg-white/15 hover:border-white/70 hover:scale-[1.03] hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] group/item ${
              isVisible ? "opacity-100 translate-x-0 rotate-0" : "opacity-0 -translate-x-16 -rotate-2"
            }`}
            style={{
              transitionDelay: isVisible ? `${index * 80 + 200}ms` : "0ms",
              transformStyle: 'preserve-3d'
            }}
          >
            <span className="absolute -left-8 opacity-0 transition-all duration-400 group-hover/item:left-1 group-hover/item:opacity-100 text-xl group-hover/item:scale-125 group-hover/item:rotate-12">
              👉
            </span>
            <span className="font-semibold uppercase text-sm group-hover/item:text-white group-hover/item:tracking-wider transition-all duration-400 relative z-10">{item.name}</span>
            <span className="font-bold text-base group-hover/item:scale-125 group-hover/item:text-white transition-all duration-400 relative z-10 group-hover/item:animate-pulse">{item.price}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/item:translate-x-full transition-transform duration-1000 pointer-events-none rounded-lg" />
            <div className="absolute inset-0 bg-white/5 scale-95 opacity-0 group-hover/item:scale-100 group-hover/item:opacity-100 transition-all duration-400 rounded-lg -z-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBoard;