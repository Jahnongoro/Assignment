// This file handles the interactivity specific to the contact form, including form validation and submission logic.

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const values = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        const errors = validateForm(values);
        if (errors.length) {
            feedback.innerHTML = errors.map(error => `<div class="error">${error}</div>`).join('');
            return;
        }

        feedback.innerHTML = '<div class="success">Your message has been sent!</div>';
        contactForm.reset();
    });

    function validateForm(values) {
        const errors = [];
        if (!values.name || values.name.trim().length < 2) {
            errors.push('Name must be at least 2 characters long.');
        }
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(values.email || '')) {
            errors.push('Enter a valid email address.');
        }
        if (!values.message || values.message.trim().length < 10) {
            errors.push('Message must be at least 10 characters long.');
        }
        return errors;
    }
});