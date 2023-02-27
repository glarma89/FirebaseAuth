// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMqNyuEiywmL30CXECnvKLj86wdrF9_Uw",
  authDomain: "fir-auth-db630.firebaseapp.com",
  projectId: "fir-auth-db630",
  storageBucket: "fir-auth-db630.appspot.com",
  messagingSenderId: "608034211880",
  appId: "1:608034211880:web:5995eab688e1c6c3fd8d1d"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth();

export { auth };
