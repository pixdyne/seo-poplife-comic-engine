import React from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './components/Home';
import BlogPostPage from './components/BlogPostPage';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (anchorId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(anchorId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(anchorId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b-4 border-black bg-white px-6 py-3 flex justify-between items-center box-shadow-hard-sm">
      <div className="font-['Bangers'] text-3xl tracking-wide cursor-pointer" onClick={scrollToTop}>Popunch</div>
      <div className="hidden md:flex gap-4 font-bold text-sm">
        <button onClick={() => handleNavClick('')} className="hover:underline decoration-4 decoration-pink-500 uppercase">HOME</button>
        <button onClick={() => handleNavClick('maker')} className="hover:underline decoration-4 decoration-cyan-500 uppercase">MAKER</button>
        <button onClick={() => handleNavClick('blog')} className="hover:underline decoration-4 decoration-yellow-500 uppercase">BLOG</button>
        <a href="https://ai.google.dev" target="_blank" rel="noreferrer" className="hover:underline decoration-4 decoration-lime-500">API</a>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t-8 border-cyan-400">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-4xl font-['Bangers'] text-yellow-400 mb-4">Popunch</h3>
          <p className="font-bold">Built for the bold. Powered by Gemini.</p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4 border-b-2 border-white inline-block">LINKS</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-cyan-400">Terms of Art</a></li>
            <li><a href="#" className="hover:text-pink-500">Privacy Palette</a></li>
          </ul>
        </div>
        <div className="flex items-center justify-center md:justify-end">
           <div className="w-16 h-16 bg-pink-500 rounded-full border-4 border-white flex items-center justify-center font-['Bangers'] text-2xl animate-spin-slow">
             PP
           </div>
        </div>
      </div>
      <div className="text-center mt-12 text-sm font-mono text-gray-400">
        © {new Date().getFullYear()} Popunch Studios. All rights reserved.
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-yellow-400 text-black overflow-x-hidden selection:bg-black selection:text-white pt-16">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;