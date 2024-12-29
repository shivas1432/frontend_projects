document.getElementById('toggleBtn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    // Check the current position and toggle accordingly
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-280px'; // Hide the sidebar
    } else {
        sidebar.style.left = '0px'; // Show the sidebar
    }
});

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    
    // Check if the clicked target is not the sidebar or the toggle button
    if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
        // Hide the sidebar if it is open
        if (sidebar.style.left === '0px') {
            sidebar.style.left = '-280px';
        }
    }
});

function Navigate(index) {
    console.log('Navigate to section:', index);
}

document.getElementById("year").innerHTML = new Date().getFullYear();

const sliderWrapper = document.querySelector('.slider-wrapper');
const thumbnails = document.querySelectorAll('.thumbnail');
const listItems = document.querySelectorAll('.breakfast-list li');
let currentIndex = 0;
let autoSlideInterval;

// Function to update slide position
function updateSlidePosition() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to update active thumbnail
function updateActiveThumbnail() {
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.classList.toggle('active', index === currentIndex);
    });
}

// Function to start auto-slider
function startAutoSlider() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % thumbnails.length; // Loop back to start
        updateSlidePosition();
        updateActiveThumbnail();
    }, 3000); // Auto-slide every 3 seconds
}

// Function to stop auto-slider
function stopAutoSlider() {
    clearInterval(autoSlideInterval);
}

// Function to show slide based on index
function showSlide(index) {
    currentIndex = index;
    updateSlidePosition();
    updateActiveThumbnail();
}

// Add click event listeners to thumbnails
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        stopAutoSlider(); // Stop the auto-slider when clicking on a thumbnail
        showSlide(index); // Show the slide corresponding to the clicked thumbnail
        startAutoSlider(); // Restart auto-slider after clicking
    });
});

// Add click event listeners to list items
listItems.forEach(item => {
    item.addEventListener('click', () => {
        const index = parseInt(item.getAttribute('data-index'));
        stopAutoSlider(); // Stop the auto-slider when clicking on a list item
        showSlide(index); // Show the slide corresponding to the clicked list item
        startAutoSlider(); // Restart auto-slider after clicking
    });
});

// Initialize the first slide
showSlide(0);

// Start the auto-slider on page load
startAutoSlider();





