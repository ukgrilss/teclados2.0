import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gold-400 font-heading font-bold text-xl mb-4">Clube das Teclas</p>
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
        <p className="text-gray-700 text-xs mt-2">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
