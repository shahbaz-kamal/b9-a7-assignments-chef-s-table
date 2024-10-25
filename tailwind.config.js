/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-15": "#150B2B",
        "color-15-0": "rgba(21, 11, 43, 0)",
        "color-15-70": "rgba(21, 11, 43, 0.7)",
        "color-15-5": "rgba(21, 11, 43, 0.05)",
        "color-ob": "#0BE58A",
        "color-87": "#878787",
        "color-28-70": "rgba(40, 40, 40, 0.7)",
        "color-28-80": "rgba(40, 40, 40, 0.8)",
        "color-28-20": "rgba(40, 40, 40, 0.2)",
        "color-28-10": "rgba(40, 40, 40, 0.1)",
        "color-28-3": "rgba(40, 40, 40, 0.03)",
        "color-28": "rgba(40, 40, 40, 1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
