/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./screens/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pri: "#0ea5e9",
                sec: "#fcd34d",
            },
        },
    },
    plugins: [],
}
