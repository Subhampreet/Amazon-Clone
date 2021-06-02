module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
      screens: {
        '2xl': '1450px',
      },
      height: {
        dd: "20px",
      },
      fontSize: {
        ss: ['14px', '20px'],
        xxl: ['20px', '30px']
        
      }
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
