// Import the functions you need from the SDKs you need
import { initializeApp ,getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZqBdknlDb2oPm5Uj3w1lyfY3ARjmZfAY",
  authDomain: "assignment-10-84c8f.firebaseapp.com",
  projectId: "assignment-10-84c8f",
  storageBucket: "assignment-10-84c8f.appspot.com",
  messagingSenderId: "178260067601",
  appId: "1:178260067601:web:04306c70327e7fabc238b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;