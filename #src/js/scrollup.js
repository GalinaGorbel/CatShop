const scrollUp = document.querySelector('.scrollup');

window.addEventListener('scroll', () => {
    if (pageYOffset > 450) {
        scrollUp.style.display = "block";
    } else {
        scrollUp.style.display = "none";
    }
});

scrollUp.addEventListener('click', () => {
    window.scrollTo(pageYOffset, 0);
})