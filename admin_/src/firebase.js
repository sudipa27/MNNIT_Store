// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFzg1pKbn7Lk5axzMXSGPgZ30Fv0sJYlM",
  authDomain: "shop-dbfc0.firebaseapp.com",
  projectId: "shop-dbfc0",
  storageBucket: "shop-dbfc0.appspot.com",
  messagingSenderId: "52078778713",
  appId: "1:52078778713:web:00c017d4753b2a88dc1448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;