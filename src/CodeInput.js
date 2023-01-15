import React, { useState } from 'react';
import axios from 'axios';

function CodeInput() {
  const [codeSnippet, setCodeSnippet] = useState('');
  const [instructions, setInstructions] = useState('');
  const [response, setResponse] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('https://codex.openai.com/v1/code_completions', {
      prompt: instructions,
      context: codeSnippet,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      }
    })
    .then((res) => {
        setResponse(res.data);
    })
    .catch((err) => {
        console.log(err);
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Code Snippet:
        <textarea value={codeSnippet} onChange={(event) => setCodeSnippet(event.target.value)} />
      </label>
      <br />
      <label>
        Instructions:
        <input type="text" value={instructions} onChange={(event) => setInstructions(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
      <br />
      <label>
        Response:
        <textarea value={response} onChange={(event) => setResponse(event.target.value)} disabled={true} />
      </label>
    </form>
  );
}

export default CodeInput;