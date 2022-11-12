// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEAwv-rVa2jQ5fZXiZsRovOo8M5O3BdQI",
  authDomain: "healai-9a9c7.firebaseapp.com",
  projectId: "healai-9a9c7",
  storageBucket: "healai-9a9c7.appspot.com",
  messagingSenderId: "199892193965",
  appId: "1:199892193965:web:66badae40fededd8546c24",
  measurementId: "G-GN4ML9JERJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const auth = getAuth(app);
// const analytics = getAnalytics(app);
