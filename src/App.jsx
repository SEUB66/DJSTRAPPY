import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DevHub from './pages/DevHub';
import About from './pages/About';
import Footer from './components/Footer';

/*
 * ============================================================
 * ONCE UI INTEGRATION PLACEHOLDER
 * ============================================================
 * 
 * When Once UI components become available, import them here:
 * 
 * import { Button, Card, Container } from '@once-ui/core';
 * 
 * Replace standard HTML elements with Once UI components as needed.
 * Check https://once-ui.com for component documentation.
 * ============================================================
 */

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/devhub" element={<DevHub />} />
          {/* Redirect /man-cave to /devhub */}
          <Route path="/man-cave" element={<Navigate to="/devhub" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
