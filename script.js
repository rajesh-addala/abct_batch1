const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

// Check for saved theme in localStorage and apply it
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.classList.add(savedTheme);
} else {
    // Default to light mode if no theme is saved
    body.classList.add("light-mode");
}

themeSwitch.addEventListener("click", function() {
    if (body.classList.contains("dark-mode")) {
        // Switch to light mode and save preference
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        localStorage.setItem("theme", "light-mode");
    } else {
        // Switch to dark mode and save preference
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark-mode");
    }
});



function updateHeading() {
    const heading = document.querySelector('.abct-heading');

    // Check if the screen width is less than 768px
    if (window.innerWidth < 768) {
        heading.textContent = "ABCT Skill Development Program";
    } else {
        // Restore the full heading for larger screens
        heading.textContent = "Amaravathi Bhavani Charitable Trust Skill Development Program";
    }
}

// Call the function when the window is resized or on load
window.addEventListener('resize', updateHeading);
window.addEventListener('load', updateHeading);

// Function to update and display the visitor count
/*function updateVisitorCount() {
    // Check if visitor count exists in local storage
    let count = localStorage.getItem('visitorCount');

    // If count doesn't exist, set it to 0
    if (count === null) {
        count = 0;
    }

    // Convert the count to a number and increment it
    count = parseInt(count) + 1;

    // Update the count in local storage
    localStorage.setItem('visitorCount', count);

    // Display the updated count
    document.getElementById('visitor-count').innerText = count;
}

// Call the function to update visitor count when the page loads
updateVisitorCount();*/
