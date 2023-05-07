import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdLuXQk7BLepjbS6DU5HDkxJERUnemMr4",
  authDomain: "myreactnative1983.firebaseapp.com",
  projectId: "myreactnative1983",
  storageBucket: "myreactnative1983.appspot.com",
  messagingSenderId: "605705676495",
  appId: "1:605705676495:web:46ffa74531b8ae446179ba",
  measurementId: "G-PXLEL7FPG1"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);