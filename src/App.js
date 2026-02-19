import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppChat from './components/common/WhatsAppChat';
import Toast from './components/common/Toast';
import { ProtectedRoute, GuestRoute } from './components/common/ProtectedRoute';

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
import Desserts from './pages/Desserts';

// Context
import { useBasket } from './context/BasketContext';

function App() {
  const { toast, hideToast } = useBasket();

  return (
    <div className="App">
      {/* Header stays at the top of all pages */}
      <Header />

      {/* Global Toast Notification */}
      <Toast
        message={toast.message}
        isVisible={toast.visible}
        onClose={hideToast}
        type="success"
      />

      {/* All Routes */}
      <Routes>
        {/* --- PUBLIC ROUTES --- */}
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/basket" element={<Basket />} />

        {/* --- PROTECTED ROUTES (Must be logged in) --- */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        {/* --- GUEST ROUTES (Redirect to home if already logged in) --- */}
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />
        <Route
          path="/register"
          element={
            <GuestRoute>
              <Register />
            </GuestRoute>
          }
        />

        {/* --- INFORMATION PAGES --- */}
        <Route path="/about-our-food" element={<AboutFood />} />
        <Route path="/help-advice" element={<HelpAdvice />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/request-brochure" element={<RequestBrochure />} />

        {/* --- CATEGORY PAGES --- */}
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/breakfast-snacks" element={<BreakfastSnacks />} />
        <Route path="/bakery" element={<Bakery />} />
        <Route path="/desserts" element={<Desserts />} />
      </Routes>

      {/* Floating WhatsApp Button */}
      <WhatsAppChat />

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
}

export default App;