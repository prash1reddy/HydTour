   // Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Event listener for the toggle button
const toggleButton = document.getElementById('toggle-dark-mode');
toggleButton.addEventListener('click', toggleDarkMode);
  
  