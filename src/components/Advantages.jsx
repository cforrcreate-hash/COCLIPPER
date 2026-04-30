import { Youtube, Users, Film, Image, Handshake } from 'lucide-react';
import './Advantages.css';

const Advantages = () => {
  const services = [
    { icon: <Youtube size={28} />, title: 'YouTube Management', desc: 'Complete channel strategy, SEO, and growth optimization.' },
    { icon: <Users size={28} />, title: 'Editing Team Management', desc: 'Coordinating world-class editors to ensure consistent high-quality output.' },
    { icon: <Film size={28} />, title: 'Long Form Video Editing', desc: 'Engaging, high-retention storytelling for your main channel content.' },
    { icon: <Image size={28} />, title: 'Thumbnails', desc: 'High-CTR, attention-grabbing designs that force people to click.' },
    { icon: <Handshake size={28} />, title: 'Brand Deals Management', desc: 'Securing and negotiating high-value sponsorships and partnerships.' },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container">
        <span className="section-subtitle">Our Expertise</span>
        <h2 className="section-title">Services We <span className="gradient-text">Provide</span></h2>
        
        <div className="advantages-grid">
          {services.map((service, index) => (
            <div key={index} className="glass-card adv-card">
              <div className="adv-icon text-cyan">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

