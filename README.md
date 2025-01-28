# String Buddy

A beginner-friendly **NPM package** for string manipulation. This package provides essential tools for developers working with strings, including title casing, word counting, trimming and cleaning, character frequency analysis, and generating random strings.

## 🚀 Features
- **Title Case Conversion**: Capitalize the first letter of each word.
- **Word Counter**: Count the number of words in a string.
- **Character Frequency**: Count the frequency of each character.
- **Trim and Clean**: Remove unwanted characters and extra spaces.
- **Random String Generator**: Generate a random alphanumeric string.

## 📦 Installation
```bash
npm install string-buddy
```

## 📖 Usage Example
```javascript
const { toTitleCase } = require('string-buddy');

const text = "hello world";
console.log(toTitleCase(text)); // Output: Hello World
```

## 🌐 API Endpoints (for Thunder Client Testing)
- **POST** `/titlecase`
- **POST** `/wordcount`
- **POST** `/trimandclean`
- **POST** `/charfrequency`
- **POST** `/randomstring`

## 🛠️ How to Run the Project
```bash
node src/index.js
```
The server will run on `http://localhost:3000`.

## 📁 Project Structure
- `src/` – Core source files.
- `index.js` – Entry point for the server.
- `stringUtil.js` – Core utility functions.
- `.env` – Environment variables.
- `package.json` – Project dependencies and scripts.

## 🧑‍💻 Contributors
Ayesha: Basic utilities and documentation.
Zara: Intermediate functions and testing.
Mona: Intermediate functions, error handling, and CI/CD setup.

## 📜 License
This project is licensed under the **ISC License**.

---
**Note:** Staging and Production environments are configured using **GitHub Actions**.

