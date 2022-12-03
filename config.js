import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyC-YfGuYtSKa7-V-5zQ9eXh1hflRF4Yu3I",
  authDomain: "e-ride-42104.firebaseapp.com",
  projectId: "e-ride-42104",
  storageBucket: "e-ride-42104.appspot.com",
  messagingSenderId: "1046247911180",
  appId: "1:1046247911180:web:c0a884eeb379f55cfd2329"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
