// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVEkIFknO9ydRlI6EJb_aV7LGWz-cNTAw",
  authDomain: "react-news-portal-auth-4b2b4.firebaseapp.com",
  projectId: "react-news-portal-auth-4b2b4",
  storageBucket: "react-news-portal-auth-4b2b4.appspot.com",
  messagingSenderId: "947448392577",
  appId: "1:947448392577:web:f8f723f994af5fbf261680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;