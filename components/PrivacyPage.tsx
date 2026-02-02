import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="relative w-full py-16 px-6 bg-pink-500 border-b-8 border-black overflow-hidden">
        <div className="absolute inset-0 bg-halftone opacity-20"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-['Bangers'] text-white text-shadow-pop" style={{ WebkitTextStroke: '2px black' }}>
            PRIVACY PALETTE
          </h1>
          <p className="mt-4 text-xl font-bold bg-black text-white inline-block px-3 py-1">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-xl text-black max-w-none space-y-8">

          <section>
            <h2 className="text-3xl font-['Bangers'] text-cyan-500 mb-4" style={{ WebkitTextStroke: '1px black' }}>1. INFORMATION WE COLLECT</h2>
            <p className="font-bold leading-relaxed">
              We collect information you provide directly to us, such as when you create content using our comic generator. This may include text inputs, uploaded images, and any other content you submit to the Service. We also automatically collect certain information when you use our Service, including your IP address, browser type, and usage data.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Bangers'] text-cyan-500 mb-4" style={{ WebkitTextStroke: '1px black' }}>2. HOW WE USE YOUR INFORMATION</h2>
            <p className="font-bold leading-relaxed">
              We use the information we collect to provide, maintain, and improve our Service; process and complete your requests; send you technical notices and support messages; and monitor and analyze trends, usage, and activities in connection with our Service.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Bangers'] text-cyan-500 mb-4" style={{ WebkitTextStroke: '1px black' }}>3. AI PROCESSING</h2>
            <p className="font-bold leading-relaxed">
              Content you submit may be processed by third-party AI services (such as Google Gemini) to generate comic panels. This processing is necessary to provide our core Service functionality. We do not use your content to train AI models. Please review the privacy policies of our AI service providers for more information.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Bangers'] text-cyan-500 mb-4" style={{ WebkitTextStroke: '1px black' }}>4. DATA RETENTION</h2>
            <p className="font-bold leading-relaxed">
              We retain your information for as long as necessary to provide you with the Service and for legitimate business purposes. Generated content is processed in real-time and is not permanently stored on our servers unless you explicitly save it.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Bangers'] text-cyan-500 mb-4" style={{ WebkitTextStroke: '1px black' }}>5. INFORMATION SHARING</h2>
            <p className="font-bold leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties except as described in this policy. We may share information with service providers who assist us in operating our Service, conducting our business, or serving our users.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Bangers'] text-cyan-500 mb-4" style={{ WebkitTextStroke: '1px black' }}>6. COOKIES & TRACKING</h2>
            <p className="font-bold leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Bangers'] text-cyan-500 mb-4" style={{ WebkitTextStroke: '1px black' }}>7. YOUR RIGHTS</h2>
            <p className="font-bold leading-relaxed">
              You have the right to access, correct, or delete your personal information. You may also have the right to restrict or object to certain processing of your data. To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Bangers'] text-cyan-500 mb-4" style={{ WebkitTextStroke: '1px black' }}>8. CHILDREN'S PRIVACY</h2>
            <p className="font-bold leading-relaxed">
              Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Bangers'] text-cyan-500 mb-4" style={{ WebkitTextStroke: '1px black' }}>9. CHANGES TO THIS POLICY</h2>
            <p className="font-bold leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-['Bangers'] text-cyan-500 mb-4" style={{ WebkitTextStroke: '1px black' }}>10. CONTACT US</h2>
            <p className="font-bold leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at <a href="https://pixdyne.com" target="_blank" rel="noreferrer" className="text-pink-500 hover:underline">pixdyne.com</a>.
            </p>
          </section>

        </div>

        {/* Navigation Footer */}
        <div className="mt-16 border-t-4 border-black border-dashed pt-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 font-bold hover:text-pink-600 transition-colors"
          >
            ← BACK TO HOME
          </button>
        </div>
      </div>
    </article>
  );
};

export default PrivacyPage;
