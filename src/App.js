import React from 'react';
import './App.css';
// import UserDisplayer from './Components/UserDisplayer';
// import UserFetcher from './Components/UserFetcher';
// import FoxFetcher from './Components/FoxFetcher';
import UserGetterAxios from './Components/UserGetterAxios';


function App() {
  return (
    <div className="App">
      <h1>
      <UserGetterAxios />
      </h1>
    </div>
  );
}

export default App;
