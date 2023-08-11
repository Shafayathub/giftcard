// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAaV0ujF2ex4sJQ329VeEA4XEgqxvM98bQ',
  authDomain: 'a2gc-87c41.firebaseapp.com',
  projectId: 'a2gc-87c41',
  storageBucket: 'a2gc-87c41.appspot.com',
  messagingSenderId: '224729183935',
  appId: '1:224729183935:web:242964cb425ab4b1e0b80a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
