import React from 'react';
import '../../styles/Footer.css';
import { FaApple, FaGooglePlay, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">

      {/* Gold divider bar */}
      <div className="gold-divider-bar" />

      {/* Main footer columns */}
      <div className="footer-main">
        <div className="footer-inner">

          {/* Col 1: Logo + newsletter */}
          <div className="footer-column">
            <div className="footer-logo-text">
              <span className="fl-top">WILTSHIRE</span>
              <span className="fl-mid">EST. FARM 1991</span>
              <span className="fl-bottom">FOODS</span>
            </div>
            <h4>Want to hear from us?</h4>
            <p className="footer-sub">Be the first to hear about new dishes and special offers.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" className="newsletter-input" />
              <button className="newsletter-btn">Sign up</button>
            </div>
            <p className="privacy-text">By signing up you agree to our <span>Privacy Policy</span></p>
            <div className="social-icons">
              <FaFacebookF size={16} />
              <FaTwitter size={16} />
            </div>
          </div>

          {/* Col 2: Popular Links */}
          <div className="footer-column">
            <h4>Popular Links</h4>
            <ul>
              <li>Ready Meals</li>
              <li>Desserts</li>
              <li>Bakery</li>
              <li>Breakfast & Snacks</li>
              <li>Special Offers</li>
              <li>Request a Brochure</li>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Modern Slavery Statement</li>
              <li>Accessibility</li>
            </ul>
          </div>

          {/* Col 4: App download */}
          <div className="footer-column">
            <h4>Download our Wiltshire Farm Foods App</h4>
            <p className="footer-sub">Order on the go with our easy-to-use app.</p>
            <div className="app-buttons">
              <button className="store-btn">
                <FaApple size={24} />
                <div className="btn-text">
                  <span className="small-text">Download on the</span>
                  <span className="big-text">App Store</span>
                </div>
              </button>
              <button className="store-btn">
                <FaGooglePlay size={22} />
                <div className="btn-text">
                  <span className="small-text">GET IT ON</span>
                  <span className="big-text">Google Play</span>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© 2026 Wiltshire Farm Foods. All rights reserved. Apetito Ltd, Canal Road, Trowbridge, Wiltshire BA14 8RJ</p>
      </div>

    </footer>
  );
};

export default Footer;