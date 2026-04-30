import React from 'react';
import './Pricing.css';
import { Check, X, Scissors, Zap, Trophy, LayoutGrid, Youtube, Users, Film, Image, Handshake } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter Clip',
      price: '$999',
      duration: '/month',
      icon: <Scissors size={32} />,
      features: [
        { text: '20 High-Quality Shorts', included: true },
        { text: 'YouTube Channel Management', included: false },
        { text: 'Uploading & SEO', included: false },
        { text: 'Instagram & Facebook Cross-Post', included: false },
        { text: 'Long Form Editing Management', included: false },
        { text: 'Collaboration Management', included: false },
      ],
      cta: 'Choose Starter',
      color: 'var(--primary)',
    },
    {
      name: 'Pro Viral',
      price: '$1999',
      duration: '/month',
      icon: <Zap size={32} />,
      popular: true,
      features: [
        { text: '40 Viral Shorts/Reels', included: true },
        { text: 'YouTube Channel Management', included: true },
        { text: 'Uploading & SEO', included: true },
        { text: 'Instagram & YouTube Posting', included: true },
        { text: 'Form Edited or Raw Video', included: true },
        { text: 'Collaboration Management', included: false },
      ],
      cta: 'Go Pro',
      color: 'var(--secondary)',
    },
    {
      name: 'Elite Growth',
      price: '$2999',
      duration: '/month',
      icon: <Trophy size={32} />,
      features: [
        { text: '60 Viral Shorts/Reels', included: true },
        { text: 'YouTube Channel Management', included: true },
        { text: 'Uploading & SEO', included: true },
        { text: 'Instagram, YouTube, Facebook', included: true },
        { text: 'Form Edited or Raw Video', included: true },
        { text: 'Collaboration Management (Comm.)', included: true },
      ],
      cta: 'Contact Elite',
      color: 'var(--accent)',
    }
  ];

  const customServices = [
    { title: 'YouTube Management', icon: <Youtube size={24} /> },
    { title: 'Editing Team Management', icon: <Users size={24} /> },
    { title: 'Long Form Video Editing', icon: <Film size={24} /> },
    { title: 'Thumbnails', icon: <Image size={24} /> },
    { title: 'Brand Deals Management', icon: <Handshake size={24} /> }
  ];

  return (
    <div className="pricing-page">
      <div className="container">
        <div className="pricing-header">
          <h1 className="section-title">Investment <span className="gradient-text">Packages</span></h1>
          <p className="section-subtitle">Scale your content with the perfect plan for your growth.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card glass-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="plan-icon" style={{ color: plan.color }}>
                {plan.icon}
              </div>
              
              <h3 className="plan-name">{plan.name}</h3>
              
              <div className="plan-price">
                <span className="price-val">{plan.price}</span>
                <span className="price-duration">{plan.duration}</span>
              </div>
              
              <ul className="plan-features">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className={feature.included ? 'included' : 'excluded'}>
                    {feature.included ? <Check size={18} className="feature-icon" /> : <X size={18} className="feature-icon" />}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <button className="btn btn-primary plan-cta" style={{ 
                background: plan.color, 
                boxShadow: `0 4px 0 ${plan.color === 'var(--primary)' ? '#00b3b3' : plan.color === 'var(--secondary)' ? '#7a1be2' : '#ccac00'}` 
              }}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="custom-plans-section">
          <div className="custom-card glass-card">
            <div className="custom-header">
              <LayoutGrid size={40} className="text-cyan" />
              <div>
                <h2>Customized <span className="gradient-text">Services</span></h2>
                <p>We offer specialized individual services tailored to your specific needs.</p>
              </div>
            </div>
            <div className="custom-grid">
              {customServices.map((service, index) => (
                <div key={index} className="custom-service-item">
                  <div className="custom-service-icon">{service.icon}</div>
                  <span>{service.title}</span>
                </div>
              ))}
            </div>
            <div className="custom-footer">
              <a href="https://discord.gg/coclipping" className="btn btn-secondary">Inquire About Custom Plan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
