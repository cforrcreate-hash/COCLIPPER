import React, { useState } from 'react';
import { DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import './SuccessStory.css';

const SuccessStory = () => {
  const caseStudies = [
    {
      id: 1,
      longFormTitle: 'Roblox Secret Mythic Pet',
      longFormViews: '1.2M Views',
      longFormLink: 'https://youtu.be/PBLpK1iIk5s',
      longThumb: 'https://img.youtube.com/vi/PBLpK1iIk5s/maxresdefault.jpg',
      shortLink: 'https://youtube.com/shorts/ePIT1bUgIR8',
      shortThumb: 'https://img.youtube.com/vi/ePIT1bUgIR8/maxresdefault.jpg',
      shortViews: '64M',
      redirectedViews: '8M',
      revenue: '50,000',
    },
    {
      id: 2,
      longFormTitle: 'Insane Gameplay Highlights',
      longFormViews: '3.5M Views',
      longFormLink: 'https://youtu.be/-F9eT25eGs8',
      longThumb: 'https://img.youtube.com/vi/-F9eT25eGs8/maxresdefault.jpg',
      shortLink: 'https://youtube.com/shorts/P4aaZ-2Wf0o',
      shortThumb: 'https://img.youtube.com/vi/P4aaZ-2Wf0o/maxresdefault.jpg',
      shortViews: '15M',
      redirectedViews: '2.1M',
      revenue: '18,500',
    },
    {
      id: 3,
      longFormTitle: 'Ultimate Challenge Run',
      longFormViews: '850K Views',
      longFormLink: 'https://youtu.be/IZSKsv1uGFY',
      longThumb: 'https://img.youtube.com/vi/IZSKsv1uGFY/maxresdefault.jpg',
      shortLink: 'https://youtube.com/shorts/RgYsIxVDfBw',
      shortThumb: 'https://img.youtube.com/vi/RgYsIxVDfBw/maxresdefault.jpg',
      shortViews: '8.2M',
      redirectedViews: '400K',
      revenue: '4,200',
    },
    {
      id: 4,
      longFormTitle: 'Best Moments Compilation',
      longFormViews: '2.1M Views',
      longFormLink: 'https://youtu.be/KvsDqZWFpyk',
      longThumb: 'https://img.youtube.com/vi/KvsDqZWFpyk/maxresdefault.jpg',
      shortLink: 'https://youtube.com/shorts/Zq_BD6wPUy8',
      shortThumb: 'https://img.youtube.com/vi/Zq_BD6wPUy8/maxresdefault.jpg',
      shortViews: '22M',
      redirectedViews: '3.5M',
      revenue: '21,000',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[currentIndex];

  return (
    <section id="case-study" className="success-story section-padding">
      <div className="container">
        <div className="story-header text-center">
          <span className="section-subtitle">Real Results</span>
          <h2 className="section-title">Case Study <span className="gradient-text">#{currentCase.id}</span></h2>
        </div>

        <div className="carousel-wrapper">
          <button onClick={prevCase} className="carousel-btn prev-btn"><ChevronLeft size={32} /></button>
          
          <div className="flow-container glass-card">
            {/* Left: Long Form */}
            <div className="flow-step">
              <a href={currentCase.longFormLink} target="_blank" rel="noopener noreferrer" className="video-preview long-form">
                <div className="preview-label">LONG FORM VIDEO</div>
                <div 
                  className="thumbnail-placeholder" 
                  style={{ backgroundImage: `linear-gradient(45deg, rgba(30,41,59,0.8), rgba(51,65,85,0.8)), url(${currentCase.longThumb})` }}
                >
                  <div className="play-icon">▶</div>
                </div>
                <div className="preview-info">
                  <h4>{currentCase.longFormTitle}</h4>
                  <p>{currentCase.longFormViews}</p>
                </div>
              </a>
            </div>

            {/* Arrow 1 */}
            <div className="flow-arrow">
              <div className="arrow-line"></div>
              <div className="arrow-label">CLIPPED & OPTIMIZED</div>
            </div>

            {/* Center: Viral Shorts */}
            <div className="flow-step">
              <a href={currentCase.shortLink} target="_blank" rel="noopener noreferrer" className="shorts-stack">
                <div 
                  className="short-phone phone-1"
                  style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${currentCase.shortThumb})` }}
                >
                  <div className="short-content">
                    <span className="view-count">{currentCase.shortViews}</span>
                  </div>
                </div>
                <div className="short-phone phone-2"></div>
                <div className="short-phone phone-3"></div>
              </a>
            </div>

            {/* Arrow 2 */}
            <div className="flow-arrow">
              <div className="arrow-line"></div>
              <div className="arrow-label">{currentCase.redirectedViews} REDIRECTED VIEWS</div>
            </div>

            {/* Right: Revenue & Impact */}
            <div className="flow-step">
              <div className="impact-card">
                <div className="impact-icon-wrapper">
                  <DollarSign size={48} className="text-cyan" />
                </div>
                <div className="impact-stat">
                  <span className="stat-value">{currentCase.revenue}</span>
                  <span className="stat-label">REVENUE GENERATED</span>
                </div>
              </div>
            </div>
          </div>

          <button onClick={nextCase} className="carousel-btn next-btn"><ChevronRight size={32} /></button>
        </div>

        <div className="carousel-indicators">
          {caseStudies.map((_, index) => (
            <div 
              key={index} 
              className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>

        <div className="story-footer text-center mt-5">
          <p className="story-description">
            We don't just edit videos. We engineer viral growth by bridging the gap between short-form discovery and long-form monetization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
