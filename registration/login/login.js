import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

document.getElementById('togglePassword').addEventListener('click', function () {
    var passwordField = document.getElementById('password');
    var passwordFieldType = passwordField.getAttribute('type');
    if (passwordFieldType === 'password') {
        passwordField.setAttribute('type', 'text');
        this.textContent = 'visibility_off';
    } else {
        passwordField.setAttribute('type', 'password');
        this.textContent = 'visibility';
    }
});

const firebaseConfig = {
    apiKey: "AIzaSyADE_pHLRGB3BHDSXkQli7SRnaOvhHOOjM",
    authDomain: "incognito-spm2024.firebaseapp.com",
    projectId: "incognito-spm2024",
    storageBucket: "incognito-spm2024.appspot.com",
    messagingSenderId: "813523430254",
    appId: "1:813523430254:web:ea605e5a17e29468ad6f7f",
    measurementId: "G-51LSJCZXKG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('login').addEventListener('click', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href = "participantData/data.html";
            console.log(userCredential)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message);
        });
});