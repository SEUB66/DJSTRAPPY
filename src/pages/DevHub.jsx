/*
 * DevHub Page (Developer Cave / Man Cave)
 * 
 * This page contains the Developer Cave content with quick links,
 * contact information, and a short bio for DJ Strappy.
 * 
 * TODO: Once UI Integration
 * Replace native elements with Once UI components when available:
 * - Card components for sections
 * - Button components for links
 * - Avatar component for profile image
 * - Grid/Layout components for responsive design
 */

function DevHub() {
  return (
    <div className="page-container devhub-page">
      <header className="devhub-header">
        <div className="profile-section">
          <div className="avatar-container">
            {/* 
              TODO: Replace with actual avatar image
              The existing repo has profile images in src/assets/branding/
              When migrating, copy profile.png or similar here
            */}
            <div className="avatar-placeholder">
              <span>DJ</span>
            </div>
          </div>
          <div className="profile-info">
            <h1>Developer Cave</h1>
            <p className="tagline">DJ Strappy's Man Cave</p>
          </div>
        </div>
      </header>

      <section className="bio-section card">
        <h2>Short Bio</h2>
        <p>
          DJ Strappy is a music producer and creative technologist based in Paris, France. 
          With a passion for blending electronic music production with cutting-edge technology, 
          the Developer Cave serves as a hub for experimental projects, collaborations, 
          and creative explorations at the intersection of sound and code.
        </p>
        <p>
          From crafting beats to building web applications, the journey is always about 
          pushing boundaries and creating something unique. Welcome to the cave!
        </p>
      </section>

      <section className="quicklinks-section">
        <h2>Quick Links</h2>
        <div className="links-grid">
          <a 
            href="https://github.com/SEUB66" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card link-card"
          >
            <span className="link-icon">💻</span>
            <span className="link-text">GitHub</span>
            <span className="link-desc">Code & Projects</span>
          </a>
          
          <a 
            href="https://soundcloud.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card link-card"
          >
            <span className="link-icon">🎵</span>
            <span className="link-text">SoundCloud</span>
            <span className="link-desc">Music & Mixes</span>
          </a>
          
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card link-card"
          >
            <span className="link-icon">🐦</span>
            <span className="link-text">Twitter / X</span>
            <span className="link-desc">Updates & Thoughts</span>
          </a>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card link-card"
          >
            <span className="link-icon">📸</span>
            <span className="link-text">Instagram</span>
            <span className="link-desc">Visual Journey</span>
          </a>
          
          <a 
            href="https://applepunk.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card link-card"
          >
            <span className="link-icon">🍎</span>
            <span className="link-text">Apple Punk</span>
            <span className="link-desc">Main Project</span>
          </a>
          
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card link-card"
          >
            <span className="link-icon">🎬</span>
            <span className="link-text">YouTube</span>
            <span className="link-desc">Videos & Tutorials</span>
          </a>
        </div>
      </section>

      <section className="contact-section card">
        <h2>Contact</h2>
        <p>
          Have a project idea, collaboration proposal, or just want to say hi? 
          Reach out through any of the channels above or send an email directly.
        </p>
        <div className="contact-info">
          <a href="mailto:founder@applepunk.com" className="contact-email">
            <span className="email-icon">✉️</span>
            founder@applepunk.com
          </a>
        </div>
        <div className="contact-location">
          <span className="location-icon">📍</span>
          <span>Paris, France</span>
        </div>
      </section>

      <style>{`
        .devhub-page {
          padding-top: 3rem;
          padding-bottom: 3rem;
        }
        
        .devhub-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .profile-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        
        .avatar-container {
          width: 120px;
          height: 120px;
        }
        
        .avatar-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          border: 3px solid var(--color-border);
        }
        
        .profile-info h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .tagline {
          color: var(--color-text-secondary);
          font-size: 1.1rem;
        }
        
        .bio-section {
          margin-bottom: 2rem;
        }
        
        .bio-section h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }
        
        .bio-section p {
          color: var(--color-text-secondary);
          margin-bottom: 1rem;
          line-height: 1.7;
        }
        
        .bio-section p:last-child {
          margin-bottom: 0;
        }
        
        .quicklinks-section {
          margin-bottom: 2rem;
        }
        
        .quicklinks-section h2 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .links-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1rem;
        }
        
        .link-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.5rem 1rem;
          color: var(--color-text);
        }
        
        .link-card:hover {
          text-decoration: none;
          border-color: var(--color-primary);
        }
        
        .link-icon {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }
        
        .link-text {
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }
        
        .link-desc {
          font-size: 0.8rem;
          color: var(--color-text-secondary);
        }
        
        .contact-section h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }
        
        .contact-section p {
          color: var(--color-text-secondary);
          margin-bottom: 1.5rem;
        }
        
        .contact-info {
          margin-bottom: 1rem;
        }
        
        .contact-email {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
          padding: 0.75rem 1.25rem;
          background-color: var(--color-background);
          border-radius: 8px;
          border: 1px solid var(--color-border);
        }
        
        .contact-email:hover {
          border-color: var(--color-primary);
          text-decoration: none;
        }
        
        .contact-location {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-secondary);
          margin-top: 1rem;
        }
        
        @media (max-width: 768px) {
          .profile-info h1 {
            font-size: 1.75rem;
          }
          
          .links-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  )
}

export default DevHub
