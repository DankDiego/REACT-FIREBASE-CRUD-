import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDq4HL4Xa99b8dmML03oK0sLTB-uB5ZCa4",
  authDomain: "react-crud-firebase-964de.firebaseapp.com",
  projectId: "react-crud-firebase-964de",
  storageBucket: "react-crud-firebase-964de.appspot.com",
  messagingSenderId: "1024405791018",
  appId: "1:1024405791018:web:5a4a2b6bdc260db4e27e53"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)