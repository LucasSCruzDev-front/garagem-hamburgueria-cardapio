import { motion } from "motion/react";
import { ArrowRight, Flame, Sparkles, Truck, Star } from "lucide-react";
import Logo from "./Logo";

interface HeroProps {
  onViewMenu: () => void;
}

export default function Hero({ onViewMenu }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A0A0A]">
      {/* Background Gradients and Glows */}
      <div className="absolute inset-0 z-0">
        {/* Subtle dark pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(244,180,0,0.08),transparent_70%)]" />

        {/* Neon Glow Tube Effect at the Top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-[#F4B400] blur-[4px] opacity-70" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-white opacity-25" />

        {/* Floating background glowing amber/red light */}
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F4B400]/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-yellow-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            {/* Tagline / Badges Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-2 items-center lg:items-start"
            >
              <span className="text-[#F4B400] font-bold text-sm tracking-[0.3em] uppercase italic block">
                Artesanal & Premium
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black leading-[1.1] uppercase italic text-white tracking-tight">
                O verdadeiro sabor <br />
                <span className="text-[#F4B400] drop-shadow-[0_0_15px_rgba(244,180,0,0.6)]">
                  Artesanal
                </span>{" "}
                <br />
                da Garagem.
              </h1>

              <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
                Hambúrgueres preparados na hora com blends selecionados,
                ingredientes de primeira qualidade e o toque único de quem
                entende de brasa forte.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="https://oia.99app.com/dlp9/RZTDKY?share_media=Email"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#F4B400] hover:bg-yellow-500 py-4 px-8 rounded-xl font-black text-sm uppercase tracking-wider text-black shadow-lg shadow-yellow-950/40 transition-transform hover:scale-105 active:scale-95 cursor-pointer text-center"
              >
                Pedir no 99Food
              </a>

              <button
                onClick={onViewMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 py-4 px-8 rounded-xl font-black text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-all active:scale-95 cursor-pointer"
              >
                Ver Cardápio
              </button>
            </motion.div>

            {/* Feature Badges Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-6 border-t border-white/5 grid grid-cols-3 gap-4"
            >
              <div className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-[#F4B400] italic">
                  ⭐
                </span>
                <span className="text-[10px] uppercase font-bold tracking-tighter text-gray-300">
                  Fresco
                </span>
              </div>

              <div className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-[#F4B400] italic">
                  🔥
                </span>
                <span className="text-[10px] uppercase font-bold tracking-tighter text-gray-300">
                  Na Brasa
                </span>
              </div>

              <div className="flex-1 flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-green-500 italic">
                  🚚
                </span>
                <span className="text-[10px] uppercase font-bold tracking-tighter text-gray-300">
                  Rápido
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Image Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md lg:max-w-none"
            >
              {/* Outer Neon Glow Circle behind the burger */}
              <div className="absolute inset-0 bg-[#F4B400]/10 rounded-full blur-[80px] -z-10 animate-pulse" />

              {/* Decorative Frame */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#F4B400] to-neutral-800 rounded-3xl opacity-20 blur-sm -z-10" />

              {/* Burger Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111111] p-4 aspect-square shadow-2xl flex items-center justify-center">
                <img
                  src="https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807056286a23695c24fc5.jpeg"
                  alt="Hambúrguer Artesanal Supremo da Garagem Hamburgueria"
                  className="w-full h-full object-cover rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid Neon tag */}
                <div className="absolute bottom-6 right-6 bg-[#0A0A0A]/90 border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-[#F4B400] animate-ping" />
                  <span className="text-[10px] font-bold text-white tracking-widest uppercase italic">
                    CHAPA QUENTE
                  </span>
                </div>
              </div>

              {/* Brand Logo Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-black p-1.5 rounded-full border-4 border-[#0A0A0A] shadow-2xl hover:scale-110 transition-transform duration-300">
                <Logo size={120} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
