import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './WelcomePage.css';

function WelcomePage() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="welcome-container">
      <motion.div
        className="welcome-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* Coffee Icon */}
        <motion.div
          className="coffee-icon"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          ☕
        </motion.div>

        {/* Title */}
        <motion.h1
          className="welcome-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Pick Your Mug
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="welcome-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Find your perfect cafe match
        </motion.p>

        {/* Get Started Button */}
        <motion.button
          className="get-started-btn"
          onClick={() => navigate('/modes')}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
          <span className="arrow">→</span>
        </motion.button>

        {/* Features */}
        <motion.div
          className="features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <div className="feature">
            <span className="feature-icon">🗺️</span>
            <span>12 Seattle Cafes</span>
          </div>
          <div className="feature">
            <span className="feature-icon">💫</span>
            <span>Smart Matching</span>
          </div>
          <div className="feature">
            <span className="feature-icon">❤️</span>
            <span>Save Favorites</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default WelcomePage;
