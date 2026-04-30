import React from 'react';

const Impact = () => {
  const stats = [
    { value: '10+', label: 'Happy Clients' },
    { value: '300+', label: 'Projects Completed' },
    { value: '3', label: 'Years of Experience' },
  ];

  return (
    <section className="section-padding impact-section">
      <div className="container">
        <div className="impact-grid">
          {stats.map((stat, index) => (
            <div key={index} className="impact-item">
              <div className="impact-value">
                {stat.value}
              </div>
              <div className="impact-label">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
