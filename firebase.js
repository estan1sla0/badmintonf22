// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6nR4ZofWhRSgBLT9E4Q5SfS7yG7stP5k",
  authDomain: "badmintonwebtraining.firebaseapp.com",
  projectId: "badmintonwebtraining",
  storageBucket: "badmintonwebtraining.firebasestorage.app",
  messagingSenderId: "787662262814",
  appId: "1:787662262814:web:12dd855ffbe39942e1940f",
  measurementId: "G-2YSZNYYEN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
