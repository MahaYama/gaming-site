module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }, 
        },
        floating : {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        }
      },
      colors:{
        'cream' : "#ece8e1",
        'valorant-blue' : "#0E1921",
        'wallpaper-black' : "#0B0E15"
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        floating: 'floating 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
