import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaShoppingBasket, FaUser, FaPhoneAlt, FaEnvelope,
  FaFileAlt, FaTimes, FaChevronDown, FaBars, FaHeart, FaSearch
} from 'react-icons/fa';
import { useBasket } from '../../context/BasketContext';
import { useAuth } from '../../context/AuthContext';
import '../../styles/Header.css';

const Header = () => {
  const { basketTotal, searchTerm, setSearchTerm, setActiveCategory } = useBasket();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", route: "/" },
    { label: "How to get started", route: "/" },
    { label: "About our food", route: "/about-our-food" },
    { label: "About us", route: "/" },
    { label: "Contact us", route: "/contact-us" },
  ];

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    if (item.route) navigate(item.route);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (window.location.pathname !== '/') navigate('/');
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="header-container" onMouseLeave={() => setIsMegaMenuOpen(false)}>

      {/* ── ROW 1: Very top cream bar ── */}
      <div className="top-cream-bar">
        <div className="top-cream-inner">
          <span className="top-cream-right">
            <span className="top-cream-link">Enter Delivery Postcode</span>
            <span className="top-cream-divider">|</span>
            {user ? (
              <>
                <span className="top-cream-link"><FaUser size={11} /> {user.email}</span>
                <span className="top-cream-divider">|</span>
                <span className="top-cream-link" onClick={() => { logout(); navigate('/'); }} style={{ cursor: 'pointer' }}>Logout</span>
              </>
            ) : (
              <>
                <Link to="/login" className="top-cream-link">Sign In</Link>
                <span className="top-cream-divider">|</span>
                <Link to="/register" className="top-cream-link">Register</Link>
              </>
            )}
          </span>
        </div>
      </div>

      {/* ── ROW 2: Grey bar with logo ── */}
      <div className="grey-bar">
        <div className="grey-bar-inner">
          {/* Left: contact info */}
          <div className="grey-bar-left">
            <div className="contact-item">
              <FaPhoneAlt size={13} />
              <span>Call 0800 077 3100</span>
            </div>
            <div className="contact-item">
              <FaEnvelope size={13} />
              <span>Contact us</span>
            </div>
          </div>

          {/* Centre: Logo */}
          <Link to="/" className="wff-logo">
            <div className="logo-top">WILTSHIRE</div>
            <div className="logo-mid">EST. FARM 1991</div>
          </Link>

          {/* Right: mobile hamburger */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* ── ROW 3: Gold bar ── */}
      <div className="gold-header-bar">
        <div className="gold-bar-inner">
          <div className="gold-bar-left">
            <FaFileAlt size={14} />
            <span>Shop by brochure code</span>
          </div>
          <div className="logo-foods-text">FOODS</div>
          <div className="gold-bar-right desktop-only">
            <Link to="/request-brochure" className="gold-bar-link"></Link>
          </div>
        </div>
      </div>

      {/* ── SEARCH ROW ── */}
      <div className="search-row">
        <div className="search-row-inner">
          <div className="search-container">
            <FaSearch size={14} className="search-icon-inner" />
            <input
              type="text"
              placeholder="Search for items or brochure code"
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button className="clear-search-btn" onClick={() => setSearchTerm('')}>
                <FaTimes size={12} />
              </button>
            )}
            <button className="search-btn">Search</button>
          </div>
          <Link to="/request-brochure" className="request-brochure-btn desktop-only">
            Request a brochure
          </Link>
        </div>
      </div>

      {/* ── NAV ROW (desktop) ── */}
      <nav className="nav-bar desktop-only">
        <div className="nav-bar-inner">

          {/* Browse dropdown */}
          <div className="browse-container">
            <button
              className="browse-btn"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              Browse our meals <FaChevronDown size={11} />
            </button>

            {isMegaMenuOpen && (
              <div className="mega-menu" onMouseEnter={() => setIsMegaMenuOpen(true)}>
                <div className="mega-banners">
                  <div className="menu-banner banner-dark">
                    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Chef's Kitchen" />
                    <div className="banner-content">
                      <h3>CHEF'S KITCHEN</h3>
                      <p>OUR NEW LUXURY MENU</p>
                      <button className="banner-btn" onClick={() => { setActiveCategory('All'); navigate('/'); setIsMegaMenuOpen(false); }}>Shop now</button>
                    </div>
                  </div>
                  <div className="menu-banner banner-light">
                    <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Softer Foods" />
                    <div className="banner-content">
                      <h3>SOFTER<br />foods</h3>
                      <p>Level 4, Level 5 & Level 6</p>
                      <button className="banner-btn" onClick={() => { setActiveCategory('All'); navigate('/'); setIsMegaMenuOpen(false); }}>SHOP NOW</button>
                    </div>
                  </div>
                </div>
                <div className="mega-menu-grid">
                  <div className="mega-column">
                    <h4>Main Meals</h4>
                    <ul>
                      <li onClick={() => { setActiveCategory('Ready Meals'); navigate('/'); setIsMegaMenuOpen(false); }}>Chicken & Turkey</li>
                      <li onClick={() => { setActiveCategory('Ready Meals'); navigate('/'); setIsMegaMenuOpen(false); }}>Beef</li>
                      <li onClick={() => { setActiveCategory('Ready Meals'); navigate('/'); setIsMegaMenuOpen(false); }}>Fish</li>
                    </ul>
                    <h4 style={{ marginTop: '20px' }}>Desserts</h4>
                    <ul>
                      <li onClick={() => { navigate('/desserts'); setIsMegaMenuOpen(false); }}>Desserts & Cakes</li>
                    </ul>
                  </div>
                  <div className="mega-column">
                    <h4>Our Ranges</h4>
                    <ul>
                      <li onClick={() => { setActiveCategory('All'); navigate('/'); setIsMegaMenuOpen(false); }}>Best Sellers</li>
                      <li onClick={() => { setActiveCategory('All'); navigate('/'); setIsMegaMenuOpen(false); }}>Chef's Kitchen</li>
                      <li onClick={() => { navigate('/breakfast-snacks'); setIsMegaMenuOpen(false); }}>Breakfast</li>
                    </ul>
                  </div>
                  <div className="mega-column">
                    <h4>Special Diets</h4>
                    <ul>
                      <li onClick={() => { setActiveCategory('All'); navigate('/'); setIsMegaMenuOpen(false); }}>Vegetarian</li>
                      <li onClick={() => { setActiveCategory('All'); navigate('/'); setIsMegaMenuOpen(false); }}>Gluten Free</li>
                    </ul>
                  </div>
                  <div className="mega-column">
                    <h4>Specials</h4>
                    <ul>
                      <li onClick={() => { navigate('/special-offers'); setIsMegaMenuOpen(false); }}>Special Offers</li>
                      <li onClick={() => { navigate('/bakery'); setIsMegaMenuOpen(false); }}>Bakery</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Centre nav links */}
          <ul className="nav-list">
            {navItems.map((item, i) => (
              <li key={i} className="nav-item" onClick={() => handleNavClick(item)}>
                {item.label}
              </li>
            ))}
          </ul>

          {/* Right: favourites + basket */}
          <div className="nav-right-actions">
            <button className="nav-icon-btn"><FaHeart size={18} /><span>Favourites</span></button>
            <Link to="/basket" className="basket-container">
              <FaShoppingBasket size={20} />
              <span>£{basketTotal.toFixed(2)}</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      {isMobileMenuOpen && (
        <>
          <div className="mobile-backdrop" onClick={closeMobileMenu} />
          <div className="mobile-drawer">
            <div className="mobile-drawer-header">
              <span className="mobile-drawer-title">Menu</span>
              <button className="mobile-close-btn" onClick={closeMobileMenu}><FaTimes size={20} /></button>
            </div>
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item" onClick={() => { setActiveCategory('Ready Meals'); navigate('/'); closeMobileMenu(); }}>Ready Meals</li>
              <li className="mobile-nav-item" onClick={() => { navigate('/desserts'); closeMobileMenu(); }}>Desserts</li>
              <li className="mobile-nav-item" onClick={() => { navigate('/bakery'); closeMobileMenu(); }}>Bakery</li>
              <li className="mobile-nav-item" onClick={() => { navigate('/breakfast-snacks'); closeMobileMenu(); }}>Breakfast & Snacks</li>
              <li className="mobile-nav-item" onClick={() => { navigate('/special-offers'); closeMobileMenu(); }}>Special Offers</li>
              {navItems.map((item, i) => (
                <li key={i} className="mobile-nav-item" onClick={() => handleNavClick(item)}>{item.label}</li>
              ))}
            </ul>
            <div className="mobile-drawer-footer">
              {user ? (
                <button className="mobile-logout-btn" onClick={() => { logout(); navigate('/'); closeMobileMenu(); }}>Logout</button>
              ) : (
                <Link to="/login" onClick={closeMobileMenu} className="mobile-login-btn"><FaUser /> Login / Register</Link>
              )}
              <Link to="/basket" onClick={closeMobileMenu} className="mobile-basket-link">
                <FaShoppingBasket /> Basket £{basketTotal.toFixed(2)}
              </Link>
            </div>
          </div>
        </>
      )}

    </header>
  );
};

export default Header;