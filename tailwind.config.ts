import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6CC24A", // Soft Green
        secondary: "#F9D423", // Bright Yellow
        accent: "#3DAEDB", // Aqua Blue
        neutral: {
          100: "#FFFFFF", // White
          200: "#F5F5F5", // Light Gray
          900: "#333333", // Dark Gray
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
