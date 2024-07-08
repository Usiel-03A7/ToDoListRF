import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBHUciCs9gYsYtrpty4B3SflYiapS9Q8iI",
  authDomain: "todo-app-gab.firebaseapp.com",
  projectId: "todo-app-gab",
  storageBucket: "todo-app-gab.appspot.com",
  messagingSenderId: "33735474414",
  appId: "1:33735474414:web:eb82d20c45da2d0085c7ff"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)