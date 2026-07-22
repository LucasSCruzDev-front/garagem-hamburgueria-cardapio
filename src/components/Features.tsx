import { motion } from 'motion/react';
import { Flame, Leaf, Beef, Sparkles, Truck, Percent } from 'lucide-react';
import { DIFFERENTIALS } from '../data';

function FeatureIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case 'Flame':
      return <Flame className={className} />;
    case 'Leaf':
      return <Leaf className={className} />;
    case 'Beef':
      return <Beef className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Truck':
      return <Truck className={className} />;
    case 'Percent':
      return <Percent className={className} />;
    default:
      return <Flame className={className} />;
  }
}

export default function Features() {
  return (
    <section id="diferenciais" className="py-24 bg-[#111111] relative">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-1 items-center"
          >
            <span className="text-[#F4B400] font-bold text-xs tracking-[0.3em] uppercase italic mb-2 block">
              Diferenciais de Qualidade
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white uppercase italic">
            NOSSA FÓRMULA DE SUCESSO
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Cada detalhe do nosso processo é planejado para entregar a você o melhor e mais suculento hambúrguer artesanal da região.
          </p>
        </div>

        {/* Features Bento Grid / List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((feat, index) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-[#F4B400]/20 transition-all duration-300"
            >
              {/* Icon Container with glowing background */}
              <div className="mb-4 inline-flex p-3.5 rounded-xl bg-white/5 border border-white/10 text-[#F4B400] group-hover:text-[#F4B400] transition-all">
                <FeatureIcon name={feat.iconName} className="w-6 h-6 relative z-10" />
              </div>

              {/* Text */}
              <h3 className="font-sans font-black text-lg uppercase italic text-white group-hover:text-[#F4B400] transition-colors mb-2 tracking-tight">
                {feat.title}
              </h3>
              
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
