document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".carousel-section");
    let currentIndex = 0;

    const showSection = index => {
        sections.forEach((section, idx) => {
            section.classList.toggle("active", idx === index);
        });
    };

    const nextSection = () => {
        currentIndex = (currentIndex + 1) % sections.length;
        showSection(currentIndex);
    };

    const previousSection = () => {
        currentIndex = (currentIndex - 1 + sections.length) % sections.length;
        showSection(currentIndex);
    };

    document.querySelector(".right-arrow").addEventListener("click", nextSection);
    document.querySelector(".left-arrow").addEventListener("click", previousSection);

    showSection(currentIndex); // Initialize
});
