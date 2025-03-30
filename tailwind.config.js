/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#8B5CF6', // Purple
        'secondary': '#06B6D4', // Cyan
        'light-primary': '#ffffff',
        'light-secondary': '#f3f4f6',
        'dark-primary': '#0f172a',
        'dark-secondary': '#1e293b',
        'accent': '#22D3EE',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #8B5CF6, 0 0 10px #8B5CF6, 0 0 15px #8B5CF6' },
          '100%': { boxShadow: '0 0 20px #8B5CF6, 0 0 30px #8B5CF6, 0 0 40px #8B5CF6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}