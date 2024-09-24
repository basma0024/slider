const imgSlider = document.querySelector('.img-slider');
const imgActive = document.querySelectorAll('.img-item');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let indexSlider = 0;
let index = 0;
let autoSlideInterval;

function updateActiveImage() {
    document.querySelector('.img-item.active').classList.remove('active');
    imgActive[index].classList.add('active');

    document.querySelector('.bg.active').classList.remove('active');
    document.querySelectorAll('.bg')[index].classList.add('active');
}

function showNextImage() {
    indexSlider++;
    index++;
    
    if (index > imgActive.length - 1) {
        index = 0;
    }
    
    imgSlider.style.transform = `rotate(${-90 * indexSlider}deg)`;
    updateActiveImage();
}

function showPrevImage() {
    indexSlider--;
    index--;
    
    if (index < 0) {
        index = imgActive.length - 1;
    }
    
    imgSlider.style.transform = `rotate(${-90 * indexSlider}deg)`;
    updateActiveImage();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(showNextImage, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

nextBtn.addEventListener('click', showNextImage);
prevBtn.addEventListener('click', showPrevImage);

imgSlider.addEventListener('mouseover', stopAutoSlide);
imgSlider.addEventListener('mouseout', startAutoSlide);

startAutoSlide();
