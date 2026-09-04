
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBvyegw6Hz8KFuQ2kB0RHa3YAmJadOV_vg",
  authDomain: "no-name-b092b.firebaseapp.com",
  databaseURL: "https://no-name-b092b-default-rtdb.firebaseio.com/",
  projectId: "no-name-b092b",
  storageBucket: "no-name-b092b.firebasestorage.app",
  messagingSenderId: "751801208995",
  appId: "1:751801208995:web:9ae7b8fbae623fc75b6f16",
  measurementId: "G-N2H7H6V2PY"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);