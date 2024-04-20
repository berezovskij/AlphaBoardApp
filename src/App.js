import React from 'react';
import './App.css';
import Leaderboard from './Leaderboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Топ-5 Пользователей</h1>
      </header>
      <Leaderboard />
    </div>
  );
}

export default App;
