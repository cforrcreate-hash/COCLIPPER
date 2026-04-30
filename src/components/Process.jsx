import React from 'react';
import { Download, Scissors, Youtube } from 'lucide-react';
import './Process.css';

const Process = () => {
  return (
    <section id="process" className="section-padding">
      <div className="container">
        <span className="section-subtitle">Our Workflow</span>
        <h2 className="section-title">Creative <span className="gradient-text">Evolution</span></h2>
        
        <div className="process-grid">
          <div className="glass-card process-card">
            <div className="icon-wrapper">
              <svg viewBox="0 0 87.3 78" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                <path d="M58.2 78L29.1 78L14.6 52L43.7 52L58.2 78Z" fill="#1fa463" />
                <path d="M87.3 26L72.8 52L14.6 52L29.1 26L87.3 26Z" fill="#ffd04b" />
                <path d="M43.7 0L29.1 26L58.2 78L72.8 52L43.7 0Z" fill="#4285f4" />
              </svg>
            </div>
            <h3>1. Receive Footage</h3>
            <p>We grab your raw or pre-edited video files directly from you via Drive. No hassle, just drop them in our secure folder.</p>
          </div>
          
          <div className="glass-card process-card">
            <div className="icon-wrapper snip-wrapper">
              <div className="film-strip"></div>
              <Scissors size={32} className="text-purple snip-icon" />
            </div>
            <h3>2. Clip & Optimize</h3>
            <p>Our experts analyze your footage to find the most engaging moments, cut them perfectly, and add dynamic captions and effects.</p>
          </div>

          <div className="glass-card process-card">
            <div className="icon-wrapper upload-wrapper">
              <Youtube size={32} className="text-cyan upload-yt-icon" />
              <div className="upload-arrow">↑</div>
            </div>
            <h3>3. Publish & Grow</h3>
            <p>We handle the final step by uploading the optimized shorts directly to your YouTube channel to maximize reach and revenue.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
