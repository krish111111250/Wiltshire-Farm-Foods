import React from 'react';
import ProductCard from '../common/ProductCard';
import { useBasket } from '../../context/BasketContext'; // 1. Import hook
import '../../styles/ProductCard.css'; 

const FeaturedProducts = ({ products, title }) => {
  // 2. Get the reset functions from context
  const { setSearchTerm, setActiveCategory } = useBasket();

  const handleReset = () => {
    setSearchTerm('');
    setActiveCategory('All');
  };

  return (
    <section className="featured-section">
      <div className="section-header" style={{ marginBottom: '30px' }}>
        <h2 className="section-title">{title || "Our Customer Favourites"}</h2>
        <p className="item-count" style={{ color: '#666' }}>
          {products.length} {products.length === 1 ? 'item' : 'items'} found
        </p>
      </div>

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          /* 3. Updated No Results Section with a Reset Button */
          <div className="no-results" style={{ 
            gridColumn: '1/-1', 
            textAlign: 'center', 
            padding: '80px 20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px'
          }}>
            <h3 style={{ color: '#005e2f', fontSize: '24px' }}>No meals found matching your search</h3>
            <p style={{ marginBottom: '20px' }}>Try searching for something else, or click below to see everything.</p>
            
            <button 
              onClick={handleReset}
              style={{
                backgroundColor: '#005e2f',
                color: 'white',
                padding: '12px 30px',
                borderRadius: '30px',
                border: 'none',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              View All Meals
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;