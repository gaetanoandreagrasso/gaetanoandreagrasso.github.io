const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();


    const nome = document.getElementById('nome').value;
    alert(`Grazie ${nome}! Questa è una simulazione. Implementeremo il backend PHP a breve.`);
    
  
    contactForm.reset();
});