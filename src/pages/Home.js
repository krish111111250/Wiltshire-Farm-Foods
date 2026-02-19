import React, { useState } from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import { products } from '../data/products';
import { useBasket } from '../context/BasketContext';
import TopSellers from '../components/sections/TopSellers';
import '../styles/Home.css';

const Home = () => {
  const { searchTerm, activeCategory } = useBasket();
  const [sortOption, setSortOption] = useState('relevant');

  const filteredProducts = products.filter((product) => {
    const term = searchTerm || '';
    const matchesSearch = product.title.toLowerCase().includes(term.toLowerCase());
    const matchesCategory =
      activeCategory === 'All' ||
      product.category === activeCategory ||
      product.subCategory === activeCategory ||
      product.dietary === activeCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortOption === 'price-low-high') return parseFloat(a.price.replace('£', '')) - parseFloat(b.price.replace('£', ''));
    if (sortOption === 'price-high-low') return parseFloat(b.price.replace('£', '')) - parseFloat(a.price.replace('£', ''));
    if (sortOption === 'name-a-z') return a.title.localeCompare(b.title);
    return 0;
  });

  const isMainHome = !searchTerm && activeCategory === 'All';

  const promoCards = [
    {
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "How to get started",
      text: "Getting started with Wiltshire Farm Foods is simple. Call us or order online for free delivery straight to your door.",
      btn: "Find out more"
    },
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "About our food",
      text: "We use quality ingredients to make meals that taste great, look great and are nutritionally balanced — made with care.",
      btn: "Find out more"
    },
    {
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Shop our range",
      text: "Browse over 300 delicious frozen meals, desserts, bakery goods and breakfasts. Something for every taste.",
      btn: "Shop now"
    }
  ];

  return (
    <div className="home-page">

      {/* 1. Hero */}
      {isMainHome && <Hero />}

      {/* 2. Trustpilot bar */}
      {isMainHome && (
        <div className="trustpilot-bar">
          <span>Our customers say</span>
          <strong>Excellent</strong>
          <span className="tp-stars">★★★★★</span>
          <span>4.7 out of 5 based on 62,237 reviews</span>
          <span className="tp-logo">| Trustpilot</span>
        </div>
      )}

      {/* 3. Promo cards */}
      {isMainHome && (
        <section className="promo-cards-section">
          <div className="promo-cards-inner">
            {promoCards.map((card, i) => (
              <div key={i} className="promo-card">
                <div className="promo-card-img">
                  <img src={card.image} alt={card.title} />
                </div>
                <div className="promo-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                  <button className="promo-btn">{card.btn}</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Find delivery days */}
      {isMainHome && (
        <section className="delivery-section">
          <h2>Find delivery days</h2>
          <div className="delivery-underline" />
          <p>Enter your postcode to find out when we can deliver to your door</p>
          <div className="delivery-form">
            <input type="text" placeholder="Enter your postcode" className="delivery-input" />
            <button className="delivery-btn">Get Started</button>
          </div>
        </section>
      )}

      {/* 5. Top Sellers */}
      {isMainHome && <TopSellers />}

      {/* 6. Wood / Brochure section */}
      {isMainHome && (
        <section className="wood-section">
          <div className="wood-section-inner">
            <div className="wood-col">
              <h3>Request a free brochure</h3>
              <div className="wood-underline" />
              <p>Browse our full range of over 300 meals in our free printed brochure.</p>
              <button className="wood-btn">Request a brochure</button>
            </div>
            <div className="wood-center">
              <img
                src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Brochure"
                className="wood-brochure-img"
              />
            </div>
            <div className="wood-col">
              <h3>Shop by brochure code</h3>
              <div className="wood-underline" />
              <p>Already have a brochure? Use your code to find and order your favourite meals.</p>
              <button className="wood-btn">Shop by code</button>
            </div>
          </div>
        </section>
      )}

      {/* Search / Category results */}
      {(!isMainHome || searchTerm) && (
        <div className="results-header">
          <h2>
            {searchTerm
              ? `Results for "${searchTerm}"`
              : activeCategory === 'All' ? 'Our Recommendations' : activeCategory}
          </h2>
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="sort-select">
            <option value="relevant">Relevance</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="name-a-z">Name: A - Z</option>
          </select>
        </div>
      )}

      {!isMainHome && (
        <FeaturedProducts products={filteredProducts} title="" />
      )}

      {filteredProducts.length === 0 && !isMainHome && (
        <div style={{ textAlign: 'center', padding: '50px', color: '#666' }}>
          <h3>No meals found for "{searchTerm || activeCategory}"</h3>
          <p>Try searching for something else or browse our full menu.</p>
          <button
            onClick={() => window.location.href = '/'}
            style={{ marginTop: '15px', padding: '10px 20px', backgroundColor: '#2d5a4e', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '3px' }}
          >
            View All Meals
          </button>
        </div>
      )}

    </div>
  );
};

export default Home;