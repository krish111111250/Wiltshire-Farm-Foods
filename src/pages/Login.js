import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    login(email, password);
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-form-wrap">

        <h1 className="auth-heading">Sign In</h1>
        <div className="auth-heading-line" />
        <p className="auth-subtext">
          If you've already registered with <strong>www.wiltshirefarmfoods.com</strong>, please sign in here.
        </p>

        <form onSubmit={handleLogin} className="auth-form">

          {/* Email */}
          <div className="auth-field">
            <div className="auth-label-row">
              <label>Email address</label>
              <span className="auth-required">*This field is required</span>
            </div>
            <input
              type="email"
              required
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>

          {/* Password */}
          <div className="auth-field">
            <div className="auth-label-row">
              <label>Password</label>
              <span className="auth-required">*This field is required</span>
            </div>
            <div className="auth-input-wrap">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className="auth-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <button type="button" className="show-btn" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? '🙈 Hide' : '👁 Show'}
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <p className="auth-forgot">
            Have you forgotten your password?{' '}
            <Link to="/login" className="auth-link">Click here to reset your password</Link>
          </p>

          {/* Keep signed in */}
          <label className="auth-checkbox-label">
            <input
              type="checkbox"
              checked={keepSignedIn}
              onChange={(e) => setKeepSignedIn(e.target.checked)}
            />
            Keep me signed in on this device
          </label>

          {/* Submit */}
          <button type="submit" className="auth-submit-btn">
            Sign in to your account
          </button>

          {/* OR divider */}
          <div className="auth-or-divider">
            <span className="auth-or-line" /><span className="auth-or-text">or</span><span className="auth-or-line" />
          </div>

          {/* One-time code */}
          <button type="button" className="auth-otp-btn">
            Sign in with one-time code via email
          </button>
        </form>

        {/* Register link */}
        <p className="auth-switch-text">
          Don't have an account?{' '}
          <Link to="/register" className="auth-link">Click here to create an account</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;