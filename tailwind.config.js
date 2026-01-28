/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#2E7D32', // Vibrant Green for buttons/accents (Material Green 800)
          secondary: '#4CAF50', // Lighter green
          bg: '#FFFFFF',      // Pure white
          surface: '#F5F7F5', // Very light grey-green tint for cards/sidebar
          text: '#1A1A1A',    // Near black
          muted: '#757575',   // Gray text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean modern sans like reference
      },
      spacing: {
        'a4-w': '1123px', // Landscape width
        'a4-h': '794px',  // Landscape height
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem', // Extra rounded for the specific look
      }
    },
  },
  plugins: [],
}
