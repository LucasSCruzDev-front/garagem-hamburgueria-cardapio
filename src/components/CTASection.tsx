import { motion } from 'motion/react';
import { ArrowRight, Flame } from 'lucide-react';

interface CTASectionProps {
  onOrderNow: () => void;
}

export default function CTASection({ onOrderNow }: CTASectionProps) {
  return (
    <section className="relative py-28 bg-[#111111] overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,180,0,0.08),transparent_70%)]" />
        {/* Abstract design: glowing warm lights */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#F4B400]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          {/* Inner ambient glow */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(244,180,0,0.08),transparent_50%)]" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            {/* Pulsing Icon Badge */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex p-4 rounded-full bg-[#F4B400] text-black shadow-xl shadow-[#F4B400]/20"
            >
              <Flame className="w-8 h-8 animate-bounce" />
            </motion.div>

            {/* Core Message */}
            <div className="space-y-4">
              <span className="text-[#F4B400] font-bold text-xs tracking-[0.3em] uppercase italic mb-2 block">
                Garanta já o seu!
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-black tracking-tight text-white leading-tight uppercase italic">
                Peça agora e descubra o verdadeiro sabor da Garagem.
              </h2>
              <p className="text-gray-400 text-sm sm:text-base font-sans max-w-xl mx-auto">
                Seu hambúrguer artesanal favorito está a poucos cliques de distância. Monte sua sacola e finalize o pedido de forma fácil pelo 99Food!
              </p>
            </div>

            {/* Action Trigger button */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="pt-2"
            >
              <button
                onClick={onOrderNow}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#F4B400] hover:bg-yellow-500 py-4 px-10 rounded-xl font-black text-sm uppercase tracking-wider text-black shadow-lg shadow-yellow-950/40 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                Fazer Pedido
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>

            {/* Social Proof Stats */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap justify-center gap-6 text-[10px] text-gray-500 uppercase font-black tracking-widest italic">
              <span>🔥 CHAPA QUENTE</span>
              <span>⚡ ENTREGA EXPRESS</span>
              <span>💯 BLEND EXCLUSIVO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
