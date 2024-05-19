import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, addDoc, collection, getDocs} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

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

// Get a reference to the Firestore database service
const db = getFirestore(app);

// Reference to the collection
const querySnapshot = await getDocs(collection(db, "CODING"));

const tableBody = document.querySelector('#data-table tbody');
querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (data && data.participantName && data.event && data.collegeName) {
        const row = `<tr>
                        <td>${data.participantName}</td>
                        <td>${data.event}</td>
                        <td>${data.collegeName}</td>
                    </tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    } else {
        console.error("Invalid data structure:", data);
    }
});