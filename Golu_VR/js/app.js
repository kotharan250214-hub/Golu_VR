// Global Application Logic & Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  const sceneEl = document.querySelector('a-scene');

  // Enable audio autoplay on user interaction (browsers block autoplay by default)
  const enableAudio = () => {
    const ambientSound = document.querySelector('#ambient-sound');
    if (ambientSound && ambientSound.paused) {
      ambientSound.play().catch(err => console.log("Audio waiting for user gesture:", err));
    }
    window.removeEventListener('click', enableAudio);
    window.removeEventListener('touchstart', enableAudio);
  };

  window.addEventListener('click', enableAudio);
  window.addEventListener('touchstart', enableAudio);

  // Hide 2D UI overlay when entering VR mode on Meta Quest
  if (sceneEl) {
    sceneEl.addEventListener('enter-vr', () => {
      const overlay = document.getElementById('ui-overlay');
      if (overlay) overlay.style.display = 'none';
    });

    sceneEl.addEventListener('exit-vr', () => {
      const overlay = document.getElementById('ui-overlay');
      if (overlay) overlay.style.display = 'block';
    });
  }
});