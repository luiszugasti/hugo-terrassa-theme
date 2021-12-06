// constants
const testimonialCount = 20;

// setup
const testimonials = document.getElementsByClassName("testimonial");
let testimonialId = Math.floor(Math.random() * testimonialCount);
const interval = window.setInterval(callback, 7500);
testimonials[testimonialId].style.opacity = 1;

// loop
function callback() {
  testimonials[testimonialId].style.opacity = 0;
  testimonialId = (testimonialId + 1) % testimonials.length;
  testimonials[testimonialId].style.opacity = 1;
  console.log(testimonialId);
}
