import { useEffect, useRef, useState } from "react";

const Gallery = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&q=80", emoji: "🥤", alt: "Lassi" },
    { url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80", emoji: "🍦", alt: "Ice Cream" },
    { url: "https://images.unsplash.com/photo-1541544181051-e46607bc22a4?w=800&q=80", emoji: "🥛", alt: "Milkshake" },
    { url: "https://images.unsplash.com/photo-1588195538326-c5b1e5b80d96?w=800&q=80", emoji: "🍨", alt: "Sundae" },
    { url: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&q=80", emoji: "🍧", alt: "Dessert" },
    { url: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80", emoji: "🍓", alt: "Strawberry" },
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
            } hover:scale-110 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(233,30,99,0.6)] group`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-120"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center text-8xl opacity-0 group-hover:opacity-100 transition-opacity duration-400">
              {image.emoji}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;