import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import logoImg from '../assets/logo-branca3.webp';
import DotGrid from './DotGrid';
import VSLPlayer from './VSLPlayer';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-void"
    >
      {/* DotGrid background — fills the entire hero */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={4}
          gap={28}
          baseColor="#2d1a6e"
          activeColor="#a855f7"
          proximity={110}
          speedTrigger={80}
          shockRadius={220}
          shockStrength={4}
          resistance={700}
          returnDuration={1.4}
        />
      </div>

      {/* Gradient overlays on top of dots so the hero content stays readable */}
      <div className="absolute inset-0 bg-hero-gradient z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-transparent to-void/80 z-[1] pointer-events-none" />

      {/* BG orbs */}
      <div className="orb w-[600px] h-[600px] bg-neon/15 -top-40 left-1/2 -translate-x-1/2 z-[1]" />
      <div className="orb w-[300px] h-[300px] bg-purple-900/20 bottom-20 -left-20 z-[1]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center pt-28 pb-16">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-6 md:mb-10 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-neon/40 bg-neon/10 text-neon-light text-xs md:text-sm font-medium"
        >
          <Zap size={14} className="fill-neon-light" />
          <span>Curso Online de Desenvolvimento de Jogos</span>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          className="flex justify-center mb-6 md:mb-10"
        >
          <div className="relative">
            <img
              src={logoImg}
              alt="Start GameDev"
              width="600"
              height="150"
              className="h-14 md:h-28 w-auto object-contain drop-shadow-[0_0_24px_rgba(124,58,237,0.55)]"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-display font-bold text-3xl sm:text-4xl md:text-7xl text-white leading-tight mb-6"
        >
          APRENDA A CRIAR{' '}
          <span className="relative inline-block">
            <span className="bg-neon-gradient bg-clip-text text-transparent glow-text">
              SEU PRIMEIRO JOGO
            </span>
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-neon-gradient opacity-60" />
          </span>
          {' '}EM POUCOS DIAS
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-slate-400 text-base md:text-2xl mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4 md:px-0"
        >
          Mesmo que você <span className="text-white font-medium">não saiba nada</span> sobre
          desenvolvimento de games
        </motion.p>

        {/* VSL Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-3xl mx-auto mb-2 md:mb-4 px-2 md:px-0"
        >
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden video-glow border border-neon/30 bg-void-3">
            <VSLPlayer />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-slate-500 text-xs md:text-sm mb-8 md:mb-10 italic"
        >
          *Assista o vídeo com atenção*
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('price-card');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                window.history.pushState(null, null, '#pricing');
              }
            }}
            className="w-full sm:w-auto neon-btn shimmer-btn text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold tracking-wide text-center"
          >
            <span className="flex items-center justify-center gap-2">
              <Zap size={20} className="fill-white" />
              Quero criar meu primeiro jogo
            </span>
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex items-center justify-center gap-2 md:gap-6 text-slate-500 text-[10px] md:text-sm px-4"
        >
          <span className="flex items-center gap-1 md:gap-1.5 whitespace-nowrap">
            <span className="text-neon font-bold text-xs md:text-base">2.500+</span> alunos
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
          <span className="flex items-center gap-1 md:gap-1.5 whitespace-nowrap">
            <span className="text-neon font-bold text-xs md:text-base">★★★★★</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-600 flex-shrink-0" />
          <span className="flex items-center gap-1 md:gap-1.5 whitespace-nowrap">
            Garantia <span className="text-neon font-bold text-xs md:text-base">7 dias</span>
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-neon/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
