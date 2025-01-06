// script.js

document.addEventListener("DOMContentLoaded", () => {
    const getStartedButton = document.getElementById("get-started");

    getStartedButton.addEventListener("click", () => {
        alert("Welcome to QuickSnippet! Let's get started.");
    });

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
