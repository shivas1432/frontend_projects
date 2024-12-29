const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  e.target.matches('.next') && slider.append(items[0]);
  e.target.matches('.prev') && slider.prepend(items[items.length - 1]);
}

document.addEventListener('click', activate, false);

// Variables to keep track of the currently playing audio and its play button
let currentAudio = null;
let currentPlayButton = null;

function playSound(audioId, button) {
  // Pause and reset the current audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentPlayButton.style.display = 'flex';
    currentPlayButton.nextElementSibling.style.display = 'none';
  }

  // Play the new audio
  const audio = document.getElementById(audioId);
  const playButton = button;
  const pauseButton = playButton.nextElementSibling;

  if (audio) {
    audio.currentTime = 0;
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'flex';
    currentAudio = audio;
    currentPlayButton = playButton;
  }
}

function pauseSound(audioId, button) {
  // Pause the selected audio
  const audio = document.getElementById(audioId);
  const pauseButton = button;
  const playButton = pauseButton.previousElementSibling;

  if (audio) {
    audio.pause();
    pauseButton.style.display = 'none';
    playButton.style.display = 'flex';

    if (currentAudio === audio) {
      currentAudio = null;
      currentPlayButton = null;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const albumsContainer = document.querySelector('.albums');
  const showMoreButton = document.getElementById('show-more');
  
  let scrollAmount = 0;
  const itemsToShow = 6; // Number of items visible at once
  const itemWidth = 150; // Width of each item
  const gap = 10; // Gap between items

  // Calculate total width to scroll
  const totalWidth = (itemsToShow + 1) * (itemWidth + gap);

  // Event listener for the "Show More" button
  showMoreButton.addEventListener('click', () => {
      scrollAmount += totalWidth;
      if (scrollAmount >= albumsContainer.scrollWidth) {
          scrollAmount = 0; // Loop back to the start
      }
      albumsContainer.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
      });
  });
});

const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeUpBtn = document.getElementById('volumeUpBtn');
const volumeDownBtn = document.getElementById('volumeDownBtn');

playPauseBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️ Pause';
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = '▶️ Play';
  }
});

volumeUpBtn.addEventListener('click', () => {
  if (audioPlayer.volume < 1) {
    audioPlayer.volume = Math.min(audioPlayer.volume + 0.1, 1);
  }
});

volumeDownBtn.addEventListener('click', () => {
  if (audioPlayer.volume > 0) {
    audioPlayer.volume = Math.max(audioPlayer.volume - 0.1, 0);
  }
});


