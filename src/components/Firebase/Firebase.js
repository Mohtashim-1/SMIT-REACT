// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP_AnZUl4Vc7PgJJ3WgOPKWOkdxxbt1ag",
  authDomain: "smit-react-d8285.firebaseapp.com",
  projectId: "smit-react-d8285",
  storageBucket: "smit-react-d8285.appspot.com",
  messagingSenderId: "421377176905",
  appId: "1:421377176905:web:64837a40163e6f7e615698",
  measurementId: "G-FD8G21D4XQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Auth = getAuth();
export {app, Auth};