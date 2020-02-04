import React, { useEffect, useState } from 'react';
import '../App.css';

function AutoComplete2() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    getPredictions(input).catch(error => {
      setResult([]);
    });
  }, [input]);

  async function getPredictions(input) {
    await fetch('https://coding-challenge.echoandapex.com/locations?q=' + input)
      .then(data => data.json())
      .then(results =>
        results.predictions.map(({ name, description, id }) => {
          return { name, description, id };
        })
      )
      .then(result => setResult(result));
  }
  console.log(result);

  return (
    <div className='auto-complete-container2'>
      <input
        className='user-input2'
        onChange={e => setInput(e.target.value)}
        list='auto-complete'
        id='auto-complete-choice'
      />
      <datalist id='auto-complete'>
        {result.map(suggestions => {
          return <option key={suggestions.id} value={suggestions.name} />;
        })}
      </datalist>

      {result == '' ? (
        <div>
          <h1 className='no-results2'>No Results</h1>
        </div>
      ) : (
        <div className='suggestion-container'>
          {result.map(data => {
            return (
              <div className='suggestion-description2'>{data.description}</div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AutoComplete2;
