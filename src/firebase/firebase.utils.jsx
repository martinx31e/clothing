import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCQKHdBMjcGPw107_JV2UmvuiQwDlXembM",
  authDomain: "crown-db-4e35e.firebaseapp.com",
  databaseURL: "https://crown-db-4e35e.firebaseio.com",
  projectId: "crown-db-4e35e",
  storageBucket: "",
  messagingSenderId: "778041310213",
  appId: "1:778041310213:web:2fbac6d314ef6059"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
