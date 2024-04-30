const title = document.querySelector('.title');
const logo = document.querySelector('.logo');

document.addEventListener('scroll', function() {
    let value = window.scrollY;
    title.style.marginTop = value * 1.1 + 'px';
    logo.style.marginBottom = -value * 0.6 + 'px'; // Adjust the multiplier to control the parallax effect
});
