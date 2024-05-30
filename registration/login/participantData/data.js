import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

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
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
    const eventDropdown = document.getElementById("Event-dropdown");
    const tableBody = document.querySelector("#data-table tbody");

    async function filterParticipants(event) {
        try {
            const querySnapshot = await getDocs(collection(db, event));
            tableBody.innerHTML = "";

            if (querySnapshot.empty) {
                const noDataRow = `<tr>
                                    <td colspan="4" style="text-align:center;">No data found</td>
                                </tr>`;
                tableBody.insertAdjacentHTML('beforeend', noDataRow);
            } else {
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

    eventDropdown.addEventListener("change", (e) => {
        filterParticipants(e.target.value);
    });

    document.getElementById('download-pdf').addEventListener('click', function () {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Get the current date and time
        const currentDateTime = new Date().toLocaleString();
        
        doc.autoTable({
            html: '#data-table',
            headStyles: { fillColor: [255, 0, 0] },
            margin: { top: 30 },
            didDrawPage: function (data) {
                doc.setFontSize(16); // Set font size for the title
                doc.text("Registered Participants", 14, 22);
                
                doc.setFontSize(10); // Set smaller font size for the date and time
                doc.text(currentDateTime, doc.internal.pageSize.getWidth() - 14, 22, { align: 'right' });
            }
        });

        doc.save('participants.pdf');
    });
});
