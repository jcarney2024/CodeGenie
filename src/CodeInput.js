import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Spinner } from 'react-bootstrap';
import ReactDiffViewer from 'react-diff-viewer';

function CodeInput() {
  const [codeSnippet, setCodeSnippet] = useState('');
  const [instructions, setInstructions] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    axios.post('https://api.openai.com/v1/edits', {
      instruction: instructions,
      input: codeSnippet,
      model: 'code-davinci-edit-001',
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.REACT_APP_REPLACE_WITH_YOUR_API_KEY,
      }
    })
    .then((res) => {
        let text = res.data.choices[0].text;
        setResponse(text);
        setIsLoading(false);
    })
    .catch((err) => {
        console.log(err);
        setIsLoading(false);
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Code Snippet</Form.Label>
        <Form.Control as="textarea" rows="5" value={codeSnippet} onChange={(event) => setCodeSnippet(event.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Instructions</Form.Label>
        <Form.Control type="text" value={instructions} onChange={(event) => setInstructions(event.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? <Spinner animation="border" size="sm" role="status" aria-hidden="true" /> : 'Submit'}
      </Button>
      <Form.Group>
        <Form.Label>Response</Form.Label>
        <ReactDiffViewer oldValue={codeSnippet} newValue={response} splitView={false}/>
      </Form.Group>
    </Form>
  );
}

export default CodeInput;