import { Link } from 'react-router-dom';

/**
 * DevHub (Developer Cave / Man Cave) Page
 * 
 * This page contains the Developer Cave content migrated from the Astro site.
 * Contact email: founder@applepunk.com
 */
function DevHub() {
  return (
    <main className="hex-bg min-h-screen py-12 px-4">
      <div className="container">
        {/* Header */}
        <header className="text-center mb-12">
          <Link to="/" className="inline-block mb-6">
            <img 
              src="/seublogo.png" 
              alt="APPLEPUNK Logo" 
              className="w-24 h-24 mx-auto object-contain rounded-lg"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Developer Cave</span>
          </h1>
          <p className="text-xl text-cyan-400 neon-text mb-2">
            APPLEPUNK Dev Hub
          </p>
          <p className="pixel-font text-xs text-cyan-400/70 tracking-wider">
            Web Design & App Development
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* Quick Links Section */}
          <section className="card glow-border">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">⚡</span>
              Quick Links
            </h2>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://github.com/SEUB66" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub - SEUB66
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/appleppunk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X (Twitter) - @appleppunk
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/appleppunk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram - @appleppunk
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/appleppunk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn - APPLEPUNK
                </a>
              </li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="card glow-border">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-cyan-400">📧</span>
              Contact
            </h2>
            <p className="text-gray-300 mb-6">
              Have a project idea or want to collaborate? Reach out!
            </p>
            <a 
              href="mailto:founder@applepunk.com"
              className="glow-btn inline-block px-6 py-3 rounded-lg text-white font-semibold"
            >
              Email: founder@applepunk.com
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Response time: Usually within 24-48 hours
            </p>
          </section>
        </div>

        {/* Short Bio Section */}
        <section className="card glow-border mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-cyan-400">👨‍💻</span>
            About the Developer
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              <img 
                src="/avatar.png" 
                alt="SebG Avatar"
                className="w-28 h-28 rounded-full object-cover"
                onError={(e) => { 
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-4xl">🎵</span>';
                }}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">SebG</h3>
              <p className="text-gray-300 mb-4">
                Passionate web designer and app developer with a love for creative digital experiences. 
                Specializing in iOS development and modern web technologies. Creating unique digital 
                solutions that blend functionality with stunning design.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Web Design</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">iOS Development</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Music Production</span>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home Link */}
        <div className="text-center">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default DevHub;
