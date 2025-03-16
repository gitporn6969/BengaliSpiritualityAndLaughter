// Custom JavaScript for additional interactivity

// Function to fetch and display content from a text file
function fetchContent(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data.replace(/\n/g, '<br>');
        })
        .catch(error => console.error('Error fetching content:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    // Fetch jokes and quotes
    fetchContent('bengali_jokes.txt', 'jokes-content');
    fetchContent('philosophical_quotes.txt', 'quotes-content');

    // Fetch spiritual life content and contact info
    fetchContent('spiritual_life.txt', 'spiritual-content');
    fetchContent('contact_info.txt', 'contact-content');

    // Example of adding a simple animation on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}); 