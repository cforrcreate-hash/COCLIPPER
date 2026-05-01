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

  const longFormProjects = [
    {
      title: 'AyeYahZee Highlight Edit',
      videoId: 'cohhh8m68qI',
      creator: 'AyeYahZee',
    },
    {
      title: 'Nizari Funny Moments',
      videoId: 'bO68dBI8bm8',
      creator: 'Nizarisacutie',
    },
    {
      title: 'MyAmberr Special Episode',
      videoId: 'hXi7D2ZgZEs',
      creator: 'MyAmberr',
    }
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

        <h3 className="section-title" style={{ marginTop: '4rem', fontSize: '2rem' }}>Long Form <span className="gradient-text">Edits</span></h3>
        <div className="portfolio-grid-long">
          {longFormProjects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-visual iframe-container-long">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1&loop=1&playlist=${project.videoId}`} 
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
                    <span className="stat-label">Creator:</span>
                    <span className="stat-val text-cyan">{project.creator}</span>
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
