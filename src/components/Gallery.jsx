import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import BorderGlow from './BorderGlow';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

// Asset imports
import print2 from '../assets/print-2-1-1024x579.webp';
import print3 from '../assets/print-3-1-1024x579.webp';
import print4 from '../assets/print-4-1-1024x576.webp';
import print5 from '../assets/print-5-1-1024x579.webp';

const gameImages = [
  { id: 1, label: 'Sistema de Pesca', img: print2 },
  { id: 2, label: 'Sistema de Cultivo ', img: print3 },
  { id: 3, label: 'Sistema de Crafting de itens', img: print4 },
  { id: 4, label: 'Mecânicas de Combate', img: print5 },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-void bg-topo-pattern">
      {/* Background decoration */}
      <div className="orb w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-neon/5 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-neon-light text-sm font-mono tracking-widest uppercase mb-4 block">
            // Experiência Visual
          </span>
          <h2 className="section-title text-3xl md:text-5xl">
            Veja o jogo que você vai{' '}
            <span className="bg-neon-gradient bg-clip-text text-transparent">criar do zero</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mt-4 text-sm md:text-lg">
            Screenshots reais do projeto final que você terá em seu portfólio.
          </p>
        </motion.div>

        {/* Scroll Stack Implementation */}
        <div className="w-full">
          <ScrollStack 
            itemDistance={100} 
            itemStackDistance={25}
            stackPosition="12%"
            baseScale={0.92}
            itemScale={0.015}
          >
            {gameImages.map((img) => (
              <ScrollStackItem key={img.id} itemClassName="!bg-[#0b0b0f] !shadow-2xl !h-[280px] md:!h-[550px] !my-6 md:!my-10">
                <BorderGlow
                  backgroundColor="#0b0b0f"
                  borderRadius={32}
                  glowColor="263 70 60"
                  glowRadius={50}
                  glowIntensity={1.4}
                  coneSpread={30}
                  edgeSensitivity={20}
                  colors={['#7c3aed', '#9d5cf8', '#c084fc']}
                  className="w-full h-full"
                >
                  <div className="relative w-full h-full overflow-hidden rounded-[32px]">
                    <img 
                      src={img.img} 
                      alt={img.label} 
                      width="1024"
                      height="576"
                      className="w-full h-full object-cover opacity-90 rounded-[32px]" 
                    />
                    
                    {/* Overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/10 to-transparent opacity-80 pointer-events-none" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

                    {/* Label & Icon */}
                    <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex items-end justify-between pointer-events-none">
                      <div>
                        <div className="flex items-center gap-2 mb-2 md:mb-3">
                          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-neon animate-pulse shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
                          <span className="text-neon-light font-mono text-[10px] md:text-xs tracking-widest uppercase">Módulo do Projeto</span>
                        </div>
                        <h3 className="text-xl md:text-4xl font-display font-bold text-white tracking-tight">{img.label}</h3>
                      </div>
                      <div className="text-4xl md:text-7xl filter drop-shadow-[0_0_20px_rgba(124,58,237,0.6)]">
                        {img.icon}
                      </div>
                    </div>

                    {/* Interaction hint */}
                    <div className="absolute top-6 md:top-10 right-6 md:right-10 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-void/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/40 shadow-inner">
                      <Gamepad2 size={18} className="md:size-24" />
                    </div>
                  </div>
                </BorderGlow>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>

      {/* Small spacer to release the last card cleanly without leaving huge gap */}
      <div className="h-[15vh] pointer-events-none" />
    </section>
  );
}
