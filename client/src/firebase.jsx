// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcsznsnwB8JjG_kDqOLPR9GPXmFjg_Iqc",
  authDomain: "doctorlink-67689.firebaseapp.com",
  projectId: "doctorlink-67689",
  storageBucket: "doctorlink-67689.appspot.com",
  messagingSenderId: "693758654033",
  appId: "1:693758654033:web:6c77d81b0d78aa34dc2a70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()
export {provider}

const analytics = getAnalytics(app);
export default app;