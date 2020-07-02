import React from 'react';
import './App.css';
// import UserDisplayer from './Components/UserDisplayer';
// import UserFetcher from './Components/UserFetcher';
// import UserGetterAxios from './Components/UserGetterAxios';
import APODFetcher from './Components/APODFetcher';


function App() {
  return (
    <div className="App">
      <h1>
      <APODFetcher />
      </h1>
    </div>
  );
}

export default App;
