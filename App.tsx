import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
import Home from './components/Home';
import BlogPostPage from './components/BlogPostPage';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';

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
          <p className="font-bold">Built for the bold.</p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4 border-b-2 border-white inline-block">LINKS</h4>
          <ul className="space-y-2">
            <li><Link to="/terms" className="hover:text-cyan-400">Terms of Art</Link></li>
            <li><Link to="/privacy" className="hover:text-pink-500">Privacy Palette</Link></li>
          </ul>
        </div>
        <div className="flex items-center justify-center md:justify-end">
           <div className="w-16 h-16 bg-pink-500 rounded-full border-4 border-white flex items-center justify-center font-['Bangers'] text-2xl animate-spin-slow">
             PP
           </div>
        </div>
      </div>
      <div className="text-center mt-12 text-sm font-mono text-gray-400 space-y-2">
        <p>
          Developed by <a href="https://felixyu.net" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">Felix Yu</a> at <a href="https://pixdyne.com" target="_blank" rel="noreferrer" className="text-pink-500 hover:underline">Pixdyne</a>
        </p>
        <p>© {new Date().getFullYear()} Popunch. All rights reserved.</p>
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
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;