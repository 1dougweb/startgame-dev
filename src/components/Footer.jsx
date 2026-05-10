import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import logoImg from '../assets/logo-branca3.png';

export default function Footer() {
  return (
    <footer className="relative bg-void border-t border-border-subtle overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />

      {/* Final CTA band */}
      <div className="bg-gradient-to-r from-neon/10 via-neon/5 to-neon/10 border-b border-neon/15 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Pronto para criar seu{' '}
              <span className="bg-neon-gradient bg-clip-text text-transparent">primeiro jogo?</span>
            </h2>
            <p className="text-slate-400 mb-8">
              Junte-se a mais de 2.500 alunos que já estão desenvolvendo seus games.
            </p>
            <a href="#pricing" className="neon-btn shimmer-btn text-base px-10 py-4 rounded-2xl font-bold">
              <span className="flex items-center gap-2">
                <Zap size={18} className="fill-white" />
                Garantir minha vaga agora
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Start GameDev" className="h-10 w-auto object-contain brightness-110 drop-shadow-[0_0_8px_rgba(124,58,237,0.3)]" />
          </div>

          {/* Copyright */}
          <div className="text-slate-600 text-sm">
            © {new Date().getFullYear()} CSJ Academy. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
