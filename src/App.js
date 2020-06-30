import React from 'react';
import logo from './logo.svg';
import './App.css';
// import UserDisplayer from './Components/UserDisplayer';
import UserFetcher from './Components/UserFetcher';

function App() {
  return (
    <div className="App">
      <h1>
      <UserFetcher />
      </h1>
    </div>
  );
}

export default App;
