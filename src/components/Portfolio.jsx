import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    { 
      title: 'Roblox Secret Mythic Pet', 
      shortId: 'ePIT1bUgIR8',
      shortViews: '64M', 
      longViews: '8M'
    },
    { 
      title: 'Insane Gameplay Highlights', 
      shortId: 'P4aaZ-2Wf0o',
      shortViews: '15M', 
      longViews: '2.1M'
    },
    { 
      title: 'Ultimate Challenge Run', 
      shortId: 'RgYsIxVDfBw',
      shortViews: '8.2M', 
      longViews: '400K'
    },
    { 
      title: 'Best Moments Compilation', 
      shortId: 'Zq_BD6wPUy8',
      shortViews: '22M', 
      longViews: '3.5M'
    },
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="container">
        <span className="section-subtitle">Our Work</span>
        <h2 className="section-title">Selected <span className="gradient-text">Projects</span></h2>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-visual iframe-container">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${project.shortId}?autoplay=1&mute=1&loop=1&playlist=${project.shortId}`} 
                  title={project.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="portfolio-info">
                <h3>{project.title}</h3>
                <div className="views-breakdown">
                  <div className="view-stat">
                    <span className="stat-label">Short Views:</span>
                    <span className="stat-val gradient-text">{project.shortViews}</span>
                  </div>
                  <div className="view-stat">
                    <span className="stat-label">Long Form Views:</span>
                    <span className="stat-val text-cyan">{project.longViews}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
