// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8GSBJTrYjAJRXds0PoISBDNsS9fNA_Ps",
  authDomain: "email-password-auth-5600d.firebaseapp.com",
  projectId: "email-password-auth-5600d",
  storageBucket: "email-password-auth-5600d.firebasestorage.app",
  messagingSenderId: "907649470819",
  appId: "1:907649470819:web:78f87d27a2a4b8ff2a0356"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

 export default auth;

