import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import ytLogo from '../assets/yt_logo.png';
import './Hero.css';

const Hero = () => {
  const scriptLines = [
    "We turn your long-form videos into high-performing short clips that actually drive results.",
    "Here’s a real example — we repurposed one video into multiple clips and generated over 9 million views in just 4 months, resulting in $50,000+ in revenue.",
    "This isn’t luck — it’s strategy.",
    "With 5+ years of experience in both long-form and short-form content, we understand what makes people stop scrolling, watch, and engage.",
    "We don’t just cut clips — we add storytelling, timing, and humor that AI alone can’t replicate.",
    "If you want your content to reach more people and generate real results, we can make it happen."
  ];

  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % scriptLines.length);
    }, 5000); // Change text every 5 seconds
    return () => clearInterval(interval);
  }, [scriptLines.length]);

  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="container hero-container">
        <span className="section-subtitle">Be Smart & Grow</span>
        <h1 className="hero-title">
          Clipping can save your <span className="gradient-text">CHANNEL.</span>
          <img src={ytLogo} className="heading-yt-logo" alt="YouTube" />
        </h1>
        <p className="hero-description">
          Transform your long-form gaming sessions into high-impact viral clips. 
          We help creators grow 10x faster using the power of Shorts, Reels, and TikToks.
        </p>
        <div className="hero-cta">
          <a href="#portfolio" className="btn btn-primary">
            View Work <Play size={20} fill="currentColor" />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get Started <ArrowRight size={20} />
          </a>
        </div>
        
        {/* Animated Script Display */}
        <div className="hero-visual">
          <div className="visual-placeholder">
            <div className="animated-script-container">
              {scriptLines.map((line, index) => (
                <p 
                  key={index} 
                  className={`animated-script-text ${index === currentLine ? 'active' : ''}`}
                >
                  {line}
                </p>
              ))}
            </div>
            <div className="script-progress">
              <div 
                className="script-progress-bar" 
                style={{ width: `${((currentLine + 1) / scriptLines.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
