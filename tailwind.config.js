/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#fffafa",
        primary: "#584e6b",
        grayCol: "#D1D5DB",

        gradientCol: "#7858a1",
        gradientCol2: "#d7c3e0",
      },
      padding: {
        padY: "64px",
        padX: "140px",
        padXMobile: "24px",
        padYMobile: "24px",
      },
    },
  },
  plugins: [],
};
