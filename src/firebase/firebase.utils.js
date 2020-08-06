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

export const createProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log(`Error in creating user: ${err}`);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
