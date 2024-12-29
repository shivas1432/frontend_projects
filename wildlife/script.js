const profile = document.querySelector('.profile');
const dropdown = document.querySelector('.dropdown__wrapper');

// Toggle dropdown on profile click
profile.addEventListener('click', () => {
    if (dropdown.classList.contains('hide')) {
        dropdown.classList.remove('hide');
        dropdown.classList.add('dropdown__wrapper--fade-in');
    } else {
        dropdown.classList.remove('dropdown__wrapper--fade-in');
        dropdown.classList.add('hide');
    }
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
    const isClickInsideDropdown = dropdown.contains(event.target);
    const isProfileClicked = profile.contains(event.target);

    if (!isClickInsideDropdown && !isProfileClicked) {
        dropdown.classList.remove('dropdown__wrapper--fade-in');
        dropdown.classList.add('hide');
    }
});
