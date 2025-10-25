import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
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
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(30px, -30px) scale(1.1)" },
        },
        "pulse-glow": {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 20px var(--glow)" },
          "50%": { transform: "scale(1.05)", boxShadow: "0 0 40px var(--glow)" },
        },
        "logo-appear": {
          "0%": { opacity: "0", transform: "scale(0.5) rotate(-180deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "bounce-scroll": {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateX(-50%) translateY(0)" },
          "40%": { transform: "translateX(-50%) translateY(-15px)" },
          "60%": { transform: "translateX(-50%) translateY(-10px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "flip-in": {
          "0%": { opacity: "0", transform: "scale(0.7) rotateY(90deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotateY(0deg)" },
        },
        "shimmer": {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.5s",
        "slide-down": "slide-down 0.8s ease forwards",
        "float": "float 8s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s infinite",
        "logo-appear": "logo-appear 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.7s",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "bounce-scroll": "bounce-scroll 2s infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        "flip-in": "flip-in 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "shimmer": "shimmer 0.6s ease",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
