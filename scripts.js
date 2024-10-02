
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.carousel-prev').addEventListener('click', () => {
    changeSlide(-1);
});

document.querySelector('.carousel-next').addEventListener('click', () => {
    changeSlide(1);
});

function changeSlide(direction) {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + totalItems) % totalItems;
    items[currentIndex].classList.add('active');
}

