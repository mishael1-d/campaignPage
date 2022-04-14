// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPyf67TzINzrtZ72AEA1wssWCtYUPR4T8",
  authDomain: "flytant-campaign-page.firebaseapp.com",
  projectId: "flytant-campaign-page",
  storageBucket: "flytant-campaign-page.appspot.com",
  messagingSenderId: "282481174028",
  appId: "1:282481174028:web:c120e36fc061bc9c66b029",
};

const app = initializeApp(firebaseConfig);
export const firebase = app;
export const db = getFirestore(app);
export const storage = getStorage(app);
