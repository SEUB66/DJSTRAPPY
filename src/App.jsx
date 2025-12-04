import { Routes, Route, Link, useLocation } from 'react-router-dom'
import DevHub from './pages/DevHub.jsx'
import About from './pages/About.jsx'

/*
 * TODO: Once UI Integration
 * =========================
 * When Once UI is available, replace the navigation and layout components:
 * 
 * import { Navigation, Layout, Container } from 'once-ui'
 * 
 * Example usage:
 * <Layout>
 *   <Navigation items={navItems} />
 *   <Container>
 *     <Routes>...</Routes>
 *   </Container>
 * </Layout>
 */

function App() {
  const location = useLocation()

  return (
    <div className="app">
      {/* Navigation - TODO: Replace with Once UI Navigation component */}
      <nav className="nav">
        <Link to="/" className="logo gradient-text" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          DJ Strappy
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/devhub" className={location.pathname === '/devhub' ? 'active' : ''}>
              Dev Hub
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/devhub" element={<DevHub />} />
          <Route path="/man-cave" element={<DevHub />} />
        </Routes>
      </main>

      {/* Footer - TODO: Replace with Once UI Footer component */}
      <footer className="footer">
        <p style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} DJ Strappy / APPLEPPUNK. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
