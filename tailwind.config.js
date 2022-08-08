/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
 module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {
    extend: {
      colors: {
        'thPrimary': "#2ec4b6",
        'thSecondary': "#ff9f1c",
        'thPrimaryVar': "#011627",
        'thSecondaryVar': "#e71d36",
        'thBackground': "#fdfffc",
      }
    }
  },
};