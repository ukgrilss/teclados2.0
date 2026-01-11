import React from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import { BONUSES } from '../constants';

const Bonuses: React.FC = () => {
  const handleScrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('pricing');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-dark-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-heading font-black uppercase">
            <span className="text-gold-400">BÔNUS</span> <span className="text-white">EXCLUSIVOS:</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {BONUSES.map((bonus, index) => (
            <motion.div
              key={bonus.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-dark-800 border border-gold-500/50 rounded-2xl p-6 pt-10 flex flex-col items-center text-center shadow-lg"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-400 text-dark-900 font-bold px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                <Gift size={14} />
                <span className="text-[10px] uppercase tracking-wider">BÔNUS {bonus.id}</span>
              </div>
              <h3 className="text-white font-bold text-base uppercase mb-3 leading-tight">
                {bonus.title}
              </h3>
              <p className="text-gray-400 text-xs mb-4 flex-grow">
                {bonus.description}
              </p>
              <div className="space-y-0.5">
                <div className="text-red-600 font-bold text-sm line-through opacity-80">
                  {bonus.originalPrice}
                </div>
                <div className="text-[#00C06B] font-black text-xl uppercase tracking-wider">
                  GRÁTIS
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
             href="#pricing"
             onClick={handleScrollToPricing}
             className="inline-block bg-[#00C06B] hover:bg-[#00A85D] text-white font-heading font-black text-base py-3.5 px-10 rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300 uppercase cursor-pointer"
          >
            Quero Tocar Piano
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;