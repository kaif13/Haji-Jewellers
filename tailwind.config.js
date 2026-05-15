/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#070706',
        coal: '#11100d',
        velvet: '#191713',
        champagne: '#d8b76f',
        oldgold: '#a98232',
        ruby: '#7b1e2b',
        maroon: '#2a080d',
        ivory: '#fff8eb',
        mist: '#d8d0c3',
        sand: '#bfae92',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        body: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 24px 90px rgba(216, 183, 111, 0.14)',
        glass: '0 20px 80px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'luxury-radial':
          'radial-gradient(circle at 18% 12%, rgba(216,183,111,.24), transparent 28%), radial-gradient(circle at 82% 18%, rgba(123,30,43,.28), transparent 30%), radial-gradient(circle at 52% 92%, rgba(169,130,50,.14), transparent 36%), linear-gradient(135deg, #070706 0%, #19080d 46%, #090806 100%)',
      },
    },
  },
  plugins: [],
}
