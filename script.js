const title = document.querySelector('.title');
const title1 = document.querySelector('.title1');

document.addEventListener('scroll', function() {
    let value = window.scrollY;
    title.style.marginTop = value * 1.1 + 'px';
    title1.style.marginTop = value * 1.5 + 'px';
});

document.getElementById("menu").onclick = function() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

document.getElementById("close").onclick = function() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

function showEvents(category) {

    let tabs = ['technical', 'gaming', 'non-technical']
    tabs.forEach(tab => {
        let selectedTab = document.querySelector(`.${tab}`);
        selectedTab.style.display = 'none';
    });

    let selectedTab = document.querySelector(`.${category}`);
    selectedTab.style.display = 'block';
}

// Show Technical Events by default on page load
document.addEventListener('DOMContentLoaded', () => {
    showEvents('technical');
});
