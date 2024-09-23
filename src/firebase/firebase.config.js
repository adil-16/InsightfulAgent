import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbzlBPdDhfqcS_Nj5HtSW0-AbBj2PYTYg",
  authDomain: "insightfulagent.firebaseapp.com",
  projectId: "insightfulagent",
  storageBucket: "insightfulagent.appspot.com",
  messagingSenderId: "839136097137",
  appId: "1:839136097137:web:dfbaa23750cd92cd58fcd0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
