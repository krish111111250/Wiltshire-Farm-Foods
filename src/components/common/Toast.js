import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimes, FaShoppingBasket } from 'react-icons/fa';
import '../../styles/Toast.css';

const Toast = ({ message, isVisible, onClose, type = 'success' }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className={`toast-notification toast-${type}`}>
            <div className="toast-icon">
                {type === 'success' ? <FaCheckCircle /> : <FaShoppingBasket />}
            </div>
            <div className="toast-message">{message}</div>
            <button className="toast-close" onClick={onClose}>
                <FaTimes />
            </button>
        </div>
    );
};

export default Toast;
