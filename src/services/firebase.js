// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBe8dI3-fX3SvoAsPGuvHF5R_EghrCKFvM",
    authDomain: "chat-taller-5efa9.firebaseapp.com",
    projectId: "chat-taller-5efa9",
    storageBucket: "chat-taller-5efa9.appspot.com",
    messagingSenderId: "122393801951",
    appId: "1:122393801951:web:c3342f3faabc1b47b9656a",
    measurementId: "G-H7T2VMPJ84"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();
