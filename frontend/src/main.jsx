import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App'; 
import StartPage from './components/StartPage'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} /> 
        <Route path="/app" element={<App />} /> 
      </Routes>
    </Router>
  </StrictMode>
);