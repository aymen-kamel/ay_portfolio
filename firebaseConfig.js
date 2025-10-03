// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR2g-NCPVOU3xUbejZRUnESUD36fhFwGI",
  authDomain: "my-portfolio-93271.firebaseapp.com",
  projectId: "my-portfolio-93271",
  storageBucket: "my-portfolio-93271.firebasestorage.app",
  messagingSenderId: "754212486027",
  appId: "1:754212486027:web:625d3c158690fd4d404d8e",
  measurementId: "G-HM78EBGGDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
