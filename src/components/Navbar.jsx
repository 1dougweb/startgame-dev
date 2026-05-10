import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Menu, X } from 'lucide-react';

const links = [
  { label: 'Benefícios', href: '#benefits' },
  { label: 'Conteúdo', href: '#curriculum' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Professor', href: '#professor' },
  { label: 'Preços', href: '#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id === 'pricing' ? 'price-card' : id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: id === 'pricing' ? 'center' : 'start' });
      window.history.pushState(null, null, href);
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-void/90 backdrop-blur-md border-b border-border-subtle shadow-glass'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-neon-gradient flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
              <span className="font-display font-bold text-sm text-white">SG</span>
            </div>
            <span className="font-display font-bold text-white text-sm">Start GameDev</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, '#pricing')}
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-neon/15 border border-neon/40 text-neon-light text-sm font-semibold hover:bg-neon/25 hover:border-neon/60 transition-all duration-200"
          >
            <Zap size={14} className="fill-neon-light" />
            Quero o curso
          </a>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-void/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="font-display font-semibold text-2xl text-white hover:text-neon-light transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={(e) => handleNavClick(e, '#pricing')}
              className="neon-btn shimmer-btn mt-4 px-10 py-4 rounded-2xl font-bold"
            >
              <span>Quero o curso</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
