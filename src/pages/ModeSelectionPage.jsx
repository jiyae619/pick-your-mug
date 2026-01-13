import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { coffeeModes, cafes } from '../data/cafesData';
import { getModeDescription, getModeIcon } from '../utils/tagColors';
import { generateCafeMatches } from '../services/aiMatchingService';
import { getCachedMatches, setCachedMatches } from '../utils/cacheManager';
import './ModeSelectionPage.css';

function ModeSelectionPage() {
  const navigate = useNavigate();
  const [selectedModes, setSelectedModes] = useState([]);
  const [isMatching, setIsMatching] = useState(false);
  const [error, setError] = useState(null);

  const toggleMode = (mode) => {
    if (selectedModes.includes(mode)) {
      setSelectedModes(selectedModes.filter(m => m !== mode));
    } else if (selectedModes.length < 3) {
      setSelectedModes([...selectedModes, mode]);
    }
  };

  const handleContinue = async () => {
    if (selectedModes.length !== 3) return;

    setIsMatching(true);
    setError(null);

    try {
      // Check cache first
      let matches = getCachedMatches(selectedModes);

      if (!matches) {
        // Call AI API to generate match scores
        matches = await generateCafeMatches(selectedModes, cafes);
        // Cache the results for 24 hours
        setCachedMatches(selectedModes, matches);
      }

      // Rank cafes by AI-generated match score
      const rankedCafes = cafes
        .map(cafe => ({
          ...cafe,
          matchScore: matches.find(m => m.cafeId === cafe.id)?.score || 0,
          matchExplanation: matches.find(m => m.cafeId === cafe.id)?.explanation || ''
        }))
        .sort((a, b) => b.matchScore - a.matchScore);

      // Navigate to swipe page with ranked cafes
      navigate('/swipe', {
        state: {
          selectedModes,
          rankedCafes
        }
      });
    } catch (error) {
      console.error('AI matching failed:', error);
      setError('Failed to generate matches. Please try again.');
      // Fallback: navigate with unranked cafes
      setTimeout(() => {
        navigate('/swipe', {
          state: {
            selectedModes,
            rankedCafes: cafes
          }
        });
      }, 2000);
    } finally {
      setIsMatching(false);
    }
  };

  return (
    <div className="mode-selection-container">
      <div className="mode-selection-content">
        {/* Header */}
        <motion.div
          className="mode-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>How do you usually enjoy your coffee?</h1>
          <p>Choose exactly 3 modes</p>
        </motion.div>

        {/* Mode Grid */}
        <div className="modes-grid">
          {coffeeModes.map((mode, index) => {
            const isSelected = selectedModes.includes(mode);
            return (
              <motion.div
                key={mode}
                className={`mode-card ${isSelected ? 'selected' : ''}`}
                onClick={() => toggleMode(mode)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="mode-icon">{getModeIcon(mode)}</div>
                <div className="mode-name">{mode}</div>
                <div className="mode-description">{getModeDescription(mode)}</div>
                {isSelected && (
                  <motion.div
                    className="checkmark"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    ✓
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Continue Button */}
        <motion.button
          className={`continue-btn ${selectedModes.length === 3 ? 'active' : ''}`}
          onClick={handleContinue}
          disabled={selectedModes.length !== 3 || isMatching}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={selectedModes.length === 3 && !isMatching ? { scale: 1.05 } : {}}
          whileTap={selectedModes.length === 3 && !isMatching ? { scale: 0.95 } : {}}
        >
          {isMatching ? 'Finding matches...' : `Continue (${selectedModes.length}/3)`}
        </motion.button>

        {/* Error Message */}
        {error && (
          <motion.div
            className="error-message"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {error}
          </motion.div>
        )}
      </div>

      {/* AI Matching Loader Overlay */}
      {isMatching && (
        <motion.div
          className="ai-matching-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="loader-content">
            <div className="spinner"></div>
            <h3>Finding your perfect matches...</h3>
            <p className="loader-subtitle">Analyzing {cafes.length} cafes with AI ✨</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default ModeSelectionPage;
