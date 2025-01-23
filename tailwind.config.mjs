/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "media",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100ch",
          },
        },
        dark: {
          css: {
            color: "#9ca3af",
            '[class~="lead"]': { color: "#9ca3af" },
            a: { color: "#60a5fa" },
            strong: { color: "#f9fafb" },
            "ul > li::before": { backgroundColor: "#6b7280" },
            hr: { borderColor: "#374151" },
            blockquote: {
              color: "#9ca3af",
              borderLeftColor: "#374151",
            },
            h1: { color: "#f9fafb" },
            h2: { color: "#f9fafb" },
            h3: { color: "#f9fafb" },
            h4: { color: "#f9fafb" },
            code: { color: "#f9fafb" },
            "pre code": { backgroundColor: "transparent", color: "inherit" },
            pre: { backgroundColor: "#1f2937", color: "#f9fafb" },
            thead: {
              color: "#f9fafb",
              borderBottomColor: "#374151",
            },
            "tbody tr": { borderBottomColor: "#374151" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
