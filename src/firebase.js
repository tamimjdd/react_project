import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBxJ8MxzvaAxUXR4BkLWizLmenp2LzjZDA",
    authDomain: "tic-toc-clone-9eb43.firebaseapp.com",
    databaseURL: "https://tic-toc-clone-9eb43.firebaseio.com",
    projectId: "tic-toc-clone-9eb43",
    storageBucket: "tic-toc-clone-9eb43.appspot.com",
    messagingSenderId: "489778720266",
    appId: "1:489778720266:web:723669a2fadc7e159ab9f3",
    measurementId: "G-RVQ470CHRH"
  };

  const firebaseApp =
  firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();

  export default db;