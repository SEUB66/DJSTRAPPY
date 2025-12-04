import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * About / Home Page
 * 
 * Landing page for APPLEPUNK Developer Hub
 * Based on content from the original Astro site README and description.
 */
function About() {
  const [logoError, setLogoError] = useState(false);

  return (
    <main className="hex-bg min-h-screen py-12 px-4">
      <div className="container">
        {/* Hero Section */}
        <header className="text-center mb-16 pt-8">
          <div className="mb-8">
            {!logoError && (
              <img 
                src="/seublogo.png" 
                alt="APPLEPUNK Logo" 
                className="w-32 h-32 mx-auto object-contain rounded-lg"
                onError={() => setLogoError(true)}
              />
            )}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">APPLEPUNK</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 neon-text mb-4">
            Web Design & App Development
          </p>
          <p className="pixel-font text-xs text-cyan-400/70 tracking-wider mb-8">
            CREATIVE DIGITAL EXPERIENCES
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/devhub"
              className="glow-btn px-8 py-4 rounded-lg text-lg font-bold"
            >
              Enter Developer Cave
            </Link>
            <a 
              href="mailto:founder@applepunk.com"
              className="px-8 py-4 rounded-lg text-lg font-bold border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </header>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card glow-border text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-white mb-3">Web Design</h3>
            <p className="text-gray-400">
              Beautiful, responsive websites that capture your brand's essence and engage your audience.
            </p>
          </div>
          <div className="card glow-border text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-white mb-3">App Development</h3>
            <p className="text-gray-400">
              Native iOS and cross-platform applications built with modern technologies and best practices.
            </p>
          </div>
          <div className="card glow-border text-center">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-xl font-bold text-white mb-3">Creative Media</h3>
            <p className="text-gray-400">
              Music production, audio engineering, and multimedia content creation.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="card glow-border mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            About <span className="gradient-text">APPLEPUNK</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-300 text-lg mb-6">
              APPLEPUNK is a creative digital studio specializing in web design, app development, 
              and multimedia experiences. We blend cutting-edge technology with artistic vision 
              to create unique digital solutions.
            </p>
            <p className="text-gray-400 mb-6">
              From concept to deployment, we handle every aspect of your digital project with 
              passion and precision. Whether you need a stunning website, a powerful mobile app, 
              or creative media production, we've got you covered.
            </p>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-400 mb-6">
            Let's create something amazing together.
          </p>
          <a 
            href="mailto:founder@applepunk.com"
            className="glow-btn inline-block px-8 py-4 rounded-lg text-lg font-bold"
          >
            Get in Touch
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Contact: <a href="mailto:founder@applepunk.com" className="text-cyan-400">founder@applepunk.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}

export default About;
