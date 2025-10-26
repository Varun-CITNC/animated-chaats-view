import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [itemsVisible, setItemsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setItemsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-[5%] text-center"
      style={{
        background: "linear-gradient(135deg, hsl(220 13% 5%) 0%, hsl(300 30% 15%) 100%)",
      }}
    >
      <h2 className="text-5xl font-black mb-12 uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Contact Us
      </h2>
      
      <div className="max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`relative flex items-center gap-4 p-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[15px] border border-primary/30 shadow-[0_8px_30px_rgba(233,30,99,0.3)] transition-all duration-700 ${
            itemsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          } hover:scale-110 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(233,30,99,0.5)] hover:border-primary/60 group cursor-pointer overflow-hidden`}
        >
          <span className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10">📍</span>
          <div className="relative z-10">
            <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">Location</h3>
            <p className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">Vidyaranyapura, Bangalore-560097</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[15px]" />
        </div>

        <div
          className={`relative flex items-center gap-4 p-6 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-[15px] border border-secondary/30 shadow-[0_8px_30px_rgba(149,117,205,0.3)] transition-all duration-700 delay-100 ${
            itemsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          } hover:scale-110 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(149,117,205,0.5)] hover:border-secondary/60 group cursor-pointer overflow-hidden`}
        >
          <span className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10">📞</span>
          <div className="relative z-10">
            <h3 className="font-bold text-lg mb-1 group-hover:text-secondary transition-colors duration-300">Phone</h3>
            <a href="tel:7019221487" className="text-foreground/80 group-hover:text-foreground transition-colors duration-300 hover:underline">7019221487</a>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/10 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[15px]" />
        </div>
      </div>

      <div className="mt-12 max-w-[600px] mx-auto space-y-4">
        <p
          className={`text-xl text-foreground/80 transition-all duration-700 delay-200 ${
            itemsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } hover:text-primary hover:scale-105 cursor-pointer`}
        >
          ⏰ Hours: 10:00 AM - 10:00 PM
        </p>
        <p
          className={`text-xl text-accent font-semibold transition-all duration-700 delay-300 ${
            itemsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } hover:scale-110 cursor-pointer`}
        >
          ✨ Experience authentic Indian flavors with every sip!
        </p>
      </div>
    </section>
  );
};

export default Contact;
