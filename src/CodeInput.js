import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';

function CodeInput() {
  const [codeSnippet, setCodeSnippet] = useState('');
  const [instructions, setInstructions] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
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
        setLoading(false);
    })
    .catch((err) => {
        console.log(err);
        setLoading(false);
    });
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Code Snippet</Form.Label>
              <Form.Control as="textarea" value={codeSnippet} onChange={(event) => setCodeSnippet(event.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Instructions</Form.Label>
              <Form.Control as="textarea" rows="3" value={instructions} onChange={(event) => setInstructions(event.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              /> : 'Submit'}
            </Button>
            <Form.Group>
              <Form.Label>Response</Form.Label>
              <Form.Control as="textarea" value={response} onChange={(event) => setResponse(event.target.value)} disabled={true} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CodeInput;