import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBlogPostBySlug } from '../services/blogService';
import { urlFor } from '../services/sanity';
import { BlogPost, PortableTextBlock } from '../types';

const renderPortableText = (blocks: PortableTextBlock[] | undefined): React.ReactNode => {
  if (!blocks || blocks.length === 0) return null;

  return blocks.map((block) => {
    if (block._type === 'block') {
      const text = block.children?.map((child) => child.text).join('') || '';

      switch (block.style) {
        case 'h1':
          return <h1 key={block._key} className="text-4xl font-['Bangers'] mt-8 mb-4">{text}</h1>;
        case 'h2':
          return <h2 key={block._key} className="text-3xl font-['Bangers'] mt-8 mb-4">{text}</h2>;
        case 'h3':
          return <h3 key={block._key} className="text-2xl font-['Bangers'] mt-6 mb-3">{text}</h3>;
        case 'blockquote':
          return <blockquote key={block._key} className="border-l-4 border-yellow-400 pl-4 italic my-4">{text}</blockquote>;
        default:
          return <p key={block._key} className="mb-4">{text}</p>;
      }
    }
    return null;
  });
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!slug) {
      setError('No post slug provided');
      setLoading(false);
      return;
    }

    fetchBlogPostBySlug(slug)
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching blog post:', err);
        setError('Failed to load blog post');
        setLoading(false);
      });
  }, [slug]);

  // Update meta tags when post loads
  useEffect(() => {
    if (post) {
      // Update title
      document.title = `${post.title} | Popunch`;

      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', post.excerpt);

      // Open Graph tags
      const ogTags = [
        { property: 'og:title', content: post.title },
        { property: 'og:description', content: post.excerpt },
        { property: 'og:type', content: 'article' },
      ];

      if (post.mainImage) {
        ogTags.push({ property: 'og:image', content: urlFor(post.mainImage).width(1200).height(630).url() });
      }

      ogTags.forEach(({ property, content }) => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
          tag = document.createElement('meta');
          tag.setAttribute('property', property);
          document.head.appendChild(tag);
        }
        tag.setAttribute('content', content);
      });
    }

    // Cleanup: reset title when leaving
    return () => {
      document.title = 'Popunch';
    };
  }, [post]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-white">
        <div className="inline-block bg-yellow-400 border-4 border-black px-6 py-3 font-bold text-xl animate-pulse">
          LOADING...
        </div>
      </div>
    );
  }

  if (error || !post) {
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

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).toUpperCase();

  return (
    <article className="min-h-screen bg-white">
       {/* Hero / Header of the Post */}
       <div className={`relative w-full ${post.color} border-b-8 border-black overflow-hidden`}>
          {/* Main Image */}
          {post.mainImage && (
            <div className="w-full h-64 md:h-96 relative">
              <img
                src={urlFor(post.mainImage).width(1200).height(600).url()}
                alt={post.mainImage.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          )}
          <div className="absolute inset-0 bg-halftone opacity-10 pointer-events-none"></div>
          <div className={`${post.mainImage ? 'absolute bottom-0 left-0 right-0' : ''} py-12 px-6`}>
            <div className="max-w-4xl mx-auto relative z-10 text-center">
               <div className="inline-block bg-white border-4 border-black px-4 py-1 mb-6 transform -rotate-2 box-shadow-hard-sm">
                  <span className="font-bold text-sm tracking-widest">{post.category}</span>
               </div>
               <h1 className="text-5xl md:text-7xl font-['Bangers'] text-white text-shadow-pop stroke-black leading-tight" style={{ WebkitTextStroke: '2px black' }}>
                 {post.title}
               </h1>
               <p className="mt-6 text-xl font-bold bg-black text-white inline-block px-3 py-1">
                 PUBLISHED: {formattedDate}
               </p>
            </div>
          </div>
       </div>

       {/* Content Body */}
       <div className="max-w-3xl mx-auto px-6 py-16 relative">
          <div className="prose prose-xl prose-headings:font-['Bangers'] prose-p:font-['Comic_Neue'] prose-p:font-bold text-black max-w-none">
            <p className="text-2xl leading-relaxed border-l-8 border-yellow-400 pl-6 mb-10 italic">
              {post.excerpt}
            </p>

            {renderPortableText(post.content)}

            {/* Content Image */}
            {post.contentImage && (
              <figure className="my-12 border-4 border-black box-shadow-hard overflow-hidden">
                <img
                  src={urlFor(post.contentImage).width(800).height(500).url()}
                  alt={post.contentImage.alt}
                  className="w-full h-auto"
                />
                <figcaption className="bg-yellow-400 border-t-4 border-black px-4 py-2 font-bold text-sm">
                  {post.contentImage.alt}
                </figcaption>
              </figure>
            )}
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
