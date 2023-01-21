import './App.css';
import React from 'react';
import CodeInput from './CodeInput';
import { FaGithub } from 'react-icons/fa';

function App() {
  return (
    <div className="container">
      <h1 class="h1">CodeGenie</h1>
      <div className="center-content" style={{ paddingTop: "150px"}}>
        <CodeInput />
      </div>
      <footer>
        <p>© 2023 CodeGenie</p>
        <a href="https://github.com/jcarney2024/CodeGenie">
          <FaGithub /> View this project on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;