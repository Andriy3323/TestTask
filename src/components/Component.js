import './component.css';

import React from 'react';
import { useQuery } from 'react-query';
import useInput from './useInput.js';
import useStorage from './useStorage.js';

function Component() {
  const {
    input,
    typing,
    suggestion,
    setInput,
    setTyping,
    setSuggestion,
  } = useInput();

  const handleInputChange = (e) => {
    setTyping(e.target.value);
    setSuggestion(typing);
  };

  const handleLiClick = (name) => {
    setInput(name);
    setTyping('');
  }

  const getData = async () => {
    const res = await fetch('https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete');
    return res.json();
  };

  const { data, error, isLoading } = useQuery('data', getData);

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <span>
        {input}
      </span>
      {typing.length === 0 &&
        <div>
          <button
            onClick={() => setInput('+')}
          >
            +
          </button>
          <button
            onClick={() => setInput('-')}
          >
            -
          </button>
          <button
            onClick={() => setInput('*')}
          >
            *
          </button>
          <button
            onClick={() => setInput('/')}
          >
            /
          </button>
          <button
            onClick={() => setInput('^')}
          >
            ^
          </button>
        </div>
      }
      <input
        type='text'
        onChange={handleInputChange}
        value={typing}
      />
      {typing.length > 0 &&
        <ul>
          {data
            .filter(elm => elm.name.toLowerCase().includes(suggestion.toLowerCase()))
            .map(elm => (
              <li
                key={elm.key}
                onClick={() => handleLiClick(elm.name)}
              >
                {elm.name}
              </li>
            ))
          }
        </ul>
      }
    </>
  )
}

export default Component;