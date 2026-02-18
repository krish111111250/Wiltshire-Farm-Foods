import React, { useState } from 'react';
import '../styles/RequestBrochure.css';

const RequestBrochure = () => {
  const [orderType, setOrderType] = useState('myself'); // 'myself' or 'someone'

  return (
    <div className="brochure-page">
      <div className="brochure-container">
        <h1>Request your Brochure</h1>
        
        <p className="brochure-question">Are you ordering your brochure for you or someone else?</p>

        {/* Toggle Buttons */}
        <div className="toggle-container">
          <button 
            className={`toggle-btn ${orderType === 'myself' ? 'active' : ''}`}
            onClick={() => setOrderType('myself')}
          >
            For myself
          </button>
          <button 
            className={`toggle-btn ${orderType === 'someone' ? 'active' : ''}`}
            onClick={() => setOrderType('someone')}
          >
            For someone else
          </button>
        </div>

        {/* UPDATED: The Gold Arrow Pointer Container */}
        <div className="arrow-container">
            <div className={`arrow-indicator ${orderType}`}></div>
        </div>

        {/* The Form Box */}
        <div className="form-box">
          <h3>Please enter {orderType === 'myself' ? 'your' : 'their'} details</h3>

          <form>
            <div className="form-row">
              <div className="form-group small">
                <label>Title*</label>
                <select><option>Select</option><option>Mr</option><option>Mrs</option><option>Ms</option></select>
              </div>
              <div className="form-group">
                <label>First name*</label>
                <input type="text" placeholder="First name" />
              </div>
              <div className="form-group">
                <label>Surname*</label>
                <input type="text" placeholder="Surname" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Telephone number*</label>
                <input type="tel" placeholder="Telephone number" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
            </div>

            <p className="privacy-note">
              We may call to check your brochure has arrived safely.
            </p>

            <hr className="divider" />

            <div className="form-group full-width">
              <label>Postal address</label>
              <input type="text" placeholder="Start typing your postcode, street or address." />
              <small className="manual-entry">Or enter an address manually</small>
            </div>

            {/* Extra Fields for "Someone Else" */}
            {orderType === 'someone' && (
              <>
                <div className="checkbox-group">
                  <input type="checkbox" id="copy" />
                  <label htmlFor="copy">I would like a brochure for myself as well</label>
                </div>

                <div className="form-group full-width mt-20">
                  <label>Your relationship</label>
                  <select>
                    <option>Please Select</option>
                    <option>Relative</option>
                    <option>Friend</option>
                    <option>Carer</option>
                  </select>
                </div>
              </>
            )}

            <div className="form-group full-width mt-20">
              <label>How did you hear about us?</label>
              <select>
                <option>Please select</option>
                <option>TV</option>
                <option>Friend</option>
                <option>Google</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">Order Brochure</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestBrochure;