// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIvTrrrut2hUkVtuFS2rlKOnNcuUV5zg4",
  authDomain: "mern-book-inventory-f15ee.firebaseapp.com",
  projectId: "mern-book-inventory-f15ee",
  storageBucket: "mern-book-inventory-f15ee.appspot.com",
  messagingSenderId: "919370890832",
  appId: "1:919370890832:web:8744a9912c97838c38db55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;