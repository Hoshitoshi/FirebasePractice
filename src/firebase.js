import { initializeApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyADZ1cUcQ2wfAr3i8ODU2WqVt8yCPK0rBU",
  authDomain: "twitter-clone-udemy-15968.firebaseapp.com",
  projectId: "twitter-clone-udemy-15968",
  storageBucket: "twitter-clone-udemy-15968.appspot.com",
  messagingSenderId: "656054597745",
  appId: "1:656054597745:web:7ab1efaa64472f906683d0"
};



const app = initializeApp(firebaseConfig);
const db =getFirestore(app);

export default db;
