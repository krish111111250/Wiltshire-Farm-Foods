import React, { useState } from 'react';
import { FaWhatsapp, FaTimes, FaTruck, FaClock, FaUtensils, FaCommentDots } from 'react-icons/fa';
import '../../styles/WhatsAppChat.css';

const WhatsAppChat = () => {
  // Toggle state for showing/hiding the menu
  const [isOpen, setIsOpen] = useState(false);

  // YOUR PHONE NUMBER
  const phoneNumber = "919363495266";

  // Pre-defined options to "feed" into the chat
  const chatOptions = [
    {
      id: 1,
      label: "Delivery Charges?",
      icon: <FaTruck />,
      message: "Hi, I would like to know the delivery charges for my location."
    },
    {
      id: 2,
      label: "Shop Opening Hours?",
      icon: <FaClock />,
      message: "Hi, what are your shop opening hours today?"
    },
    {
      id: 3,
      label: "Today's Specials / Menu",
      icon: <FaUtensils />,
      message: "Hi, can you send me the menu or today's specials?"
    },
    {
      id: 4,
      label: "Chat with Owner",
      icon: <FaCommentDots />,
      message: "Hello! I have a general question about Wiltshire Farm Foods."
    }
  ];

  const handleOptionClick = (msg) => {
    // This logic passes the specific text into the WhatsApp chat
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <div className="whatsapp-container">
      
      {/* POPUP MENU (Only shows when isOpen is true) */}
      {isOpen && (
        <div className="whatsapp-menu">
          <div className="whatsapp-header">
            <span>How can we help?</span>
            <button className="close-btn" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
              <FaTimes />
            </button>
          </div>
          
          <div className="whatsapp-options">
            {chatOptions.map((option) => (
              <button
                key={option.id}
                className="chat-option-btn"
                onClick={() => handleOptionClick(option.message)}
              >
                <span className="option-icon">{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* MAIN FLOAT BUTTON */}
      <div 
        className={`whatsapp-float ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={25} /> : <FaWhatsapp size={35} />}
        {!isOpen && <span className="tooltip-text">Chat with us</span>}
      </div>

    </div>
  );
};

export default WhatsAppChat;