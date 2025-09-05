const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navEl.classList.add('navbar-scrolled');
   }
});

const texto = document.querySelector('p');

window.addEventListener('scroll', () => {
    if (window.IntersectionObserver >= 5) {
        console.log("apareci mirame")
    }
})


