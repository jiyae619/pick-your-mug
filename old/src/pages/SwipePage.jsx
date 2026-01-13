import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cafes } from '../data/cafesData';
import CafeCard from '../components/CafeCard';
import './SwipePage.css';

function SwipePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedModes = location.state?.selectedModes || [];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [direction, setDirection] = useState(null);

  const currentCafe = cafes[currentIndex];
  const hasMoreCafes = currentIndex < cafes.length;

  const handleSwipe = (swipeDirection) => {
    setDirection(swipeDirection);
    
    if (swipeDirection === 'right') {
      // Add to favorites
      setFavorites([...favorites, currentCafe]);
    }
    
    // Move to next cafe after animation
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
      setDirection(null);
    }, 300);
  };

  const handleButtonClick = (swipeDirection) => {
    handleSwipe(swipeDirection);
  };

  if (!hasMoreCafes) {
    return (
      <div className="swipe-container">
        <div className="completion-screen">
          <motion.div
            className="completion-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="completion-icon">🎉</div>
            <h2>All Done!</h2>
            <p>You've seen all the cafes</p>
            
            {favorites.length > 0 && (
              <div className="favorites-summary">
                <h3>You liked {favorites.length} {favorites.length === 1 ? 'cafe' : 'cafes'}:</h3>
                <div className="favorite-list">
                  {favorites.map(cafe => (
                    <div key={cafe.id} className="favorite-item">
                      ❤️ {cafe.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="completion-buttons">
              <button
                className="restart-btn"
                onClick={() => {
                  setCurrentIndex(0);
                  setFavorites([]);
                }}
              >
                Start Over
              </button>
              <button
                className="home-btn"
                onClick={() => navigate('/')}
              >
                Home
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="swipe-container">
      {/* Header */}
      <div className="swipe-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="progress">
          {currentIndex + 1} / {cafes.length}
        </div>
        <div className="favorites-count">
          ❤️ {favorites.length}
        </div>
      </div>

      {/* Card Stack */}
      <div className="card-stack">
        <AnimatePresence>
          {hasMoreCafes && (
            <motion.div
              key={currentCafe.id}
              className="card-wrapper"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{
                x: direction === 'right' ? 300 : -300,
                opacity: 0,
                rotate: direction === 'right' ? 20 : -20,
                transition: { duration: 0.3 }
              }}
            >
              <CafeCard
                cafe={currentCafe}
                onSwipe={handleSwipe}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next card preview */}
        {currentIndex + 1 < cafes.length && (
          <div className="card-preview">
            <div className="preview-text">Next up: {cafes[currentIndex + 1].name}</div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <motion.button
          className="action-btn dislike-btn"
          onClick={() => handleButtonClick('left')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="btn-icon">✕</span>
          <span className="btn-label">Pass</span>
        </motion.button>

        <motion.button
          className="action-btn like-btn"
          onClick={() => handleButtonClick('right')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="btn-icon">❤️</span>
          <span className="btn-label">Like</span>
        </motion.button>
      </div>

      {/* Selected Modes Display */}
      {selectedModes.length > 0 && (
        <div className="selected-modes">
          <span>Your modes: </span>
          {selectedModes.join(', ')}
        </div>
      )}
    </div>
  );
}

export default SwipePage;
