// Form validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const phonePattern = /^[0-9]{10}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!phonePattern.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        event.preventDefault();
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
});

// Smooth Scroll Effect
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: '
