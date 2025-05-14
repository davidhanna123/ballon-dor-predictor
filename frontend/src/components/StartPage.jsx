import React from 'react';
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const navigate = useNavigate();

  const handleGenerate = () => {
    navigate('/app', { state: { generate: true } });
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Welcome to the Ballon d'Or Predictor!</h2>
      <p>Click the "Generate Results" button to see the top 10 contenders.</p>
      <button
        onClick={handleGenerate}
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '0.5rem 1.2rem',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Generate Results
      </button>
    </div>
  );
}

export default StartPage;
