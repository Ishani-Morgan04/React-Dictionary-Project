import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />

        <p
          className="App-logo"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          DICTIONARY
        </p>
      </header>
    </div>
  );
}

export default App;
