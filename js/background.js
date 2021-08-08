const aImages = ['0.jpg', '1.jpg', '2.jpg', '3.jpg'];

const idx = Math.floor(Math.random() * aImages.length)
const randImg = aImages[idx];

const bgImg = document.createElement('img');
bgImg.src = `img/${randImg}`;
bgImg.className = 'bgImg';

document.body.appendChild(bgImg);