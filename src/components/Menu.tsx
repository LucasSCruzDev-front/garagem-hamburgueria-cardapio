import { useState, useMemo, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Flame,
  Boxes,
  Utensils,
  CheckSquare,
  ChefHat,
  Beef,
  Droplet,
  GlassWater,
  Search,
} from 'lucide-react';
import { MenuItem } from '../types';
import { CATEGORIES, MENU_ITEMS } from '../data';
import ItemModal from './ItemModal';

interface MenuProps {
}

// Simple Helper to return correct icon dynamically
function CategoryIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Flame':
      return <Flame className={className} />;
    case 'Boxes':
      return <Boxes className={className} />;
    case 'Utensils':
      return <Utensils className={className} />;
    case 'CheckSquare':
      return <CheckSquare className={className} />;
    case 'ChefHat':
      return <ChefHat className={className} />;
    case 'Beef':
      return <Beef className={className} />;
    case 'Droplet':
      return <Droplet className={className} />;
    case 'GlassWater':
      return <GlassWater className={className} />;
    default:
      return <Flame className={className} />;
  }
}

export default function Menu({}: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('promocoes');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Reset category filter if searching, or keep it
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter items based on selected category and search query
  const filteredItems = useMemo(() => {
    let items = MENU_ITEMS;

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      return items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          (item.description && item.description.toLowerCase().includes(query))
      );
    }

    if (selectedCategory && selectedCategory !== 'all') {
      items = items.filter((item) => item.category === selectedCategory);
    }

    return items;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="cardapio" className="py-24 bg-[#0A0A0A] relative">
      {/* Background neon strip lines */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#F4B400]/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-[#F4B400] font-bold text-xs tracking-[0.3em] uppercase italic mb-2 block">
              Cardápio Completo
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white uppercase italic">
              Escolha seu sabor
            </h2>
            <p className="text-gray-400 text-sm max-w-lg">
              De hambúrgueres a porções crocantes e sobremesas, use os filtros abaixo para encontrar o lanche ideal para sua fome.
            </p>
          </div>

          {/* Real-time Search Box */}
          <div className="relative w-full md:max-w-xs group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500 group-focus-within:text-[#F4B400] transition-colors" />
            <input
              type="text"
              placeholder="Buscar no cardápio..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-[#111111] border border-white/5 rounded-2xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#F4B400]/50 focus:ring-1 focus:ring-[#F4B400]/20 transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-white cursor-pointer"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Categories Tab Bar */}
        {!searchQuery && (
          <div className="flex overflow-x-auto pb-4 mb-10 -mx-4 px-4 scrollbar-thin scrollbar-thumb-neutral-800 scrollbar-track-transparent">
            <div className="flex gap-2.5 sm:gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider whitespace-nowrap border transition-all cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-[#F4B400] border-[#F4B400] text-black shadow-lg shadow-[#F4B400]/25'
                    : 'bg-[#111111] border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                }`}
              >
                🍳 Ver Todos
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider whitespace-nowrap border transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-[#F4B400] border-[#F4B400] text-black shadow-lg shadow-[#F4B400]/25'
                      : 'bg-[#111111] border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                  }`}
                >
                  <CategoryIcon name={cat.iconName} className="w-4 h-4" />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Items Counter */}
        {searchQuery && (
          <div className="mb-6 text-sm text-gray-400">
            Encontrados <span className="text-[#F4B400] font-bold">{filteredItems.length}</span> resultados para &ldquo;<span className="text-white italic">{searchQuery}</span>&rdquo;
          </div>
        )}

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItem(item)}
                className="group flex flex-col justify-between bg-[#111111] rounded-2xl border border-white/5 p-4 hover:border-[#F4B400]/40 hover:bg-[#161616] cursor-pointer transition-all duration-300 shadow-lg hover:shadow-[#F4B400]/5"
              >
                {/* Product Layout (Side-by-side style on wide screens, stacked on tiny) */}
                <div className="flex gap-4 items-start">
                  
                  {/* Thumbnail */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-neutral-950">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {item.badge && (
                      <span className="absolute top-1.5 left-1.5 bg-[#F4B400] text-[9px] text-black font-black px-1.5 py-0.5 rounded shadow-lg uppercase italic">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-1.5 flex-grow flex flex-col justify-between min-h-[5.5rem]">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-sans font-black text-base uppercase italic text-white group-hover:text-[#F4B400] transition-colors line-clamp-2 leading-tight tracking-tight">
                          {item.name}
                        </h3>
                      </div>
                      {item.description && (
                        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 sm:line-clamp-3 mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="font-sans font-black text-base text-[#F4B400] italic">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="col-span-full py-16 text-center text-gray-500">
              <p className="text-lg">Nenhum item encontrado.</p>
              <p className="text-sm mt-1 text-gray-600">Experimente buscar por outros ingredientes ou categorias.</p>
            </div>
          )}
        </motion.div>

      </div>

      {/* Item Details Modal */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}
