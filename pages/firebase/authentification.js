import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInAnonymously,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import firebase from "./firebase";
export const auth = getAuth(firebase);
export const emailpasswordAuth = () => signInEmailAndPassword(auth , email, password);
export const signInWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider());
export const signInAnonymous = () => signInAnonymously(auth);
export const logOut = () => signOut(auth);
