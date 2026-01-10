// Color mapping for different cafe tag categories
export const getTagColor = (tag) => {
  // Explorer Mode Tags
  const explorerTags = ['Nice Views', 'Unique Atmosphere', 'Instagram Worthy', 'Hidden Gem', 'Local Favorite'];
  if (explorerTags.includes(tag)) {
    return '#E1BEE7'; // Purple
  }
  
  // Study/Work Tags
  const studyWorkTags = ['Laptop Friendly', 'Fast WiFi', 'Quiet Space', 'Power Outlets', 'Long Stay Friendly'];
  if (studyWorkTags.includes(tag)) {
    return '#BBDEFB'; // Blue
  }
  
  // With Friends Tags
  const socialTags = ['Group Seating', 'Lively Atmosphere', 'Good For Conversations', 'Weekend Brunch', 'Evening Hours'];
  if (socialTags.includes(tag)) {
    return '#C8E6C9'; // Green
  }
  
  // Coffee Quality Tags
  const coffeeTags = ['Specialty Coffee', 'Verve Beans', 'Intelligentsia Beans', 'Fruity Beans', 'Single Origin', 'Rotating Roasters', 'Minimalist Design'];
  if (coffeeTags.includes(tag)) {
    return '#FFCCBC'; // Orange
  }
  
  // Food Tags
  const foodTags = ['Good Pastries', 'Breakfast Options', 'Light Lunch', 'Vegan Options', 'Gluten Free'];
  if (foodTags.includes(tag)) {
    return '#F8BBD0'; // Pink
  }
  
  return '#E0E0E0'; // Default grey
};

// Get description for each mode
export const getModeDescription = (mode) => {
  const descriptions = {
    'Work': 'Find quiet spaces with good Wi-Fi',
    'Study': 'Perfect spots for focused learning',
    'Hangout': 'Social spots with great atmosphere',
    'Date': 'Romantic and cozy environments',
    'Travel': 'Discover new and exciting cafes',
    'New Cafe': 'Explore Seattle\'s newest spots',
    'Local Spot': 'Hidden neighborhood gems',
    'Quiet Space': 'Peaceful places to relax',
    'Coffee Expert': 'Premium specialty coffee experiences',
    'Brunch': 'Great food and weekend vibes'
  };
  return descriptions[mode] || 'Find your perfect cafe';
};

// Get icon for each mode
export const getModeIcon = (mode) => {
  const icons = {
    'Work': '💼',
    'Study': '📚',
    'Hangout': '👥',
    'Date': '💕',
    'Travel': '✈️',
    'New Cafe': '🆕',
    'Local Spot': '🏘️',
    'Quiet Space': '🤫',
    'Coffee Expert': '☕',
    'Brunch': '🥐'
  };
  return icons[mode] || '☕';
};
