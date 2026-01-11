
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Lock, ShieldCheck, Zap, AlertTriangle } from 'lucide-react';
import { CHECKOUT_URL, PRICING_BENEFITS } from '../constants';

const Pricing: React.FC = () => {
  const [dateString, setDateString] = useState('');

  useEffect(() => {
    const updateDate = () => {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const year = today.getFullYear();
      setDateString(`${day}/${month}/${year}`);
    };

    updateDate();
  }, []);

  return (
    <section id="pricing" className="py-24 relative bg-dark-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#DAA52015_0%,_transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Badge de Oferta (Conforme print) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex items-center gap-2 bg-[#B21F1F] px-8 py-3 rounded-full shadow-lg border border-white/10"
        >
          <AlertTriangle size={18} className="text-[#FFB800] fill-[#FFB800]/20" />
          <span className="text-white font-black text-xs md:text-sm uppercase tracking-tight">
            Oferta por tempo limitado até {dateString}
          </span>
        </motion.div>

        {/* Headline de Chamada (Conforme print) */}
        <div className="text-center mb-12 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-heading font-black leading-tight">
            Leve <span className="gold-text">todo o conteúdo completo</span> por <span className="gold-text">apenas:</span>
          </h2>
        </div>

        <div className="max-w-lg w-full mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Efeito de Brilho no Card Principal */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-[40px] blur opacity-25"></div>
            
            <div className="relative bg-dark-800 border border-white/10 rounded-[40px] p-10 shadow-2xl overflow-hidden">
              
              {/* Badge Popular */}
              <div className="absolute top-0 right-0 bg-gold-400 px-6 py-2 rounded-bl-3xl">
                <span className="text-dark-950 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> Recomendado
                </span>
              </div>

              <div className="mb-10 pt-4 text-center md:text-left">
                <p className="text-gray-400 text-sm font-medium mb-2 uppercase tracking-widest">Plano Vitalício Completo</p>
                <div className="flex items-baseline justify-center md:justify-start gap-2">
                  <span className="text-gray-500 text-lg line-through">R$ 197</span>
                  <div className="flex items-baseline">
                    <span className="text-gold-400 text-2xl font-bold">R$</span>
                    <span className="text-7xl font-black text-white tracking-tighter ml-1">29</span>
                    <span className="text-2xl font-bold text-white">,90</span>
                  </div>
                </div>
                <p className="text-gold-400/80 text-xs font-bold mt-2 flex items-center justify-center md:justify-start gap-2 uppercase tracking-tighter">
                  <Zap size={14} fill="currentColor" className="animate-pulse" /> Pagamento único • Acesso Vitalício
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {PRICING_BENEFITS.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold-500/10 flex items-center justify-center">
                      <Check size={12} className="text-gold-400" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <a 
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-glow relative overflow-hidden block w-full text-center py-5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-2xl text-dark-950 font-black text-xl hover:scale-[1.02] transition-transform shadow-xl uppercase tracking-tight"
              >
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none"></div>
                 GARANTIR MINHA VAGA AGORA
              </a>

              <div className="mt-8 flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 text-[11px] text-gray-500 uppercase font-black tracking-widest">
                  <Lock size={14} className="text-gold-400" /> CHECKOUT 100% SEGURO
                </div>
                <div className="flex items-center gap-4 opacity-40 grayscale">
                  <div className="flex items-center gap-1 border border-white/20 px-2 py-1 rounded text-[8px] font-bold">
                    <ShieldCheck size={10} /> PROTEÇÃO SSL
                  </div>
                  <div className="flex items-center gap-1 border border-white/20 px-2 py-1 rounded text-[8px] font-bold">
                    PIX / CARTÃO
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md flex flex-col items-center">
              <img src="https://i.postimg.cc/0N1Lys5b/10002431-Photoroom.png" alt="Selo 7 dias" className="w-20 mb-4" />
              <h4 className="text-white font-bold mb-2 uppercase tracking-wide">Riscos Zero para Você!</h4>
              <p className="text-gray-500 text-xs font-light leading-relaxed">
                Se em até 7 dias você não estiver tocando suas primeiras músicas, devolvemos 100% do seu investimento. Sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
