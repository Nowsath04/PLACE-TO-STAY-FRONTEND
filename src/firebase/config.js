// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyvn38HpfdqHMLiWohH1tGJm5UYL4e_u8",
  authDomain: "travel-map-376405.firebaseapp.com",
  projectId: "travel-map-376405",
  storageBucket: "travel-map-376405.appspot.com",
  messagingSenderId: "20388340369",
  appId: "1:20388340369:web:97031ed565e0c37e855530"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();