import { initializeApp } from "firebase/app";

import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPzA5N2mqERPRqLfEC8oBIPIzQ6x5G5Zw",
  authDomain: "fireauthreact-f7b46.firebaseapp.com",
  projectId: "fireauthreact-f7b46",
  storageBucket: "fireauthreact-f7b46.appspot.com",
  messagingSenderId: "550619601368",
  appId: "1:550619601368:web:b287b4916f5a5c47fcbaad",
  measurementId: "G-72VPGMBBR9"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth();
export const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence)
export default app;