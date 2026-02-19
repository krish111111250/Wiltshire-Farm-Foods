import React from 'react';
import { useBasket } from '../context/BasketContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';
import '../styles/Basket.css';

const Basket = () => {
  const { basketItems, basketTotal, removeFromBasket, updateQuantity, user } = useBasket();
  const navigate = useNavigate();

  if (basketItems.length === 0) {
    return (
      <div className="basket-page">
        <h1 className="basket-title">Your Basket</h1>
        <div className="empty-basket">
          <p>Your basket is currently empty.</p>
          <Link to="/" style={{ color: 'var(--primary-green)', fontWeight: 'bold' }}>Return to Menu</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="basket-page">
      <h1 className="basket-title">Your Basket ({basketItems.length} items)</h1>

      <div className="basket-list">
        {basketItems.map((item) => (
          <div key={item.id} className="basket-item">
            <img src={item.image} alt={item.title} className="item-image" />

            <div className="item-details">
              <h3>{item.title}</h3>
              <p>Delivery: Standard Delivery</p>

              {/* 2. NEW: Quantity Controls */}
              <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '10px' }}>
                <button
                  className="qty-btn"
                  onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                  style={{ padding: '2px 10px', cursor: 'pointer', border: '1px solid #ccc' }}
                >
                  -
                </button>
                <span style={{ fontWeight: 'bold' }}>{item.quantity || 1}</span>
                <button
                  className="qty-btn"
                  onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                  style={{ padding: '2px 10px', cursor: 'pointer', border: '1px solid #ccc' }}
                >
                  +
                </button>
              </div>

              <button className="remove-btn" onClick={() => removeFromBasket(item.id)} style={{ marginTop: '10px' }}>
                Remove Item
              </button>
            </div>

            <div className="item-price">
              <h3>{item.price}</h3>
              {/* Show unit price if quantity > 1 */}
              {(item.quantity || 1) > 1 && (
                <p style={{ fontSize: '12px', color: '#666' }}>{item.quantity} x {item.price}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="basket-summary">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px' }}>
          <span style={{ fontSize: '18px' }}>Subtotal:</span>
          <span className="total-price-large">£{basketTotal.toFixed(2)}</span>
        </div>

        {user ? (
          // ✅ Logged in: go straight to checkout
          <button
            className="checkout-btn"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
        ) : (
          // 🔒 Not logged in: show login prompt
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: '#cc0000', fontSize: '14px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '6px' }}>
              <FaLock /> Please log in to proceed to checkout
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <button
                className="checkout-btn"
                style={{ backgroundColor: '#1a4d3a', padding: '12px 25px' }}
                onClick={() => navigate('/login')}
              >
                <FaUser style={{ marginRight: '8px' }} />
                Login to Checkout
              </button>
              <button
                className="checkout-btn"
                style={{ backgroundColor: '#555', padding: '12px 25px' }}
                onClick={() => navigate('/register')}
              >
                Create Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;