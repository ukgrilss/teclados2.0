import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Eu preciso ter piano ou teclado para começar?",
    answer: "Não. Você pode começar com qualquer teclado simples. O método funciona tanto para teclado quanto para piano."
  },
  {
    question: "Preciso saber ler partitura ou entender de música?",
    answer: "Não. O curso é feito para iniciantes absolutos, sem leitura de partituras e sem teoria complicada."
  },
  {
    question: "Em quanto tempo consigo tocar as músicas?",
    answer: "Seguindo as aulas, muitos alunos já conseguem tocar suas primeiras músicas nos primeiros dias."
  },
  {
    question: "O acesso ao curso é mensal ou vitalício?",
    answer: "O acesso é Vitalício. Você paga uma única vez e assiste quando quiser."
  },
  {
    question: "E se eu não gostar do curso?",
    answer: "Você tem Garantia de 7 dias. Se não gostar, pode solicitar o reembolso total."
  }
];

const AccordionItem: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-4 flex items-center justify-between gap-4 text-left group"
      >
        <span className={`text-xs md:text-sm font-medium ${isOpen ? 'text-gold-400' : 'text-gray-400 group-hover:text-white'}`}>
          {item.question}
        </span>
        <span className={`flex-shrink-0 transition-transform ${isOpen ? 'rotate-180 text-gold-400' : 'text-gray-600'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-gray-500 text-xs leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-dark-950 pb-12 pt-2 px-4 relative z-10">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-white mb-1">Perguntas Frequentes</h2>
          <div className="w-12 h-1 bg-gold-500/40 mx-auto rounded-full"></div>
        </div>
        <div className="bg-dark-900/50 border border-white/5 rounded-2xl p-5 shadow-xl">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;