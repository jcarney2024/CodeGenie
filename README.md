[![Netlify Status](https://api.netlify.com/api/v1/badges/5fff5573-a329-48f4-85ce-36c3ad181c54/deploy-status)](https://app.netlify.com/sites/codegenie/deploys) ![GitHub package.json version](https://img.shields.io/github/package-json/v/jcarney2024/CodeGenie) ![GitHub](https://img.shields.io/github/license/jcarney2024/CodeGenie) ![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/jcarney2024/CodeGenie/react) ![Website](https://img.shields.io/website?url=https%3A%2F%2Fcodegenie.app) ![GitHub issues](https://img.shields.io/github/issues/jcarney2024/CodeGenie) ![GitHub pull requests](https://img.shields.io/github/issues-pr/jcarney2024/CodeGenie)

# CodeGenie

CodeGenie is a web application that allows users to input a snippet of code and instructions, which then returns a response from OpenAI's Codex API. This app is built using React for the frontend and JavaScript for the backend, making use of Axios library to communicate with the Codex API.

## Demo

Want to preview the project? View the live demo [here](codegenie.app)!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm
- OpenAI API key (You can get one by signing up on [OpenAI website](beta.openai.com), however the Codex model is still in closed beta.)

### Installing

1. Clone the repository: `git clone https://github.com/jcarney2024/codegenie.git`
2. Install the dependencies: `npm install`
3. Replace the value for `REACT_APP_REPLACE_WITH_YOUR_API_KEY` in the .env file with your actual API key.
4. Start the development server: `npm start`
5. Open http://localhost:3000 to view it in your browser.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language.
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.

## Authors

- Jack Carney - [jcarney2024](https://github.com/jcarney2024)

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](https://github.com/jcarney2024/CodeGenie/blob/dev/LICENSE) file for details.

The GPL-3.0 is a copyleft open-source license that requires any derivative work to also be licensed under the same terms. This means that if you use any code from this project in your own project, your project must also be licensed under the GPL-3.0.
It also requires you to provide the source code of your project if you distribute it.

Please read the [LICENSE](https://github.com/jcarney2024/CodeGenie/blob/dev/LICENSE) file for more information and the terms and conditions of the license.

## Acknowledgments

- This application is using OpenAI Codex API, Make sure to comply with the [terms and conditions](https://beta.openai.com/docs/usage-policies) of the API.
- This application is for demonstration purposes only, it may not work as is in your application and you should test it with your specific requirements.

Please feel free to make any necessary modifications to this README.md file to match your specific requirements.
