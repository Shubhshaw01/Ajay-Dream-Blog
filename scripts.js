// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animate blog entries using Intersection Observer
const blogEntries = document.querySelectorAll('.blog-post');

const observerOptions = {
  rootMargin: '-50px', // Trigger animation 50px before element enters the viewport
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate'); // Add class to trigger animation
    } else {
      entry.target.classList.remove('animate'); // Remove class to reset animation
    }
  });
}, observerOptions);

blogEntries.forEach(entry => {
  observer.observe(entry);
});
