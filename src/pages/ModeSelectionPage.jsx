import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { coffeeModes } from '../data/cafesData';
import { getModeDescription, getModeIcon } from '../utils/tagColors';
import './ModeSelectionPage.css';

function ModeSelectionPage() {
  const navigate = useNavigate();
  const [selectedModes, setSelectedModes] = useState([]);

  const toggleMode = (mode) => {
    if (selectedModes.includes(mode)) {
      setSelectedModes(selectedModes.filter(m => m !== mode));
    } else if (selectedModes.length < 3) {
      setSelectedModes([...selectedModes, mode]);
    }
  };

  const handleContinue = () => {
    if (selectedModes.length === 3) {
      navigate('/swipe', { state: { selectedModes } });
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
          disabled={selectedModes.length !== 3}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={selectedModes.length === 3 ? { scale: 1.05 } : {}}
          whileTap={selectedModes.length === 3 ? { scale: 0.95 } : {}}
        >
          Continue ({selectedModes.length}/3)
        </motion.button>
      </div>
    </div>
  );
}

export default ModeSelectionPage;
