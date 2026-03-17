import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        // ─── Mage.ai DNA — Deep Space Palette ──────────────────────────
        mage: {
          bg: "#0B0D17",          // Canvas principal — deep space
          surface: "#131620",     // Cards, sidebars, painéis
          "surface-hover": "#1C2130",
          neon: "#8A2BE2",        // Roxo assinatura
          "neon-dim": "rgba(138,43,226,0.15)",
        },

        // ─── Status System — Neon LEDs ──────────────────────────────────
        status: {
          success: "#00E676",     // Verde neon
          running: "#00B0FF",     // Azul cyan
          error: "#FF1744",       // Vermelho alerta
          pending: "#78909C",     // Cinza mutado
        },

        // ─── Hub (dashboard interno) ────────────────────────────────────
        hub: {
          bg: "#0B0D17",
          surface: "#131620",
          border: "#1C2130",
          accent: "#6366f1",
          "accent-hover": "#4f46e5",
          muted: "#3f3f5a",
          text: "#e2e2f0",
          "text-muted": "#8b8ba8",
        },

        // ─── Brand Cyber-Elite ──────────────────────────────────────────
        brand: {
          bg: "#0B0D17",
          blue: "#3B82F6",
          "blue-hover": "#2563EB",
          purple: "#8B5CF6",
          "purple-hover": "#7C3AED",
          neon: "#8A2BE2",
        },
      },

      boxShadow: {
        // Status LEDs
        "glow-success": "0 0 8px rgba(0,230,118,0.6)",
        "glow-running": "0 0 10px rgba(0,176,255,0.5)",
        "glow-error": "0 0 8px rgba(255,23,68,0.5)",

        // Panel & node glows (Mage.ai)
        "glow-panel": "0 0 20px rgba(138,43,226,0.05)",
        "glow-node": "0 0 15px rgba(138,43,226,0.3), inset 0 0 10px rgba(138,43,226,0.2)",
        "glow-neon": "0 0 20px rgba(138,43,226,0.3)",
        "glow-neon-lg": "0 0 40px rgba(138,43,226,0.25)",

        // Brand blue (existing)
        "glow-blue": "0 0 20px rgba(59,130,246,0.3)",
        "glow-blue-lg": "0 0 40px rgba(59,130,246,0.25)",
        "glow-purple": "0 0 20px rgba(139,92,246,0.3)",
      },

      letterSpacing: {
        industrial: "0.1em", // micro-labels estilo Mage.ai
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },

      borderRadius: {
        hub: "0.75rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
