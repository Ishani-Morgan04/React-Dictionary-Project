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
          <Dictionary defaultKeyword="Knowledge" />
        </main>
        <footer className="App-footer">
          <small>This project was coded by Ishani Morgan</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
