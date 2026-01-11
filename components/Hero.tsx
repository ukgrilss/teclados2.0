
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ChevronDown } from 'lucide-react';

const StatCard: React.FC<{ value: string, label: string, icon?: React.ReactNode, delay: number }> = ({ value, label, icon, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex-1 bg-dark-800/40 backdrop-blur-md border border-white/5 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center min-w-[140px] shadow-lg hover:border-gold-500/30 transition-colors"
  >
    <div className="text-gold-400 text-xl md:text-3xl font-black mb-1 flex items-center gap-1">
      {value} {icon}
    </div>
    <div className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-center">
      {label}
    </div>
  </motion.div>
);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const handleScrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="relative pt-20 pb-24 bg-[#050505] overflow-hidden flex flex-col items-center perspective-1000">
      
      {/* Background Dinâmico */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[140%] max-w-[1400px] h-[800px] pointer-events-none opacity-40"
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#D4AF37_0%,_transparent_60%)] blur-[100px]"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Logo Animada */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="flex flex-col items-center mb-10 will-change-transform"
        >
          <div className="mb-4 text-gold-400 drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
             <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18.5 3H5.5A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21h13a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 18.5 3z" />
                <path d="M12 3v18" />
                <path d="M7 3v10" />
                <path d="M17 3v10" />
                <path d="M3 13h18" />
             </svg>
          </div>
          <div className="text-center flex flex-col items-center gap-1">
            <span className="text-[11px] font-black uppercase tracking-[0.6em] leading-none text-gray-400">CLUBE DAS</span>
            <span className="text-2xl font-black uppercase tracking-[0.4em] leading-none text-white drop-shadow-md">TECLAS</span>
          </div>
        </motion.div>

        {/* Headline Explosiva */}
        <div className="text-center max-w-5xl mb-12 relative">
          <motion.div
             initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
             animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
             transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter leading-[1.05] mb-6 text-white drop-shadow-2xl">
              APRENDA <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-600">PIANO</span><br />
              <span className="text-3xl md:text-5xl lg:text-6xl text-gray-300">SEM LER PARTITURAS</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Junte-se a mais de <span className="text-gold-400 font-bold">14.900 alunos</span>. Método direto ao ponto para tocar suas músicas favoritas em tempo recorde.
          </motion.p>
        </div>

        {/* Mockup 3D Flutuante */}
        <motion.div
          style={{ y: y2 }}
          className="relative w-full max-w-4xl mb-16 perspective-1000 group"
        >
          {/* Efeito Glow atrás da imagem */}
          <div className="absolute inset-0 bg-gold-500/20 blur-[60px] rounded-full transform scale-75 group-hover:bg-gold-500/30 transition-all duration-700"></div>
          
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotateX: [0, 2, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative z-10"
          >
            <img 
              src="https://i.postimg.cc/jjd9zdsV/uk-B2NNt.png" 
              alt="Plataforma Clube das Teclas"
              width="900"
              height="506"
              className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] rounded-lg border border-white/5"
            />
            
            {/* Reflexo Vidro */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-lg pointer-events-none mix-blend-overlay"></div>
          </motion.div>
        </motion.div>

        {/* Botão CTA Principal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="w-full max-w-lg mb-20 px-4 relative z-20"
        >
          <a 
            href="#pricing"
            onClick={handleScrollToPricing}
            className="cta-glow group relative overflow-hidden block w-full text-center py-6 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 rounded-2xl shadow-[0_10px_40px_-10px_rgba(212,175,55,0.5)] transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
          >
            <span className="relative z-10 text-dark-950 font-black text-xl md:text-2xl uppercase tracking-tight flex items-center justify-center gap-2">
              Quero Tocar Agora <ChevronDown className="animate-bounce" size={24} />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite] pointer-events-none"></div>
          </a>
          <p className="text-center text-gray-500 text-[10px] mt-4 font-bold uppercase tracking-widest">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span> Vagas com desconto liberadas
          </p>
        </motion.div>

        {/* Estatísticas Glassmorphism */}
        <motion.div 
          className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <StatCard value="14.900+" label="Alunos Ativos" delay={0.6} />
          <StatCard value="4.9/5" label="Nota Média" icon={<Star size={20} className="fill-gold-500 text-gold-500" />} delay={0.7} />
          <StatCard value="VITALÍCIO" label="Acesso Completo" delay={0.8} />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
