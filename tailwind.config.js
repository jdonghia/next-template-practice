/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: "Inter",
      poppins: "Poppins",
    },
    extend: {
      colors: {
        "custom-blue": "#40ddb6",
        "custom-purple": "#6B78E5",
        "custom-black": "#37393F",
        "custom-gray": "#757575",
        "custom-white": "#F4F4F4",
      },
    },
  },
};
