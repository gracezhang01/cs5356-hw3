function fetchDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        const dogImage = document.getElementById('dog-image');
        dogImage.src = data.message; 
        dogImage.alt = 'Random Dog';
    })
}
document.getElementById('fetch-dog').addEventListener('click', fetchDog);
window.addEventListener('DOMContentLoaded', fetchDog);

const hero = document.getElementById('interactive-hero');

const skills = document.querySelectorAll('.skill');
const messageBox = document.getElementById('skill-message');

skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.classList.add('active');
    });

    skill.addEventListener('mouseleave', () => {
        skill.classList.remove('active');
    });

    skill.addEventListener('click', () => {
        const mouseEnterEvent = new MouseEvent('mouseenter', {bubbles: true, cancelable: true, view: window, clientX: 0, clientY: 0});
        skill.dispatchEvent(mouseEnterEvent);
    });
});

const aiResearcher = document.getElementById('roar-ai');
const externalLink = document.getElementById('external-link');

aiResearcher.addEventListener('click', () => {
    const clickEvent = new MouseEvent('click', {bubbles:false,cancelable: true,view: window});

    externalLink.dispatchEvent(clickEvent);
});
