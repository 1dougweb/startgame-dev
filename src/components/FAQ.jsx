import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import BorderGlow from './BorderGlow';

const faqs = [
  {
    q: 'Não tenho nenhum conhecimento. O Start Gamedev é para mim?',
    a: 'O curso foi feito para pessoas com todos os níveis de conhecimento em desenvolvimento de jogos. Mesmo que você nunca tenha tido contato antes com a área ou a ferramenta, isso não será um problema. Você vai aprender do zero tudo o que precisa para criar seu primeiro jogo.'
  },
  {
    q: 'Qual game engine será usada no jogo? Meu PC vai suportar?',
    a: 'Você vai aprender a utilizar a engine Unity, ela foi criada e otimizada para que possa funcionar até em sistemas mais fracos. Mesmo que você possua um PC mais antigo ou básico, será possível iniciar seus estudos sem transtornos.'
  },
  {
    q: 'O curso possui certificado?',
    a: 'Sim! Ao término de todas as aulas do curso, o aluno poderá obter um certificado de conclusão.'
  },
  {
    q: 'O que eu vou aprender no curso?',
    a: 'No curso, você aprenderá a desenvolver seu primeiro jogos do absoluto zero.'
  },
  {
    q: 'Qual tipo de jogo será criado no curso?',
    a: 'No curso, você aprenderá a criar um jogo no estilo Top Down RPG saindo do zero até que o jogo esteja completo.'
  },
  {
    q: 'Como eu vou acessar o curso?',
    a: 'No momento que sua compra for aprovada pelo serviço de pagamento, automaticamente o sistema irá criar a sua conta e enviará todos os dados de acesso ao seu e-mail.\n\nCaso, por qualquer motivo, você não consiga acessar de imediato, basta enviar um e-mail para suporte@crieseusjogos.com.br que nós te ajudaremos!'
  },
  {
    q: 'E se eu não gostar do curso?',
    a: 'Se você não ficar satisfeito com o curso, basta nos avisar em até 7 dias e devolveremos seu dinheiro. Isso mostra o quanto nós confiamos em nosso curso e na transformação que ele causa. Pedimos apenas que o motivo seja informado para que possamos melhorar o atendimento.'
  },
  {
    q: 'Como eu sei se esse curso é para mim?',
    a: 'Se você deseja aprender a criar jogos, seja por hobby, ou seja para entrar no mercado de trabalho, esse é o curso mais indicado pra você que está começando agora, e quer criar seu primeiro jogo, ou simplesmente quer aprender a criar um jogo estilo Top Down RPG'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="relative py-28 bg-void overflow-hidden bg-dot-pattern">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
      <div className="orb w-80 h-80 bg-neon/10 bottom-0 left-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-neon-light text-sm font-mono tracking-widest uppercase mb-4 block">
            // FAQ
          </span>
          <h2 className="section-title">
            Perguntas{' '}
            <span className="bg-neon-gradient bg-clip-text text-transparent">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div 
          className="space-y-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } }
          }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
            >
              <BorderGlow
                backgroundColor="#0b0b0f"
                borderRadius={20}
                glowColor="263 70 60"
                glowRadius={30}
                glowIntensity={1.1}
                coneSpread={25}
                edgeSensitivity={20}
                colors={['#7c3aed', '#9d5cf8', '#c084fc']}
                className="w-full"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle size={20} className="text-neon flex-shrink-0" />
                    <span className="font-semibold text-white md:text-lg">{faq.q}</span>
                  </div>
                  <ChevronDown 
                    size={20} 
                    className={`text-slate-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-neon' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed whitespace-pre-line border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </BorderGlow>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
