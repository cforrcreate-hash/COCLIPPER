import React from 'react';
import './Creators.css';
import foltyn from '../assets/foltyn.jpg';
import ayeyahzee from '../assets/ayeyahzee.jpg';
import nizarisaqt from '../assets/nizarisaqt.jpg';
import myamberr from '../assets/myamberr.jpg';
import chris from '../assets/chris.jpg';

const Creators = () => {
  const creators = [
    { name: 'Foltyn', handle: '@FoltynFamily', subs: '11M', logo: foltyn, link: 'https://www.youtube.com/@FoltynFamily' },
    { name: 'AyeYahZee', handle: '@AyeYahZee', subs: '2.16M', logo: ayeyahzee, link: 'https://www.youtube.com/@AyeYahZee' },
    { name: 'Nizarisaqt', handle: '@Nizarisacutie', subs: '2.24M', logo: nizarisaqt, link: 'https://www.youtube.com/@Nizarisacutie' },
    { name: 'Myamberr', handle: '@Myamberr', subs: '1.07M', logo: myamberr, link: 'https://www.youtube.com/@Myamberr' },
    { name: 'Chris', handle: '@chrisypeww', subs: '174K', logo: chris, link: 'https://www.youtube.com/@chrisypeww' },
  ];

  return (
    <section className="creators-section">
      <div className="container">
        <p className="creators-label">TRUSTED BY 100+ ELITE CREATORS</p>
        <div className="creators-track">
          <div className="creators-list">
            {[...creators, ...creators].map((creator, index) => (
              <a key={index} href={creator.link} target="_blank" rel="noopener noreferrer" className="creator-card">
                <img src={creator.logo} alt={creator.name} className="creator-pfp" />
                <div className="creator-info">
                  <span className="creator-name">{creator.name}</span>
                  <span className="creator-subs">{creator.subs} subscribers</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creators;
