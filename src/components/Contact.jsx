import React from 'react';
import { Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="contact-box glass-card">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Ready to <span className="gradient-text">Level Up?</span></h2>
          <p className="contact-subtitle">Let's create something extraordinary together. Reach out to us via any of the platforms below.</p>
          
          <div className="contact-links">
            <a href="https://discord.gg/yourlink" target="_blank" rel="noreferrer" className="contact-btn gaming-btn discord">
              <svg viewBox="0 0 127.14 96.36" width="24" height="24" fill="currentColor">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a67.58,67.58,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.09,53,91.08,65.69,84.69,65.69Z"/>
              </svg>
              <span>@coclipping</span>
            </a>
            
            <a href="mailto:contact.coclipping@gmail.com" className="contact-btn gaming-btn email">
              <Mail size={24} />
              <span>contact.coclipping@gmail.com</span>
            </a>
            
            <a href="https://twitter.com/coclipping" target="_blank" rel="noreferrer" className="contact-btn gaming-btn twitter">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>@coclipping</span>
            </a>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} COCLIPPING. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
