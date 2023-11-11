/** @type {import('tailwindcss').Config} */
export default {
  content: ["node_modules/preline/dist/*.js"],

  // preline UI  plugin
  plugins: [require("preline/plugin")],
};
