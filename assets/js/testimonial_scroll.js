// setup
const testimonials = document.getElementsByClassName("testimonial");
let currentTestimonial = Math.floor(Math.random() * testimonials.length);
testimonials[currentTestimonial].style.opacity = 1;
testimonials[currentTestimonial].style.zIndex = 90;
const callBackFunction = window.setInterval(testimonialCallback, 6500);

// loop
function testimonialCallback() {
  testimonials[currentTestimonial].style.opacity = 0;
  testimonials[currentTestimonial].style.zIndex = 0;
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  testimonials[currentTestimonial].style.opacity = 1;
  testimonials[currentTestimonial].style.zIndex = 90;
}
