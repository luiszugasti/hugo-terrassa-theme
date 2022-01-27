// setup
const testimonials = document.getElementsByClassName("testimonial");
let currentTestimonial = Math.floor(Math.random() * testimonials.length);
testimonials[currentTestimonial].style.opacity = 1;
const callBackFunction = window.setInterval(testimonialCallback, 6500);

// loop
function testimonialCallback() {
  testimonials[currentTestimonial].style.opacity = 0;
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].style.opacity = 1;
}
