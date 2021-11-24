import firebase from "@firebase/app";

import "@firebase/database";
import "@firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCmwwYdDcL5gE_M-p_ChrE2pYOGSoGvmD8",
  authDomain: "entry-manager-dd8f9.firebaseapp.com",
  databaseURL: "https://entry-manager-dd8f9-default-rtdb.firebaseio.com",
  projectId: "entry-manager-dd8f9",
  storageBucket: "entry-manager-dd8f9.appspot.com",
  messagingSenderId: "415716802253",
  appId: "1:415716802253:web:38fcd8d8ad1942d4a3f384",
  measurementId: "G-CHE2K1G3L6",
});

const auth = firebase.auth();
const db = firebase.database();

auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export { auth, db };
