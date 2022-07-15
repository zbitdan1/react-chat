// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO2WuW0iUgyYVwfjRXgGYyqyMxAXqHVhQ",
  authDomain: "react-messanger-4346f.firebaseapp.com",
  databaseURL: "http://react-messanger-4346f.firebaseio.com",
  projectId: "react-messanger-4346f",
  storageBucket: "react-messanger-4346f.appspot.com",
  messagingSenderId: "775478724788",
  appId: "1:775478724788:web:2237eb20acdc5e925e6fe1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export { auth, db, storage };
