import flowbite from "flowbite/plugin";
import scrollbar from "tailwind-scrollbar"; // Importing scrollbar plugin

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                darkBackground: "#000000", // Dark black background
                primary: "#FFD700", // Golden Yellow for button and accents
                muted: "#B3B3B3", // Muted gray for navbar text
            },
            fontFamily: {
                // Google Fonts for a modern, professional look
                sans: ['Montserrat', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Clean, modern sans-serif fonts
                heading: ['Poppins', 'Montserrat', 'Arial', 'sans-serif'], // Font for headings
            },
            boxShadow: {
                // Smooth shadows for depth
                card: '0 4px 6px rgba(0, 0, 0, 0.2)',
                button: '0 8px 12px rgba(0, 0, 0, 0.3)',
            },
        },
    },
    plugins: [flowbite, scrollbar] // ✅ only if you use flowbite
}