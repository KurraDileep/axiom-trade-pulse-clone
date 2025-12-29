/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* ================= COLORS ================= */
      colors: {
        /* Base (Black + Blue) */
        bg: "#0A0A0F",          // main app background (near-black)
        panel: "#0F1117",       // cards / tables
        border: "#1A1D29",      // subtle borders

        /* Text */
        text: "#E5E7EB",        // primary text
        muted: "#9CA3AF",       // secondary text

        /* Accent (BLUE) */
        accent: "#3B82F6",      // primary blue (buttons, highlights)
        accentSoft: "#1E40AF",  // darker blue hover

        /* Status */
        green: "#22C55E",       // positive
        red: "#EF4444",         // negative
      },

      /* ================= UI ================= */
      borderRadius: {
        xl: "12px",
      },

      boxShadow: {
        soft: "0 0 0 1px rgba(255,255,255,0.04)",
      },
    },
  },
  plugins: [],
};
