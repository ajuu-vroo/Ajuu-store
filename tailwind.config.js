module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        swipeUp: 'swipeUp 3s ease-in-out',
        dragUp: 'dragUp 1s ease-out',
        // percentage :'percentage 3s ease-in-out'
       }
      ,
      keyframes: {
        // percentage :{
        //   '0%' : {width : '0'},
        //   '100%' : {width : 'full'}
        // },
        dragUp:{
          '0%' :{transform : 'translateY(-200%)'},
          '25':{transform : 'translateY(-100%)'},
          '50%':{transform:'translateY(0)'},
          '75%':{transform:'translateY(0)'},
          '100%' :{transform:'translateY(0)'}
        },
        swipeUp: {
          '0%': { transform: 'translateY(100%)' },
          '25%': { transform: 'translateY(0)' },
          '50%': {transform: 'translateY(0)'},
          '75%': {transform: 'translateY(0)'},
          '100%':{transform: 'translateY(100%)'},

        },},
        fontFamily :{
          'icon' : ['Cinzel Decorative', 'cursive'],
          'nunito' : ['Nunito', "sans-serif"],
          'overlook' :['Overlock', "cursive"],
        }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
