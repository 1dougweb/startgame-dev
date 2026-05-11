import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import guaranteeSeal from '../assets/garantia-7-dias-v2.webp';

export default function Guarantee() {
  return (
    <section className="relative py-24 bg-[#0b0b0f] overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Seal Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="flex-shrink-0 w-56 md:w-80"
          >
            <img 
              src={guaranteeSeal} 
              alt="7 Dias de Garantia" 
              width="320"
              height="320"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="h-px w-8 bg-neon/50" />
              <div className="flex items-center gap-2 text-neon-light">
                <ShieldCheck size={20} />
                <span className="font-mono text-xs tracking-[0.3em] uppercase">Garantia Incondicional</span>
              </div>
              <div className="h-px w-8 bg-neon/50" />
            </div>
            
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-8 leading-tight">
              Seu risco é <span className="text-neon-light italic">zero</span>. <br />
              <span className="bg-neon-gradient bg-clip-text text-transparent">Simples assim.</span>
            </h2>
            
            <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-2xl">
              Teste o <strong className="text-white">Start GameDev</strong> por 7 dias. Se você não criar seu primeiro jogo ou simplesmente não gostar do curso, eu devolvo cada centavo.
            </p>
            
            <div className="inline-flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                <ShieldCheck size={24} />
              </div>
              <p className="text-slate-400 text-sm leading-snug">
                Você está 100% protegido pela nossa <br />
                <span className="text-white font-semibold">Garantia Blindada de 7 Dias.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
