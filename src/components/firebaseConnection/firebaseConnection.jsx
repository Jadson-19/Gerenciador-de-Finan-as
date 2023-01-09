// import { initializeApp }  from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCCS9d-VW0rg7tF97l9F0dgp11xwF9taWQ",
  authDomain: "my-data-base-19.firebaseapp.com",
  projectId: "my-data-base-19",
  storageBucket: "my-data-base-19.appspot.com",
  messagingSenderId: "128822585708",
  appId: "1:128822585708:web:5cfd12a49a4c77896eab49",
  measurementId: "G-1KDCCE90ZY",
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
