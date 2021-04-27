import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAK7ytkIbEdIUhjgnn3XLAeMfShPKQX6M8",
    authDomain: "barter-257e9.firebaseapp.com",
    projectId: "barter-257e9",
    storageBucket: "barter-257e9.appspot.com",
    messagingSenderId: "561629919614",
    appId: "1:561629919614:web:44eb29ea937db600f95b2f",
    measurementId: "G-024WLSEPSX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();