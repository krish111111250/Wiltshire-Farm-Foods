import React from 'react';
import { Navigate } from 'react-router-dom';
import { useBasket } from '../../context/BasketContext';

// ProtectedRoute: Only accessible if user is logged in
// If not logged in → redirect to /login
export const ProtectedRoute = ({ children }) => {
    const { user } = useBasket();
    if (!user) {
        return <Navigate to="/login" replace state={{ from: 'checkout' }} />;
    }
    return children;
};

// GuestRoute: Only accessible if user is NOT logged in
// If already logged in → redirect to home
export const GuestRoute = ({ children }) => {
    const { user } = useBasket();
    if (user) {
        return <Navigate to="/" replace />;
    }
    return children;
};
