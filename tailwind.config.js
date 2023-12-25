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
        primary: "#ea7210",
        grayCol: "#D1D5DB",
        secondary: "#ffb100",
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
