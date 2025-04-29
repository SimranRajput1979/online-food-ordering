{addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.getElementById('about');
  const aboutButton = document.getElementById('about-button');

  aboutButton.addEventListener('click', function() {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
});}    