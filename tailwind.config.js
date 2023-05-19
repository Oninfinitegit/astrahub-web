/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{jsx,tsx,mdx}",
    "./components/**/*.{jsx,tsx,mdx}",
    "./app/**/*.{jsx,tsx,mdx}",
    "./modules/**/*.{tsx,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
