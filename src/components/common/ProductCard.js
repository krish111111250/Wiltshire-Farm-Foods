import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useBasket } from '../../context/BasketContext';

const ProductCard = ({ product }) => {
  const { addToBasket } = useBasket();

  return (
    <div className="product-card">
      {/* 1. Clickable Image */}
      <Link to={`/products/${product.id}`} className="card-image-container">
        {product.isNew && <span className="new-badge">NEW</span>}
        <img src={product.image} alt={product.title} className="card-image" />
      </Link>
      
      <div className="card-details">
        {/* 2. Clickable Title */}
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
           <h3 className="card-title">{product.title}</h3>
        </Link>
        
        {/* 3. Star Ratings */}
        <div className="card-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color={i < product.rating ? "#c5a059" : "#e4e5e9"} />
          ))}
        </div>

        {/* 4. Price and Add Button */}
        <div className="card-footer">
          <span className="price">{product.price}</span>
          
          {/* 5. UPDATED: Passing 'product' object instead of 'product.price' */}
          <button 
            className="add-btn"
            onClick={() => addToBasket(product)}
          >
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;