// constants
const testimonialCount = 20;

// setup
const testimonials = document.getElementsByClassName("testimonial");
if (testimonials.length > 0) {
  let testimonialId = Math.floor(Math.random() * testimonialCount);
  const interval = window.setInterval(testimonialCallback, 7500);
  testimonials[testimonialId].style.opacity = 1;

  // loop
  function testimonialCallback() {
    testimonials[testimonialId].style.opacity = 0;
    testimonialId = (testimonialId + 1) % testimonials.length;
    testimonials[testimonialId].style.opacity = 1;
  }
}

