import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import firebase from "./firebase";
export const auth = getAuth(firebase);
const emailpasswordAuth = () => signInWithEmailAndPassword(auth , email, password);
const logOut = () => signOut(auth);

export{ emailpasswordAuth, logOut }
