import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useBasket } from '../../context/BasketContext';

const ProductCard = ({ product }) => {
  const { addToBasket } = useBasket();

  return (
    <div className="product-card">
      {/* Image */}
      <Link to={`/products/${product.id}`} className="card-image-container">
        <button className="fav-icon" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
          <FaHeart />
        </button>
        {product.isNew && <span className="new-badge">NEW</span>}
        <img src={product.image} alt={product.title} className="card-image" />
      </Link>

      <div className="card-details">
        {/* Title */}
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
          <h3 className="card-title">{product.title}</h3>
        </Link>

        {/* Weight + Price row */}
        <div className="card-meta-row">
          <span className="card-weight">{product.weight || '400g'}</span>
          <span className="price">{product.price}</span>
        </div>

        {/* Code + Basket button row */}
        <div className="card-footer">
          <span className="product-code">#{product.id || '0000'}</span>
          <button className="add-btn" onClick={() => addToBasket(product)}>
            + Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;