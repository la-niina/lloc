import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6wEtRBvcmVu8H8i1Baj2xRDob_NN-HVE",
  authDomain: "lloc-db.firebaseapp.com",
  projectId: "lloc-db",
  storageBucket: "lloc-db.appspot.com",
  messagingSenderId: "1034255531446",
  appId: "1:1034255531446:web:928a92bf15cfb04741d517",
  measurementId: "G-31EC6402HV"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;