import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import char1 from './assets/char1_transparent.png';
import char2 from './assets/char2_transparent.png';
import char3 from './assets/char3_transparent.png';
import char4 from './assets/char4_transparent.png';
import silverPlay from './assets/silver_play.png';
import goldPlay from './assets/gold_play.png';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.15 });

    const observerTarget = () => {
      document.querySelectorAll('.reveal-on-scroll').forEach(section => {
        revealObserver.observe(section);
      });
    };

    observerTarget();
    window.addEventListener('mousemove', updateCursor);
    
    return () => {
      window.removeEventListener('mousemove', updateCursor);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper" style={{ overflowX: 'hidden', position: 'relative' }}>
      {/* Custom Cursor Glow */}
      <div 
        className="cursor-glow" 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      ></div>

      <div className="bg-characters desktop-only">
        <img src={char1} className="bg-char bg-char-1" alt="" />
        <img src={char2} className="bg-char bg-char-2" alt="" />
        <img src={char3} className="bg-char bg-char-3" alt="" />
        <img src={char4} className="bg-char bg-char-4" alt="" />
        <img src={silverPlay} className="bg-char bg-play-silver" alt="" />
        <img src={goldPlay} className="bg-char bg-play-gold" alt="" />
      </div>

      <a href="https://discord.gg/coclipping" className="discord-float" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 127.14 96.36" width="30" height="30" fill="#ffffff">
          <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a67.58,67.58,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.09,53,91.08,65.69,84.69,65.69Z"/>
        </svg>
      </a>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
