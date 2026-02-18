import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutFood.css';

const AboutFood = () => {
  const features = [
    {
      title: "Softer Foods",
      text: "We know all about making really good food and our chefs are always working on creating delicious recipes for you to enjoy.",
      btn: "Find out more",
      img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Meal Sizes",
      text: "We cater for every appetite, which is why our meals come in three different sizes – Hearty Meals, Main Meals & Mini Meals.",
      btn: "More about our Meal Sizes",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Free From",
      text: "All the meals in our Free From range are free from 14 of the major allergens, including gluten and made without onion and garlic.",
      btn: "Find out more",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Diet Codes & Icons",
      text: "Thanks to our registered dietitian, you can be confident we know our stuff when it comes to nutrition. Look out for our icons throughout the website.",
      btn: "Find out more",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "In the Kitchen",
      text: "We believe everyone should look forward to a tasty and appetising meal, regardless of their needs. That's why we're so proud of our award-winning Softer Foods range.",
      btn: "Read our food stories",
      img: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Satisfaction Guarantee",
      text: "If our food doesn't make you smile, we'll replace it absolutely free. Just keep hold of the film lid from the top of your meal and we'll sort out the rest.",
      btn: "Find out more",
      img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="about-page">
      {/* 1. Header Section */}
      <div className="about-header">
        <h1>ABOUT OUR FOOD</h1>
        <p>Our chefs are dedicated to creating delicious dishes that tickle taste buds and provide delight in every bite.</p>
      </div>

      {/* 2. Chef Intro Section */}
      <div className="chef-intro">
        <div className="chef-img">
          <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80" alt="Chef" />
        </div>
        <div className="chef-text">
          <p>Whatever your appetite and your dietary needs may be you can trust us to get it right – we've been doing it long enough after all and over the years we've won awards for what we do.</p>
          <p>We firmly believe that good food can put a spring in your step and a smile on your face so go on, dig in, and see what you fancy. If you're looking for inspiration check out our best ready meals.</p>
          <Link to="/" className="browse-meals-btn">Browse our meals</Link>
        </div>
      </div>

      {/* 3. Features Grid */}
      <div className="features-grid">
        {features.map((item, index) => (
          <div key={index} className="feature-card">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <button className="feature-btn">{item.btn}</button>
          </div>
        ))}
      </div>

      {/* 4. Bottom Sustainability Section */}
      <div className="sustainability-section">
        <div className="sust-content">
            <div className="sust-text-left">
                <h3>PREPARED FOR TOMORROW</h3>
                <p>When we talk about delivering good food, we're not just talking about how delicious it tastes.</p>
                <p>We take responsibility for our people and planet too, respecting the world around us, our trusted suppliers and valued customers.</p>
                <p>When selecting our ingredients, we work closely with our trusted suppliers in the UK, as well as Europe and the rest of the world.</p>
            </div>
            <div className="sust-img-right">
                {/* Placeholder for the fish graphic in screenshot */}
                <h2 style={{fontFamily: 'cursive', color: '#666'}}>IT'S OUR RESPONSIBILITY TO CREATE GOOD FOOD IN EVERY SENSE.</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFood;