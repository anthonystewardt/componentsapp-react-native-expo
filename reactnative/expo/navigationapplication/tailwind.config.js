/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"
    , "./components/**/*.{js,jsx,ts,tsx}"
    , "./screens/**/*.{js,jsx,ts,tsx}"
    , "./pages/**/*.{js,jsx,ts,tsx}"
    , "./node_modules/nativewind/dist/index.js"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'roboto-black': ['Roboto-Bold', 'sans-serif'],
        'roboto-medium': ['Roboto-Medium', 'sans-serif'],
        'roboto-regular': ['Roboto-Regular', 'sans-serif']
      },
      colors: {
        "primary": "#49129C",
        "secondary": {
          DEFAULT: "#B40086",
          100: "#C51297",
          200: "#831266",
        },
        "tertiary": "#EF2967"
      }

    },
  },
  plugins: [],
}