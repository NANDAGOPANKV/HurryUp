import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiYOEaI8mU9McWY3DaTuK8jRtsly3A0vY",
  authDomain: "hurryup-e5cc6.firebaseapp.com",
  projectId: "hurryup-e5cc6",
  storageBucket: "hurryup-e5cc6.appspot.com",
  messagingSenderId: "381269246619",
  appId: "1:381269246619:web:e497a838e9614aeb53bc3e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
