// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "baaztechno-blogs.firebaseapp.com",
    projectId: "baaztechno-blogs",
    storageBucket: "baaztechno-blogs.firebasestorage.app",
    messagingSenderId: "14975156025",
    appId: "1:14975156025:web:596a821a6785cc6943b2e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export default app