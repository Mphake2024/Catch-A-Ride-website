// Simple contact form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if(name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
