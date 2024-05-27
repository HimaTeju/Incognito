const title = document.querySelector('.title');
const title1 = document.querySelector('.title1');

document.addEventListener('scroll', function () {
    let value = window.scrollY;
    title.style.marginTop = value * 1.1 + 'px';
    title1.style.marginTop = value * 1.5 + 'px';
});

document.getElementById("menu").onclick = function () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

document.getElementById("close").onclick = function () {
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

document.addEventListener("DOMContentLoaded", function () {
    function adjustHomeHeight() {
        const homeSection = document.getElementById('home');
        const images = homeSection.querySelectorAll('img');
        let maxHeight = 0;

        images.forEach(img => {
            const style = window.getComputedStyle(img);
            if (style.display !== 'none' && img.complete) {
                if (img.height > maxHeight) {
                    maxHeight = img.height;
                }
            }
        });

        homeSection.style.height = maxHeight + 'px';
    }

    // Adjust height after images load
    const images = document.querySelectorAll('#home img');
    let imagesLoaded = 0;
    images.forEach(img => {
        if (img.complete) {
            imagesLoaded++;
        } else {
            img.onload = () => {
                imagesLoaded++;
                if (imagesLoaded === images.length) {
                    adjustHomeHeight();
                }
            };
        }
    });

    if (imagesLoaded === images.length) {
        adjustHomeHeight();
    }

    // Re-adjust height on window resize
    window.addEventListener('resize', adjustHomeHeight);
});

document.addEventListener('DOMContentLoaded', () => {
    const countdownDate = moment('2024-06-12'); // Set your target date here

    updateCountdown();
    function updateCountdown() {
        const now = moment();
        const remaining = moment.duration(countdownDate.diff(now));

        const days = remaining.days();
        console.log('Days:', days);
        const hours = remaining.hours();
        const minutes = remaining.minutes();
        const seconds = remaining.seconds();

        document.documentElement.style.setProperty('--timer-day', "'" + days + "'");
        document.documentElement.style.setProperty('--timer-hours', "'" + hours + "'");
        document.documentElement.style.setProperty('--timer-minutes', "'" + minutes + "'");
        document.documentElement.style.setProperty('--timer-seconds', "'" + seconds + "'");

        requestAnimationFrame(updateCountdown);
    }
});