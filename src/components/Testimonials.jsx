import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import BorderGlow from './BorderGlow';

// Real testimonial screenshots
import dep1 from '../assets/depoimentos/img-20190807-214213-img-1281776-20190809123233-574x1024-1.webp';
import dep2 from '../assets/depoimentos/img-20190809-100439-img-1281776-20190809123451-2-572x1024-1.webp';
import dep3 from '../assets/depoimentos/img-4295-576x1024-1.webp';

const screenshots = [dep1, dep2, dep3];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 bg-void overflow-hidden bg-dot-pattern">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
      <div className="orb w-96 h-96 bg-neon/8 top-0 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-light text-sm font-mono tracking-widest uppercase mb-4 block">
            // Prova social
          </span>
          <h2 className="section-title">
            O que os alunos estão{' '}
            <span className="bg-neon-gradient bg-clip-text text-transparent">achando do curso?</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            Mais de 2.500 alunos já transformaram sua vida com o Start GameDev.
          </p>
        </motion.div>

        {/* Screenshot gallery — real testimonials */}
        <motion.div 
          className="flex flex-col md:flex-row items-start justify-center gap-6 mb-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {screenshots.map((src, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="w-full md:w-auto flex justify-center"
            >
              <BorderGlow
                backgroundColor="#0b0b0f"
                borderRadius={20}
                glowColor="263 70 60"
                glowRadius={45}
                glowIntensity={1.3}
                coneSpread={25}
                edgeSensitivity={20}
                colors={['#7c3aed', '#9d5cf8', '#c084fc']}
                className="rounded-[20px]"
              >
                <img
                  src={src}
                  alt={`Depoimento ${i + 1}`}
                  width="576"
                  height="1024"
                  className="w-full md:w-64 lg:w-72 object-cover rounded-[20px] select-none pointer-events-none"
                  draggable={false}
                />
              </BorderGlow>
            </motion.div>
          ))}
        </motion.div>

        {/* Rating */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => <span key={i} className="text-gold text-3xl">★</span>)}
          </div>
          <p className="text-slate-400 text-sm">
            Média de <span className="text-white font-semibold">4.9/5</span> de satisfação entre os alunos
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://go.hotmart.com/V83790993U?ap=ffb4&redirectionUrl=https%3A%2F%2Fcsjdigital.com.br%2Fstart-gamedev-97%2F"
            className="neon-btn shimmer-btn text-lg px-10 py-5 rounded-2xl font-bold tracking-wide"
          >
            <span className="flex items-center gap-2">
              <Zap size={20} className="fill-white" />
              Sim! Eu quero garantir minha vaga no curso
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
