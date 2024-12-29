function togglePopup(popupId) {
    var popup = document.getElementById(popupId);

    // Hide all popups
    var allPopups = document.querySelectorAll('.popup');
    allPopups.forEach(function(pp) {
        if (pp.id !== popupId) {
            pp.classList.add('hidden');
        }
    });

    // Toggle the selected popup
    popup.classList.toggle('hidden');
}

// Hide all popups when clicking outside of them
window.onclick = function(event) {
    // Check if the click is outside of any popup or its trigger
    if (!event.target.closest('.popup') && !event.target.closest('a')) {
        var allPopups = document.querySelectorAll('.popup');
        allPopups.forEach(function(pp) {
            pp.classList.add('hidden');
        });
    }
};
function showGameDetails(gameId) {
    // Your logic to show details of the game
    console.log("Show details for game ID:", gameId);
    // For example, you could display a modal or navigate to a new page
}