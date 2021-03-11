import firebase from "firebase";



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
