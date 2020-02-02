import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import autoComplete from './Components/autoComplete.js';

async function getPredictions(string) {
  await fetch('https://coding-challenge.echoandapex.com/locations?q=' + string)
    .then(data => data.json())
    .then(results => results.predictions.map({name,description})) => {
      console.log(name)
    }
}

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    getPredictions(input);
  }, [input]);

  return (
    <div className='App'>
      <input onChange={e => setInput(e.target.value)} />
    </div>
  );
}

export default App;
