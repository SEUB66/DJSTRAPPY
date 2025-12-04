/*
 * About.jsx - Home / About Page
 * ==============================
 * 
 * This page serves as the landing page for the DJ Strappy site.
 * Content migrated from the original Astro site.
 * 
 * TODO: Once UI Integration
 * =========================
 * Replace custom components with Once UI equivalents:
 * - Hero component
 * - Feature cards
 * - CTA sections
 */

import { Link } from 'react-router-dom'

function About() {
  const services = [
    {
      title: 'Web Design',
      description: 'Creating stunning, responsive websites that captivate your audience and drive conversions. Modern designs tailored to your brand.',
      icon: '🌐',
    },
    {
      title: 'App Development',
      description: 'Building powerful mobile and web applications with cutting-edge technologies. From concept to launch, we bring your ideas to life.',
      icon: '📱',
    },
    {
      title: 'Company Branding',
      description: 'Crafting unique brand identities that stand out. Logo design, visual guidelines, and complete brand strategies for your business.',
      icon: '🎨',
    },
    {
      title: 'Social Network Boosting',
      description: 'Amplifying your social media presence with strategic campaigns, content creation, and audience engagement tactics.',
      icon: '🚀',
    },
    {
      title: 'Videoclip Ads Creation',
      description: 'Producing compelling video advertisements and promotional clips that capture attention and tell your brand\'s story.',
      icon: '🎬',
    },
    {
      title: 'Digital Strategy',
      description: 'Comprehensive digital marketing strategies to grow your online presence and reach your target audience effectively.',
      icon: '📊',
    },
  ]

  return (
    <div className="about">
      <div className="container">
        {/* Hero Section */}
        <section className="section" style={{ textAlign: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
          <h1 
            className="gradient-text" 
            style={{ 
              fontSize: 'clamp(3rem, 8vw, 5rem)', 
              fontWeight: '800',
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem',
            }}
          >
            APPLEPPUNK
          </h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-light)', fontWeight: '600', marginBottom: '1rem' }}>
            Digital Solutions That Make an Impact
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: '1.7' }}>
            We specialize in <strong style={{ color: 'var(--text-light)' }}>Web Design</strong>,{' '}
            <strong style={{ color: 'var(--text-light)' }}>App Development</strong>,{' '}
            <strong style={{ color: 'var(--text-light)' }}>Company Branding</strong>,{' '}
            <strong style={{ color: 'var(--text-light)' }}>Social Network Boosting</strong>, and{' '}
            <strong style={{ color: 'var(--text-light)' }}>Videoclip Ads Creation</strong>.
            Transform your digital presence with us.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#services" className="btn btn-primary">
              🚀 Our Services
            </a>
            <Link to="/devhub" className="btn btn-outline">
              🎧 Dev Hub
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section" style={{ scrollMarginTop: '80px' }}>
          <h2 className="section-title gradient-text" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            Our Services
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Comprehensive digital solutions to help your business thrive in the modern world.
          </p>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {services.map((service) => (
              <div 
                key={service.title} 
                className="card"
                style={{
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <span 
                    style={{ 
                      fontSize: '2rem',
                      background: 'linear-gradient(135deg, var(--primary-purple), var(--primary-cyan))',
                      borderRadius: '8px',
                      padding: '0.5rem',
                      lineHeight: '1',
                    }}
                  >
                    {service.icon}
                  </span>
                  <div>
                    <h3 style={{ 
                      color: 'var(--primary-teal)', 
                      fontSize: '1.2rem', 
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                    }}>
                      {service.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="section">
          <div 
            className="card"
            style={{
              background: 'linear-gradient(135deg, var(--primary-purple), var(--primary-teal), var(--primary-cyan))',
              textAlign: 'center',
              padding: '3rem 2rem',
            }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
              Feel the Music.
            </h2>
            <p style={{ fontSize: '1.2rem', opacity: '0.9', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
              Experience the unique sounds of DJ Strappy. Let the music take you on a journey you won't forget.
            </p>
            <Link 
              to="/devhub" 
              className="btn"
              style={{ 
                background: '#facc15', 
                color: '#1a1a2e', 
                fontWeight: '600',
              }}
            >
              Explore Dev Hub
            </Link>
          </div>
        </section>

        {/* About Summary */}
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
              About This Site
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              This is the official site of <strong style={{ color: 'var(--text-light)' }}>DJ Strappy</strong> / 
              <strong style={{ color: 'var(--primary-teal)' }}> APPLEPPUNK</strong>.
              Built with React and Vite, this site showcases digital services, creative work, 
              and the Developer Cave — a personal space where code meets creativity.
            </p>
            <p style={{ color: 'var(--text-dim)', marginTop: '1rem', fontSize: '0.9rem' }}>
              Powered by React + Vite • Coming soon: Once UI integration
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
