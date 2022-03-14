// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// firebase config no support enviroment variable...
const firebaseConfig = {
  apiKey: "AIzaSyC3itl4FUgIVwEnPgy8ixA71ymeK0ffI44",
  authDomain: "house-marketplace-app-7eb82.firebaseapp.com",
  projectId: "house-marketplace-app-7eb82",
  storageBucket: "house-marketplace-app-7eb82.appspot.com",
  messagingSenderId: "816037529468",
  appId: "1:816037529468:web:bd7d3a94f10b57cd0386f9",
  measurementId: "G-XLC7WBDBXZ",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();
