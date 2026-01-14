/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brandOrange: '#F5AB40', // Exact header color from design
        brandCyan: '#00E5FF',   // "Invite-Only" badge color
        brandPink: '#D157A1',   // RSVP input border highlight
        darkBg: '#00070D',      // Main hero background depth
      },
      fontFamily: {
        satoshi: ['var(--font-satoshi)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



