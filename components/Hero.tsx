import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 20;
    const y = (clientY - top - height / 2) / 20;
    setOffset({ x, y });
  };

  const resetOffset = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-halftone-pink border-b-4 border-black">
      
      {/* Background Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full border-4 border-black box-shadow-hard hidden md:block animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-400 rotate-12 border-4 border-black box-shadow-hard hidden md:block"></div>

      <div 
        className="relative z-10 p-10 bg-white border-4 border-black box-shadow-hard max-w-4xl mx-4 transform transition-transform duration-100 ease-out cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetOffset}
        style={{ transform: `perspective(1000px) rotateX(${-offset.y}deg) rotateY(${offset.x}deg)` }}
      >
        {/* Starburst Badge */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-yellow-300 border-4 border-black flex items-center justify-center rotate-12 z-20" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}>
          <span className="font-['Bangers'] text-2xl rotate-[-12deg]">NEW!</span>
        </div>

        <div className="text-center space-y-6">
          <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 text-shadow-pop stroke-black" style={{ WebkitTextStroke: '3px black' }}>
            PoPunch
          </h1>
          <h2 className="text-2xl md:text-4xl bg-black text-white inline-block px-4 py-2 transform -rotate-2">
            THE UNIVERSE IS A COMIC
          </h2>
          <p className="text-xl font-bold max-w-lg mx-auto leading-relaxed">
            Turn your boring reality into a 
            <span className="text-red-500 mx-1">MASTERPIECE!</span> 
            Upload a photo or write a thought, and let our 
            <span className="bg-cyan-300 px-1 border-2 border-black mx-1">AI ENGINE</span> 
            dramatize it!
          </p>
          
          <div className="pt-4 flex justify-center gap-4">
            <div className="animate-pulse">
               <span className="font-['Bangers'] text-4xl text-purple-600 block transform -rotate-12">ZAP!</span>
            </div>
             <div className="animate-pulse delay-100">
               <span className="font-['Bangers'] text-4xl text-green-600 block transform rotate-12">POW!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;