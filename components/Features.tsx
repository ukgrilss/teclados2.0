
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import FeatureCard3D from './FeatureCard3D';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  const handleScrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-dark-950 relative flex flex-col items-center px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-black uppercase text-white tracking-tight"
          >
            O que você vai <br />
            <span className="gold-text">RECEBER:</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16 perspective-2000">
          {FEATURES.map((feature, index) => (
            <div key={index} className="h-full">
              <FeatureCard3D 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          {/* Botão Veja Mais */}
          <button className="mb-12 flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gold-950/20 border border-gold-500/20 text-gold-400 font-bold text-xs uppercase tracking-[0.2em] hover:bg-gold-950/40 transition-all">
            Veja todos os benefícios incluídos
            <ChevronDown size={16} />
          </button>

          {/* Botão CTA Gold */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-lg"
          >
            <a 
              href="#pricing"
              onClick={handleScrollToPricing}
              className="cta-glow block w-full text-center py-6 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl text-dark-950 font-black text-lg md:text-xl uppercase tracking-tighter hover:scale-[1.02] active:scale-95 transition-all shadow-[0_15px_40px_rgba(212,175,55,0.2)]"
            >
              QUERO COMEÇAR AGORA!
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
