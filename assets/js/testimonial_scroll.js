// setup
const testimonials = document.getElementsByClassName("testimonial");
let testimonialId = 0;
const interval = window.setInterval(callback, 5000);

// loop
function callback() {
  testimonials[testimonialId].style.opacity = 0;
  testimonialId = (testimonialId + 1) % testimonials.length;
  testimonials[testimonialId].style.opacity = 1;
  console.log(testimonialId);
}
