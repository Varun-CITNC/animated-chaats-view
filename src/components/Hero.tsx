const Hero = () => {
  const scrollToMenu = () => {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 px-[5%]"
      style={{
        background: "linear-gradient(135deg, hsl(220 13% 10%) 0%, hsl(300 30% 15%) 100%)",
      }}
    >
      {/* Floating orbs */}
      <div
        className="absolute w-[500px] h-[500px] -top-[200px] -right-[200px] animate-float"
        style={{
          background: "radial-gradient(circle, rgba(233, 30, 99, 0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] -bottom-[150px] -left-[150px] animate-float"
        style={{
          background: "radial-gradient(circle, rgba(149, 117, 205, 0.3) 0%, transparent 70%)",
          animationDelay: "2s",
        }}
      />

      <div className="max-w-[1200px] text-center relative z-10 opacity-0 animate-fade-in-up">
        <div className="w-[200px] h-[200px] mx-auto mb-8 bg-gradient-to-br from-accent to-secondary rounded-full border-[5px] border-primary flex items-center justify-center text-8xl opacity-0 animate-logo-appear shadow-[0_10px_40px_rgba(233,30,99,0.5)]">
          🥤
        </div>
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-[hsl(340,82%,62%)] bg-clip-text text-transparent">
          The Cassi & More
        </h1>
        <p className="text-2xl text-accent mb-8">
          ಚಟ್ನಿ ಲಸ್ಸಿ & ಮೋರ್ | Lassi, Milkshakes & Street Food
        </p>
        <button
          onClick={scrollToMenu}
          className="relative inline-block px-12 py-4 bg-gradient-to-r from-primary to-[hsl(340,82%,62%)] text-white font-bold rounded-full uppercase overflow-hidden shadow-[0_4px_20px_rgba(233,30,99,0.5)] transition-all duration-400 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_30px_rgba(233,30,99,0.6)] group"
        >
          <span className="relative z-10">Explore Menu</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-scroll">
        <span className="block w-[30px] h-[50px] border-[3px] border-primary rounded-[25px] relative shadow-[0_0_20px_rgba(233,30,99,0.5)]">
          <span className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[6px] h-[10px] bg-primary rounded-[3px] animate-[scrollDot_2s_infinite]" />
        </span>
      </div>

      <style>{`
        @keyframes scrollDot {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;