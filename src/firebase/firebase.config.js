// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRSyGdMpyBMEVUzSZeGX8-OWs5RVDoZmE",
  authDomain: "dragon-news-7a1d9.firebaseapp.com",
  projectId: "dragon-news-7a1d9",
  storageBucket: "dragon-news-7a1d9.firebasestorage.app",
  messagingSenderId: "930603712038",
  appId: "1:930603712038:web:cc63f2ff327784f68930e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;