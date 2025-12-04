/*
 * DevHub.jsx - Developer Cave / Man Cave
 * =======================================
 * 
 * This page contains the Developer Cave content for DJ Strappy.
 * The "Man Cave" is a personal space showcasing developer skills,
 * quick links, contact information, and a short bio.
 * 
 * TODO: Once UI Integration
 * =========================
 * Replace the custom components with Once UI equivalents:
 * - Card component for sections
 * - Button component for links
 * - Grid component for layout
 * - Typography components for headings
 */

import { Link } from 'react-router-dom'

function DevHub() {
  const quickLinks = [
    { name: 'GitHub', url: 'https://github.com/SEUB66', icon: '💻' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Portfolio', url: '/', icon: '🎨' },
    { name: 'Music', url: '#', icon: '🎵' },
  ]

  const skills = [
    'Web Design',
    'App Development',
    'Company Branding',
    'Social Network Boosting',
    'Videoclip Ads Creation',
    'Digital Strategy',
  ]

  return (
    <div className="devhub">
      <div className="container">
        {/* Hero Section */}
        <section className="section" style={{ textAlign: 'center', paddingTop: '3rem' }}>
          <div className="devhub-avatar" style={{ marginBottom: '1.5rem' }}>
            {/* TODO: Replace with actual avatar image */}
            <div 
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary-purple), var(--primary-cyan))',
                margin: '0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
              }}
            >
              🎧
            </div>
          </div>
          <h1 className="section-title gradient-text" style={{ fontSize: '3rem' }}>
            Developer Cave
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Welcome to the Man Cave — where code meets creativity, and digital dreams become reality.
          </p>
        </section>

        {/* Quick Links Section */}
        <section className="section">
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
            Quick Links
          </h2>
          <div className="grid grid-2">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="card"
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  textDecoration: 'none',
                  color: 'var(--text-light)',
                  transition: 'transform 0.2s ease, background 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <span style={{ fontSize: '2rem' }}>{link.icon}</span>
                <span style={{ fontWeight: '500', fontSize: '1.1rem' }}>{link.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Skills / Services Section */}
        <section className="section">
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
            What I Do
          </h2>
          <div className="card">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: 'linear-gradient(135deg, var(--primary-purple), var(--primary-cyan))',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Short Bio Section */}
        <section className="section">
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
            About Me
          </h2>
          <div className="card">
            <p style={{ lineHeight: '1.8', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              I'm <strong style={{ color: 'var(--text-light)' }}>DJ Strappy</strong>, 
              the creative force behind <strong style={{ color: 'var(--primary-teal)' }}>APPLEPPUNK</strong>. 
              I specialize in digital solutions that make an impact — from stunning web designs 
              and powerful app development to complete brand identities and social media strategies.
            </p>
            <p style={{ lineHeight: '1.8', color: 'var(--text-muted)', fontSize: '1.1rem', marginTop: '1rem' }}>
              When I'm not coding, you'll find me mixing beats and creating videoclip ads that 
              capture attention. My mission is to help businesses and individuals transform their 
              digital presence and reach their full potential.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
            Get In Touch
          </h2>
          <div className="card" style={{ textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to start a project or just want to say hi? Let's connect!
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="mailto:contact@djstrappy.com" 
                className="btn btn-primary"
              >
                📧 Email Me
              </a>
              <a 
                href="https://github.com/SEUB66" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <section className="section" style={{ textAlign: 'center' }}>
          <Link to="/" className="btn btn-outline">
            ← Back to Home
          </Link>
        </section>
      </div>
    </div>
  )
}

export default DevHub
