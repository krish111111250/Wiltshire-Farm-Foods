import React from 'react';
import '../../styles/Footer.css';
// 1. Import the icons
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      
      {/* 1. Newsletter Signup */}
      <div className="footer-newsletter">
        <div className="newsletter-inner">
          <div className="newsletter-text">
            <h3>Sign up for our email newsletter</h3>
            <p>Be the first to hear about new dishes and offers.</p>
          </div>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" className="newsletter-input" />
            <button className="newsletter-btn">Sign Up</button>
          </div>
        </div>
      </div>

      {/* 2. Main Links (Added 5th Column for Apps) */}
      <div className="footer-links">
        <div className="footer-column">
          <h4>Our Menu</h4>
          <ul>
            <li>Ready Meals</li>
            <li>Desserts</li>
            <li>Mini Meals</li>
            <li>Free From Menu</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
            <li>Our Story</li>
            <li>Sustainability</li>
            <li>Satisfaction Guarantee</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>Delivery Information</li>
            <li>Request a Brochure</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Modern Slavery Statement</li>
          </ul>
        </div>

        {/* --- NEW COLUMN: GET OUR APP --- */}
        <div className="footer-column app-column">
          <h4>Get our app</h4>
          <div className="app-buttons">
            
            {/* Apple Button */}
            <button className="store-btn">
              <FaApple size={28} className="store-icon" />
              <div className="btn-text">
                <span className="small-text">Download on the</span>
                <span className="big-text">App Store</span>
              </div>
            </button>

            {/* Google Play Button */}
            <button className="store-btn">
              <FaGooglePlay size={24} className="store-icon" />
              <div className="btn-text">
                <span className="small-text">GET IT ON</span>
                <span className="big-text">Google Play</span>
              </div>
            </button>

          </div>
        </div>
        
      </div>

      {/* 3. Bottom Copyright */}
      <div className="footer-bottom">
        <p>© 2026 Wiltshire Farm Foods. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;