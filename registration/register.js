// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { getFirestore, addDoc, collection} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADE_pHLRGB3BHDSXkQli7SRnaOvhHOOjM",
    authDomain: "incognito-spm2024.firebaseapp.com",
    projectId: "incognito-spm2024",
    storageBucket: "incognito-spm2024.appspot.com",
    messagingSenderId: "813523430254",
    appId: "1:813523430254:web:ea605e5a17e29468ad6f7f",
    measurementId: "G-51LSJCZXKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);

document.getElementById("register").addEventListener("click", async function (event) {
    console.log("Register button clicked");
    event.preventDefault(); // Prevent default form submission behavior
  
    var participantName = document.getElementById("participantName").value;
    var collegeName = document.getElementById("collegeName").value;
    var email = document.getElementById("email").value;
    var event = document.getElementById("event").value;
    var mobileno = document.getElementById("mobileno").value;
  
    await addDoc(collection(db, event), {
      participantName: participantName,
      collegeName: collegeName,
      email: email,
      mobileno: mobileno,
      event: event // Save selected event in Firestore
    });
  
    alert("Registered Successfully!");
  });