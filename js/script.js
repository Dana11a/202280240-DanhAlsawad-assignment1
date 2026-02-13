/* 
   Dark / Light Theme Toggle
   Toggles a CSS class on the body element */

// Select toggle button
const toggleButton = document.getElementById("theme-toggle");

// Listen for click event
toggleButton.addEventListener("click", () => {

    // Add or remove the "dark" class
    document.body.classList.toggle("dark");

});
