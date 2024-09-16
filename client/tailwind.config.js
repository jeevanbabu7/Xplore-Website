/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "text-reveal": "text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s",
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(15px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        handjet: ['Handjet', 'sans-serif'],
        'Pixelify': ['"Pixelify Sans"', 'sans-serif'],
        Silkscreen: ['"Silkscreen"', 'sans-serif'],
      },
      fontWeight: {
        'light': 100,
        'normal': 400,
        'bold': 700,
        'heavy': 900,
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(rgb(186, 66, 255) 35%, rgb(0, 225, 255))',
        
      },
      filter: {
        'blur-lg': 'blur(20px)',
      },
      boxShadow: {
        'custom': '0px -5px 20px rgb(186, 66, 255), 0px 5px 20px rgb(0, 225, 255)',
      },

    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "night"],
  },
}

