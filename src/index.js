import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BasketProvider } from './context/BasketContext'; // 1. Import the Provider
import { AuthProvider } from './context/AuthContext';
import App from './App';
import './styles/variables.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BasketProvider> {/* 2. Wrap the whole App here */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BasketProvider>
    </AuthProvider>
  </React.StrictMode>
);