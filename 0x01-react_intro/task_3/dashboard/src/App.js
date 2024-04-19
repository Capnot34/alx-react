import React from 'react';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';
import logo from './holberton-logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button>OK</button>
      </div>

      <footer className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>
          Copyright {getFullYear()} - {getFooterCopy(false)}
        </p>
      </footer>
    </div>
  );
}

export default App;

