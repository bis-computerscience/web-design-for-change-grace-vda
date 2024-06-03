const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const images = document.querySelectorAll('.slider-image');
let currentImage = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

prevButton.addEventListener('click', () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
});

nextButton.addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var formData = new FormData(this);
    
    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show the response in an alert
        this.reset(); // Reset the form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
