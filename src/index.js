const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { toTitleCase, trimAndClean, charFrequency, countWords, randomString } = require('./stringUtil');

dotenv.config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Route: Title Case Converter
app.post('/titlecase', (req, res) => {
    try {
        const { text } = req.body;
        const result = toTitleCase(text);
        res.status(200).json({ success: true, result });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// Route: Word Counter
app.post('/wordcount', (req, res) => {
    try {
        const { text } = req.body;
        const result = countWords(text);
        res.status(200).json({ success: true, result });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// Route: Trim and Clean
app.post('/trimandclean', (req, res) => {
    try {
        const { text } = req.body;
        const result = trimAndClean(text);
        res.status(200).json({ success: true, result });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// Route: Char Frequency
app.post('/charfrequency', (req, res) => {
    try {
        const { text } = req.body;
        const result = charFrequency(text);
        res.status(200).json({ success: true, result });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// Route: Random String
app.post('/randomstring', (req, res) => {
    try {
        const { length } = req.body;
        const result = randomString(length);
        res.status(200).json({ success: true, result });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// Server Start
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
