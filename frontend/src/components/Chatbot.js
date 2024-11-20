
import React, { useState } from 'react';
import axios from 'axios';
import { FaComments, FaTimes } from 'react-icons/fa';
import './Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setLoading(true);

    // Temporary console log to check the API U
    console.log('Backend API URL:', process.env.REACT_APP_BACKEND_API_URL);

    try {
      const response = await axios.post(process.env.REACT_APP_BACKEND_API_URL, {
        message: input,
      });

      const botMessage = {
        sender: 'bot',
        text: response.data.response,
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error communicating with the chatbot backend:', error.response ? error.response.data : error.message);
      const errorMessage = {
        sender: 'bot',
        text: 'Sorry, I am having trouble understanding that. Please try again later.',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-button" onClick={toggleChat}>
          <FaComments size={20} />
        </button>
      )}

      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h4>Chat with Us</h4>
            <button className="close-button" onClick={toggleChat}>
              <FaTimes />
            </button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.sender === 'bot' ? 'bot' : 'user'}`}
              >
                <span>{msg.text}</span>
              </div>
            ))}
            {loading && (
              <div className="message bot">
                <span>Typing...</span>
              </div>
            )}
          </div>
          <form className="chatbot-input" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
