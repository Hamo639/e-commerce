// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDiZrNccZPh7PkBOTMV0s51Rb12iVDM8NE",

  authDomain: "e-comerce-9ed5e.firebaseapp.com",

  projectId: "e-comerce-9ed5e",

  storageBucket: "e-comerce-9ed5e.firebasestorage.app",

  messagingSenderId: "338573565992",

  appId: "1:338573565992:web:ce188f7925374ad508551d"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)