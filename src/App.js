import './App.css';

import React from 'react';
import {FaGithub} from 'react-icons/fa';

import packageJson from '../package.json';

import {ReactComponent as CodeGenie} from './CodeGenie.svg';
import CodeInput from './CodeInput';

function App() {
  return (
      <div className = "container">
      <CodeGenie style =
       {
         { width: "50%", height: "50%" }
       } />
      <div className="center-content" style={{ paddingTop: "50px" }}>
        <CodeInput />
      </div>
      <footer>
        <p>© 2023 CodeGenie</p>
      <a href = "https://github.com/jcarney2024/CodeGenie">
      <FaGithub />View this project on
          GitHub</a>
        <p> Version: {packageJson.version}</p>
      </footer>
    </div>);
}

export default App;