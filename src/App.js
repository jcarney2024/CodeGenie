import './App.css';
import React from 'react';
import CodeInput from './CodeInput';

function App() {
  return (
    <div className="container">
      <h1 class="h1">CodeGenie</h1>
      <div className="center-content" style={{ paddingTop: "20px"}}>
        <CodeInput />
      </div>
    </div>
  );
}

export default App;