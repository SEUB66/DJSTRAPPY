import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * DevHub (Studio) Page
 * 
 * This page contains the studio content for DJ STRAPPY.
 * Contact email: contact@djstrappy.com
 */
function DevHub() {
  const [logoError, setLogoError] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  return (
    <main className="hex-bg min-h-screen py-12 px-4">
      <div className="container">
        {/* Header */}
        <header className="text-center mb-12">
          <Link to="/" className="inline-block mb-6">
            {!logoError && (
              <img 
                src="/seublogo.png" 
                alt="DJ STRAPPY Logo" 
                className="w-24 h-24 mx-auto object-contain rounded-lg"
                onError={() => setLogoError(true)}
              />
            )}
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">The Studio</span>
          </h1>
          <p className="text-xl text-cyan-400 neon-text mb-2">
            DJ STRAPPY Hub
          </p>
          <p className="pixel-font text-xs text-cyan-400/70 tracking-wider">
            Music & Video Creation
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
                  href="https://twitter.com/djstrappy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  X (Twitter) - @djstrappy
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/djstrappy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Instagram - @djstrappy
                </a>
              </li>
              <li>
                <a 
                  href="https://soundcloud.com/djstrappy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.255-2.154c-.009-.058-.05-.1-.099-.1zm-.899.828c-.06 0-.091.037-.104.094l-.19 1.332.19 1.282c.013.054.044.09.104.09.06 0 .091-.036.103-.09l.213-1.282-.213-1.332c-.012-.057-.043-.094-.103-.094zm1.83-.576c-.063 0-.116.052-.123.115l-.199 2.107.199 2.057c.007.063.06.117.123.117.064 0 .116-.054.123-.117l.223-2.057-.223-2.107c-.007-.063-.059-.115-.123-.115zm.922-.409c-.076 0-.138.063-.145.139l-.186 2.516.186 2.454c.007.076.069.139.145.139.078 0 .14-.063.147-.139l.208-2.454-.208-2.516c-.007-.076-.069-.139-.147-.139zm.921-.156c-.089 0-.161.073-.168.162l-.172 2.672.172 2.607c.007.089.079.162.168.162.09 0 .161-.073.168-.162l.194-2.607-.194-2.672c-.007-.089-.078-.162-.168-.162zm.922-.114c-.101 0-.183.083-.19.184l-.159 2.786.159 2.72c.007.101.089.184.19.184.101 0 .183-.083.19-.184l.18-2.72-.18-2.786c-.007-.101-.089-.184-.19-.184zm.921-.084c-.113 0-.205.093-.212.206l-.146 2.87.146 2.803c.007.113.099.206.212.206.113 0 .204-.093.211-.206l.165-2.803-.165-2.87c-.007-.113-.098-.206-.211-.206zm.922-.07c-.126 0-.228.103-.234.229l-.133 2.94.133 2.871c.006.126.108.229.234.229.127 0 .228-.103.234-.229l.15-2.871-.15-2.94c-.006-.126-.107-.229-.234-.229zm.922-.057c-.138 0-.25.113-.256.251l-.121 2.997.121 2.927c.006.138.118.251.256.251.138 0 .25-.113.256-.251l.137-2.927-.137-2.997c-.006-.138-.118-.251-.256-.251zm.922-.042c-.15 0-.273.123-.279.273l-.108 3.039.108 2.968c.006.15.129.273.279.273.151 0 .273-.123.279-.273l.123-2.968-.123-3.039c-.006-.15-.128-.273-.279-.273zm5.039-.78c-.296 0-.583.035-.862.102-1.022-3.458-4.185-6.003-7.955-6.003-1.018 0-1.995.193-2.894.542-.213.084-.269.168-.269.336v11.773c0 .182.148.332.331.346.013.001 10.649 0 10.649 0 2.174 0 3.939-1.765 3.939-3.939s-1.765-3.939-3.939-3.939z"/>
                  </svg>
                  SoundCloud - DJ STRAPPY
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
              Want to collaborate or book DJ STRAPPY? Reach out!
            </p>
            <a 
              href="mailto:contact@djstrappy.com"
              className="glow-btn inline-block px-6 py-3 rounded-lg text-white font-semibold"
            >
              Email: contact@djstrappy.com
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Response time: Usually within 24-48 hours
            </p>
          </section>
        </div>

        {/* Short Bio Section */}
        <section className="card glow-border mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-cyan-400">🎧</span>
            About DJ STRAPPY
          </h2>
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              {avatarError ? (
                <span className="text-4xl">🎵</span>
              ) : (
                <img 
                  src="/avatar.png" 
                  alt="DJ STRAPPY Avatar"
                  className="w-28 h-28 rounded-full object-cover"
                  onError={() => setAvatarError(true)}
                />
              )}
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">DJ STRAPPY</h3>
              <p className="text-gray-300 mb-4">
                Passionate DJ and music producer with a love for creating unique sonic experiences. 
                Specializing in beat production, live DJ sets, and video creation. 
                Bringing the energy and vibes to every project.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">Music Production</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">DJ Services</span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">Video Creation</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Beat Making</span>
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
