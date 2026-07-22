import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu as MenuIcon, X, Flame } from "lucide-react";
import Logo from "./Logo";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Destaques", href: "#destaques" },
    { name: "Cardápio", href: "#cardapio" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Avaliações", href: "#avaliacoes" },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#111111]/95 backdrop-blur-md py-3 border-b border-white/10 shadow-lg shadow-black/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Logo
              size={42}
              className="shadow-[0_0_15px_rgba(244,180,0,0.5)] rounded-full group-hover:scale-105 transition-transform"
            />
            <span className="text-xl font-black uppercase tracking-widest text-white font-sans">
              Garagem{" "}
              <span className="text-[#F4B400] drop-shadow-[0_0_5px_rgba(244,180,0,0.4)]">
                Hamburgueria
              </span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(link.href);
                }}
                className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4B400] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Cart & CTAs */}
          <div className="flex items-center gap-4">
            {/* CTA Desktop */}
            <button
              onClick={() => handleScrollTo("#cardapio")}
              className="hidden sm:inline-flex items-center justify-center bg-[#F4B400] text-black px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform active:scale-95 cursor-pointer"
            >
              VER CARDÁPIO
            </button>

            {/* Mobile Nav Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white md:hidden transition-all active:scale-95 cursor-pointer"
              aria-label="Abrir menu"
            >
              {isOpen ? (
                <X className="w-5.5 h-5.5" />
              ) : (
                <MenuIcon className="w-5.5 h-5.5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0A0A] border-b border-white/10 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(link.href);
                  }}
                  className="block px-4 py-3 rounded-xl text-xs font-semibold uppercase tracking-widest text-gray-400 hover:bg-white/5 hover:text-white transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 px-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleScrollTo("#cardapio");
                  }}
                  className="w-full flex items-center justify-center px-4 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#F4B400] hover:bg-yellow-500 transition-all cursor-pointer"
                >
                  PEÇA AGORA PELO CARDÁPIO
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
