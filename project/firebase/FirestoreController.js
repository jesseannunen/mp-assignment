import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react-native-svg";
import { db, PROJECT_REF } from "./firebaseConfig";

export function useFire() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const q = query(collection(db, PROJECT_REF), orderBy(""));

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
