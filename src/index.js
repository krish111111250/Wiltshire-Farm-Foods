import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { BasketProvider } from './context/BasketContext'; // 1. Import the Provider
import { AuthProvider } from './context/AuthContext';
import App from './App';
import './styles/variables.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BasketProvider> {/* 2. Wrap the whole App here */}
        <HashRouter>
          <App />
        </HashRouter>
      </BasketProvider>
    </AuthProvider>
  </React.StrictMode>
);