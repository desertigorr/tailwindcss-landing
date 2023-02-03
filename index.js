window.onload = function() {
    document.querySelector('.starting-page').classList.add('active');
};


window.addEventListener('scroll', reveal)

function reveal() {
    const revealElements = document.querySelectorAll('.reveal')

    for (let i = 0; i < revealElements.length; i++) {

        let windowHeight = window.innerHeight
        let revealTop = revealElements[i].getBoundingClientRect().top
        let revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
            revealElements[i].classList.add('active')
        }
    }
}