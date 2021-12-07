import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          On building personal portfolio!
        </p>
        <a
          className="App-link"
          href="https://instagram.com/edward2mv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow me on instagram!
        </a>
      </header>
    </div>
  );
}

export default App;
