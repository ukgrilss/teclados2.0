
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Music } from 'lucide-react';
import { SONG_REPERTOIRE, SongCategory } from '../constants';

const SongCard: React.FC<{ category: SongCategory }> = ({ category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialCount = 4;
  const visibleSongs = isExpanded ? category.songs : category.songs.slice(0, initialCount);

  return (
    <div className="premium-card rounded-3xl p-6 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-gold-400/10 text-gold-400">
           <Music size={20} />
        </div>
        <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
      </div>

      <div className="flex-1 space-y-3 mb-6">
        {visibleSongs.map((song, idx) => (
          <div key={idx} className="flex items-center gap-3 group">
            <div className="w-1 h-6 bg-gold-400/20 group-hover:bg-gold-400 rounded-full transition-colors"></div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-200">{song.title}</span>
              <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">{song.artist}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[10px] font-black uppercase tracking-[0.2em] text-gold-400/60 hover:text-gold-400 transition-colors flex items-center justify-center gap-2"
      >
        {isExpanded ? <>Ver Menos <ChevronUp size={14}/></> : <>Ver Lista Completa <ChevronDown size={14}/></>}
      </button>
    </div>
  );
};

const SongRepertoire: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6">
            O Maior <span className="gold-text">Repertório</span> do Brasil
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto font-light">
            De sucessos do TikTok a clássicos de Beethoven. Aprenda tudo passo a passo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {SONG_REPERTOIRE.map((category, idx) => (
            <SongCard key={idx} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SongRepertoire;
