let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Always add show-animate once section is reached, never remove it
        if (scrollY >= offset) {
            sec.classList.add('show-animate');
        }

        // Highlight the active nav link
        if (scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) activeLink.classList.add('active');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 100);

    // Close mobile menu only when scrolling (not on every scroll event if already closed)
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};