import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyASGzCe-IJh3rsGs7gGfSvySOtXFuJgM-c",
  authDomain: "suit-up-d4dbf.firebaseapp.com",
  databaseURL: "https://suit-up-d4dbf.firebaseio.com",
  projectId: "suit-up-d4dbf",
  storageBucket: "suit-up-d4dbf.appspot.com",
  messagingSenderId: "652437448566",
  appId: "1:652437448566:web:45ca3d916d022732b33c57",
  measurementId: "G-Q4VJ0SH5KL",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
