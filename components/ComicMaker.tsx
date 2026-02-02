import React, { useState, useRef } from 'react';
import { generateComicCaption } from '../services/geminiService';
import { ComicResponse } from '../types';
import PopButton from './ui/PopButton';
import SpeechBubble from './ui/SpeechBubble';

const ComicMaker: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ComicResponse | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setResult(null); // Reset result on new image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!inputText && !selectedImage) return;

    setIsLoading(true);
    setResult(null);

    const response = await generateComicCaption(selectedImage, inputText);
    setResult(response);
    setIsLoading(false);
  };

  const handleClear = () => {
    setInputText('');
    setSelectedImage(null);
    setResult(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Column: Input Controls */}
        <div className="space-y-8">
           <div className="bg-white border-4 border-black p-6 box-shadow-hard relative">
             <div className="absolute -top-5 left-4 bg-red-500 text-white font-['Bangers'] text-2xl px-4 py-1 border-2 border-black transform -rotate-2">
               STEP 1: THE SOURCE
             </div>

             <div className="space-y-6 mt-4">
               <div>
                 <label className="block text-xl font-bold mb-2">SCENARIO / THOUGHT</label>
                 <textarea
                   className="w-full border-4 border-black p-4 text-xl font-bold bg-gray-50 focus:bg-yellow-100 focus:outline-none focus:ring-0 transition-colors"
                   rows={3}
                   placeholder="e.g., I dropped my ice cream..."
                   value={inputText}
                   onChange={(e) => setInputText(e.target.value)}
                 />
               </div>

               <div>
                 <label className="block text-xl font-bold mb-2">UPLOAD PHOTO (OPTIONAL)</label>
                 <div className="relative">
                   <input
                     type="file"
                     ref={fileInputRef}
                     accept="image/*"
                     onChange={handleFileChange}
                     className="block w-full text-sm text-slate-500
                       file:mr-4 file:py-3 file:px-6
                       file:border-4 file:border-black
                       file:text-lg file:font-bold
                       file:bg-cyan-400 file:text-black
                       hover:file:bg-cyan-300 cursor-pointer"
                   />
                 </div>
               </div>

               <div className="flex gap-4">
                 <PopButton 
                   label={isLoading ? "THINKING..." : "COMICIFY!"} 
                   onClick={handleGenerate} 
                   disabled={isLoading || (!inputText && !selectedImage)}
                   className="w-full"
                 />
                 <PopButton 
                   label="RESET" 
                   variant="secondary" 
                   onClick={handleClear}
                 />
               </div>
             </div>
           </div>
        </div>

        {/* Right Column: The Panel Result */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full aspect-square max-w-[500px] bg-white border-[6px] border-black box-shadow-hard p-4 flex flex-col items-center justify-center overflow-hidden">
            
            {/* Background Color/Theme */}
            <div 
              className="absolute inset-0 opacity-50 z-0 bg-halftone"
              style={{ backgroundColor: result?.colorTheme || '#e5e7eb' }} 
            ></div>

            {!result && !isLoading && (
               <div className="z-10 text-center opacity-50">
                 <span className="text-6xl font-['Bangers'] block mb-4">?</span>
                 <p className="text-2xl font-bold">WAITING FOR INPUT...</p>
               </div>
            )}

            {isLoading && (
              <div className="z-20 absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center flex-col">
                <div className="w-24 h-24 border-8 border-black border-t-transparent rounded-full animate-spin mb-4"></div>
                <h3 className="text-3xl font-['Bangers'] animate-pulse">INKING PLATES...</h3>
              </div>
            )}

            {/* Content Display */}
            {result && (
              <div className="z-10 w-full h-full flex flex-col justify-between relative">
                 {/* Sound Effect */}
                 <div className="absolute top-0 right-0 transform rotate-12 z-30 pointer-events-none">
                    <h2 className="text-6xl md:text-8xl font-['Bangers'] text-yellow-400 stroke-black drop-shadow-[4px_4px_0_rgba(0,0,0,1)]" 
                        style={{ WebkitTextStroke: '3px black' }}>
                      {result.soundEffect}
                    </h2>
                 </div>

                 {/* Image Display */}
                 <div className="flex-grow flex items-center justify-center p-2 relative">
                    {selectedImage ? (
                      <img 
                        src={selectedImage} 
                        alt="Comic source" 
                        className="max-h-full max-w-full border-4 border-black grayscale contrast-125 brightness-110 object-contain bg-white"
                      />
                    ) : (
                      <div className="text-9xl opacity-20 rotate-[-10deg]">🖼️</div>
                    )}
                 </div>

                 {/* Caption Bubble */}
                 <div className="z-20 -mt-8">
                   <SpeechBubble text={result.caption} />
                 </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComicMaker;