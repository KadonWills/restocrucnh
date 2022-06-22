/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  keyframes: {
    wobble: {
      '0%, 100%': {
        transform: 'rotate(-3deg) translateX(-10px)',
      },
      '50%': {
        transform: 'rotate(3deg) translateX(10px)',
      }
    },
    fadeInSlideRight: {
      '0%': {
        opacity: '0',
        transform: 'translateX(-100px)'
      },
      '100%': {
        opacity: '1',
        transform: 'translateX(0)'
      },
    },
    fadeInSlideLeft: {
      '0%': {
        opacity: '0',
        transform: 'translateX(100px)'
      },
      '100%': {
        opacity: '1',
        transform: 'translateX(0)'
      },
    },
    jump: {
      from: {
          transform: 'translateY(0px)',
      },
      to: {
          transform: 'translateY(-25px)',
      },
  },
  fadeInSlideUp: {
    '0%': {
            opacity: '0',
            transform: 'translateY(100px)'
    },
    '100%': {
            opacity: '1',
            transform: 'translateY(0)'
    },
}
  },
  animation: {
    wobble: 'wobble 1s ease-in-out infinite',
    fadeInSlideRight: 'fadeInSlideRight 3s ease-out',
    fadeInSlideLeft: 'fadeInSlideLeft 3s ease-out',
    jump: 'jump .5s alternate infinite',
    fadeInSlideUp: 'fadeInSlideUp 3s ease-out'
  }
}
