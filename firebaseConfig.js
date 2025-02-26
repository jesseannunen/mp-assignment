import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQU_2EFa_cfmkK1HpTGFQSamU3MlhQevQ",
  authDomain: "project-da649.firebaseapp.com",
  projectId: "project-da649",
  storageBucket: "project-da649.firebasestorage.app",
  messagingSenderId: "345900048395",
  appId: "1:345900048395:web:4c4df4ba853faa327b270e",
};

// Alustetaan Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
