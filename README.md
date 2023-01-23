# CodeGenie
| Version | Status        | Preview      |
|---------|---------------|--------------|
| v1.0.0  | ✅ Released    | [View](legacy.codegenie.app) |
| v2.0.0  | 🚧 In Progress | Coming Soon! |

CodeGenie is a web application that allows users to input a snippet of code and instructions, which then returns a response from OpenAI's Codex API. This app is built using React for the frontend and JavaScript for the backend, making use of Axios library to communicate with the Codex API.

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

## Authors

- Jack Carney - [jcarney2024](https://github.com/jcarney2024)

## License

This project is licensed under our own End User License Agreement ("EULA"). View this License [here](https://github.com/jcarney2024/CodeGenie/blob/ae3a4a76d01584becb646a21cc4230fe8af783e0/LICENSE.md).

## Acknowledgments

- This application is using OpenAI Codex API, Make sure to comply with the [terms and conditions](https://beta.openai.com/docs/usage-policies) of the API.
- This application is for demonstration purposes only, it may not work as is in your application and you should test it with your specific requirements.

Please feel free to make any necessary modifications to this README.md file to match your specific requirements.
