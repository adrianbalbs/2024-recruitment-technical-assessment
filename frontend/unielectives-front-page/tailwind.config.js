/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-blue": "#1279f2",
        "search-bar": "#9cade9",
        "sub-headings": "#989898",
        "course-headings": "#202020",
        "star-filled": "#b789e5",
        "star-unfilled": "#9999994d",
        "term-tags": "#ccebf6",
        "elective-card": "#fafafa",
      },
    },
  },
  plugins: [],
};
