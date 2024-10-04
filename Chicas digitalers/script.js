const toggleButton = document.getElementById('dark-mode-toggle');
const argentinaButton = document.getElementById('argentina-btn');
const usaButton = document.getElementById('usa-btn');
const body = document.body;


function translateToEnglish() {
    document.getElementById('home-title').textContent = "Hi, I'm Camille Denoy";
    document.getElementById('home-subtitle').textContent = "Future Chica Programadora";
    document.getElementById('home-description').textContent = "I'm a new web developer who loves creating pages about what I like.";
    document.getElementById('contact-btn').textContent = "Contact me";
    document.getElementById('follow-text').textContent = "You can follow me on";
}


function translateToSpanish() {
    document.getElementById('home-title').textContent = "Hola, soy Camille Denoy";
    document.getElementById('home-subtitle').textContent = "Futura Chica Programadora";
    document.getElementById('home-description').textContent = "Soy una nueva desarrolladora web que le gusta mucho crear páginas sobre lo que me gusta.";
    document.getElementById('contact-btn').textContent = "Contáctame";
    document.getElementById('follow-text').textContent = "Podes seguirme en";
}


usaButton.addEventListener('click', () => {
    translateToEnglish();
});


argentinaButton.addEventListener('click', () => {
    translateToSpanish();
});


toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️'; 
    } else {
        toggleButton.textContent = '🌙'; 
    }
});
