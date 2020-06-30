import React from 'react';
import logo from './logo.svg';
import './App.css';
// import UserDisplayer from './Components/UserDisplayer';
// import UserFetcher from './Components/UserFetcher';
import FoxFetcher from './Components/FoxFetcher';

function App() {
  return (
    <div className="App">
      <h1>
      <FoxFetcher />
      </h1>
    </div>
  );
}

export default App;
