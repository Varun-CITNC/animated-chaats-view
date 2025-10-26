import { useEffect, useState } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 150;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 animate-slide-down ${
        scrolled
          ? "bg-black/98 py-3 shadow-[0_10px_40px_rgba(233,30,99,0.4)]"
          : "bg-black/95 py-5 backdrop-blur-md"
      } border-b-[3px] border-primary`}
    >
      <div className="max-w-[1400px] mx-auto px-[5%] flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="w-[60px] h-[60px] bg-gradient-to-br from-accent to-secondary rounded-full border-[3px] border-primary flex items-center justify-center text-4xl animate-pulse-glow group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            🥤
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">The Cassi & More</div>
        </div>
        <ul className="flex gap-8">
          {["home", "menu", "gallery", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`relative font-semibold uppercase text-sm transition-all duration-300 hover:scale-110 after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[3px] after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 ${
                  activeSection === section
                    ? "text-primary after:w-full"
                    : "text-foreground hover:text-primary after:w-0 hover:after:w-full"
                }`}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;