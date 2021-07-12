const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      "none": "0",
      "tiny": "0.875rem",
      "base": "1.25rem",
      "lg": "1.56rem",
      "xl": "1.95rem",
      "2xl": "2.44rem",
      "3xl": "3.05rem",
      "4xl": "3.82rem",
      "5xl": "4.77rem",
      "6xl": "5.96rem",
    },
    spacing: {
      0: "0rem",
      1: "0.25rem",
      2: "0.5rem",
      3: "1rem",
      4: "1.5rem",
      5: "2.25rem",
      6: "3rem",
      7: "4rem",
      8: "6.5rem",
      9: "7.75rem",
      12: "12.5rem",
      24: "25rem",
      48: "50rem",
      rectangle: "calc(100% - 8px) 8px 8px 8px",
    },
    minWidth: {
      "0": "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "full": "100%",
      "1": "0.25rem",
      "2": "0.5rem",
      "3": "1rem",
      "4": "1.5rem",
      "5": "2.25rem",
      "6": "3rem",
      "7": "4rem",
      "8": "6.5rem",
      "9": "7.75rem",
      "12": "12.5rem",
      "24": "25rem",
      "48": "50rem",
    },
    borderRadius: {
      "none": "0",
      "sm": "0.125rem",
      "default": "0.25rem",
      "md": "0.5rem",
      "lg": "1rem",
      "xl": "1.5rem",
      "2xl": "2.25rem",
      "3xl": "3rem",
      "full": "9999px",
    },
    fontFamily: {
      sans: ["Poppins"],
      serif: ["Poppins"],
      mono: ["Poppins"],
      display: ["Patua One"],
      body: ["Poppins"],
      title: ["Patua One"],
    },

    colors: {
      transparent: "transparent",
      tenpercent: "rgba(0,0,0,0.10)",
      current: "currentColor",
      white: "#ffffff",
      gray: {
        100: "#fdfdfd",
        200: "#e0e0e0",
        300: "#c5c5c5",
        400: "#ababab",
        500: "#929292",
        600: "#797979",
        700: "#5e5e5e",
        800: "#404040",
        900: "#090909",
      },
      red: {
        100: "#fffdfd",
        200: "#f8d9da",
        300: "#f2b6b9",
        400: "#ec9297",
        500: "#e56c72",
        600: "#dd3d45",
        700: "#b72028",
        800: "#7e161b",
        900: "#170405",
        1000: "rgba(182, 32, 39, 0.1)",
      },
      pink: {
        100: "#fffbfd",
        200: "#ffd5e6",
        300: "#ffaece",
        400: "#ff83b5",
        500: "#ff5096",
        600: "#ef0060",
        700: "#bc004b",
        800: "#840035",
        900: "#1c000b",
        1000: "rgba(179, 0, 131, 0.1)",
      },
      purple: {
        100: "#fffcfe",
        200: "#ffd3f3",
        300: "#ffaae8",
        400: "#ff7cdc",
        500: "#ff3ccb",
        600: "#e300a6",
        700: "#b30083",
        800: "#7d005c",
        900: "#1a0013",
        1000: "rgba(135, 0, 232, 0.1)",
      },
      bg: {
        red: "rgba(182, 32, 39, 0.1)",
        pink: "rgba(179, 0, 131, 0.1)",
        purple: "rgba(135, 0, 232, 0.1)",
        200: "hsla(280, 5%, 12%, 0.8)",
        300: "#201726",
        400: "hsla(277, 51%, 9%, 0.8)",
        500: "#190b22",
        600: "hsl(275, 100%, 6%, 0.8)",
        700: "#12001f",
      },
    },

    extend: {
      backgroundImage: (theme) => ({
        gradient: `radial-gradient(circle at center left, #b72028, transparent 50%), radial-gradient(circle at 0% 0%, #bc004b, transparent 25%), radial-gradient(circle at 20% 60%, #b72028, transparent 50%),radial-gradient(circle at center right, #bc004b, transparent 50%),radial-gradient(circle at 60% 60%, #b30083, transparent 25%),radial-gradient(circle at bottom center, #bc004b, transparent 75%),radial-gradient(circle at 80% 40%, #b30083, transparent 75%), radial-gradient(circle at center center, #000, #000 100%)`,
      }),

      transitionTimingFunction: {
        cog: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },

      keyframes: {
        cta: {
          "0%": {
            "filter": "blur(50px)",
            "opacity": "75%",
            "background-position": "100% 50%",
            "transform": "translateZ(0) rotate(0deg) scale(1.2)",
          },
          "to": {
            "filter": "blur(50px)",
            "opacity": "100%",
            "background-position": "25% 50%",
            "transform": "translateZ(0) rotate(1turn) scale(1.4)",
          },
        },
        glow: {
          "0%": {
            transform: "translate3d(0, 0, 0) translateY(75%) scale(1.5)",
          },
          "100%": {
            transform:
              "translate3d(0, 0, 0) translateY(75%) rotate(360deg) scale(1.8)",
          },
        },
        bouncingIn: {
          "0%": {
            transform: "translate3d(0, 0, 0) scale(1, 1)",
          },
          "10%": {
            transform: "translate3d(0, 0, 0) scale(1.04, 0.92)",
          },
          "30%": {
            transform: "translate3d(0, 0, 0) scale(0.92, 1.04)",
          },

          "50%": {
            transform: "translate3d(0, 0, 0) scale(1.02, 0.96)",
          },

          "57%": {
            transform: "translate3d(0, 0, 0) scale(1, 1)",
          },

          "64%": {
            transform: "translate3d(0, 0, 0) scale(1.01, 0.99)",
          },

          "100%": {
            transform: "translate3d(0, 0, 0) scale(1, 1)",
          },
        },

        bounceIn: {
          "0%,20%,40%,60%,80%,to": {
            "animation-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },

          "0%": {
            transform: "translate3d(0, 0, 0) scale3d(0.97, 0.97, 0.97)",
            opacity: 0,
          },

          "20%": {
            transform: "translate3d(0, 0, 0) scale3d(1.02, 1.02, 1.02)",
          },

          "40%": {
            transform: "translate3d(0, 0, 0) scale3d(0.98, 0.98, 0.98)",
          },

          "60%": {
            transform: "translate3d(0, 0, 0) scale3d(1.01, 1.01, 1.01)",
            opacity: 1,
          },

          "80%": {
            transform: "translate3d(0, 0, 0) scale3d(0.99, 0.99, 0.99)",
          },

          "to": {
            transform: "translate3d(0, 0, 0) scaleX(1)",
            opacity: 1,
          },
        },

        flipInHorBottom: {
          "0%": {
            transform: "translate3d(0, 0, 0) rotateX(80deg)",
            opacity: 0,
          },
          "100%": {
            transform: "translate3d(0, 0, 0) rotateX(0)",
            opacity: 1,
          },
        },
        ctaBackground: {
          from: {
            "background-position": "100% 50%",
            "transform": "translate3d(0, 0, 0) rotate(0deg) scale(1.2)",
          },
          to: {
            "background-position": "25% 50%",
            "transform": "translate3d(0, 0, 0) rotate(360deg) scale(1.4)",
          },
        },
      },
      animation: {
        cta: "cta 10s infinite alternate-reverse both",
        glow: "glow 10s infinite alternate-reverse both",
        bouncingIn: "bouncingIn 1s forwards 1",
        bounceIn: "bounceIn 0.75s cubic-bezier(.28,.84,.42,1)",
        ctaBackground: "ctaBackground 5s infinite both",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "focus", "group-hover", "group-focus"],
      transform: ["hover", "focus", "group-hover", "group-focus"],
      scale: ["hover", "focus", "group-hover", "group-focus"],
      translate: ["hover", "focus", "group-hover", "group-focus"],
      display: ["hover", "focus", "group-hover", "group-focus"],
      filter: ["hover", "focus", "group-hover", "group-focus"],
      opacity: ["hover", "focus", "group-hover", "group-focus"],
      blur: ["hover", "focus", "group-hover", "group-focus"],
    },
  },
  plugins: [],
};
