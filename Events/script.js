const title = document.querySelector('.title');

document.addEventListener('scroll', function() {
    let value = window.scrollY;
    title.style.marginTop = value * 1.1 + 'px';    
});
