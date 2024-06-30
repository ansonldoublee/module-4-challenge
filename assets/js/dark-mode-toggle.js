// Blog Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggleModeButton = document.getElementById('toggleMode');
    toggleModeButton.addEventListener('click', function() {
        document.body.classList.toggle('blog-dark-mode');
    });
});

