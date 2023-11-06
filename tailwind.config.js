/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./docs/*.{html,js,mdx,ts,tsx}",
    ],
    plugins: [
        require('./src/index.js'),
    ],
};
