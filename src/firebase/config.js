import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD9h8S8cZznLQ8Dr52UgwzPPNCRZ-2bGvs",
  authDomain: "bestmemes-d9abd.firebaseapp.com",
  databaseURL: "https://bestmemes-d9abd.firebaseio.com",
  projectId: "bestmemes-d9abd",
  storageBucket: "bestmemes-d9abd.appspot.com",
  messagingSenderId: "952776747855",
  appId: "1:952776747855:web:f5cb0cebb9075e5d5c333a",
  measurementId: "G-5J6L41ME9S"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
