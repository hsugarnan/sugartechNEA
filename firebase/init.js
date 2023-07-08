// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import {} from 'firebase/storage'

import { getAuth} from "firebase/auth";//lets me use firebase authentication apis
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4kTW7I4rbx8teevJ2LhlPoh451GkRYDg",
  authDomain: "react-test-4c131.firebaseapp.com",
  projectId: "react-test-4c131",
  storageBucket: "react-test-4c131.appspot.com",
  messagingSenderId: "376808500403",
  appId: "1:376808500403:web:72db170ba9cda8b8de94c6",
  measurementId: "G-4WMQ9KFSSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const  auth = getAuth();
const storage = getStorage(app);//so storage can be accessed in different files


export { auth, storage}