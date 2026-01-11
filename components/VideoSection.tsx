import React from 'react';
import { motion } from 'framer-motion';

const VideoSection: React.FC = () => {
  return (
    <section className="py-12 bg-dark-800 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl font-heading font-bold mb-2">
              Resultados <span className="gold-gradient-text">Comprovados</span>
            </h2>
            <p className="text-gray-400 text-sm">Veja nossos alunos tocando na prática</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold-500/20 bg-dark-900"
          >
            <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                 {/* @ts-ignore */}
                 <wistia-player media-id="5rhwybnpt9" aspect="0.5625"></wistia-player>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-6 flex justify-center gap-6 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Áudio HD</span>
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Carregamento Rápido</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;