import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#050815",
        panel: "#0f172a",
        panelSoft: "#111c33",
        border: "rgba(148, 163, 184, 0.2)",
        accent: "#7c3aed"
      }
    }
  },
  plugins: []
};

export default config;
