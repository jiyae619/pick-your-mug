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
  const rankedCafes = location.state?.rankedCafes || cafes;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [direction, setDirection] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const MAX_SWIPES = 5;
  const currentCafe = rankedCafes[currentIndex];
  const hasMoreCafes = currentIndex < MAX_SWIPES;

  const handleSwipe = (swipeDirection) => {
    setDirection(swipeDirection);

    if (swipeDirection === 'right') {
      // Add to favorites
      setFavorites([...favorites, currentCafe]);
    }

    // Move to next cafe after animation
    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex >= MAX_SWIPES) {
        setShowResults(true);
      } else {
        setCurrentIndex(nextIndex);
      }
      setDirection(null);
    }, 300);
  };

  const handleButtonClick = (swipeDirection) => {
    handleSwipe(swipeDirection);
  };

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : favorites.length - 1));
  };

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev < favorites.length - 1 ? prev + 1 : 0));
  };

  if (showResults) {
    return (
      <div className="swipe-container">
        <div className="results-screen">
          {/* Header */}
          <div className="results-header">
            <h2 className="results-title">Your Matches 🎉</h2>
            <p className="results-subtitle">
              {favorites.length > 0
                ? `You liked ${favorites.length} ${favorites.length === 1 ? 'cafe' : 'cafes'}!`
                : 'No cafes selected'}
            </p>
          </div>

          {/* Carousel */}
          {favorites.length > 0 ? (
            <div className="carousel-container">
              <motion.div
                key={carouselIndex}
                className="carousel-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x * velocity.x;

                  if (swipe < -10000) {
                    handleNextCarousel();
                  } else if (swipe > 10000) {
                    handlePrevCarousel();
                  }
                }}
              >
                <div className="carousel-card-image">
                  <img
                    src={favorites[carouselIndex].image}
                    alt={favorites[carouselIndex].name}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x300/8B4513/FFFFFF?text=${favorites[carouselIndex].name}`;
                    }}
                  />
                </div>
                <div className="carousel-card-content">
                  <h3 className="carousel-cafe-name">{favorites[carouselIndex].name}</h3>
                  <div className="carousel-cafe-location">
                    📍 {favorites[carouselIndex].neighborhood}
                  </div>
                  <div className="carousel-cafe-rating">
                    ⭐ {favorites[carouselIndex].rating} ({favorites[carouselIndex].reviewCount} reviews)
                  </div>
                  <p className="carousel-cafe-description">
                    {favorites[carouselIndex].description}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(favorites[carouselIndex].name + ' ' + favorites[carouselIndex].neighborhood + ' Seattle')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="carousel-map-link"
                  >
                    📍 View on Google Maps
                  </a>
                </div>
              </motion.div>

              <div className="carousel-indicators">
                {favorites.map((_, index) => (
                  <span
                    key={index}
                    className={`carousel-dot ${index === carouselIndex ? 'active' : ''}`}
                    onClick={() => setCarouselIndex(index)}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="no-matches">
              <p>😔 No cafes matched your taste</p>
              <p>Try swiping right on cafes you like!</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="results-buttons">
            <button
              className="restart-btn"
              onClick={() => {
                setCurrentIndex(0);
                setFavorites([]);
                setShowResults(false);
                setCarouselIndex(0);
              }}
            >
              Start Over
            </button>
            <button className="home-btn" onClick={() => navigate('/')}>
              Home
            </button>
          </div>
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
          {currentIndex + 1} / {MAX_SWIPES}
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
                isFirst={currentIndex === 0}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next card preview */}
        {currentIndex + 1 < MAX_SWIPES && (
          <div className="card-preview">
            <div className="preview-text">Next up: {rankedCafes[currentIndex + 1].name}</div>
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
