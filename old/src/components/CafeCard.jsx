import { motion } from 'framer-motion';
import { getTagColor } from '../utils/tagColors';
import './CafeCard.css';

function CafeCard({ cafe, style, onSwipe }) {
  return (
    <motion.div
      className="cafe-card"
      style={style}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = Math.abs(offset.x) * velocity.x;
        
        if (swipe > 10000) {
          onSwipe('right');
        } else if (swipe < -10000) {
          onSwipe('left');
        }
      }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Cafe Image */}
      <div className="card-image-container">
        <img 
          src={cafe.image} 
          alt={cafe.name}
          className="card-image"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x300/8B4513/FFFFFF?text=${cafe.name}`;
          }}
        />
        <div className="image-overlay">
          <div className="distance-badge">
            📍 {cafe.distance} mi
          </div>
        </div>
      </div>

      {/* Cafe Info */}
      <div className="card-content">
        <h2 className="cafe-name">{cafe.name}</h2>
        
        <div className="cafe-location">
          <span className="location-icon">📍</span>
          {cafe.neighborhood}
        </div>

        <div className="cafe-rating">
          <span className="star-icon">⭐</span>
          <span className="rating-number">{cafe.rating}</span>
          <span className="review-count">({cafe.reviewCount} reviews)</span>
        </div>

        <p className="cafe-description">{cafe.description}</p>

        {/* Tags */}
        <div className="cafe-tags">
          {cafe.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="tag"
              style={{ backgroundColor: getTagColor(tag) }}
            >
              {tag}
            </span>
          ))}
          {cafe.tags.length > 4 && (
            <span className="tag-more">+{cafe.tags.length - 4}</span>
          )}
        </div>
      </div>

      {/* Swipe Hint */}
      <div className="swipe-hint">
        ← Swipe to explore →
      </div>
    </motion.div>
  );
}

export default CafeCard;
