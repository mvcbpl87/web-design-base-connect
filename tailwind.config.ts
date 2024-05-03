import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    fontFamily:{
      'custom': ['"Helvetica Now Display roboto"', "Roboto"]
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      lineHeight:{
        'desktop-h1': '120%',
        'desktop-h2': '120%',
        'desktop-h3': '120%',
        'desktop-h4': '130%',
        'desktop-h5': '140%',
        'desktop-h6': '140%',
        'mobile-h1': '120%',
        'mobile-h2': '120%',
        'mobile-h3': '120%',
        'mobile-h4': '140%',
        'mobile-h5': '140%',
        'mobile-h6': '140%'
      },
      fontSize:{
        'desktop-h1': '56px',
        'desktop-h2': '48px',
        'desktop-h3': '40px',
        'desktop-h4': '32px',
        'desktop-h5': '24px',
        'desktop-h6': '20px',
        'mobile-h1': '40px',
        'mobile-h2': '36px',
        'mobile-h3': '32px',
        'mobile-h4': '24px',
        'mobile-h5': '20px',
        'mobile-h6': '18px',
        'large':'20px',
        'medium': '18px',
        'regular': '16px',
        'small':'14px',
        'tiny': '12px'
      },
      textColor:{
        'text-accent-base': '#424CF1',
        'accent-secondary': '#98BF77',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'accent-base': '#424CF1',
        'accent-secondary': '#98BF77',
        'primary-progress': '#06FA76',
        'bg-progress': '#D9D9D9',
        'table-cell-var1': '#FFFFFF',
        'table-cell-var2': '#EEEEEE',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config