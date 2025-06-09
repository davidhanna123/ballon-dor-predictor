import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
 

function App() {
  const [players, setPlayers] = useState([]);
  const [simulationResults, setSimulationResults] = useState([]);
  const location = useLocation();

  const fetchSimulationResults = () => {
    fetch('http://127.0.0.1:5000/simulate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => setSimulationResults(data))
      .catch((error) => console.error('Error:', error));
  };

  useEffect(() => {
    if (location.state?.generate) {
      fetchSimulationResults();
    }
  }, [location.state]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🏆 Ballon d'Or Predictor</h1>

      <button
        onClick={fetchSimulationResults}
        style={{
          padding: '0.5rem 1.2rem',
          fontSize: '16px',
          marginBottom: '1rem',
          cursor: 'pointer',
        }}
      >
        🔄 Simulate Ballon d'Or
      </button>

      {simulationResults.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h2>Simulation Results</h2>
          <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Player</th>
                <th>Simulated Wins</th>
                <th>Win Probability (%)</th>
              </tr>
            </thead>
            <tbody>
              {simulationResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.Player}</td>
                  <td>{result["Simulated Wins"]}</td>
                  <td>{result["Win Probability (%)"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;


