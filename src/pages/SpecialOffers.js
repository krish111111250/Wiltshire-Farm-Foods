import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SpecialOffers.css';
import { FaTag, FaGift, FaPercent } from 'react-icons/fa';

const SpecialOffers = () => {
  return (
    <div className="offers-page">
      
      {/* 1. Header Section */}
      <div className="offers-header">
        <h1>Special Offers</h1>
        <p>Great value meals, bundles, and exclusive discounts just for you.</p>
      </div>

      {/* 2. Hero Offer (New Customer) */}
      <div className="hero-offer">
        <div className="hero-offer-content">
          <span className="offer-badge">NEW CUSTOMERS</span>
          <h2>Get 20% Off Your First Order</h2>
          <p>Try our delicious meals today and save on your first delivery. Use code <strong>WELCOME20</strong> at checkout.</p>
          <Link to="/" className="shop-now-btn">Shop Now</Link>
        </div>
      </div>

      {/* 3. Offer Grid */}
      <div className="offers-container">
        <h2>Current Promotions</h2>
        <div className="offers-grid">
          
          <div className="offer-card">
            <div className="icon-circle"><FaGift /></div>
            <h3>Soup & Sandwich Bundle</h3>
            <p>Buy any 5 soups and get a free pack of bread rolls. Perfect for a light lunch.</p>
            <button className="view-offer-btn">View Details</button>
          </div>

          <div className="offer-card">
            <div className="icon-circle"><FaPercent /></div>
            <h3>Dessert Deal</h3>
            <p><strong>3 for £5</strong> on all cold desserts. Treat yourself to something sweet!</p>
            <button className="view-offer-btn">View Desserts</button>
          </div>

          <div className="offer-card">
            <div className="icon-circle"><FaTag /></div>
            <h3>Mini Meals Value Pack</h3>
            <p>Stock up your freezer. Buy 10 Mini Meals for just £35. Ideal for smaller appetites.</p>
            <button className="view-offer-btn">Shop Bundle</button>
          </div>

        </div>
      </div>

      {/* 4. Terms Section */}
      <div className="terms-section">
        <p>*Terms and conditions apply. Offers subject to availability. One discount code per order.</p>
      </div>

    </div>
  );
};

export default SpecialOffers;