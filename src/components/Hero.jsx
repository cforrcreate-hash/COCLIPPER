import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import ytLogo from '../assets/yt_logo.png';
import './Hero.css';

const Hero = () => {
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
        
      </div>
    </section>
  );
};

export default Hero;
