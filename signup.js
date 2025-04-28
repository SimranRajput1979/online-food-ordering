document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.inputbox');
    const fullName = document.querySelector('.name');
    const email = document.querySelector('.field');
    const password = document.querySelector('.password');
    const terms = document.getElementById('terms');
    const submitButton = form.querySelector('button');

    // Add event listener for the form submit action
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission for validation

        // Clear previous error messages
        clearErrors();

        let isValid = true;

        // Validate Full Name
        if (fullName.value.trim() === '') {
            isValid = false;
            showError(fullName, 'Full Name is required');
        }

        // Validate Email
        if (email.value.trim() === '') {
            isValid = false;
            showError(email, 'Email is required');
        } else if (!isValidEmail(email.value.trim())) {
            isValid = false;
            showError(email, 'Please enter a valid email address');
        }

        // Validate Password
        if (password.value.trim() === '') {
            isValid = false;
            showError(password, 'Password is required');
        }

        // Validate Terms and Conditions
        if (!terms.checked) {
            isValid = false;
            alert('You must agree to the terms and conditions');
        }

        if (isValid) {
            // Show a confirmation message
            alert('Sign up successful! Welcome, ' + fullName.value.trim());
            // Optionally, you can reset the form after successful submission
            form.reset();
        }
    });

    // Function to show error message under the field
    function showError(field, message) {
        const error = document.createElement('small');
        error.classList.add('error');
        error.textContent = message;
        field.classList.add('error-border');
        field.parentElement.appendChild(error);
    }

    // Function to clear all error messages
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error');
        errorMessages.forEach((message) => message.remove());

        const errorBorders = document.querySelectorAll('.error-border');
        errorBorders.forEach((border) => border.classList.remove('error-border'));
    }

    // Simple Email Validation Function
    function isValidEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
});
