import React from 'react';
import '../styles/HelpAdvice.css';
import { FaTruck, FaPhoneAlt, FaUtensils, FaQuestionCircle } from 'react-icons/fa';

const HelpAdvice = () => {
  return (
    <div className="help-page">
      
      {/* 1. Header Section */}
      <div className="help-header">
        <h1>Help & Advice</h1>
        <p>Everything you need to know about our shop, delivery, and how we care for you.</p>
      </div>

      {/* 2. How We Help Section */}
      <div className="help-section-container">
        <h2>How We Help You</h2>
        <div className="help-grid">
          
          <div className="help-card">
            <FaTruck className="help-icon" />
            <h3>Free Delivery</h3>
            <p>We deliver your meals straight to your door for free. Our friendly drivers can even pack them away in your freezer if you like.</p>
          </div>

          <div className="help-card">
            <FaUtensils className="help-icon" />
            <h3>Dietary Expertise</h3>
            <p>Our meals are created by chefs and dietitians. Whether you need gluten-free, soft food, or low sugar, we have a range for you.</p>
          </div>

          <div className="help-card">
            <FaPhoneAlt className="help-icon" />
            <h3>Easy Ordering</h3>
            <p>You can order online, by phone, or through our brochure. We are here to make getting good food easy.</p>
          </div>

        </div>
      </div>

      {/* 3. Common Questions (About the Shop) */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        
        <div className="faq-item">
          <h4>Where do you deliver?</h4>
          <p>We deliver nationwide! We have local outlets across the country ensuring your food arrives frozen and fresh.</p>
        </div>

        <div className="faq-item">
          <h4>Do I need to subscribe?</h4>
          <p>No. You can order what you want, when you want. There is no contract and no commitment.</p>
        </div>

        <div className="faq-item">
          <h4>How do I cook the meals?</h4>
          <p>Most of our meals can be cooked in the microwave or oven straight from frozen. Instructions are clearly printed on every pack.</p>
        </div>
      </div>

      {/* 4. Need more help? */}
      <div className="contact-help-banner">
        <FaQuestionCircle size={40} />
        <div>
          <h3>Still need help?</h3>
          <p>Our customer service team is happy to chat. Call us on <strong>9363495266</strong>.</p>
        </div>
      </div>

    </div>
  );
};

// --- THIS LINE WAS LIKELY MISSING OR WRONG ---
export default HelpAdvice;