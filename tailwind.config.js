/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    backgroundImage: {
      homebg:
        "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDVrNTZjM2R4cHR0bW8wYjVhdDA0amRrMDVkeTQwbW55dnZ5cWl2diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U4FkC2VqpeNRHjTDQ5/giphy.webp')",
    },
  },
  plugins: [require("tailwindcss-motion")],
};
