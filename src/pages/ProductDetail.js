import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { FaStar, FaArrowLeft } from 'react-icons/fa';
import { useBasket } from '../context/BasketContext';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToBasket } = useBasket();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Product not found</div>;
  }

  return (
    <div className="product-page-wrapper" style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div className="product-detail-container">
        {/* Left Column */}
        <div className="detail-image-section">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px', color: '#666' }}>
            <FaArrowLeft /> Back to Menu
          </Link>
          <img src={product.image} alt={product.title} className="detail-image" />
        </div>

        {/* Right Column */}
        <div className="detail-info-section">
          <h1 className="detail-title">{product.title}</h1>

          <div className="detail-rating">
            <div>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < product.rating ? "#c5a059" : "#e4e5e9"} />
              ))}
            </div>
            <span className="review-count">(124 reviews)</span>
          </div>

          <span className="detail-price">{product.price}</span>

          <p className="detail-description">{product.description}</p>

          <div className="detail-extras">
            <div className="detail-section">
              <h3>Dietary Information</h3>
              <div className="dietary-badges">
                {product.dietaryCodes?.glutenFree && <span className="badge gf">Gluten Free</span>}
                {product.dietaryCodes?.lowSalt && <span className="badge ls">Low Salt</span>}
                {product.dietaryCodes?.vegetarian && <span className="badge v">Vegetarian</span>}
                {!product.dietaryCodes?.glutenFree && !product.dietaryCodes?.vegetarian && <span>Standard</span>}
              </div>
            </div>

            <div className="detail-section">
              <h3>Cooking Instructions</h3>
              <p>{product.cookingInstructions}</p>
            </div>

            <div className="detail-section">
              <h3>Nutrition (per serving)</h3>
              <ul className="nutrition-list">
                <li><strong>Calories:</strong> {product.nutrition?.kcal}</li>
                <li><strong>Protein:</strong> {product.nutrition?.protein}</li>
                <li><strong>Carbs:</strong> {product.nutrition?.carbs}</li>
                <li><strong>Fat:</strong> {product.nutrition?.fat}</li>
              </ul>
            </div>
          </div>

          <div className="add-to-basket-area">
            {/* UPDATED: Passing 'product' object instead of 'product.price' */}
            <button
              className="basket-btn-large"
              onClick={() => addToBasket(product)}
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="related-products">
        <h2>You Might Also Like</h2>
        <div className="related-grid">
          {products
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 3)
            .map(related => (
              <Link to={`/products/${related.id}`} key={related.id} className="related-card">
                <img src={related.image} alt={related.title} />
                <h4>{related.title}</h4>
                <span className="related-price">{related.price}</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;