import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DevHub from './pages/DevHub';
import About from './pages/About';
import Login from './pages/Login';
import User from './pages/User';
import Header from './components/Header';
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
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/devhub" element={<DevHub />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          {/* Redirect /man-cave to /devhub */}
          <Route path="/man-cave" element={<Navigate to="/devhub" replace />} />
          {/* Redirect /signup to /login for now */}
          <Route path="/signup" element={<Navigate to="/login" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
