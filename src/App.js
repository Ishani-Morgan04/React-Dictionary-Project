import Dictionary from "./Dictionary";
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>DICTIONARY</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="Sky" />
        </main>
        <footer className="App-footer">
          <small>
            This project is coded by Ishani Morgan and it is open source on{" "}
          </small>
          <a href="https://github.com/Ishani-Morgan04/React-Dictionary-Project">
            GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
