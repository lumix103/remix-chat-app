import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ede9f8",
        background: "#090512",
        primary: "#b09be1",
        secondary: "#782449",
        accent: "#cb5252",
      },
    },
  },
  plugins: [],
} satisfies Config;
