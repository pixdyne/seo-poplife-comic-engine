import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../services/blogData';

const BlogPostPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-white">
        <h1 className="text-6xl font-['Bangers'] mb-4">404: MISSING PANEL!</h1>
        <p className="text-xl font-bold mb-8">The ink has dried up and this page doesn't exist.</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-cyan-400 border-4 border-black px-6 py-3 font-bold text-xl uppercase box-shadow-hard hover:bg-cyan-300 transition-all"
        >
          Return to Reality
        </button>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-white">
       {/* Hero / Header of the Post */}
       <div className={`relative w-full py-20 px-6 ${post.color} border-b-8 border-black overflow-hidden`}>
          <div className="absolute inset-0 bg-halftone opacity-20"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
             <div className="inline-block bg-white border-4 border-black px-4 py-1 mb-6 transform -rotate-2 box-shadow-hard-sm">
                <span className="font-bold text-sm tracking-widest">{post.category}</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-['Bangers'] text-white text-shadow-pop stroke-black leading-tight" style={{ WebkitTextStroke: '2px black' }}>
               {post.title}
             </h1>
             <p className="mt-6 text-xl font-bold bg-black text-white inline-block px-3 py-1">
               PUBLISHED: {post.date}
             </p>
          </div>
       </div>

       {/* Content Body */}
       <div className="max-w-3xl mx-auto px-6 py-16 relative">
          <div className="prose prose-xl prose-headings:font-['Bangers'] prose-p:font-['Comic_Neue'] prose-p:font-bold text-black max-w-none">
            <p className="text-2xl leading-relaxed border-l-8 border-yellow-400 pl-6 mb-10 italic">
              {post.excerpt}
            </p>
            
            <p>{post.content}</p>
            
            <h3 className="text-4xl mt-12 mb-6 text-pink-500" style={{ WebkitTextStroke: '1px black' }}>THE DEEP DIVE</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <div className="my-12 p-8 bg-gray-100 border-4 border-black box-shadow-hard transform rotate-1">
               <h4 className="text-2xl font-['Bangers'] mb-2">FUN FACT!</h4>
               <p className="text-lg">
                 Roy Lichtenstein's first pop painting, "Look Mickey" (1961), was a challenge from his son to paint as well as the Mickey Mouse comic book he was reading.
               </p>
            </div>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Navigation Footer */}
          <div className="mt-20 border-t-4 border-black border-dashed pt-12 flex justify-between items-center">
             <button 
               onClick={() => navigate('/')}
               className="flex items-center gap-2 font-bold hover:text-cyan-600 transition-colors"
             >
               ← BACK TO HOME
             </button>
             <div className="font-['Bangers'] text-2xl">
               SHARE THIS: <span className="text-pink-500 cursor-pointer hover:underline">FB</span> / <span className="text-cyan-500 cursor-pointer hover:underline">TW</span>
             </div>
          </div>
       </div>
    </article>
  );
};

export default BlogPostPage;