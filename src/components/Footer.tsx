import { Flame, Instagram, Phone, MapPin, Clock, Facebook, ShieldCheck, ShoppingBag } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5 pt-16 pb-8 text-gray-400 relative">
      {/* Decorative neon subtle red line at the footer top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-[#F4B400]/20 blur-[1px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={42} className="shadow-[0_0_15px_rgba(244,180,0,0.5)] rounded-full" />
              <span className="text-xl font-black uppercase tracking-widest text-white font-sans">
                Garagem <span className="text-[#F4B400]">Hbg</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Inspirada nas garagens americanas e apaixonada por hambúrgueres artesanais de verdade. Unimos técnica, ingredientes selecionados e carnes suculentas grelhadas no fogo.
            </p>

            {/* Social Medias */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#F4B400]/50 text-gray-400 hover:text-white transition-all cursor-pointer"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#F4B400]/50 text-gray-400 hover:text-white transition-all cursor-pointer"
                aria-label="Curta no Facebook"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.15em] text-[#F4B400] italic flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F4B400]" />
              Horário de Funcionamento
            </h3>
            
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="font-semibold text-gray-300">Terça a Quinta:</span>
                <span className="text-gray-400">18:00 - 23:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="font-semibold text-gray-300">Sexta e Sábado:</span>
                <span className="text-gray-400">18:00 - 00:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="font-semibold text-gray-300">Domingo:</span>
                <span className="text-gray-400">18:00 - 23:30</span>
              </li>
              <li className="flex justify-between pb-1">
                <span className="font-semibold text-[#F4B400]">Segunda-feira:</span>
                <span className="text-black font-bold uppercase tracking-wider text-[10px] bg-[#F4B400] border border-[#F4B400]/20 px-2 rounded-md">Fechado</span>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.15em] text-[#F4B400] italic flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F4B400]" />
              Contatos
            </h3>
            
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <ShoppingBag className="w-4.5 h-4.5 text-[#F4B400] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[10px] uppercase font-bold">Peça no 99Food</span>
                  <a href="https://oia.99app.com/dlp9/RZTDKY?share_media=Email" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#F4B400] transition-colors font-medium">
                    Garagem no 99Food
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="w-4.5 h-4.5 text-pink-500 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[10px] uppercase font-bold">Instagram Oficial</span>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-[#F4B400] transition-colors font-medium">
                    @garagem.burgers
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-[0.15em] text-[#F4B400] italic flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F4B400]" />
              Onde Estamos
            </h3>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex gap-3">
                <MapPin className="w-4.5 h-4.5 text-[#F4B400] shrink-0 mt-0.5" />
                <p className="text-gray-300 leading-relaxed">
                  Av. Garagem do Sabor, 1000<br />
                  Bairro Centro - São Paulo - SP<br />
                  CEP 01000-000
                </p>
              </div>

              {/* Delivery Zone Badge */}
              <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2 text-[10px] sm:text-xs">
                <ShieldCheck className="w-4.5 h-4.5 text-green-500 shrink-0" />
                <span>Entregamos em toda a região de forma rápida e segura!</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Sub bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Garagem Hamburgueria. Todos os direitos reservados.
          </p>
          <p className="text-[10px] text-gray-600">
            Desenvolvido com carinho para amantes de Hambúrgueres de Chapa Forte.
          </p>
        </div>
      </div>
    </footer>
  );
}
