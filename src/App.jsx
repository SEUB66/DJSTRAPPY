import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DevHub from './pages/DevHub';
import About from './pages/About';
import Footer from './components/Footer';

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
