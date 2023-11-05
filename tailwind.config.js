/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./demo/*.{html,js}",
    ],
    plugins: [
        require('./src/index.js'),
    ],
};
