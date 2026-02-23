import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [postcode, setPostcode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  // Password rule checks
  const rules = [
    { label: 'At least 8 characters', pass: password.length >= 8 },
    { label: 'At least 1 uppercase letter (A-Z)', pass: /[A-Z]/.test(password) },
    { label: 'At least 1 lowercase letter (a-z)', pass: /[a-z]/.test(password) },
    { label: 'At least 1 number (0-9)', pass: /[0-9]/.test(password) },
    { label: 'At least 1 special character (!@#$%)', pass: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ];

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) { alert('Passwords do not match'); return; }
    register(email, password);
    navigate('/');
  };

  return (
    <div className="auth-page">
      <div className="auth-form-wrap auth-form-wide">

        <h1 className="auth-heading">Create an account</h1>
        <div className="auth-heading-line" />

        <form onSubmit={handleRegister} className="auth-form">

          {/* Account details section */}
          <div className="auth-section-heading">Your account details</div>
          <p className="auth-section-sub">
            These details should match <strong>you</strong>, the account holder. We'll use this information when addressing you in letters or when we speak with you.
          </p>

          {/* Title + First + Last name row */}
          <div className="auth-name-row">
            <div className="auth-field auth-field-sm">
              <label>Title <span className="auth-required-star">*</span></label>
              <select className="auth-input" value={title} onChange={e => setTitle(e.target.value)}>
                <option value="">Select</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Miss</option>
                <option>Ms</option>
                <option>Dr</option>
              </select>
            </div>
            <div className="auth-field auth-field-grow">
              <div className="auth-label-row">
                <label>First name</label>
                <span className="auth-required">*This field is required</span>
              </div>
              <input type="text" required className="auth-input" value={firstName}
                onChange={e => setFirstName(e.target.value)} placeholder="Enter your first name" />
            </div>
            <div className="auth-field auth-field-grow">
              <div className="auth-label-row">
                <label>Last name</label>
                <span className="auth-required">*This field is required</span>
              </div>
              <input type="text" required className="auth-input" value={lastName}
                onChange={e => setLastName(e.target.value)} placeholder="Enter your last name" />
            </div>
          </div>

          {/* Postcode */}
          <div className="auth-field">
            <div className="auth-label-row">
              <label>Your postcode</label>
              <span className="auth-required">*This field is required</span>
            </div>
            <input type="text" required className="auth-input" value={postcode}
              onChange={e => setPostcode(e.target.value)} placeholder="Enter your postcode" />
          </div>

          {/* Email */}
          <div className="auth-field">
            <div className="auth-label-row">
              <label>Email address</label>
              <span className="auth-required">*This field is required</span>
            </div>
            <input type="email" required className="auth-input" value={email}
              onChange={e => setEmail(e.target.value)} placeholder="Enter your email address" />
          </div>

          {/* Password setup section */}
          <div className="auth-section-heading" style={{ marginTop: '24px' }}>Password setup</div>
          <p className="auth-section-sub">Please create a password that is easy to remember. You will need it to login to your account.</p>

          {/* Password */}
          <div className="auth-field">
            <div className="auth-label-row">
              <label>Password</label>
              <span className="auth-required">*This field is required</span>
            </div>
            <div className="auth-input-wrap">
              <input type={showPassword ? 'text' : 'password'} required className="auth-input"
                value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" />
              <button type="button" className="show-btn" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? '🙈 Hide' : '👁 Show'}
              </button>
            </div>
          </div>

          {/* Password rules */}
          <div className="auth-password-rules">
            <strong>Your password must contain:</strong>
            <ul>
              {rules.map((r, i) => (
                <li key={i} className={r.pass ? 'rule-pass' : 'rule-fail'}>
                  <span>{r.pass ? '✕' : '✕'}</span> {r.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Confirm password */}
          <div className="auth-field">
            <div className="auth-label-row">
              <label>Confirm password</label>
              <span className="auth-required">*This field is required</span>
            </div>
            <div className="auth-input-wrap">
              <input type={showConfirm ? 'text' : 'password'} required className="auth-input"
                value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Enter your password" />
              <button type="button" className="show-btn" onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? '🙈 Hide' : '👁 Show'}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="auth-submit-btn">Register your account</button>

          {/* Newsletter */}
          <div className="auth-newsletter-section">
            <div className="auth-section-heading">Sign up to our newsletter</div>
            <label className="auth-checkbox-label" style={{ marginTop: '10px' }}>
              <input type="checkbox" checked={newsletter} onChange={e => setNewsletter(e.target.checked)} />
              Click the box if you would like to receive emails from Wiltshire Farm Foods with offers, promotions, surveys, competitions or products that might be of interest to you? You can unsubscribe at any time.
            </label>
          </div>

        </form>

        <p className="auth-switch-text" style={{ marginTop: '16px' }}>
          Already have an account?{' '}
          <Link to="/login" className="auth-link">Sign in here</Link>
        </p>

      </div>
    </div>
  );
};

export default Register;