import React from 'react';

interface SpeechBubbleProps {
  text: string;
  position?: 'left' | 'right';
  className?: string;
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({ text, position = 'left', className = '' }) => {
  return (
    <div className={`relative bg-white border-4 border-black p-6 rounded-[50%] box-shadow-hard-sm max-w-md mx-auto my-4 ${className}`}>
      <p className="text-center text-lg md:text-xl font-bold uppercase leading-tight">
        {text}
      </p>
      {/* Tail */}
      <div 
        className={`absolute w-8 h-8 bg-white border-r-4 border-b-4 border-black transform ${position === 'left' ? 'rotate-45 -left-2 bottom-4' : 'rotate-45 -right-2 bottom-4'}`}
      ></div>
    </div>
  );
};

export default SpeechBubble;