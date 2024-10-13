document.addEventListener('DOMContentLoaded', function () {
    // Função de scroll suave
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animação para aparecer as seções ao rolar a página
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };
    
    const sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, options);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Animação para hover nos botões e outros elementos
    const serviceBoxes = document.querySelectorAll('.service-box, .team-box');

    serviceBoxes.forEach(box => {
        box.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        box.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s ease';
        });
    });
});