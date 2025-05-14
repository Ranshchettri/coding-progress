// Automatic image slider functionality (optional improvement)
let slideIndex = 0;
function showSlides() {
    let slides = document.querySelectorAll('.slider .slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.opacity = 1;
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

showSlides(); // Call the function to start the slider
