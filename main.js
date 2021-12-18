var boxElement = document.querySelector('.intro');

var led = document.querySelector(".texts");

var slide = document.querySelector('.slide-image');

setTimeout(() => {
    slide.style.display = 'block';
}, 3000);

setInterval(() => {
    led.classList.toggle("doimau");

}, 1000);

setTimeout(() => {
    boxElement.classList.add('an');
}, 1000);

