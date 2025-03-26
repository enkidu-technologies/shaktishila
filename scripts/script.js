function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

const images = [
  './img/img1.jpg',
  './img/img2.jpg',
  './img/img3.jpg',
  './img/img4.jpg'
];

let currentImageIndex = 0;
const heroElement = document.querySelector('.hero');

function changeBackground() {
  heroElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Initial background set
changeBackground();

// Change background every 2 seconds
setInterval(changeBackground, 5000);