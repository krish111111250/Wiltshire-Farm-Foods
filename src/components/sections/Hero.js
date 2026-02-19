import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const heroImage = "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-text-area">
        <h1 className="hero-title">Frozen ready meals</h1>
        <p className="hero-subtitle">delivered to your door</p>
        <button className="hero-btn" onClick={() => navigate('/')}>
          Start shopping
        </button>
      </div>
    </section>
  );
};

export default Hero;