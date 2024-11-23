const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        Carolina: "#589FD2",
        Tuscany: "#FCD12C",
        Sage: "#9DC183",
        whitee: "#fff",
        background: "#151c2c",
        foreground: "#ffffff",
        blueGray: {
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        Bittersweet: {
          50: "#FF572C",
          100: "#F9D388",
        },
        bluep: {
          50: "#e0fbfc",
          100: "#98c1d9",
          200: "#3d5a80",
        },
      },
    },
  },
  plugins: [],
};

export default config;
