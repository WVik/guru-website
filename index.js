// var currentImageIndex = 0;
// var images = document.querySelectorAll('.carousel-image');

// function changeImage(step) {
//   images[currentImageIndex].classList.remove('active');
//   currentImageIndex = (currentImageIndex + step + images.length) % images.length;
//   images[currentImageIndex].classList.add('active');
// }

// // Show the first image initially
// images[0].classList.add('active');

function openPopup(element) {
    var content = element.innerHTML;
    document.getElementById("popup-content").innerHTML = content;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.getElementById('openModal').addEventListener('click', function() {
  fetch('contactModal.html')
  .then(response => response.text())
  .then(content => {
      // Add modal content to the body
      document.body.innerHTML += content;

      // Use Bootstrap's modal function to display it
      $('#contactModal').modal('show');

      // Add an event listener to remove the modal from the DOM after it's hidden
      $('#contactModal').on('hidden.bs.modal', function (e) {
          document.getElementById('contactModal').remove();
      });
  })
  .catch(error => {
      console.error('Error fetching the modal content:', error);
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});