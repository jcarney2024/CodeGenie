import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './CodeInput.css';

const containerStyles = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

function CodeInput() {
  const [codeSnippet, setCodeSnippet] = useState('');
  const [instructions, setInstructions] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

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

  function handleCopy() {
    navigator.clipboard.writeText(response)
      .then(() => {
        setCopied(true);
      })
      .catch(err => {
        console.log('Failed to copy text: ', err);
      });
  }

  return (
    <Container style={containerStyles} className='d-flex align-items-center'>
      <div className="d-flex align-items-center">
        <Form onSubmit={handleSubmit}>
          <Row className="grid-container mx-auto">
            <Col xs={6}>
              <Form.Group className="text-box">
                <Form.Label>Code Snippet</Form.Label>
                <Form.Control as="textarea" value={codeSnippet} onChange={(event) => setCodeSnippet(event.target.value)} />
              </Form.Group>
              <Form.Group className="text-box">
                <Form.Label>Instructions</Form.Label>
                <Form.Control as="textarea" rows="3" value={instructions} onChange={(event) => setInstructions(event.target.value)} />
              </Form.Group>
              <div className="button-spacing">
                <Button variant="primary" type="submit" disabled={isLoading}>
                  {isLoading ? <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  /> : 'Submit'}
                </Button>
              </div>
            </Col>
            <Col xs={6}>
              <Form.Group className="response-text text-box">
                <Form.Label>Response</Form.Label>
                <Form.Control as="textarea" value={response} onChange={(event) => setResponse(event.target.value)} disabled={true} />
                {response && <div className="copy-button">
                  <Button variant="secondary" onClick={handleCopy}>
                    {copied ? <FontAwesomeIcon icon={faCheck} /> : 'Copy to clipboard'}
                  </Button>
                </div>}
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
}

export default CodeInput;