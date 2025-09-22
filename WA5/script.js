const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    function toggleMenu() {
        const isShown = navMenu.classList.toggle('show');
        navToggle.setAttribute('aria-expanded', isShown);
    }

    navToggle.addEventListener('click', toggleMenu);

    navToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });
} else {
    console.log("navToggle or navMenu not found!");
}
