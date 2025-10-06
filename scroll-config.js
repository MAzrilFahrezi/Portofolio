/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... existing config ...
  theme: {
    extend: {
      // ... existing extensions ...
      scrollBehavior: {
        'smooth': 'smooth',
      },
    },
  },
  plugins: [
    // Add scroll-snap plugin if needed
    function({ addUtilities }) {
      addUtilities({
        '.scroll-snap-type-y': {
          'scroll-snap-type': 'y mandatory',
        },
        '.scroll-snap-start': {
          'scroll-snap-align': 'start',
        },
        '.scroll-snap-center': {
          'scroll-snap-align': 'center',
        },
      })
    },
  ],
}
