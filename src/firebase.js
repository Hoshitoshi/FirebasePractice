// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore}from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtsWd5-h6DHLd3J3lJbhL2VOp9qkcp7EE",
  authDomain: "twitter-clone-fe784.firebaseapp.com",
  projectId: "twitter-clone-fe784",
  storageBucket: "twitter-clone-fe784.appspot.com",
  messagingSenderId: "137770106100",
  appId: "1:137770106100:web:4c79e029a38ddee0c532a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

// import { initializeApp } from "firebase/app";
// import{ getFirestore } from "firebase/firestore"


// const firebaseConfig = {
//   apiKey: "AIzaSyADZ1cUcQ2wfAr3i8ODU2WqVt8yCPK0rBU",
//   authDomain: "twitter-clone-udemy-15968.firebaseapp.com",
//   projectId: "twitter-clone-udemy-15968",
//   storageBucket: "twitter-clone-udemy-15968.appspot.com",
//   messagingSenderId: "656054597745",
//   appId: "1:645126419179:web:c994c75e1172c8576544ae",
// };



// const app = initializeApp(firebaseConfig);
// const db =getFirestore(app);

// export default db;
