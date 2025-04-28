// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs5eQjmc_7vUPDvF0f4w39CuT5v0DDx2s",
  authDomain: "dbtiengnhat.firebaseapp.com",
  projectId: "dbtiengnhat",
  storageBucket: "dbtiengnhat.firebasestorage.app",
  messagingSenderId: "733579526323",
  appId: "1:733579526323:web:abaf1c77eaf34d07d7f0c6",
  measurementId: "G-11H0NXQJXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);