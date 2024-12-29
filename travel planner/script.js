  // Get all class-option elements
  const classOptions = document.querySelectorAll('.class-option');

  // Loop through each option and add click event listener
  classOptions.forEach(option => {
      option.addEventListener('click', () => {
          // Remove 'active' class from all options
          classOptions.forEach(opt => opt.classList.remove('active'));

          // Add 'active' class to the clicked option
          option.classList.add('active');
      });
  });