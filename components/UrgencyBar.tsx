
import React, { useState } from 'react';
import { Clock } from 'lucide-react';

const UrgencyBar: React.FC = () => {
  // Otimização: Inicializa o estado com a data já formatada para evitar flash/layout shift
  const [dateString] = useState(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
  });

  return (
    <div className="w-full bg-[#B21F1F] text-white py-2 shadow-lg relative z-50 h-[32px] flex items-center">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2">
        <Clock size={14} className="animate-pulse flex-shrink-0" />
        <p className="text-[10px] md:text-xs font-black uppercase tracking-wider whitespace-nowrap">
          PROMOÇÃO VÁLIDA SOMENTE ATÉ HOJE: {dateString}
        </p>
      </div>
    </div>
  );
};

export default UrgencyBar;
