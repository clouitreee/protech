import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
                brand: {
          DEFAULT: "#FF5A3D",
          fg: "#151515",
        },
        surface: "#151515",
        fg: "#FAF8F5", // Assuming a light foreground for dark background
        accent: "#22D48A",

      },
    },
  },
  plugins: [],
};
export default config;

