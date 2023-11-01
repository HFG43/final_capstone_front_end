import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="Routes">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
