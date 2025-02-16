let currentSlide = 0;
let currentTestimonial = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonials .carousel-item');
    if (index >= testimonials.length) {
        currentTestimonial = 0;
    } else if (index < 0) {
        currentTestimonial = testimonials.length - 1;
    } else {
        currentTestimonial = index;
    }
    const offset = -currentTestimonial * 100;
    document.querySelector('.testimonials .carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextTestimonial() {
    showTestimonial(currentTestimonial + 1);
}

function prevTestimonial() {
    showTestimonial(currentTestimonial - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    showTestimonial(currentTestimonial);
});