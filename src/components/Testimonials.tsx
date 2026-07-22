import { motion } from 'motion/react';
import { Star, Flame, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="py-24 bg-[#0A0A0A] relative">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-1 items-center animate-pulse"
          >
            <span className="text-[#F4B400] font-bold text-xs tracking-[0.3em] uppercase italic mb-2 block">
              Quem prova aprova!
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white uppercase italic">
            A OPINIÃO DOS NOSSOS CLIENTES
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Veja o feedback sincero de quem já se rendeu aos hambúrgueres artesanais preparados na chapa forte da Garagem.
          </p>
        </div>

        {/* Global Rating Highlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-[#111111] rounded-2xl border border-white/5 p-8 flex flex-col justify-center items-center text-center shadow-xl"
          >
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F4B400] italic">Nota Geral</h3>
            <span className="text-6xl font-black text-white font-sans mt-3">4.9</span>
            
            {/* Stars Row */}
            <div className="flex gap-1.5 mt-3 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5.5 h-5.5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            
            <p className="text-gray-400 text-xs mt-1">
              Avaliação de mais de 850 pedidos realizados no 99Food e delivery.
            </p>
          </motion.div>

          {/* Testimonial Cards Slider/Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {TESTIMONIALS.map((test, index) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111111] border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-[#F4B400]/25 transition-all shadow-lg relative group"
              >
                {/* Quote Icon decorative */}
                <Quote className="absolute right-5 top-5 w-8 h-8 text-neutral-800/30 group-hover:text-[#F4B400]/5 transition-colors pointer-events-none" />

                {/* Stars and Comment */}
                <div className="space-y-3">
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic">
                    &ldquo;{test.comment}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-white/5">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-sans font-black text-white text-sm ${test.avatarColor}`}>
                    {test.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-bold text-white leading-tight">{test.name}</span>
                    <span className="text-[10px] text-gray-500 font-semibold mt-0.5">{test.date}</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
