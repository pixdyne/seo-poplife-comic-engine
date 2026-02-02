import React from 'react';
import Hero from './Hero';
import ComicMaker from './ComicMaker';
import BlogSection from './BlogSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      <section id="maker" className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none"></div>
        
        <div className="text-center mb-12 relative z-10">
           <h2 className="text-5xl md:text-7xl font-['Bangers'] mb-4 text-shadow-pop text-cyan-400" style={{ WebkitTextStroke: '2px black' }}>
             THE COMIC GENERATOR
           </h2>
           <p className="text-xl font-bold max-w-2xl mx-auto px-4">
             Don't let your life be a boring novel. Make it a <span className="bg-black text-white px-2">GRAPHIC NOVEL</span>.
           </p>
        </div>

        <ComicMaker />
      </section>

      <BlogSection />
    </>
  );
};

export default Home;