import { useState } from 'react';
import { motion } from 'motion/react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data';
import ItemModal from './ItemModal';

interface HighlightsProps {
}

export default function Highlights({}: HighlightsProps) {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Find the exact highlighted items from our static data
  const highlightedIds = ['hexa-burguer', 'combo-mozao', 'bbq-burguer', 'fritas-especial-300g'];
  const highlights = MENU_ITEMS.filter((item) => highlightedIds.includes(item.id));

  // Custom configuration for highlights visual cards
  const highlightMetas: Record<string, { label: string; badgeClass: string }> = {
    'hexa-burguer': {
      label: 'LANÇAMENTO',
      badgeClass: 'bg-[#F4B400] text-black',
    },
    'combo-mozao': {
      label: 'MAIS VENDIDO',
      badgeClass: 'bg-[#F4B400] text-black',
    },
    'bbq-burguer': {
      label: 'ESPECIAL',
      badgeClass: 'bg-[#F4B400] text-black',
    },
    'fritas-especial-300g': {
      label: 'QUERIDINHO',
      badgeClass: 'bg-[#F4B400] text-black',
    },
  };

  return (
    <section id="destaques" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Background Decoratives */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0A0A0A] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-1 items-center"
          >
            <span className="text-[#F4B400] font-bold text-xs tracking-[0.3em] uppercase italic mb-2 block">
              Destaques Premium
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white mb-4 uppercase italic">
            OS MAIS PEDIDOS DA GARAGEM
          </h2>
          
          <p className="text-gray-400 text-sm sm:text-base">
            Preparados artesanalmente com ingredientes selecionados e grelhados com perfeição na nossa chapa forte.
          </p>
        </div>

        {/* Carousel / Responsive Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const meta = highlightMetas[item.id] || {
              label: 'DESTACADO',
              badgeClass: 'bg-[#F4B400] text-black',
            };

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedItem(item)}
                className="group relative flex flex-col justify-between bg-[#0A0A0A] rounded-2xl border border-white/5 p-5 hover:border-[#F4B400]/40 transition-all duration-300 hover:-translate-y-1 shadow-2xl cursor-pointer"
              >
                {/* Image and Badges Container */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Neon Label Ribbon */}
                  <span className={`absolute top-3 left-3 text-[10px] font-black px-2.5 py-1 rounded italic uppercase z-20 shadow-md ${meta.badgeClass}`}>
                    {meta.label}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col justify-between">
                  <div className="space-y-2 mb-3">
                    <h3 className="font-sans font-black text-lg uppercase italic text-white group-hover:text-[#F4B400] transition-colors tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="font-sans font-black text-lg text-[#F4B400] italic">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Item Modal */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
