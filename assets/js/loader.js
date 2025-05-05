/**
 * Loader functionality from neumorphism-flat theme
 */
document.addEventListener('DOMContentLoaded', function() {
  // Wait for 1.5 seconds before starting to fade out the preloader
  setTimeout(function () {
    fadeOutPreloader(document.getElementById('preloader'), 69);
  }, 1500);
});

/**
 * Fades out the preloader element
 * @param {HTMLElement} element - The preloader element
 * @param {number} duration - The duration of each fade step in milliseconds
 */
function fadeOutPreloader(element, duration) {
  let opacity = 1;

  const interval = setInterval(function () {
    if (opacity <= 0) {
      element.style.zIndex = 0;
      element.style.opacity = 0;
      element.style.filter = 'alpha(opacity = 0)';

      // Allow vertical scroll
      document.documentElement.style.overflowY = 'auto';

      // Remove preloader div
      document.getElementById('preloader').remove();

      clearInterval(interval);
    } else {
      opacity -= 0.1;
      element.style.opacity = opacity;
      element.style.filter = 'alpha(opacity = ' + opacity * 100 + ')';
    }
  }, duration);
}