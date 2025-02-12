// Data
const categories = [
    "Array Manipulation",
    "Basics",
    "Date And Time",
    "Dom Manipulation",
    "Function Utilities",
    "Local Storage",
    "Number Formatting",
    "Object Manipulation",
    "String Manipulation"
];

const snippets = [
    "Bash Scripting",
    "Nmap",
    "Linux",
    "Wireshark",
    "DDoS Attack"
];

// Populate categories
const categoriesContainer = document.querySelector('.categories');
categories.forEach(category => {
    const button = document.createElement('button');
    button.className = 'category-button';
    button.textContent = category;
    categoriesContainer.appendChild(button);
});

// Populate snippets
const snippetsGrid = document.querySelector('.snippets-grid');
snippets.forEach(snippet => {
    const div = document.createElement('div');
    div.className = 'snippet-card';
    div.innerHTML = `
        <div class="snippet-icon"><></div>
        <h4>${snippet}</h4>
    `;
    snippetsGrid.appendChild(div);
});

// Add click handlers for category buttons
document.querySelectorAll('.category-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        document.querySelectorAll('.category-button').forEach(btn => {
            btn.classList.remove('active');
        });
        // Add active class to clicked button
        button.classList.add('active');
    });
});


// Function To Open New Tab For Useful Tools.

function newTab() {
    window.openNewTab("https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/", "_blank");
}

document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('disclaimerPopup');
    const acceptButton = document.getElementById('acceptButton');

    function showPopup() {
        popup.classList.remove('hidden');
    }

    function hidePopup() {
        popup.classList.add('hidden');
        localStorage.setItem('hasSeenDisclaimer', 'true');
    }

    if (!localStorage.getItem('hasSeenDisclaimer')) {
        showPopup();
    }

    acceptButton.addEventListener('click', hidePopup);
});