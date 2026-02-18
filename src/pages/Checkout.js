import React, { useState, useEffect } from 'react';
import { useBasket } from '../context/BasketContext';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { FaLock, FaCalendarAlt, FaClock } from 'react-icons/fa';
import '../styles/Checkout.css';

const Checkout = () => {
  // Using user from BasketContext as set up previously
  const { basketTotal, basketItems, clearBasket, user } = useBasket();
  const navigate = useNavigate();

  // --- STATE MANAGEMENT ---
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [orderComplete, setOrderComplete] = useState(false);
  
  // Calculate today's date to prevent picking past dates in the calendar
  const today = new Date().toISOString().split('T')[0];

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      alert("Please login to checkout.");
      navigate('/login');
    }
  }, [user, navigate]);

  // --- ACTIONS ---

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!deliveryDate || !deliveryTime) {
      alert('Please select a valid delivery date and time slot.');
      return;
    }
    setOrderComplete(true);
    clearBasket();
  };

  const downloadReceipt = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(22);
    doc.setTextColor(26, 77, 58); // Dark Green
    doc.text('Wiltshire Farm Foods', 20, 20);
    doc.setFontSize(16);
    doc.text('Order Receipt', 20, 30);

    // Customer & Delivery Details
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(`Customer: ${user?.name || 'Guest'}`, 20, 50);
    doc.text(`Email: ${user?.email}`, 20, 60);
    doc.text(`Delivery Date: ${deliveryDate}`, 20, 70);
    doc.text(`Delivery Time: ${deliveryTime}`, 20, 80);

    // Items List
    doc.text('------------------------------------------------', 20, 95);
    let yPos = 105;
    basketItems.forEach((item) => {
      const price = parseFloat(String(item.price).replace('£', ''));
      const lineTotal = (price * (item.quantity || 1)).toFixed(2);
      doc.text(`${item.quantity}x ${item.title} - £${lineTotal}`, 20, yPos);
      yPos += 10;
    });
    doc.text('------------------------------------------------', 20, yPos);

    // Total
    doc.setFontSize(14);
    doc.text(`Total Paid: £${basketTotal.toFixed(2)}`, 20, yPos + 15);

    doc.save('WFF_Order_Receipt.pdf');
  };

  if (!user) return null;

  // --- SUCCESS VIEW ---
  if (orderComplete) {
    return (
      <div className="checkout-success">
        <div className="success-card">
          <h1>Thank You for Your Order!</h1>
          <p>Your meals will be delivered on:</p>
          <h3>{deliveryDate}</h3>
          <p>Between: <strong>{deliveryTime}</strong></p>
          
          <div className="success-actions">
            <button onClick={downloadReceipt} className="download-btn">
              Download Receipt
            </button>
            <button onClick={() => navigate('/')} className="home-btn">
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN CHECKOUT FORM ---
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1>Secure Checkout <FaLock size={20} color="#1a4d3a"/></h1>

        <div className="checkout-grid">
          
          {/* LEFT SIDE: INPUTS */}
          <div className="checkout-left">
            
            {/* 1. Address (Auto-filled from User) */}
            <div className="checkout-section">
              <h2>1. Delivery Details</h2>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={user.name} disabled className="input-disabled" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" value={user.email} disabled className="input-disabled" />
              </div>
              <div className="form-group">
                <label>Delivery Address</label>
                <input type="text" placeholder="House No. & Street" required />
              </div>
              <div className="form-group">
                <label>Postcode</label>
                <input type="text" placeholder="Postcode" required />
              </div>
            </div>

            {/* 2. DATE & TIME (THE FIX) */}
            <div className="checkout-section">
              <h2>2. Delivery Date & Time</h2>
              <div className="delivery-selector-grid">
                
                {/* Calendar Input */}
                <div className="input-box">
                  <label><FaCalendarAlt /> Select Date</label>
                  <input 
                    type="date" 
                    className="date-picker"
                    min={today} 
                    value={deliveryDate} 
                    onChange={(e) => setDeliveryDate(e.target.value)} 
                    required
                  />
                </div>

                {/* Time Dropdown */}
                <div className="input-box">
                  <label><FaClock /> Select Time Slot</label>
                  <select 
                    className="time-select" 
                    value={deliveryTime} 
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    required
                  >
                    <option value="">-- Choose Time --</option>
                    <option value="Morning (8am - 12pm)">Morning (8am - 12pm)</option>
                    <option value="Afternoon (12pm - 5pm)">Afternoon (12pm - 5pm)</option>
                    <option value="Evening (5pm - 8pm)">Evening (5pm - 8pm)</option>
                  </select>
                </div>

              </div>
              
              {/* Visual Confirmation */}
              {deliveryDate && deliveryTime && (
                 <p className="delivery-confirm-text">
                   Scheduled for <strong>{deliveryDate}</strong> in the <strong>{deliveryTime}</strong>.
                 </p>
              )}
            </div>

            {/* 3. Payment */}
            <div className="checkout-section">
              <h2>3. Payment Method</h2>
              <div className="payment-placeholder">
                <p>Card Payment (Secure)</p>
                <input type="text" placeholder="Card Number" className="card-input" />
                <div className="card-row">
                  <input type="text" placeholder="MM/YY" />
                  <input type="text" placeholder="CVC" />
                </div>
              </div>
            </div>

            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Pay & Place Order (£{basketTotal.toFixed(2)})
            </button>

          </div>

          {/* RIGHT SIDE: SUMMARY */}
          <div className="checkout-right">
            <div className="order-summary-box">
              <h3>Order Summary</h3>
              {basketItems.map((item) => (
                <div key={item.id} className="summary-row">
                  <span>{item.quantity || 1}x {item.title}</span>
                  <span>£{parseFloat(String(item.price).replace('£','')).toFixed(2)}</span>
                </div>
              ))}
              <hr />
              <div className="total-row">
                <span>Total:</span>
                <span>£{basketTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;