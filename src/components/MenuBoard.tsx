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
      className={`rounded-[20px] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-800 ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-20 scale-90"
      } hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(233,30,99,0.4)] group`}
      style={{ background: gradient }}
    >
      <div
        className="absolute -inset-[2px] rounded-[20px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
        style={{
          background: "linear-gradient(45deg, #e91e63, #9575cd, #e91e63)",
          backgroundSize: "400% 400%",
          animation: "gradient-shift 3s ease infinite",
        }}
      />
      
      {/* Sparkle effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-[sparkle_1s_ease-in-out_infinite]" />
        <div className="absolute top-8 right-12 w-1.5 h-1.5 bg-white rounded-full animate-[sparkle_1s_ease-in-out_0.3s_infinite]" />
        <div className="absolute top-12 right-8 w-1 h-1 bg-white rounded-full animate-[sparkle_1s_ease-in-out_0.6s_infinite]" />
      </div>
      <h3 className="text-3xl font-black text-center mb-6 uppercase tracking-wider text-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-300">
        {title}
      </h3>
      
      <style>{`
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => onItemClick(item.key)}
            className="relative flex justify-between items-center p-3 border-b border-white/20 rounded-lg cursor-pointer transition-all duration-300 hover:pl-6 hover:bg-white/10 hover:border-white/60 hover:scale-[1.02] group/item"
          >
            <span className="absolute -left-7 opacity-0 transition-all duration-300 group-hover/item:left-1 group-hover/item:opacity-100">
              👉
            </span>
            <span className="font-semibold uppercase text-sm">{item.name}</span>
            <span className="font-bold text-base">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuBoard;