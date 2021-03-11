import firebase from "firebase";

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STRAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_MEASUREMENT_ID,
  REACT_APP_FIREBASE_APP_ID,
} = process.env;

const firebaseConfig = {
  apiKey:"AIzaSyBfpFzDoBPps3Q11bDAMhq9kZ0WURwCfJo",
  authDomain: "task-man-web.firebaseapp.com",
  projectId: "task-man-web",
  storageBucket: "task-man-web.appspot.com",
  messagingSenderId: "190716425692",
  measurementId: "G-D0KYJ46DZV",
  appId:"1:190716425692:web:280c6d0597c4a0f4a00b19",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
export const db = firebase.firestore();
