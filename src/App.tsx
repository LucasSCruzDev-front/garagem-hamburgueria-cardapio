import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Menu from './components/Menu';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  const handleSmoothScroll = (targetId: string) => {
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans scroll-smooth selection:bg-[#F4B400] selection:text-black antialiased">
      {/* Yellow Ambient Neon Header Glow */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-yellow-950/15 via-yellow-950/5 to-transparent pointer-events-none" />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero
        onViewMenu={() => handleSmoothScroll('#cardapio')}
      />

      {/* Highlights / Destaques */}
      <Highlights />

      {/* Full Menu / Cardápio */}
      <Menu />

      {/* Brand Pillars / Diferenciais */}
      <Features />

      {/* Reviews / Testimonials */}
      <Testimonials />

      {/* Final Action / CTA Section */}
      <CTASection onOrderNow={() => handleSmoothScroll('#cardapio')} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
