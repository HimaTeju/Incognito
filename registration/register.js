// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, addDoc, collection} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Your web app's Firebase configuration
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
const db = getFirestore(app);

const eventLinks = {
    "IT QUIZ": "https://chat.whatsapp.com/JbopEWcJWmZH2l2TcED31l",
    "CODING": "https://chat.whatsapp.com/CQRTGH8MoUbFUTYgPhp1mQ",
    "IT DUMB CHARADES": "https://chat.whatsapp.com/IR0sPo7YRVUFLL5X3VpIbc",
    "LOGO DESIGN": "https://chat.whatsapp.com/EVns0E89Isl5zo00yHP9kn",
    "BGMI": "https://chat.whatsapp.com/DWI9Kyw9u0LF0vBX8BJNAU",
    "FIFA": "https://chat.whatsapp.com/IVr5cNbDOlC2htkKVIcqa5",
    "TALENT SHOW-SINGING": "https://chat.whatsapp.com/JJTb88vnYsAF7NbIrvFQct",
    "TALENT SHOW-DANCING": "https://chat.whatsapp.com/JJTb88vnYsAF7NbIrvFQct",
    "TALENT SHOW-FASHION SHOW": "https://chat.whatsapp.com/JJTb88vnYsAF7NbIrvFQct",
    "TREASURE HUNT": "https://chat.whatsapp.com/FKVqfYiAVq11VcAsgUmRfn",
    "VIDEOGRAPHY-PHOTOGRAPHY": "https://chat.whatsapp.com/CmmxnX1f2B45K7YOjVjIMg",
    "REELS": "https://chat.whatsapp.com/GdvBgr5EKP994BW6Z6Qftx",
};

// Get modal element
var modal = document.getElementById("thankYouModal");

// Get close button element
var span = document.getElementsByClassName("close")[0];

// Get thank you message element
var thankYouMessage = document.getElementById("thankYouMessage");

document.getElementById("register").addEventListener("click", async function (event) {
    console.log("Register button clicked");
    event.preventDefault(); // Prevent default form submission behavior

    var participantName = document.getElementById("participantName").value.trim();
            var collegeName = document.getElementById("collegeName").value.trim();
            var email = document.getElementById("email").value.trim();
            var eventSelected = document.getElementById("event").value;
            var mobileno = document.getElementById("mobileno").value.trim();

            // Clear previous error messages and styles
            document.querySelectorAll(".error-message").forEach(element => {
                element.textContent = "";
            });

            document.querySelectorAll(".input-error").forEach(element => {
                element.classList.remove("input-error");
            });

            var isValid = true;

            // Form validation
            if (!participantName) {
                document.getElementById("participantName").classList.add("input-error");
                document.getElementById("participantNameError").textContent = "Participant name is required.";
                isValid = false;
            }

            if (!collegeName) {
                document.getElementById("collegeName").classList.add("input-error");
                document.getElementById("collegeNameError").textContent = "College name is required.";
                isValid = false;
            }

            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailPattern.test(email)) {
                document.getElementById("email").classList.add("input-error");
                document.getElementById("emailError").textContent = "Please enter a valid email address.";
                isValid = false;
            }

            if (!eventSelected) {
                document.getElementById("event").classList.add("input-error");
                document.getElementById("eventError").textContent = "Please select an event.";
                isValid = false;
            }

            var mobilenoPattern = /^\d{10}$/; // Adjust pattern based on your requirements
            if (!mobileno || !mobilenoPattern.test(mobileno)) {
                document.getElementById("mobileno").classList.add("input-error");
                document.getElementById("mobilenoError").textContent = "Please enter a valid 10-digit mobile number.";
                isValid = false;
            }


    if (!isValid) {
        return; // Stop form submission if there are validation errors
    }


    try {
        await addDoc(collection(db, eventSelected), {
            participantName: participantName,
            collegeName: collegeName,
            email: email,
            mobileno: mobileno,
            event: eventSelected // Save selected event in Firestore
        });

        const whatsappLink = eventLinks[eventSelected];

        // Update the thank you message with the event name and WhatsApp link
        thankYouMessage.innerHTML = `
            Thank you for registering for the event - ${eventSelected}!<br>
            Join our WhatsApp group for more updates: <a href="${whatsappLink}" target="_blank">Join WhatsApp Group</a>
        `;
        // Show the modal
        modal.style.display = "block";
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error registering for the event. Please try again.");
    }
});

// Close the modal when the close button is clicked
span.onclick = function () {
    modal.style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}