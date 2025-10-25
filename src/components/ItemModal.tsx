import { X } from "lucide-react";

interface ItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  description: string;
  price: string;
}

const ItemModal = ({ isOpen, onClose, title, image, description, price }: ItemModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/95 backdrop-blur-md animate-[fadeIn_0.3s_ease]"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-br from-[hsl(300,30%,15%)] to-[hsl(220,13%,10%)] rounded-[30px] p-12 max-w-[800px] w-[90%] border-[3px] border-primary shadow-[0_20px_60px_rgba(233,30,99,0.5)] animate-[modalSlideIn_0.5s_cubic-bezier(0.16,1,0.3,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-[45px] h-[45px] flex items-center justify-center bg-primary/30 border-2 border-primary rounded-full text-foreground transition-all duration-300 hover:bg-primary hover:rotate-90 hover:scale-110"
        >
          <X size={24} />
        </button>

        <img
          src={image}
          alt={title}
          className="w-full h-[400px] rounded-[20px] object-cover mb-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-[imageZoom_0.6s_cubic-bezier(0.16,1,0.3,1)_0.2s_backwards]"
        />

        <h3 className="text-4xl font-black mb-4 uppercase bg-gradient-to-r from-primary to-[hsl(340,82%,62%)] bg-clip-text text-transparent animate-[slideRight_0.5s_cubic-bezier(0.16,1,0.3,1)_0.3s_backwards]">
          {title}
        </h3>

        <p className="text-lg text-accent leading-relaxed mb-6 animate-[slideRight_0.5s_cubic-bezier(0.16,1,0.3,1)_0.4s_backwards]">
          {description}
        </p>

        <div className="text-3xl font-black text-primary mb-6 animate-[slideRight_0.5s_cubic-bezier(0.16,1,0.3,1)_0.5s_backwards]">
          {price}
        </div>

        <button className="relative inline-block mt-6 px-10 py-4 bg-gradient-to-r from-primary to-[hsl(340,82%,62%)] text-white font-bold rounded-full uppercase overflow-hidden shadow-[0_4px_20px_rgba(233,30,99,0.5)] transition-all duration-400 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_8px_30px_rgba(233,30,99,0.7)] active:translate-y-0 active:scale-[1.02] group animate-[slideRight_0.5s_cubic-bezier(0.16,1,0.3,1)_0.6s_backwards]">
          <span className="relative z-10">Order Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideIn {
          from { opacity: 0; transform: scale(0.8) translateY(50px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes imageZoom {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default ItemModal;