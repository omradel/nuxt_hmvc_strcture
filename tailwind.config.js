/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/components/**/*.{vue,js,ts}",
    "./src/layouts/**/*.vue",
    "./src/global/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/app.vue",
    "./src/plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./src/modules/**/*.{vue,js,ts}",
    "./src/*.vue",
  ],
  theme: {
    extend: {
      spacing: {
        xs: "1rem",
        sm: "2rem",
        xm: "3rem",
        md: "4rem",
        xd: "5rem",
        lg: "6rem",
        xl: "8rem",
      },

      lineHeight: {
        20: "20px",
        24: "24px",
        28: "28px",
        54: "54px",
        46: "46px",
      },

      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },

      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.75rem", // 28px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "4rem", // 64px
        "7xl": "5rem", // 80px
      },

      colors: {
        customwhite: "#FAFAFA",
        customwhite2: "#f7f7f7",

        primary: {
          light: "#f6fff6",
          DEFAULT: "#3E7E41",
          dark: "#065F46",
        },
      },
    },
  },
  darkMode: "class",
};
