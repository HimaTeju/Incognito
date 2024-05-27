import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, getDocs} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

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
document.addEventListener("DOMContentLoaded", () => {
    const eventDropdown = document.getElementById("Event-dropdown");
    const tableBody = document.querySelector("#data-table tbody");

    async function filterParticipants(event) {
        try {
            // Fetch participants data from Firebase based on the selected event
            const querySnapshot = await getDocs(collection(db, event));

            // Clear existing table rows
            tableBody.innerHTML = "";

            if (querySnapshot.empty) {
                // If no data is found, display a "No data found" message
                const noDataRow = `<tr>
                                    <td colspan="4" style="text-align:center;">No data found</td>
                                </tr>`;
                tableBody.insertAdjacentHTML('beforeend', noDataRow);
            } else {
                // Iterate through query results and populate the table
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    if (data && data.participantName && data.event && data.collegeName && data.mobileno) {
                        const row = `<tr>
                                        <td>${data.participantName}</td>
                                        <td>${data.event}</td>
                                        <td>${data.collegeName}</td>
                                        <td>${data.mobileno}</td>
                                    </tr>`;
                        tableBody.insertAdjacentHTML('beforeend', row);
                    } else {
                        console.error("Invalid data structure:", data);
                    }
                });
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            const errorRow = `<tr>
                                <td colspan="4" style="text-align:center;">Error fetching data</td>
                            </tr>`;
            tableBody.insertAdjacentHTML('beforeend', errorRow);
        }
    }

    // Add an event listener to the dropdown to call filterParticipants when an event is selected
    eventDropdown.addEventListener("change", (e) => {
        filterParticipants(e.target.value);
    });
});
