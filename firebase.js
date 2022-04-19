// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMF45_ZOjE4K80RjkR0JBXZEzpyKTXYlQ",
  authDomain: "austin-community.firebaseapp.com",
  projectId: "austin-community",
  storageBucket: "austin-community.appspot.com",
  messagingSenderId: "588891275258",
  appId: "1:588891275258:web:f65a68bcf298727ee8ae43",
  measurementId: "G-NZR21M8TP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);