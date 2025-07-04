import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        "wild-sand-50": "#f4f4f4",
        brand: {
          DEFAULT: "#3b82f6",
          dark: "#2563eb",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#374151",
            a: {
              color: "#3b82f6",
              textDecoration: "underline",
              "&:hover": {
                color: "#2563eb",
              },
            },
            h1: { fontWeight: "700", fontSize: "2.25rem" },
            h2: { fontWeight: "600", fontSize: "1.875rem" },
            h3: { fontWeight: "600", fontSize: "1.5rem" },
            pre: {
              backgroundColor: "#f3f4f6",
              padding: "1rem",
              borderRadius: "0.5rem",
            },
            code: {
              backgroundColor: "#f3f4f6",
              padding: "2px 4px",
              borderRadius: "0.25rem",
            },
            'ul, ol': {
              paddingLeft: '1.25rem',
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            li: {
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
            },
            '.ql-indent-1': { marginLeft: '2rem' },
            '.ql-indent-2': { marginLeft: '4rem' },
            '.ql-align-center': { textAlign: 'center' },
            '.ql-align-right': { textAlign: 'right' },
            '.ql-syntax': {
              backgroundColor: '#f3f4f6',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontFamily: 'monospace',
            }
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config