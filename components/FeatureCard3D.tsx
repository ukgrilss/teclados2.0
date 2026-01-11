
import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const FeatureCard3D: React.FC<Props> = ({ icon: Icon, title, description, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Configuração Spring mais suave para efeito "luxuoso"
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Proteção contra divisão por zero/NaN
    if (!width || !height) return;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width - 0.5) * 20; // Aumentado para 20deg
    const yPct = (mouseY / height - 0.5) * -20;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
      className="relative h-full perspective-1000"
    >
      <div 
        className="h-full bg-dark-900/80 backdrop-blur-xl border border-white/5 p-8 rounded-3xl transition-all duration-300 group hover:border-gold-500/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
        style={{ transform: "translateZ(20px)" }}
      >
        <div 
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-700 flex items-center justify-center mb-6 text-dark-950 shadow-lg transform group-hover:scale-110 transition-transform duration-300"
          style={{ transform: "translateZ(30px)" }}
        >
          <Icon size={28} strokeWidth={2} />
        </div>
        
        <h3 
          className="text-2xl font-bold font-heading mb-3 text-white group-hover:text-gold-400 transition-colors"
          style={{ transform: "translateZ(25px)" }}
        >
          {title}
        </h3>
        
        <p 
          className="text-gray-400 text-sm leading-relaxed"
          style={{ transform: "translateZ(20px)" }}
        >
          {description}
        </p>

        {/* Efeito de brilho no canto */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-gold-500/20 transition-all duration-500"></div>
      </div>
    </motion.div>
  );
};

export default FeatureCard3D;
