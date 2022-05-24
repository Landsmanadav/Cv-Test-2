import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Dashboard from './comp/Dashboard';
import Team from './comp/Team';
function App() {
  return (
    <div className="App dark">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div >
  );
}

export default App;
