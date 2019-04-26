import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigator from './components/Navigator';

function App() {
  return (
    <div className="App">
        {Navigator.apply.titulo}
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
