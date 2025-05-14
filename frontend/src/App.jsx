import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Table from './components/Table';

function App() {
  const [players, setPlayers] = useState([]);
  const location = useLocation();

  const generateMockResults = () => {
    return [
      { name: 'Lionel Messi', goals: 35, assists: 14, minutes: 3200, trophies: 3, score: 95.6 },
      { name: 'Erling Haaland', goals: 42, assists: 7, minutes: 3100, trophies: 2, score: 93.4 },
      { name: 'Kylian Mbappé', goals: 38, assists: 10, minutes: 3000, trophies: 2, score: 91.2 },
      { name: 'Jude Bellingham', goals: 18, assists: 12, minutes: 2900, trophies: 3, score: 89.1 },
      { name: 'Vinícius Jr', goals: 20, assists: 16, minutes: 2800, trophies: 2, score: 87.5 },
      { name: 'Kevin De Bruyne', goals: 9, assists: 20, minutes: 2700, trophies: 2, score: 86.3 },
      { name: 'Robert Lewandowski', goals: 33, assists: 5, minutes: 3100, trophies: 1, score: 85.4 },
      { name: 'Harry Kane', goals: 36, assists: 8, minutes: 3000, trophies: 1, score: 84.8 },
      { name: 'Mohamed Salah', goals: 28, assists: 11, minutes: 2900, trophies: 1, score: 84.3 },
      { name: 'Cristiano Ronaldo', goals: 31, assists: 4, minutes: 3100, trophies: 0, score: 82.1 },
    ];
  };

  const regenerateResults = () => {
    setPlayers(generateMockResults());
  };

  useEffect(() => {
    
    if (location.state?.generate) {
      regenerateResults();
    }
  }, [location.state]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🏆 Ballon d'Or Predictor</h1>

      <button
        onClick={regenerateResults}
        style={{
          padding: '0.5rem 1.2rem',
          fontSize: '16px',
          marginBottom: '1rem',
          cursor: 'pointer',
        }}
      >
        🔄 Regenerate Results
      </button>

      <Table players={players} />
    </div>
  );
}

export default App;


