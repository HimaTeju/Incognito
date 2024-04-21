document.addEventListener('DOMContentLoaded', function() {
    // Check if the scroll-progress element exists in the document
    const scrollProgress = document.getElementById('scroll-progress');
    if (!scrollProgress) {
        console.error('Error: Scroll progress element not found.');
        return;
    }

    // Listen for scroll events
    window.addEventListener('scroll', function() {
        // Calculate scroll progress as a percentage
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY;
        const progress = (scrollTop / scrollHeight) * 100;

        // Update the height of the progress indicator based on scroll progress
        scrollProgress.style.height = progress + '%';
    });
});
