import logo from "./logo.jpg";
import "./App.css";

function App() {  
  return (
    <div className="App">
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
           <a
          className="App-link"
          href="https://www.youtube.com/watch?v=v2AC41dglnM"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn CI/CD!
        </a>
           </header>
    </div>
  );
}

export default App
