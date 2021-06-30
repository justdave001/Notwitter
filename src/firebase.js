import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAsb5L547igqjs1681ihn3MChZlWSh6mCI",
    authDomain: "notwitter-e4fa5.firebaseapp.com",
    projectId: "notwitter-e4fa5",
    storageBucket: "notwitter-e4fa5.appspot.com",
    messagingSenderId: "798933658581",
    appId: "1:798933658581:web:08b189b698bca54403eb5c",
    measurementId: "G-BS60SJFZRT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;