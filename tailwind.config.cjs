/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'input': 'inset 0 0 5px black',
        'inputFocus': '0 0 10px 1000px rgba(0, 0, 0, 0.5)',
        'inputSubmit': '0 0 10px black',
        'singleTodo': ' 0 0 5px black',
      },
      backgroundImage: {
        'bgImg': 'url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg")',
      }
    },
  },
  plugins: [],
}


