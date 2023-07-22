// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB-E_e-W7W1SLPJK88QALAEUvnqg79Ldf8',
  authDomain: 'giftcard-9ec73.firebaseapp.com',
  projectId: 'giftcard-9ec73',
  storageBucket: 'giftcard-9ec73.appspot.com',
  messagingSenderId: '591113619753',
  appId: '1:591113619753:web:42fc45ae526b4b16840f38',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
