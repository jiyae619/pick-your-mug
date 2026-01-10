import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import ModeSelectionPage from './pages/ModeSelectionPage';
import SwipePage from './pages/SwipePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/modes" element={<ModeSelectionPage />} />
          <Route path="/swipe" element={<SwipePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
