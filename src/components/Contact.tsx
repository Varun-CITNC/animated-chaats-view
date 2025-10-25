const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-[5%] text-center"
      style={{
        background: "linear-gradient(135deg, hsl(220 13% 5%) 0%, hsl(300 30% 15%) 100%)",
      }}
    >
      <h2 className="text-5xl font-black mb-8 uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Contact Us
      </h2>
      <div className="max-w-[800px] mx-auto text-xl leading-loose space-y-4">
        <p className="transition-all duration-500 hover:translate-x-3 hover:text-primary cursor-pointer hover:scale-105 animate-[slideInLeft_0.6s_ease_0.2s_backwards]">
          📍 Location: Vidyaranyapura, Bangalore - 560097
        </p>
        <p className="transition-all duration-500 hover:translate-x-3 hover:text-primary cursor-pointer hover:scale-105 animate-[slideInLeft_0.6s_ease_0.4s_backwards]">
          📞 Phone: <a href="tel:+917019221487" className="hover:underline">+91 7019221487</a>
        </p>
        <p className="transition-all duration-500 hover:translate-x-3 hover:text-primary cursor-pointer hover:scale-105 animate-[slideInLeft_0.6s_ease_0.6s_backwards]">
          ⏰ Hours: 10:00 AM - 10:00 PM
        </p>
        <p className="transition-all duration-500 hover:translate-x-3 hover:text-primary cursor-pointer hover:scale-105 animate-[slideInLeft_0.6s_ease_0.8s_backwards]">
          ✨ Experience authentic Indian flavors with every sip!
        </p>
      </div>
      
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;