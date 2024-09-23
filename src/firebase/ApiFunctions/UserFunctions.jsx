import { db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";

export const saveEmailToFirestore = async (email) => {
  try {
    const docRef = await addDoc(collection(db, "subscribedEmails"), {
      email,
      createdAt: new Date().toISOString(),
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
};
