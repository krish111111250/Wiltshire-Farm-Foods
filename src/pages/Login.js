import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useBasket } from '../context/BasketContext'; // Use BasketContext for login
import '../styles/Auth.css'; // Ensure you have this CSS file or remove this line

const Login = () => {
  const navigate = useNavigate();
  const { login } = useBasket(); // Get the login function from BasketContext
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Call the login function from Context
    // We pass the email string so the context can create the user object
    login(email);

    alert(`Welcome back! Logged in as ${email}`);
    navigate('/checkout'); // Redirect to Checkout (since that's usually where they came from)
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login to Your Account</h2>
        <p>Enjoy faster checkout and track your orders.</p>

        <form onSubmit={handleLogin}>
          
          <div className="form-group" style={{ textAlign: 'left', marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Email Address
            </label>
            <input
              type="email"
              required
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div className="form-group" style={{ textAlign: 'left', marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Password
            </label>
            <input
              type="password"
              required
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <button type="submit" className="auth-btn" style={{ 
            width: '100%', 
            padding: '12px', 
            background: '#1a4d3a', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>
            Login
          </button>
        </form>

        <p className="auth-switch" style={{ marginTop: '20px', fontSize: '14px' }}>
          Don't have an account? <Link to="/register" style={{ color: '#1a4d3a', fontWeight: 'bold' }}>Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;