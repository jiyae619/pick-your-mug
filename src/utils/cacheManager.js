const CACHE_PREFIX = 'cafe_match_';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export function getCachedMatches(modes) {
  const key = CACHE_PREFIX + modes.sort().join('_');
  const cached = localStorage.getItem(key);

  if (!cached) return null;

  try {
    const data = JSON.parse(cached);

    // Check if cache has expired
    if (Date.now() > data.expiresAt) {
      localStorage.removeItem(key);
      return null;
    }

    return data.matches;
  } catch (error) {
    console.error('Cache read error:', error);
    localStorage.removeItem(key);
    return null;
  }
}

export function setCachedMatches(modes, matches) {
  const key = CACHE_PREFIX + modes.sort().join('_');
  const data = {
    modes,
    matches,
    timestamp: Date.now(),
    expiresAt: Date.now() + CACHE_DURATION
  };

  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Cache write error:', error);
  }
}

export function clearCache() {
  // Clear all cafe match caches
  Object.keys(localStorage)
    .filter(key => key.startsWith(CACHE_PREFIX))
    .forEach(key => localStorage.removeItem(key));
}
