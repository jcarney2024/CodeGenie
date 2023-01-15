import React, { useState } from 'react';
import axios from 'axios';

function CodeInput() {
  const [codeSnippet, setCodeSnippet] = useState('');
  const [instructions, setInstructions] = useState('');
  const [response, setResponse] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    axios.post('https://api.openai.com/v1/edits', {
      instruction: instructions,
      input: codeSnippet,
      model: 'code-davinci-edit-001',
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.REPLACE_WITH_YOUR_API_KEY
      }
    })
    .then((res) => {
        let text = res.data.choices[0].text;
        setResponse(text);
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