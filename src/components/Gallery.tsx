import { useEffect, useRef, useState } from "react";
import lassiHero from "@/assets/lassi-hero.jpg";
import milkshakeHero from "@/assets/milkshake-hero.jpg";
import icecreamHero from "@/assets/icecream-hero.jpg";
import faloodaHero from "@/assets/falooda-hero.jpg";
import strawberryShake from "@/assets/strawberry-shake.jpg";
import mangoLassi from "@/assets/mango-lassi.jpg";

const Gallery = () => {
  const images = [
    { url: lassiHero, emoji: "🥤", alt: "Premium Lassi" },
    { url: icecreamHero, emoji: "🍦", alt: "Ice Cream Sundae" },
    { url: milkshakeHero, emoji: "🥛", alt: "Chocolate Milkshake" },
    { url: faloodaHero, emoji: "🍨", alt: "Falooda Special" },
    { url: strawberryShake, emoji: "🍓", alt: "Strawberry Shake" },
    { url: mangoLassi, emoji: "🥭", alt: "Mango Lassi" },
  ];

  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(images.length).fill(false));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleItems((prev) => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) itemObserver.observe(ref);
    });

    return () => {
      titleObserver.disconnect();
      itemObserver.disconnect();
    };
  }, []);

  return (
    <section id="gallery" className="py-20 px-[5%] bg-[hsl(220,13%,10%)]">
      <h2
        ref={titleRef}
        className={`text-center text-5xl font-black mb-12 uppercase transition-all duration-800 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent`}
      >
        Gallery
      </h2>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`h-[350px] rounded-[20px] overflow-hidden relative cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-800 ${
              visibleItems[index]
                ? "opacity-100 scale-100 rotate-y-0"
                : "opacity-0 scale-75 rotate-y-90"
            } hover:scale-110 hover:-translate-y-3 hover:rotate-1 hover:shadow-[0_20px_50px_rgba(233,30,99,0.6)] group`}
            style={{
              transitionDelay: visibleItems[index] ? `${index * 150}ms` : "0ms",
            }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center text-8xl opacity-0 group-hover:opacity-100 transition-all duration-400">
              <span className="group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-700">
                {image.emoji}
              </span>
            </div>
            
            {/* Image title on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-4 group-hover:translate-y-0">
              <p className="text-white text-xl font-bold text-center">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;