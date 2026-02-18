import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Hero.css';

const Hero = () => {
  // Using a specific food image that matches their style (Roast Dinner aesthetic)
  const heroImage = "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content-box">
          <div className="hero-tagline">The Chef's Kitchen</div>
          <h1 className="hero-title">Dine on the finest dishes.</h1>
          <p className="hero-description">
            Created from the very best ingredients by award-winning chefs. 
            Just as simple to prepare as any other meal, treat yourself to the very best.
          </p>
          <Link to="/products" className="hero-btn">
            Shop The Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;