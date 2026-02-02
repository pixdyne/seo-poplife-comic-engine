import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchBlogPosts } from '../services/blogService';
import { BlogPost } from '../types';
import BlogCard from './ui/BlogCard';

const BlogSection: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogPosts()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts');
        setLoading(false);
      });
  }, []);

  const handlePostClick = (post: BlogPost) => {
    navigate(`/blog/${post.slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section id="blog" className="py-20 bg-lime-400 border-t-8 border-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-halftone opacity-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-white border-4 border-black p-4 box-shadow-hard transform -rotate-1">
            <h2 className="text-5xl md:text-7xl font-['Bangers'] text-black leading-none">
              THE POP CHRONICLES
            </h2>
          </div>
          <p className="mt-6 text-xl font-bold max-w-2xl mx-auto">
            Stories from the ink-stained trenches of art and technology.
          </p>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block bg-white border-4 border-black px-6 py-3 font-bold text-xl animate-pulse">
              LOADING...
            </div>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="inline-block bg-red-500 text-white border-4 border-black px-6 py-3 font-bold text-xl">
              {error}
            </div>
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-block bg-white border-4 border-black px-6 py-3 font-bold text-xl">
              No blog posts yet. Check back soon!
            </div>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {posts.map((post) => (
              <BlogCard
                key={post._id}
                post={post}
                onClick={handlePostClick}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
