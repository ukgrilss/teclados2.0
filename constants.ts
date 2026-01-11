import { Music, Video, Infinity, FileX, Mic, Heart, Film, Globe, Palette, Box, Sparkles } from 'lucide-react';
import { FeatureItem } from './types';

export const CHECKOUT_URL = "https://pay.lowify.com.br/checkout?product_id=5ZZgs6";

export const FEATURES: FeatureItem[] = [
  {
    icon: Music,
    title: "+1000 Músicas",
    description: "Repertório completo com sucessos populares para você tocar em qualquer ocasião, do clássico ao pop."
  },
  {
    icon: Video,
    title: "Videoaulas HD",
    description: "Aprenda visualmente com qualidade de cinema. Câmeras posicionadas para você não perder nenhum detalhe."
  },
  {
    icon: Infinity,
    title: "Acesso Vitalício",
    description: "Sem mensalidades. O curso é seu para sempre. Assista no seu ritmo, quantas vezes quiser."
  },
  {
    icon: FileX,
    title: "Sem Partituras",
    description: "Método intuitivo focado na prática. Ideal para quem não sabe ler música e quer resultados rápidos."
  }
];

export const PRICING_BENEFITS = [
  "Acesso Imediato a +1000 Músicas",
  "Método Exclusivo Sem Partituras",
  "Acesso Vitalício ao Portal",
  "Videoaulas Passo a Passo em HD",
  "Certificado de Conclusão",
  "Suporte Tira-Dúvidas",
  "Bônus: Exercícios de Agilidade"
];

export interface Song {
  title: string;
  artist: string;
  icon: any;
  color?: string;
}

export interface SongCategory {
  title: string;
  songs: Song[];
}

export const SONG_REPERTOIRE: SongCategory[] = [
  {
    title: "Sucessos Internacionais",
    songs: [
      { title: "Someone Like You", artist: "Adele", icon: Heart, color: "text-pink-500" },
      { title: "All of Me", artist: "John Legend", icon: Mic, color: "text-purple-400" },
      { title: "Let It Be", artist: "The Beatles", icon: Box, color: "text-orange-300" },
      { title: "Perfect", artist: "Ed Sheeran", icon: Box, color: "text-orange-300" },
      { title: "A Thousand Miles", artist: "Vanessa Carlton", icon: Box, color: "text-orange-300" },
      { title: "When I Was Your Man", artist: "Bruno Mars", icon: Mic, color: "text-purple-400" },
      { title: "Stay With Me", artist: "Sam Smith", icon: Box, color: "text-orange-300" },
      { title: "Shallow", artist: "Lady Gaga & Bradley Cooper", icon: Box, color: "text-orange-300" },
      { title: "Hallelujah", artist: "Leonard Cohen", icon: Box, color: "text-orange-300" },
      { title: "Easy On Me", artist: "Adele", icon: Heart, color: "text-pink-500" },
      { title: "My Heart Will Go On", artist: "Titanic", icon: Heart, color: "text-pink-500" }
    ]
  },
  {
    title: "Clássicos Imortais",
    songs: [
      { title: "Für Elise", artist: "Beethoven", icon: Music, color: "text-white" },
      { title: "Clair de Lune", artist: "Debussy", icon: Box, color: "text-orange-300" },
      { title: "Moonlight Sonata", artist: "Beethoven", icon: Music, color: "text-white" },
      { title: "Canon in D", artist: "Pachelbel", icon: Box, color: "text-orange-300" },
      { title: "Nocturne Op.9 No.2", artist: "Chopin", icon: Music, color: "text-white" },
      { title: "The Entertainer", artist: "Scott Joplin", icon: Box, color: "text-orange-300" },
      { title: "Gymnopédie No.1", artist: "Erik Satie", icon: Box, color: "text-orange-300" },
      { title: "Prelude in C Major", artist: "Bach", icon: Box, color: "text-orange-300" },
      { title: "Ave Maria", artist: "Schubert", icon: Box, color: "text-orange-300" },
      { title: "Rondo Alla Turca", artist: "Mozart", icon: Music, color: "text-white" }
    ]
  },
  {
    title: "Cinema & Séries",
    songs: [
      { title: "River Flows in You", artist: "Yiruma", icon: Sparkles, color: "text-blue-400" },
      { title: "Interstellar Main Theme", artist: "Hans Zimmer", icon: Globe, color: "text-yellow-500" },
      { title: "Pirates of the Caribbean", artist: "Hans Zimmer", icon: Film, color: "text-purple-500" },
      { title: "The Avengers Theme", artist: "Alan Silvestri", icon: Globe, color: "text-blue-500" },
      { title: "City of Stars", artist: "La La Land", icon: Sparkles, color: "text-yellow-400" },
      { title: "Hedwig's Theme", artist: "Harry Potter", icon: Sparkles, color: "text-blue-300" },
      { title: "Let It Go", artist: "Frozen", icon: Sparkles, color: "text-cyan-400" },
      { title: "Bella's Lullaby", artist: "Twilight", icon: Music, color: "text-yellow-200" },
      { title: "The Godfather Theme", artist: "Nino Rota", icon: Mic, color: "text-gray-400" },
      { title: "My Heart Will Go On", artist: "Titanic", icon: Heart, color: "text-pink-500" }
    ]
  },
  {
    title: "MPB & Brasileiras",
    songs: [
      { title: "Aquarela", artist: "Toquinho", icon: Palette, color: "text-pink-300" },
      { title: "Evidências", artist: "Chitãozinho & Xororó", icon: Box, color: "text-orange-300" },
      { title: "Trem Bala", artist: "Ana Vilela", icon: Box, color: "text-orange-300" },
      { title: "O Mundo é um Moinho", artist: "Cartola", icon: Box, color: "text-orange-300" },
      { title: "Garota de Ipanema", artist: "Tom Jobim", icon: Box, color: "text-orange-300" },
      { title: "Asa Branca", artist: "Luiz Gonzaga", icon: Box, color: "text-orange-300" },
      { title: "Azul da Cor do Mar", artist: "Tim Maia", icon: Box, color: "text-orange-300" },
      { title: "Pra Você Guardei o Amor", artist: "Nando Reis", icon: Heart, color: "text-pink-400" },
      { title: "O Leãozinho", artist: "Caetano Veloso", icon: Box, color: "text-orange-300" },
      { title: "Chega de Saudade", artist: "João Gilberto", icon: Box, color: "text-orange-300" }
    ]
  }
];

export interface BonusItem {
  id: number;
  title: string;
  description: string;
  originalPrice: string;
}

export const BONUSES: BonusItem[] = [
  {
    id: 1,
    title: "PACK DE AQUECIMENTO DAS MÃOS E DEDOS",
    description: "Evite lesões e ganhe agilidade com exercícios simples de aquecimento e coordenação.",
    originalPrice: "R$97,00"
  },
  {
    id: 2,
    title: "COMO TOCAR DE OLHOS FECHADOS (TÉCNICA DE MEMORIZAÇÃO)",
    description: "Descubra como internalizar movimentos e tocar no automático, mesmo sendo iniciante.",
    originalPrice: "R$47,00"
  },
  {
    id: 3,
    title: "20 VIDEOAULAS EXTRAS COM MÚSICAS FAMOSAS",
    description: "Aulas exclusivas com músicas como River Flows in You, Harry Potter, Beethoven e mais.",
    originalPrice: "R$67,00"
  }
];