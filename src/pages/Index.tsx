import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import ItemModal from "@/components/ItemModal";
import { menuData } from "@/data/menuData";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    title: string;
    image: string;
    description: string;
    price: string;
  } | null>(null);

  const handleItemClick = (key: string) => {
    const item = menuData[key];
    if (item) {
      setSelectedItem(item);
      setModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
    setSelectedItem(null);
  };

  useEffect(() => {
    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const hero = document.getElementById("home");
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <MenuSection onItemClick={handleItemClick} />
      <Gallery />
      <Contact />
      {selectedItem && (
        <ItemModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          title={selectedItem.title}
          image={selectedItem.image}
          description={selectedItem.description}
          price={selectedItem.price}
        />
      )}
    </div>
  );
};

export default Index;