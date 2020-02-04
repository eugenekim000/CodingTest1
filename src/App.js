import React from 'react';
import './App.css';
import AutoComplete from './Components/autoComplete.js';
import AutoComplete1 from './Components/autoComplete1';
import AutoComplete2 from './Components/autoComplete2.js';

function App() {
  return (
    <div className='App'>
      <AutoComplete />
      <br />
      <AutoComplete1 />
      <br />
      <AutoComplete2 />
    </div>
  );
}

export default App;
