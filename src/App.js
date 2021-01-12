import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather.io
        </h1>
        <h2>
          Made with React
        </h2>
      </header>

      <main>
        <Forecast />
      </main>

      <footer>
        Page created by Adam Weizman
      </footer>
    </div>
  );
}

export default App;
