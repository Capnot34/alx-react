import logo from "./logo.jpg";
import "./App.css";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
        <br></br>
        <label htmlFor="email"> Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password"> Password: </label>
        <input type="password" id="password" name="password" />
        <button> OK</button>
        <footer>
          <p>
            <p>
              Copyright {getFullYear()} - {getFooterCopy()}
            </p>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
