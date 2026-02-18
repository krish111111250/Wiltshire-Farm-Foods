import React, { useState } from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import { products } from '../data/products';
import { useBasket } from '../context/BasketContext';
import '../styles/Home.css';

// --- FIX: Correct Import Path (It is inside components/sections) ---
import TopSellers from '../components/sections/TopSellers';

const Home = () => {
  const { searchTerm, activeCategory } = useBasket();
  const [sortOption, setSortOption] = useState('relevant');

  // Logic: Filter by Category, Sub-Category, OR Dietary tag
  const filteredProducts = products.filter((product) => {
    const term = searchTerm || ''; // Safety check for null

    // 1. Check Search Term
    const matchesSearch = product.title.toLowerCase().includes(term.toLowerCase());

    // 2. Check Category (Matches main tabs or Mega Menu sub-links)
    const matchesCategory =
      activeCategory === 'All' ||
      product.category === activeCategory ||
      product.subCategory === activeCategory ||
      product.dietary === activeCategory;

    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortOption === 'price-low-high') {
      return parseFloat(a.price.replace('£', '')) - parseFloat(b.price.replace('£', ''));
    } else if (sortOption === 'price-high-low') {
      return parseFloat(b.price.replace('£', '')) - parseFloat(a.price.replace('£', ''));
    } else if (sortOption === 'name-a-z') {
      return a.title.localeCompare(b.title);
    }
    return 0; // 'relevant' or default
  });

  // Helper to check if we are on the main "Home" view (no search, no filter)
  const isMainHome = !searchTerm && activeCategory === 'All';

  return (
    <div className="home-page">
      {/* 1. Hero Section (Only on main home view) */}
      {isMainHome && <Hero />}

      {/* Container for Title and Sort */}
      <div className="results-header">
        <h2>
          {searchTerm
            ? `Results for "${searchTerm}"`
            : activeCategory === 'All'
              ? 'Our Recommendations'
              : activeCategory
          }
        </h2>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="sort-select"
        >
          <option value="relevant">Relevance</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="name-a-z">Name: A - Z</option>
        </select>
      </div>

      {/* 2. Featured Products / Search Results */}
      <FeaturedProducts
        products={filteredProducts}
        title="" // Title is now handled above
      />

      {/* 3. Top Sellers Section (Only on main home view) */}
      {isMainHome && <TopSellers />}

      {/* 4. Empty State: If no products found */}
      {filteredProducts.length === 0 && (
        <div style={{ textAlign: 'center', padding: '50px', color: '#666' }}>
          <h3>No meals found for "{searchTerm || activeCategory}"</h3>
          <p>Try searching for something else or browse our full menu.</p>
          <button
            onClick={() => window.location.href = '/'}
            style={{
              marginTop: '15px',
              padding: '10px 20px',
              backgroundColor: '#1a4d3a',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px'
            }}
          >
            View All Meals
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;