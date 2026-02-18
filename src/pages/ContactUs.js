import React from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact</h1>
        
        <p className="contact-intro">
          If you would like to contact us, please fill in the form below or call us free on 0800 077 3100.
        </p>
        
        <div className="contact-info-block">
          <strong>Order Query?</strong>
          <p>If you have an urgent query about your order please contact your local outlet between 9 am and 5 pm Monday to Friday. At all other times please contact our 24/7 customer services team by calling FREE on 0800 077 3100.</p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label>Your name: <span className="required">*</span></label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Your email: <span className="required">*</span></label>
            <input type="email" required />
          </div>

          <div className="form-group">
            <label>Your postcode: <span className="required">*</span></label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label>Your telephone number: <span className="required">*</span></label>
            <input type="tel" required />
          </div>

          <div className="form-group">
            <label>Your reason for contacting us: <span className="required">*</span></label>
            <select required>
              <option value="">Please select a reason...</option>
              <option value="order">Order Query</option>
              <option value="brochure">Brochure Request</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Your comments: <span className="required">*</span></label>
            <textarea rows="5" required></textarea>
          </div>

          <button type="submit" className="contact-submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;