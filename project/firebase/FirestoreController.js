import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, PROJECT_REF } from "./firebaseConfig";
import { getAuth } from "firebase/auth";

const USERS_REF = "users";

export function useFire() {
  const [cities, setProject] = useState([]);

  useEffect(() => {
    const q = query(collection(db, PROJECT_REF));

    onSnapshot(q, (querySnapshot) => {
      setProject(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, []);

  return project;
}

export async function addCity(cityName, description, rating) {
  try {
    if (!cityName || !description || rating === null) {
      throw new Error("Missing required fields");
    }

    const cityRef = collection(db, PROJECT_REF);
    const docRef = await addDoc(cityRef, {
      name: cityName,
      description: description,
      rating: rating,
    });

    console.log("City added with ID:", docRef.id);
    return docRef;
  } catch (error) {
    console.error("Error adding city:", error);
    throw error;
  }
}

export function removeCity(id) {
  const cityDocRef = doc(db, USERS_REF, auth.currentUser.uid, PROJECT_REF, id);
  return deleteDoc(cityDocRef).catch((error) => console.log(error.message));
}

/* export function removeAllCities() {
  const userRef = collection(db, USERS_REF, auth.currentUser.uid, PROJECT_REF);
  getDocs(userRef)
    .then((docs) => docs.forEach((doc) => removeCity(doc.id)))
    .catch((error) => console.log(error.message));
}*/

export function updateCity(id, data) {
  const cityDocRef = doc(db, PROJECT_REF, id);
  return updateDoc(cityDocRef, data).catch((error) =>
    console.log(error.message)
  );
}
