import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDujfCySX45Vugs49HVDFH091QW3zGy8E4",
  authDomain: "rhythmdev-f2352.firebaseapp.com",
  projectId: "rhythmdev-f2352",
  storageBucket: "rhythmdev-f2352.appspot.com",
  messagingSenderId: "624210498589",
  appId: "1:624210498589:web:3c16fc98bef07b743f22f4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
