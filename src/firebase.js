import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBQJRsMoDct9p2hinf8mwV46dihNDapi8c",
  authDomain: "trackurl-27aa1.firebaseapp.com",
  projectId: "trackurl-27aa1",
  storageBucket: "trackurl-27aa1.firebasestorage.app",
  messagingSenderId: "117340784029",
  appId: "1:117340784029:web:4b5fb63a5a650f89fa1b74",
  measurementId: "G-3057D8J2PF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth = getAuth(app);

export default app;
