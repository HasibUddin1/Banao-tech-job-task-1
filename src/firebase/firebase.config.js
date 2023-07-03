// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnKEEhNp5NIxT18tBUnRycSk6jROXyuw4",
  authDomain: "email-auth-job-task-1.firebaseapp.com",
  projectId: "email-auth-job-task-1",
  storageBucket: "email-auth-job-task-1.appspot.com",
  messagingSenderId: "430305982175",
  appId: "1:430305982175:web:32c72e64f43826fdec9b6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;