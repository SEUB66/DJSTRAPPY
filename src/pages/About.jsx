import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * About / Home Page
 * 
 * Landing page for DJ STRAPPY - Music and Video Creation
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
                alt="DJ STRAPPY Logo" 
                className="w-32 h-32 mx-auto object-contain rounded-lg"
                onError={() => setLogoError(true)}
              />
            )}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">DJ STRAPPY</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 neon-text mb-4">
            Music & Video Creation
          </p>
          <p className="pixel-font text-xs text-cyan-400/70 tracking-wider mb-8">
            BEATS • MIXES • VISUALS
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/devhub"
              className="glow-btn px-8 py-4 rounded-lg text-lg font-bold"
            >
              Enter The Studio
            </Link>
            <a 
              href="mailto:contact@djstrappy.com"
              className="px-8 py-4 rounded-lg text-lg font-bold border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </header>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card glow-border text-center">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-xl font-bold text-white mb-3">Music Production</h3>
            <p className="text-gray-400">
              Original beats, mixes, and music production. From hip-hop to electronic and everything in between.
            </p>
          </div>
          <div className="card glow-border text-center">
            <div className="text-4xl mb-4">🎧</div>
            <h3 className="text-xl font-bold text-white mb-3">DJ Services</h3>
            <p className="text-gray-400">
              Live DJ sets and event performances. Bringing the energy and vibes to any occasion.
            </p>
          </div>
          <div className="card glow-border text-center">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-xl font-bold text-white mb-3">Video Creation</h3>
            <p className="text-gray-400">
              Music videos, visualizers, and creative video content to bring your music to life.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="card glow-border mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            About <span className="gradient-text">DJ STRAPPY</span>
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-300 text-lg mb-6">
              DJ STRAPPY is a music and video creation service dedicated to bringing your 
              creative visions to life. From beat production to full video projects, 
              we create unique sonic and visual experiences.
            </p>
            <p className="text-gray-400 mb-6">
              Whether you need original music production, a DJ for your next event, 
              or stunning visuals to complement your sound, DJ STRAPPY has you covered.
            </p>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Create Something Amazing?</h2>
          <p className="text-gray-400 mb-6">
            Let's make music and visuals together.
          </p>
          <a 
            href="mailto:contact@djstrappy.com"
            className="glow-btn inline-block px-8 py-4 rounded-lg text-lg font-bold"
          >
            Get in Touch
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Contact: <a href="mailto:contact@djstrappy.com" className="text-cyan-400">contact@djstrappy.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}

export default About;
