const title = document.querySelector('.title');
const title1 = document.querySelector('.title1');

document.addEventListener('scroll', function() {
    let value = window.scrollY;
    title.style.marginTop = value * 1.1 + 'px';
    title1.style.marginTop = value * 1.5 + 'px';
    
});
