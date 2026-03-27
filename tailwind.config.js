

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B0B0B", 

        accent: "#C9A227", 

        secondary: "#F5F5F5", 

        "optional-accent": "#7B1E1E", 

      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
        serif: ['"Poppins"', 'sans-serif'],
        playfair: ['"Poppins"', 'sans-serif'],
        inter: ['"Poppins"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
