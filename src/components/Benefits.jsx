import { motion } from 'framer-motion';
import {
  Globe, Footprints, Smartphone, MessageCircle, Zap, RefreshCw, Trophy, Award, ShieldCheck,
} from 'lucide-react';
import BorderGlow from './BorderGlow';

const benefits = [
  { icon: Globe,         title: 'Curso 100% Online',       desc: 'Acesse de qualquer lugar do mundo, no seu ritmo, sem horários fixos.' },
  { icon: Footprints,    title: 'Passo a Passo Prático',   desc: 'Do zero ao jogo completo com exercícios aplicados em cada módulo.' },
  { icon: Smartphone,    title: 'Todos os Dispositivos',   desc: 'Celular, tablet ou PC. Aprenda onde e quando quiser.' },
  { icon: MessageCircle, title: 'Suporte com o Professor', desc: 'Tire dúvidas diretamente com o Wenes. Sem robôs, sem enrolação.' },
  { icon: Zap,           title: 'Aprendizagem Acelerada',  desc: 'Metodologia focada em resultados rápidos e aplicação imediata.' },
  { icon: RefreshCw,     title: 'Atualizações Gratuitas',  desc: 'Pagou uma vez, recebe todas as atualizações futuras sem custo.' },
  { icon: Trophy,        title: 'Game Jams Exclusivas',    desc: 'Participe de competições exclusivas para alunos e mostre seu jogo.' },
  { icon: Award,         title: 'Certificado de Conclusão',desc: 'Certificado digital reconhecido para turbinar seu portfólio.' },
  { icon: ShieldCheck,   title: 'Garantia de 7 dias',      desc: 'Não gostou? Devolução total sem perguntas em até 7 dias.' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  show:   { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-28 bg-void-2 overflow-hidden bg-dot-pattern">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
      <div className="orb w-96 h-96 bg-neon/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-light text-sm font-mono tracking-widest uppercase mb-4 block">
            // Por que escolher o Start GameDev
          </span>
          <h2 className="section-title">
            Tudo que você precisa para{' '}
            <span className="bg-neon-gradient bg-clip-text text-transparent">criar seu jogo</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            Uma experiência de aprendizado completa, pensada para quem quer resultado real.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div key={i} variants={cardVariants} className="h-full">
                <BorderGlow
                  backgroundColor="#111118"
                  borderRadius={16}
                  glowColor="263 70 60"
                  glowRadius={35}
                  glowIntensity={1.2}
                  coneSpread={20}
                  edgeSensitivity={25}
                  colors={['#7c3aed', '#a855f7', '#c084fc']}
                  className="h-full cursor-default"
                >
                  <div className="flex items-start gap-4 p-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center transition-all duration-300">
                      <Icon size={22} className="text-neon-light" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white mb-1.5 text-base">{b.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
    </section>
  );
}
