import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppChat from './components/common/WhatsAppChat';

// Page Components
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Basket from './pages/Basket';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import RequestBrochure from './pages/RequestBrochure';
import ContactUs from './pages/ContactUs';
import AboutFood from './pages/AboutFood';
import HelpAdvice from './pages/HelpAdvice';
import SpecialOffers from './pages/SpecialOffers';
import BreakfastSnacks from './pages/BreakfastSnacks';
import Bakery from './pages/Bakery';

function App() {
  return (
    <div className="App">
      {/* Header stays at the top of all pages */}
      <Header />

      {/* The main content changes based on the route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Information Pages */}
        <Route path="/about-our-food" element={<AboutFood />} />
        <Route path="/help-advice" element={<HelpAdvice />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/request-brochure" element={<RequestBrochure />} />

        {/* Authentication Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* New Routes */}
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/breakfast-snacks" element={<BreakfastSnacks />} />
        <Route path="/bakery" element={<Bakery />} />
      </Routes>








      {/* Floating WhatsApp Button */}
      <WhatsAppChat />

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
}

export default App;