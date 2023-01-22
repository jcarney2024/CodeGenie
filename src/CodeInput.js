import './CodeInput.css';

import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, {useState} from 'react';
import {Button, Col, Container, Form, Row, Spinner} from 'react-bootstrap';
import Center from 'react-center';

const containerStyles = {
  height : '500px',
  width : '80%',
  display : 'flex',
  alignItems : 'center',
  justifyContent : 'center'
};

const responseTextBoxStyles = {
  marginBottom : '10px'
};

const formStyles = {
  marginTop : '50px'
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
    axios
        .post(
            'https://api.openai.com/v1/edits', {
              instruction : instructions,
              input : codeSnippet,
              model : 'code-davinci-edit-001',
              temperature : 0,
              top_p : 1,
            },
            {
              headers : {
                'Content-Type' : 'application/json',
                'Authorization' :
                    'Bearer ' + process.env.REACT_APP_REPLACE_WITH_YOUR_API_KEY,
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
          setTimeout(() => { setCopied(false); }, 2000);
        })
        .catch(err => { console.log('Failed to copy text: ', err); });
  }

  function handleCopyToCode() {
    setCodeSnippet(response);
    setResponse("");
    setCopied(false);
  }

  return (
    <Container style={containerStyles} className='h-100 d-flex align-items-center justify-content-center'>
      <div className="d-flex align-items-center">
        <Center>
          <Form style={formStyles} onSubmit={handleSubmit}>
            <Row className="grid-container mx-auto">
              <Col xs={6}>
                <Form.Group className="text-box">
                  <Form.Label>Code Snippet</Form.Label>
                  <Form.Control as="textarea" cols={40} rows={6} value={codeSnippet} onChange={(event) => setCodeSnippet(event.target.value)} />
                </Form.Group>
                <Form.Group className="text-box">
                  <Form.Label style={{ marginTop: '20px' }}>Instructions</Form.Label>
                  <Form.Control as="textarea" cols={40} rows={6} value={instructions} onChange={
    (event) => setInstructions(event.target.value)} />
                </Form.Group>
                <div className="button-spacing">
                  <Button variant="primary" type="submit" disabled={isLoading}>
                    {isLoading ? <Spinner
                      as="span"
  animation = "border"
  size = "sm"
  role = "status"
                      aria-hidden="true"
                    /> : 'Submit'}
                  </Button>
                </div>
              </Col>
              <Col xs={6}>
                <Form.Group className="response-text text-box" style={responseTextBoxStyles}>
                  <Form.Label>Response</Form.Label>
                  <Form.Control as="textarea" cols={40} rows={15} value={response} onChange={(event) => setResponse(event.target.value)} disabled={
    true} />
                  {response &&
                    <div>
                      <div className="copy-button">
                        <Button variant="secondary" onClick={handleCopy}>
                          {copied ? <FontAwesomeIcon icon={faCheck} /> : 'Copy to clipboard'
}
                        </Button>
                      </div>
                      <div className="copy-to-code-button">
                        <Button variant="secondary" onClick={handleCopyToCode}>Move to Code Snippet</Button>
                      </div>
                    </div>
                  }
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Center>
      </div>
    </Container>
  );
                        }

                        export default CodeInput;