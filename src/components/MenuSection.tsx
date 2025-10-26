import { useEffect, useRef, useState } from "react";
import MenuBoard from "./MenuBoard";
import { menuData } from "@/data/menuData";

interface MenuSectionProps {
  onItemClick: (key: string) => void;
}

const MenuSection = ({ onItemClick }: MenuSectionProps) => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const milkshakes = [
    { name: "Banana / Musk Melon / Chikoo", price: "₹40", key: "banana-shake" },
    { name: "Papaya", price: "₹40", key: "papaya-shake" },
    { name: "Mango Amonso", price: "₹40", key: "mango-shake" },
    { name: "Very Berry Strawberry", price: "₹50", key: "strawberry-shake" },
    { name: "Belgian Chocolate", price: "₹50", key: "chocolate-shake" },
    { name: "Resar Pista", price: "₹50", key: "pista-shake" },
    { name: "Vanilla", price: "₹50", key: "vanilla-shake" },
    { name: "Ferrero Rocher", price: "₹50", key: "ferrero-shake" },
    { name: "Butterscotch", price: "₹50", key: "butterscotch-shake" },
    { name: "Dry Fruits", price: "₹80", key: "dryfruits-shake" },
  ];

  const lassi = [
    { name: "Sweet Lassi", price: "₹50", key: "sweet-lassi" },
    { name: "Banana Cash Lassi", price: "₹60", key: "banana-lassi" },
    { name: "Mango Lassi", price: "₹60", key: "mango-lassi" },
    { name: "Chikoo Lassi", price: "₹60", key: "chikoo-lassi" },
    { name: "Saffron Lassi", price: "₹60", key: "saffron-lassi" },
    { name: "Rose Lassi", price: "₹60", key: "rose-lassi" },
    { name: "Strawberry Lassi", price: "₹70", key: "strawberry-lassi" },
    { name: "Dry Fruits Lassi", price: "₹70", key: "dryfruits-lassi" },
  ];

  const iceCreams = [
    { name: "Ice Cream Cone", price: "₹50", key: "ice-cone" },
    { name: "Fresh Fruits Bowl", price: "₹50", key: "fruits-bowl" },
    { name: "Fruits Salad with Ice Cream", price: "₹80", key: "fruits-ice" },
    { name: "Chocolate Fudge 2 Scoops", price: "₹90", key: "choco-fudge" },
    { name: "Ice Cream Regular", price: "₹100", key: "ice-regular" },
    { name: "Death by Chocolate", price: "₹140", key: "death-chocolate" },
  ];

  const falooda = [
    { name: "Maha Raj Falooda", price: "₹70", key: "maharaj-falooda" },
    { name: "Kesar Falooda", price: "₹70", key: "kesar-falooda" },
    { name: "Kulfi Falooda", price: "₹70", key: "kulfi-falooda" },
    { name: "Butterscotch Falooda", price: "₹70", key: "butter-falooda" },
    { name: "Delhi Style Falooda", price: "₹110", key: "delhi-falooda" },
    { name: "Malai Kulfi", price: "₹40", key: "malai-kulfi" },
    { name: "Mango Kulfi", price: "₹40", key: "mango-kulfi" },
    { name: "Kesar Pista Kulfi", price: "₹40", key: "kesar-kulfi" },
  ];

  return (
    <section 
      id="menu" 
      ref={sectionRef}
      className="py-20 px-[5%] bg-[hsl(220,13%,5%)] relative overflow-hidden"
    >
      {/* Animated background waves */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * -50}px)`,
          transition: 'transform 0.1s linear'
        }}
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <h2
        ref={titleRef}
        className="text-center text-5xl font-black mb-12 uppercase relative z-10"
      >
        {titleVisible ? (
          <>
            {'Our Menu'.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-[charReveal_0.6s_ease-out_forwards]"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  opacity: 0,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </>
        ) : (
          <span className="opacity-0">Our Menu</span>
        )}
      </h2>

      <style>{`
        @keyframes charReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) rotateX(-90deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
      `}</style>

      <div 
        className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
        style={{
          transform: `translateY(${scrollY * 20}px)`,
          transition: 'transform 0.1s linear'
        }}
      >
        <MenuBoard
          title="Milk Shakes"
          items={milkshakes}
          gradient="linear-gradient(135deg, #e91e63 0%, #c2185b 100%)"
          onItemClick={onItemClick}
        />
        <MenuBoard
          title="Lassi"
          items={lassi}
          gradient="linear-gradient(135deg, #f44336 0%, #c62828 100%)"
          onItemClick={onItemClick}
        />
        <MenuBoard
          title="Ice Creams"
          items={iceCreams}
          gradient="linear-gradient(135deg, #2196f3 0%, #1565c0 100%)"
          onItemClick={onItemClick}
        />
        <MenuBoard
          title="Falooda & Kulfi"
          items={falooda}
          gradient="linear-gradient(135deg, #9c27b0 0%, #6a1b9a 100%)"
          onItemClick={onItemClick}
        />
      </div>
    </section>
  );
};

export default MenuSection;