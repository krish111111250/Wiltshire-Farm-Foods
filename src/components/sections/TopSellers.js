import React from 'react';
import { FaStar, FaHeart, FaPlus } from 'react-icons/fa';
import '../../styles/TopSellers.css';

const TopSellers = () => {
  const products = [
    {
      id: 1,
      title: "Roast Chicken Breast with Stuffing",
      weight: "390g",
      price: "£5.99",
      calories: "549",
      reviews: "478 reviews",
      rating: 5,
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80",
      badge: "WELL BALANCED",
      isFav: false
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      weight: "455g",
      price: "£5.79",
      calories: "4166",
      reviews: "726 reviews",
      rating: 5,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80",
      badge: "CUSTOMER FAVOURITE",
      isFav: true
    },
    {
      id: 3,
      title: "Cottage Pie",
      weight: "380g",
      price: "£4.85",
      calories: "208",
      reviews: "770 reviews",
      rating: 5,
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=400&q=80",
      badge: "WELL BALANCED",
      isFav: false
    }
  ];

  return (
    <div className="top-sellers-section">
      <div className="top-sellers-inner">
        <h2 className="ts-heading">Top sellers</h2>
        <div className="ts-underline" />

        <div className="sellers-grid">
          {products.map((product) => (
            <div key={product.id} className="seller-card">

              {/* Image with badges */}
              <div className="image-container">
                {product.badge === "WELL BALANCED" && (
                  <div className="badge-balanced"><span>WELL</span><br />BALANCED</div>
                )}
                {product.badge === "CUSTOMER FAVOURITE" && (
                  <div className="badge-fave">
                    <div className="star-icon">★</div>
                    <span>CUSTOMER FAVOURITE</span>
                  </div>
                )}
                <img src={product.image} alt={product.title} />
                <button className="heart-btn">
                  <FaHeart color={product.isFav ? "#e74c3c" : "#ccc"} />
                </button>
              </div>

              {/* Card body */}
              <div className="seller-card-body">
                {/* Stars */}
                <div style={{ display: 'flex', gap: '2px', marginBottom: '6px' }}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color={i < product.rating ? "#f0a500" : "#ddd"} size={13} />
                  ))}
                  <span style={{ fontSize: '11px', color: '#888', marginLeft: '4px' }}>{product.reviews}</span>
                </div>

                <h3>{product.title}</h3>

                {/* Weight + Price */}
                <div className="card-meta-row">
                  <span className="weight">{product.weight}</span>
                  <span className="price">{product.price}</span>
                </div>

                {/* Code + Basket */}
                <div className="card-footer">
                  <span className="calories">{product.calories}</span>
                  <button className="add-basket-btn">
                    <FaPlus size={9} /> Basket
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSellers;