import { Link } from 'react-router-dom'

/*
 * Home Page
 * Landing page for the DJ Strappy Dev Hub site
 */
function Home() {
  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to DJ Strappy</h1>
          <p className="hero-subtitle">
            Music Producer • Developer • Creative Technologist
          </p>
          <p className="hero-description">
            Blending beats with code. Explore the Developer Cave for projects, 
            collaborations, and creative tech experiments.
          </p>
          <div className="hero-actions">
            <Link to="/devhub" className="btn btn-primary">
              Enter Dev Hub
            </Link>
            <a href="mailto:founder@applepunk.com" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>What's Inside</h2>
        <div className="features-grid">
          <div className="card">
            <h3>🎵 Music</h3>
            <p>Electronic beats, remixes, and original productions crafted with passion.</p>
          </div>
          <div className="card">
            <h3>💻 Code</h3>
            <p>Web apps, tools, and experiments at the intersection of music and technology.</p>
          </div>
          <div className="card">
            <h3>🚀 Projects</h3>
            <p>Explore ongoing projects and collaborations in the creative tech space.</p>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          text-align: center;
          padding: 4rem 0;
        }
        
        .hero-content h1 {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-secondary);
          margin-bottom: 1rem;
        }
        
        .hero-description {
          max-width: 600px;
          margin: 0 auto 2rem;
          color: var(--color-text-secondary);
        }
        
        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .features-section {
          padding: 3rem 0;
        }
        
        .features-section h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .features-grid .card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }
        
        .features-grid .card p {
          color: var(--color-text-secondary);
        }
        
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
