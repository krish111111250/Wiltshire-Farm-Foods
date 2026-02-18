import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BreakfastSnacks.css';

const BreakfastSnacks = () => {
  const items = [
    {
      id: 1,
      title: "Hot Breakfasts",
      description: "Start your day right with our warming porridge, fluffy omelettes, and full English breakfast options.",
      image: "https://therecipecritic.com/wp-content/uploads/2016/01/bakedpancake5.jpg",
      link: "View Breakfasts"
    },
    {
      id: 2,
      title: "Bakery & Pastries",
      description: "Freshly baked croissants, tea cakes, and soft rolls. Perfect for a mid-morning treat.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      link: "View Bakery"
    },
    {
      id: 3,
      title: "Lighter Soups",
      description: "Wholesome and warming soups, from classic Tomato to hearty Vegetable. Ideal for a light lunch.",
      image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
      link: "View Soups"
    },
    {
      id: 4,
      title: "Cakes & Sweet Treats",
      description: "Indulge in our delicious range of cakes, custard tarts, and sweet snacks.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0o4dOnR7l2vhbDtsEhQj_QTHJsYu-sddDmg&s",
      link: "View Treats"
    }
  ];

  return (
    <div className="breakfast-page">
      
      {/* Header */}
      <div className="breakfast-header">
        <h1>Breakfast & Snacks</h1>
        <p>Delicious ways to start your day and keep you going.</p>
      </div>

      {/* 4-Image Grid Section */}
      <div className="breakfast-container">
        <div className="breakfast-grid">
          {items.map((item) => (
            <div key={item.id} className="food-card">
              <div className="image-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="shop-btn">{item.link}</button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BreakfastSnacks;