import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingBasket, FaUser, FaPhoneAlt, FaFileAlt, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useBasket } from '../../context/BasketContext';
import { useAuth } from '../../context/AuthContext';
import '../../styles/Header.css';

const Header = () => {
  const { basketTotal, searchTerm, setSearchTerm, setActiveCategory } = useBasket();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // State to control the Mega Menu visibility
  // State to control menus
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [textSize, setTextSize] = useState(1); // 1 = Normal, 2 = Medium, 3 = Large

  const navItems = [
    "Ready Meals",
    "Desserts",
    "Bakery",
    "Breakfast & Snacks",
    "Special Offers",
    "About Our Food",
    "Help & Advice"
  ];

  // --- UPDATED LOGIC HERE ---
  // ... inside Header component ...

  const handleFilterSelection = (category) => {
    if (category === "About Our Food") {
      navigate('/about-our-food');
    } else if (category === "Help & Advice") {
      navigate('/help-advice');
    } else if (category === "Special Offers") {
      navigate('/special-offers');
    } else if (category === "Breakfast & Snacks") {
      navigate('/breakfast-snacks');
    } else if (category === "Bakery") {
      navigate('/bakery'); // <--- ADD THIS LINE
    } else {
      setActiveCategory(category);
      navigate('/');
    }
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleTextSizeChange = (size) => {
    setTextSize(size);
    // Apply a class to the body or a wrapper
    const root = document.documentElement;
    if (size === 1) root.style.fontSize = '16px';
    if (size === 2) root.style.fontSize = '18px';
    if (size === 3) root.style.fontSize = '20px';
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (window.location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <header className="header-container" onMouseLeave={() => setIsMegaMenuOpen(false)}>

      {/* --- 1. Top Bar (The Green Layer) --- */}
      <div className="top-bar">
        <div className="top-bar-inner">

          {/* LEFT SIDE: Brochure, Trustpilot, Phone, Contact Us */}
          <div className="top-bar-left">
            <Link to="/request-brochure" className="top-link" style={{ textDecoration: 'none', color: 'inherit' }}>
              <FaFileAlt /> Request a Brochure
            </Link>

            <span className="top-link">Trustpilot</span>

            <span className="top-link">
              <FaPhoneAlt /> 9363495266
            </span>

            <Link to="/contact-us" className="top-link" style={{ textDecoration: 'none', color: 'inherit' }}>
              Contact Us
            </Link>

            {/* Accessibility: Text Size Toggle */}
            <div className="text-size-toggle">
              <span className="top-link">Text Size:</span>
              <button onClick={() => handleTextSizeChange(1)} className={`size-btn ${textSize === 1 ? 'active' : ''}`}>A</button>
              <button onClick={() => handleTextSizeChange(2)} className={`size-btn ${textSize === 2 ? 'active' : ''}`} style={{ fontSize: '1.2em' }}>A</button>
              <button onClick={() => handleTextSizeChange(3)} className={`size-btn ${textSize === 3 ? 'active' : ''}`} style={{ fontSize: '1.4em' }}>A</button>
            </div>
          </div>

          {/* RIGHT SIDE: Login / Register */}
          <div className="top-bar-right">
            {user ? (
              <div className="user-info">
                <span className="top-link"><FaUser /> {user.email}</span>
                <button onClick={() => { logout(); navigate('/'); }} className="logout-btn">Logout</button>
              </div>
            ) : (
              <Link to="/login" className="top-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                <FaUser /> Login / Register
              </Link>
            )}
          </div>

        </div>
      </div>

      {/* --- 2. Middle Bar (Logo, Search, Basket) --- */}
      <div className="middle-bar">
        <div className="middle-bar-inner">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            Wiltshire Farm Foods
          </Link>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search for a product (e.g. Beef Casserole)"
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && <button className="clear-search-btn" onClick={() => setSearchTerm('')}><FaTimes /></button>}
            <button className="search-btn">Search</button>
          </div>

          <div className="header-right-actions">
            <Link to="/request-brochure">
              <button className="request-brochure-btn">Request a brochure</button>
            </Link>

            <Link to="/basket" className="basket-container" style={{ textDecoration: 'none' }}>
              <FaShoppingBasket size={24} />
              <span>£{basketTotal.toFixed(2)}</span>
            </Link>

            {/* Mobile Hamburger Icon */}
            <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FaTimes size={24} /> : <div className="hamburger"><span></span><span></span><span></span></div>}
            </button>
          </div>
        </div>
      </div>

      {/* --- 3. Navigation Bar & Mega Menu --- */}
      <nav className={`nav-bar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="nav-bar-inner">
          <div className="browse-container">
            <button
              className="browse-btn"
              onMouseEnter={() => !isMobileMenuOpen && setIsMegaMenuOpen(true)}
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            >
              Browse our meals <FaChevronDown />
            </button>

            {/* Mega Menu Content */}
            {isMegaMenuOpen && (
              <div className="mega-menu" onMouseEnter={() => setIsMegaMenuOpen(true)}>

                {/* Banners */}
                <div className="mega-banners">
                  <div className="menu-banner banner-dark">
                    <div className="banner-content">
                      <h3>CHEF'S KITCHEN</h3>
                      <p>OUR NEW LUXURY MENU</p>
                      <button className="banner-btn" onClick={() => handleFilterSelection('All')}>Shop now</button>
                    </div>
                    <img src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Chef's Kitchen" />
                  </div>

                  <div className="menu-banner banner-light">
                    <div className="banner-content">
                      <h3>SOFTER <br /> foods</h3>
                      <p>Level 4, Level 5 & Level 6</p>
                      <button className="banner-btn" onClick={() => handleFilterSelection('All')}>SHOP NOW</button>
                    </div>
                    <img src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Softer Foods" />
                  </div>
                </div>

                {/* Grid Links */}
                <div className="mega-menu-grid">
                  <div className="mega-column">
                    <h4>Main Meals</h4>
                    <ul>
                      <li onClick={() => handleFilterSelection('Ready Meals')}>Chicken & Turkey</li>
                      <li onClick={() => handleFilterSelection('Ready Meals')}>Beef</li>
                      <li onClick={() => handleFilterSelection('Ready Meals')}>Pork</li>
                      <li onClick={() => handleFilterSelection('Ready Meals')}>Lamb</li>
                      <li onClick={() => handleFilterSelection('Ready Meals')}>Fish</li>
                    </ul>
                    <h4 className="mt-20">Desserts & Lighter Bites</h4>
                    <ul>
                      <li onClick={() => handleFilterSelection('Desserts')}>Desserts & Cakes</li>
                      <li onClick={() => handleFilterSelection('Bakery')}>Soups, Snacks & Sides</li>
                    </ul>
                  </div>

                  <div className="mega-column">
                    <h4>Our Ranges</h4>
                    <ul>
                      <li onClick={() => handleFilterSelection('All')}>Best Sellers</li>
                      <li onClick={() => handleFilterSelection('All')}>Chef's Kitchen</li>
                      <li onClick={() => handleFilterSelection('All')}>Essentials</li>
                      <li onClick={() => handleFilterSelection('All')}>Extra Tender</li>
                      <li onClick={() => handleFilterSelection('Breakfast & Snacks')}>Breakfast</li>
                    </ul>
                  </div>

                  <div className="mega-column">
                    <h4>Special Diets</h4>
                    <ul>
                      <li onClick={() => handleFilterSelection('Browse by Dietary')}>Vegetarian</li>
                      <li onClick={() => handleFilterSelection('Browse by Dietary')}>Gluten Free</li>
                      <li onClick={() => handleFilterSelection('Browse by Dietary')}>Free From</li>
                    </ul>
                    <h4 className="mt-20">Softer Foods</h4>
                    <ul>
                      <li onClick={() => handleFilterSelection('All')}>Level 4 Purée Meals</li>
                      <li onClick={() => handleFilterSelection('All')}>Level 5 Minced Meals</li>
                    </ul>
                  </div>

                  <div className="mega-column">
                    <h4>World Foods</h4>
                    <ul>
                      <li onClick={() => handleFilterSelection('All')}>Caribbean & West Indian</li>
                      <li onClick={() => handleFilterSelection('All')}>Kosher</li>
                      <li onClick={() => handleFilterSelection('All')}>Asian Halal</li>
                    </ul>
                    <h4 className="mt-20">Specials</h4>
                    <ul>
                      <li onClick={() => handleFilterSelection('Special Offers')}>Gift Vouchers</li>
                      <li onClick={() => handleFilterSelection('Special Offers')}>Tasty Savings</li>
                      <li onClick={() => handleFilterSelection('Special Offers')}>Winter & Spring Menu</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item" onClick={() => handleFilterSelection(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

    </header>
  );
};

export default Header;