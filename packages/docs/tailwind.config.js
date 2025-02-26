/** @type {import('tailwindcss').Config} */
const theme = require("tailwindcss/defaultTheme");
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    ],
    plugins: [
        // require("@imprintcss/css-debugging"),
        require('@imprintcss/tailwind-plugin'),
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                "13": "repeat(13, minmax(0, 1fr))",
                "14": "repeat(14, minmax(0, 1fr))",
                "15": "repeat(15, minmax(0, 1fr))",
                "16": "repeat(16, minmax(0, 1fr))",
            }
        }
    }
};
