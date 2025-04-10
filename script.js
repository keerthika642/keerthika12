document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Add novalidate attribute to disable default browser validation bubbles
    form.setAttribute('novalidate', '');

    form.addEventListener('submit', (event) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        let isValid = true;

        // --- Reset previous states ---
        // Clear previous error messages
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        // Remove previous invalid classes
        nameInput.classList.remove('invalid');
        emailInput.classList.remove('invalid');
        messageInput.classList.remove('invalid');

        // --- Validation Checks ---

        // Name validation (required)
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            nameInput.classList.add('invalid');
            isValid = false;
        }

        // Email validation (required and format)
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        if (emailValue === '') {
            emailError.textContent = 'Email is required.';
            emailInput.classList.add('invalid');
            isValid = false;
        } else if (!emailPattern.test(emailValue)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailInput.classList.add('invalid');
            isValid = false;
        }

        // Message validation (required)
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required.';
            messageInput.classList.add('invalid');
            isValid = false;
        }

        // --- Submit if valid ---
        if (isValid) {
            console.log('Form submitted successfully!');
            alert('Thank you for your message!');
            // Here you would typically send the data to a server using fetch() or similar
            // Example:
            // const formData = new FormData(form);
            // fetch('/your-server-endpoint', { method: 'POST', body: formData })
            //   .then(response => response.json())
            //   .then(data => console.log(data))
            //   .catch(error => console.error('Error:', error));

            form.reset(); // Optional: Clear the form after successful submission
        } else {
            console.log('Form has validation errors.');
        }
    });
});