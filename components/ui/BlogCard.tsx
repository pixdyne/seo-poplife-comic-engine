import React from 'react';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <div 
      onClick={() => onClick(post)}
      className="group relative bg-white border-4 border-black box-shadow-hard cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full"
    >
      {/* Header Color Block */}
      <div className={`h-24 ${post.color} border-b-4 border-black relative overflow-hidden`}>
        <div className="absolute inset-0 bg-halftone opacity-20"></div>
        <div className="absolute top-2 right-2 bg-white border-2 border-black px-2 py-0.5 font-bold text-xs uppercase tracking-wider transform rotate-2">
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-2 text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
          <span className="w-2 h-2 bg-black rounded-full"></span>
          {post.date}
        </div>
        
        <h3 className="text-2xl md:text-3xl font-['Bangers'] leading-none mb-3 group-hover:text-pink-600 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-base font-bold line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>

        {/* Action Line */}
        <div className="mt-auto flex justify-between items-center border-t-2 border-black pt-4 border-dashed">
          <span className="font-['Bangers'] text-xl uppercase text-cyan-600">READ NOW!</span>
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;