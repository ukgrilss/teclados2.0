
import React, { Suspense } from 'react';
import UrgencyBar from './components/UrgencyBar';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy loading dos componentes pesados ou que não aparecem na primeira tela
const Features = React.lazy(() => import('./components/Features'));
const SongRepertoire = React.lazy(() => import('./components/SongRepertoire'));
const Bonuses = React.lazy(() => import('./components/Bonuses'));
const VideoSection = React.lazy(() => import('./components/VideoSection'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const FAQ = React.lazy(() => import('./components/FAQ'));

// Componente de Loading simples para não travar a tela
const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="w-8 h-8 border-4 border-gold-500/30 border-t-gold-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[#FFB80030] selection:text-[#FFB800]">
      <UrgencyBar />
      
      <main className="relative">
        <Hero />
        
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <SongRepertoire />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Bonuses />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <VideoSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Pricing />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;
