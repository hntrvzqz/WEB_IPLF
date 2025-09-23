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

/*
bien, en cuanto al javascript. quiero implementar esta funcion interseccionObserver, para que cuando aparescan los parravos en el viewport, puedan aparecer con la propuedad display.block, pero cuando no esten que sean display.none para que  ocurra el efecto de que aparece y desaparece. 

*/


