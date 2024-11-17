// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIPZtAyVJSSjRt2chldm4-uZ0lSiKpwUg",
  authDomain: "financewebsitebackend.firebaseapp.com",
  projectId: "financewebsitebackend",
  storageBucket: "financewebsitebackend.firebasestorage.app",
  messagingSenderId: "664727507389",
  appId: "1:664727507389:web:7bb5500fa5a6862ebfc2d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", userCredential.user);
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  