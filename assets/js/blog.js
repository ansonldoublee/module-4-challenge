document.addEventListener('DOMContentLoaded', function() {
    const blogPostsContainer = document.getElementById('blogPosts');
    const toggleModeButton = document.getElementById('toggleMode');
    const navbar = document.querySelector('nav.navbar');
    const clearStorageButton = document.getElementById('clearStorageButton');

    toggleModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        navbar.classList.toggle('navbar-dark');
        navbar.classList.toggle('bg-dark');
        navbar.classList.toggle('navbar-light');
        navbar.classList.toggle('bg-light');
    
        // Toggle dark mode for clear storage button
        clearStorageButton.classList.toggle('btn-dark');
        clearStorageButton.classList.toggle('btn-light');
    
        // Toggle dark mode for existing blog posts
        const blogPostCards = document.querySelectorAll('#blogPosts .card');
        blogPostCards.forEach(card => {
            card.classList.toggle('bg-dark');
            card.classList.toggle('text-light');
        });
    
        // Toggle dark mode for posted by text
        const postedByText = document.querySelectorAll('.card-subtitle.text-muted');
        postedByText.forEach(text => {
            text.classList.toggle('bg-dark');
            text.classList.toggle('text-light');
        });
    });

    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    if (posts.length === 0) {
        blogPostsContainer.innerHTML = '<p class="text-center">No blog posts available.</p>';
    } else {
        posts.forEach(post => {
            const postHTML = `
                <div class="col-md-6 mb-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.content}</p>     
                            <p class="card-text mb-2"> Posted by: ${post.username}</h6>
                        </div>
                    </div>
                </div>
            `;
            blogPostsContainer.insertAdjacentHTML('beforeend', postHTML);
        });
    }
});


// Select the clear storage button
const clearStorageButton = document.getElementById('clearStorageButton');

// Add click event listener
clearStorageButton.addEventListener('click', function() {
    // Clear local storage
    localStorage.clear();
    // Notify the user and confirm action
    var confirmation = confirm('Local storage cleared successfully! Do you want to reload the page?');
    // Check user confirmation
    if (confirmation) {
        // Reload the page
        location.reload();
    }
});