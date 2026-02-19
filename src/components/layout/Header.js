import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingBasket, FaUser, FaPhoneAlt, FaFileAlt, FaTimes, FaChevronDown, FaBars } from 'react-icons/fa';
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
    { label: "Ready Meals", route: null, category: "Ready Meals" },
    { label: "Desserts", route: "/desserts", category: null },
    { label: "Bakery", route: "/bakery", category: null },
    { label: "Breakfast & Snacks", route: "/breakfast-snacks", category: null },
    { label: "Special Offers", route: "/special-offers", category: null },
    { label: "About Our Food", route: "/about-our-food", category: null },
    { label: "Help & Advice", route: "/help-advice", category: null },
  ];

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    if (item.route) {
      navigate(item.route);
    } else if (item.category) {
      setActiveCategory(item.category);
      navigate('/');
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (window.location.pathname !== '/') navigate('/');
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="header-container" onMouseLeave={() => setIsMegaMenuOpen(false)}>

      {/* --- TOP BAR (green strip) --- */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <Link to="/request-brochure" className="top-link">
              <FaFileAlt /> <span className="hide-mobile">Request a Brochure</span>
            </Link>
            <span className="top-link hide-mobile">Trustpilot</span>
            <span className="top-link">
              <FaPhoneAlt /> <span className="hide-mobile">9363495266</span>
            </span>
            <Link to="/contact-us" className="top-link hide-mobile">Contact Us</Link>
          </div>

          <div className="top-bar-right">
            {user ? (
              <div className="user-info">
                <span className="top-link"><FaUser /> <span className="hide-mobile">{user.email}</span></span>
                <button onClick={() => { logout(); navigate('/'); }} className="logout-btn">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="top-link">
                <FaUser /> <span className="hide-mobile">Login / Register</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* --- MIDDLE BAR (Logo, Search, Basket, Hamburger) --- */}
      <div className="middle-bar">
        <div className="middle-bar-inner">
          <Link to="/" className="logo">Wiltshire Farm Foods</Link>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button className="clear-search-btn" onClick={() => setSearchTerm('')}>
                <FaTimes />
              </button>
            )}
            <button className="search-btn">Search</button>
          </div>

          <div className="header-right-actions">
            {/* Brochure button — hidden on mobile */}
            <Link to="/request-brochure" className="hide-mobile">
              <button className="request-brochure-btn">Request a brochure</button>
            </Link>

            {/* Basket */}
            <Link to="/basket" className="basket-container">
              <FaShoppingBasket size={22} />
              <span>£{basketTotal.toFixed(2)}</span>
            </Link>

            {/* Hamburger — only on mobile */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- DESKTOP NAV BAR --- */}
      <nav className="nav-bar desktop-only">
        <div className="nav-bar-inner">
          {/* Browse Mega Menu */}
          <div className="browse-container">
            <button
              className="browse-btn"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              Browse our meals <FaChevronDown />
            </button>

            {isMegaMenuOpen && (
              <div className="mega-menu" onMouseEnter={() => setIsMegaMenuOpen(true)}>
                <div className="mega-banners">
                  <div className="menu-banner banner-dark">
                    <div className="banner-content">
                      <h3>CHEF'S KITCHEN</h3>
                      <p>OUR NEW LUXURY MENU</p>
                      <button className="banner-btn" onClick={() => { setActiveCategory('All'); navigate('/'); setIsMegaMenuOpen(false); }}>Shop now</button>
                    </div>
                    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Chef's Kitchen" />
                  </div>
                  <div className="menu-banner banner-light">
                    <div className="banner-content">
                      <h3>SOFTER<br />foods</h3>
                      <p>Level 4, Level 5 & Level 6</p>
                      <button className="banner-btn" onClick={() => { setActiveCategory('All'); navigate('/'); setIsMegaMenuOpen(false); }}>SHOP NOW</button>
                    </div>
                    <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Softer Foods" />
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

          {/* Desktop Nav Items */}
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item" onClick={() => handleNavClick(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* --- MOBILE FULL-SCREEN DRAWER MENU --- */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="mobile-backdrop" onClick={closeMobileMenu} />

          {/* Drawer */}
          <div className="mobile-drawer">
            <div className="mobile-drawer-header">
              <span className="mobile-drawer-title">Menu</span>
              <button className="mobile-close-btn" onClick={closeMobileMenu}>
                <FaTimes size={20} />
              </button>
            </div>

            {/* All category nav items */}
            <ul className="mobile-nav-list">
              {navItems.map((item, index) => (
                <li key={index} className="mobile-nav-item" onClick={() => handleNavClick(item)}>
                  {item.label}
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-footer">
              {user ? (
                <button className="mobile-logout-btn" onClick={() => { logout(); navigate('/'); closeMobileMenu(); }}>
                  Logout
                </button>
              ) : (
                <Link to="/login" onClick={closeMobileMenu} className="mobile-login-btn">
                  <FaUser /> Login / Register
                </Link>
              )}
            </div>
          </div>
        </>
      )}

    </header>
  );
};

export default Header;