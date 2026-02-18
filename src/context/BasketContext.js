import React, { createContext, useContext, useState, useEffect } from 'react';

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  // --- 1. STATE ---
  const [basketItems, setBasketItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // ADDED: User State to track if someone is logged in
  const [user, setUser] = useState(null);

  // Optional: Check Local Storage on load so user stays logged in on refresh
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // --- 2. AUTH ACTIONS (Fixes "login is not a function") ---

  const login = (email) => {
    // Safety check
    if (!email || typeof email !== 'string') {
      console.error("Login Error: Invalid email", email);
      return;
    }

    // Create a mock user object from the email
    const namePart = email.split('@')[0];
    const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);

    const newUser = {
      email: email,
      name: formattedName
    };

    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser)); // Save to storage
  };

  const logout = () => {
    setUser(null);
    setBasketItems([]); // Optional: Clear basket on logout
    localStorage.removeItem('user');
  };

  // --- 3. BASKET ACTIONS ---

  const addToBasket = (product) => {
    setBasketItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    // alert(`Added ${product.title} to basket!`);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromBasket(id);
      return;
    }
    setBasketItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromBasket = (idToRemove) => {
    setBasketItems((prevItems) => prevItems.filter((item) => item.id !== idToRemove));
  };

  const clearBasket = () => {
    setBasketItems([]);
  };

  const basketTotal = basketItems.reduce((total, item) => {
    const priceStr = String(item.price).replace('£', '');
    const priceNum = parseFloat(priceStr) || 0;
    const qty = item.quantity || 1;
    return total + (priceNum * qty);
  }, 0);

  // --- 4. PROVIDER VALUE (Exporting everything) ---
  return (
    <BasketContext.Provider value={{
      // Basket Data
      basketItems,
      basketTotal,
      searchTerm,
      setSearchTerm,
      activeCategory,
      setActiveCategory,
      
      // User Data (Must be included!)
      user,

      // Functions
      addToBasket,
      removeFromBasket,
      updateQuantity,
      clearBasket,
      login,  // <--- This was missing
      logout
    }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);