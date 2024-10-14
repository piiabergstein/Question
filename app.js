const btnHamburger = document.querySelector('.hamburger');
const menuPanel = document.querySelector('.menu-panel');
const menuLinks = document.querySelectorAll('.menu-panel a');
const frameImage = document.querySelector('#frame');
const images = ['Cat.png', '12.jpg', '122.jpg','Dog.png', '12.jpg', 'Dog.png'];

let currentImageIndex = 0;

frameImage.addEventListener('click', ()=> {
    currentImageIndex++;

    if(currentImageIndex >= 5) {
        currentImageIndex = 0;
    }

    frameImage.src = 'images/' + images[currentImageIndex];

});

btnHamburger.addEventListener('click', ()=> {
    menuPanel.classList.toggle('active');
});


document.addEventListener('click', (event) => {
    if(!menuPanel.contains(event.target) && !btnHamburger.contains(event.target)) {
        menuPanel.classList.remove('active');
    } 

});

menuLinks.forEach((link)=>{
    
    link.addEventListener('click', ()=> {
        menuPanel.classList.remove('active');
    });

});