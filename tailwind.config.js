/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage: (_)=> ({
      'custom-background':"url('https://images.pexels.com/photos/26051261/pexels-photo-26051261/free-photo-of-madera-pajaro-agua-desierto.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
    }),
  },
  plugins: [],
}

}