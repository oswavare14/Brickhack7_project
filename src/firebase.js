import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    piKey: "AIzaSyBpSvEOYIygc5Ty01gNBXD1qjtU7zRFE2Y",
    authDomain: "brickhack7-project.firebaseapp.com",
    projectId: "brickhack7-project",
    storageBucket: "brickhack7-project.appspot.com",
    messagingSenderId: "365492046231",
    appId: "1:365492046231:web:5efc5457a38c447ecbdcd2"
  };

  const fb = firebase.initializeApp(firebaseConfig)

  export default fb;
  export const db = firebase.firestore(fb);