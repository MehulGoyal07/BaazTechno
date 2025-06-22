import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                darkBackground: "#0A0A0A",
                primary: {
                    100: "#FFF9C4",
                    300: "#FFE082",
                    500: "#FFD700",
                    700: "#FFC107",
                    900: "#FFA000"
                },
                secondary: "#4A90E2",
                muted: "#B3B3B3",
                success: "#4BB543",
                error: "#FF3333",
                cardBg: "#1A1A1A",
            },
            fontFamily: {
                sans: ['Inter', 'Montserrat', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
                heading: ['Poppins', 'Montserrat', 'Arial', 'sans-serif'],
                accent: ['Playfair Display', 'serif'],
            },
            boxShadow: {
                card: '0 4px 12px rgba(0, 0, 0, 0.25)',
                button: '0 4px 14px rgba(255, 215, 0, 0.4)',
                glow: '0 0 15px rgba(255, 215, 0, 0.7)',
                navbar: '0 2px 10px rgba(0, 0, 0, 0.3)',
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '2rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'pulse-slow': 'pulse 3s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [
        typography,
        forms,
    ],
}