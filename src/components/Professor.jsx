import { motion } from 'framer-motion';
import { Users, Star, BookOpen } from 'lucide-react';
import BorderGlow from './BorderGlow';
import professorImg from '../assets/wenes-soares.png';

export default function Professor() {
  return (
    <section id="professor" className="relative py-28 bg-void overflow-hidden bg-grid-pattern">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
      <div className="orb w-80 h-80 bg-neon/10 top-10 right-10" />
      <div className="orb w-60 h-60 bg-purple-900/15 bottom-10 left-10" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-light text-sm font-mono tracking-widest uppercase mb-4 block">
            // Seu instrutor
          </span>
          <h2 className="section-title">
            Aprenda com quem{' '}
            <span className="bg-neon-gradient bg-clip-text text-transparent">realmente faz</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <BorderGlow
            backgroundColor="#0b0b0f"
            borderRadius={24}
            glowColor="263 70 60"
            glowRadius={50}
            glowIntensity={1.3}
            coneSpread={22}
            edgeSensitivity={20}
            colors={['#7c3aed', '#a855f7', '#c084fc']}
            className="w-full"
          >
            <div className="flex flex-col md:flex-row items-center gap-10 p-6 md:p-12">
              {/* Avatar Photo (9:16 aspect ratio) */}
              <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                <div className="relative">
                  <div className="w-48 md:w-64 aspect-[9/16] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                    <img 
                      src={professorImg} 
                      alt="Wenes Soares" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display font-bold text-3xl text-white mb-1">
                  <span className="relative inline-block">
                    <span className="relative z-10 px-2">Wenes Soares</span>
                  </span>
                </h3>
                <p className="text-neon-light font-medium text-sm mb-6">Desenvolvedor de Jogos &amp; Instrutor</p>
                <p className="text-slate-300 leading-relaxed mb-8 text-base">
                  <strong className="text-white">Wenes Soares</strong> é um desenvolvedor de jogos apaixonado
                  por games e por transformar iniciantes em criadores. Com anos de experiência prática no mercado,
                  ele domina ferramentas como Godot, Unity e GDScript — e tem uma habilidade única de{' '}
                  <span className="text-neon-light">explicar conceitos complexos de forma simples e direta</span>.
                  Já treinou mais de <strong className="text-white">2.500 alunos</strong> que hoje constroem seus
                  próprios jogos com confiança. O Start GameDev é o método que ele gostaria de ter tido no início da carreira.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: Users,    value: '2.500+', label: 'Alunos' },
                    { icon: Star,     value: '4.9/5',  label: 'Avaliação' },
                    { icon: BookOpen, value: '11',     label: 'Módulos' },
                  ].map((stat, i) => (
                    <BorderGlow
                      key={i}
                      backgroundColor="#111118"
                      borderRadius={12}
                      glowColor="263 70 60"
                      glowRadius={22}
                      glowIntensity={1.0}
                      coneSpread={18}
                      edgeSensitivity={22}
                      colors={['#7c3aed', '#a855f7', '#c084fc']}
                    >
                      <div className="flex flex-col items-center md:items-start gap-1 p-3">
                        <stat.icon size={16} className="text-neon mb-1" />
                        <span className="font-display font-bold text-xl text-white">{stat.value}</span>
                        <span className="text-slate-400 text-xs">{stat.label}</span>
                      </div>
                    </BorderGlow>
                  ))}
                </div>
              </div>
            </div>
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  );
}
