import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAr-ajt-xJd888INblsVO-LU8NzRxvIJ-Y",
    authDomain: "e-clone-6df42.firebaseapp.com",
    projectId: "e-clone-6df42",
    storageBucket: "e-clone-6df42.appspot.com",
    messagingSenderId: "355684352202",
    appId: "1:355684352202:web:2546d310767737cd1cb433",
    measurementId: "G-CGS52G99KG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore(); 
  const auth = firebase.auth();

  export { db, auth };