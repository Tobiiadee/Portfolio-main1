/** @format */

// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "project1-0-83d5d.firebaseapp.com",
  databaseURL: "https://project1-0-83d5d-default-rtdb.firebaseio.com",
  projectId: "project1-0-83d5d",
  storageBucket: "project1-0-83d5d.appspot.com",
  messagingSenderId: "769447348032",
  appId: "1:769447348032:web:06c5ae45c1c862ed491ca5",
  measurementId: "G-CXKXSVQ7TQ",
};

// Initialize Firebase
// const app = getApps().length ? getApps() : initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getDatabase(app);
const auth = getAuth();

export { app, auth, database };
