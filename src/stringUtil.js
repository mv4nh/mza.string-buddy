// Utility Functions with Try-Catch
function toTitleCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function trimAndClean(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    return str.trim().replace(/[^a-zA-Z0-9 ]/g, '');
}

function charFrequency(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
}
const frequency = {};
for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
}
return frequency;
}

function countWords(str) {
if (typeof str !== 'string') {
    throw new Error('Input must be a string');
}
return str.trim().split(/\s+/).length;
}

function randomString(length) {
if (typeof length !== 'number' || length <= 0) {
    throw new Error('Length must be a positive number');
}
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result = '';
for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
}
return result;
}

module.exports = { toTitleCase, trimAndClean, charFrequency, countWords, randomString };