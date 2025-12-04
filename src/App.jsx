import { Routes, Route, Link } from 'react-router-dom'
import DevHub from './pages/DevHub.jsx'
import Home from './pages/Home.jsx'

/*
 * TODO: Once UI Integration
 * Once UI components can be imported here when the package is installed:
 * import { Button, Card, Container } from 'once-ui';
 * 
 * Replace native HTML elements with Once UI components as needed.
 */

function App() {
  return (
    <div className="app">
      <nav className="main-nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src="/favicon.svg" alt="DJ Strappy" className="logo-icon" />
            <span>DJ Strappy</span>
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/devhub">Dev Hub</Link>
          </div>
        </div>
      </nav>
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devhub" element={<DevHub />} />
          <Route path="/man-cave" element={<DevHub />} />
        </Routes>
      </main>
      
      <footer className="main-footer">
        <div className="footer-container">
          <p>© {new Date().getFullYear()} DJ Strappy. All rights reserved.</p>
          <p>Domain: <a href="https://applepunk.com" target="_blank" rel="noopener noreferrer">applepunk.com</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App
