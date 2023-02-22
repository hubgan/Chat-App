// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDk_EYdYI2mPj1CucC2RAq-cKAYwu656ZM",
    authDomain: "chat-app-851af.firebaseapp.com",
    projectId: "chat-app-851af",
    storageBucket: "chat-app-851af.appspot.com",
    messagingSenderId: "937335349420",
    appId: "1:937335349420:web:a3d39cee259b7c939bbf09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
