import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, CheckCircle2 } from 'lucide-react';
import BorderGlow from './BorderGlow';

const modules = [
  { num: '01', title: 'Introdução',  desc: 'Fundamentos do desenvolvimento de jogos e configuração do ambiente.' },
  { num: '02', title: 'Cenários',    desc: 'Criação e design de cenários imersivos para o seu jogo.' },
  { num: '03', title: 'Personagem',  desc: 'Modelagem, animação e programação do personagem principal.' },
  { num: '04', title: 'NPCs',        desc: 'Inteligência artificial básica e comportamentos dos personagens não jogáveis.' },
  { num: '05', title: 'Crafting',    desc: 'Sistema de criação e combinação de itens no inventário.' },
  { num: '06', title: 'Plantação',   desc: 'Mecânica de cultivo, crescimento e colheita de recursos.' },
  { num: '07', title: 'HUD',         desc: 'Interface do jogador: barra de vida, stamina, inventário e minimapa.' },
  { num: '08', title: 'Pesca',       desc: 'Mini-game de pesca com física e sistema de recompensas.' },
  { num: '09', title: 'Construção',  desc: 'Sistema de build e colocação de estruturas no mundo do jogo.' },
  { num: '10', title: 'Combate',     desc: 'Sistema de batalha com ataques, defesa, hitboxes e cooldowns.' },
  { num: '11', title: 'Áudios',      desc: 'Implementação de trilha sonora, efeitos sonoros e mixagem de áudio.' },
];

export default function Curriculum() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="curriculum" className="relative py-28 bg-void-2 overflow-hidden bg-topo-pattern">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
      <div className="orb w-72 h-72 bg-neon/10 top-20 -left-20" />
      <div className="orb w-64 h-64 bg-purple-900/15 bottom-20 -right-20" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-light text-sm font-mono tracking-widest uppercase mb-4 block">
            // Grade curricular
          </span>
          <h2 className="section-title">
            Veja o conteúdo que você vai{' '}
            <span className="bg-neon-gradient bg-clip-text text-transparent">receber</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            11 módulos completos, do básico ao avançado. Aprenda fazendo.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { value: '11',     label: 'Módulos' },
            { value: '60+',    label: 'Aulas em vídeo' },
            { value: '1 jogo', label: 'Projeto completo' },
          ].map((stat, i) => (
            <BorderGlow
              key={i}
              backgroundColor="#111118"
              borderRadius={12}
              glowColor="263 70 60"
              glowRadius={25}
              glowIntensity={1.0}
              coneSpread={20}
              edgeSensitivity={20}
              colors={['#7c3aed', '#a855f7', '#c084fc']}
            >
              <div className="p-4 text-center">
                <div className="font-display font-bold text-2xl text-neon mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            </BorderGlow>
          ))}
        </div>

        {/* Module list */}
        <motion.div 
          className="space-y-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } }
          }}
        >
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: -10, filter: 'blur(10px)' },
                show: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.4 } }
              }}
            >
              <BorderGlow
                backgroundColor="#111118"
                borderRadius={12}
                glowColor="263 70 60"
                glowRadius={28}
                glowIntensity={1.1}
                coneSpread={22}
                edgeSensitivity={28}
                colors={['#7c3aed', '#9d5cf8', '#c084fc']}
                className="w-full"
              >
                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full text-left flex items-center gap-4 p-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center group-hover:bg-neon/20 group-hover:border-neon/40 transition-all duration-200">
                    <span className="font-mono text-sm font-bold text-neon">{mod.num}</span>
                  </div>
                  <BookOpen size={16} className="text-slate-500 group-hover:text-neon transition-colors" />
                  <span className="flex-1 font-semibold text-white text-sm md:text-base">{mod.title}</span>
                  <CheckCircle2 size={16} className="text-neon/40 group-hover:text-neon/70 transition-colors" />
                  <ChevronDown
                    size={16}
                    className={`text-slate-500 transition-transform duration-300 ${expanded === i ? 'rotate-180 text-neon' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-3 text-slate-400 text-sm leading-relaxed border-t border-neon/10">
                        {mod.desc}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </BorderGlow>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
    </section>
  );
}
