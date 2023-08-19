var currentImageIndex = 0;
var images = document.querySelectorAll('.carousel-image');

function changeImage(step) {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + step + images.length) % images.length;
  images[currentImageIndex].classList.add('active');
}

// Show the first image initially
images[0].classList.add('active');

function openPopup(element) {
    var content = element.innerHTML;
    document.getElementById("popup-content").innerHTML = content;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
