const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        alert(`Grazie ${nome}! Questa è una simulazione. Implementeremo il backend PHP a breve.`);
        contactForm.reset();
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
    }, { 
    threshold: 0.3
});

const hiddenElements = document.querySelectorAll('.reveal');

hiddenElements.forEach((el) => observer.observe(el));
