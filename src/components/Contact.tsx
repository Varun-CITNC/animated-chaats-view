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
      <div className="max-w-[800px] mx-auto text-xl leading-loose">
        <p className="transition-transform duration-300 hover:translate-x-3 hover:text-primary cursor-pointer">
          📍 Location: Bangalore, Karnataka
        </p>
        <p className="transition-transform duration-300 hover:translate-x-3 hover:text-primary cursor-pointer">
          📞 Phone: +91 XXXXX XXXXX
        </p>
        <p className="transition-transform duration-300 hover:translate-x-3 hover:text-primary cursor-pointer">
          ⏰ Hours: 10:00 AM - 10:00 PM
        </p>
        <p className="transition-transform duration-300 hover:translate-x-3 hover:text-primary cursor-pointer">
          ✨ Experience authentic Indian flavors with every sip!
        </p>
      </div>
    </section>
  );
};

export default Contact;