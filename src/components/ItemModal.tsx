import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { MenuItem } from '../types';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function ItemModal({ item, onClose }: ItemModalProps) {
  // Close modal when pressing the Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#111111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-[#F4B400] hover:text-black transition-colors cursor-pointer backdrop-blur-sm border border-white/10"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image Header */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-neutral-950 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-black/30" />

              {/* Badge if present */}
              {item.badge && (
                <span className="absolute top-4 left-4 bg-[#F4B400] text-black font-black text-xs px-3 py-1 rounded-md uppercase tracking-wider italic shadow-lg z-10">
                  {item.badge}
                </span>
              )}
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[#F4B400] font-bold text-[10px] sm:text-xs tracking-[0.25em] uppercase italic">
                    Garagem Burguer
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-sans font-black tracking-tight text-white uppercase italic leading-tight">
                    {item.name}
                  </h3>
                </div>
                <div className="shrink-0 bg-[#F4B400]/10 border border-[#F4B400]/30 px-3.5 py-1.5 rounded-xl">
                  <span className="text-xl sm:text-2xl font-sans font-black text-[#F4B400] italic">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              {/* Description */}
              {item.description ? (
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                  {item.description}
                </p>
              ) : (
                <p className="text-gray-500 text-sm italic">
                  Sem descrição disponível para este item.
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
