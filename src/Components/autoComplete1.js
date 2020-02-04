import React, { useEffect, useState } from 'react';
import '../App.css';

function AutoComplete1() {
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
    <div className='auto-complete-container1'>
      <input
        className='user-input1'
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
          <h1 className='no-results1'>No Results</h1>
        </div>
      ) : (
        <div className='suggestion-container1'>
          {result.map(data => {
            return (
              <div className='suggestion-description1'>{data.description}</div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AutoComplete1;
