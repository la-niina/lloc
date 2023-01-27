import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import firebase from "./firebase";
const auth = getAuth(firebase);
const emailpasswordAuth = () =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
const logOut = () => signOut(auth);
// eslint-disable-next-line import/no-anonymous-default-export
export default{ emailpasswordAuth, logOut };
