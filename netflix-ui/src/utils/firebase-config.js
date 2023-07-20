
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCq-zzDmrSoPhNH-FORcrji4edZXAngesM",
  authDomain: "react-netflix-clone-96418.firebaseapp.com",
  projectId: "react-netflix-clone-96418",
  storageBucket: "react-netflix-clone-96418.appspot.com",
  messagingSenderId: "54111346517",
  appId: "1:54111346517:web:f9d590e14a319ffae399dc",
  measurementId: "G-SJFTGQKYBT"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);