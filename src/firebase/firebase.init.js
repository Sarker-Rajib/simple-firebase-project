// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJVX2qFdsyknAt_9dys_O164sdkNnWRSs",
  authDomain: "my-first-project-1cb7e.firebaseapp.com",
  projectId: "my-first-project-1cb7e",
  storageBucket: "my-first-project-1cb7e.appspot.com",
  messagingSenderId: "991804206127",
  appId: "1:991804206127:web:a76553c8fd18a3820faada",
  measurementId: "G-RMHKW0M0RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;