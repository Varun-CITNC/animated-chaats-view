import { useEffect, useRef, useState } from "react";
import MenuBoard from "./MenuBoard";
import { menuData } from "@/data/menuData";

interface MenuSectionProps {
  onItemClick: (key: string) => void;
}

const MenuSection = ({ onItemClick }: MenuSectionProps) => {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

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

    return () => observer.disconnect();
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
    <section id="menu" className="py-20 px-[5%] bg-[hsl(220,13%,5%)]">
      <h2
        ref={titleRef}
        className={`text-center text-5xl font-black mb-12 uppercase transition-all duration-800 ${
          titleVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        } bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent`}
      >
        Our Menu
      </h2>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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