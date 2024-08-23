$(document).ready(function() {
  // Navbar Opacity on Scroll
  $(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop();
    var opacity = scrollPosition / 100; // Adjust as needed
    $('.navbar').css('background-color', 'rgba(0, 0, 0, ' + opacity + ')');
  });






// Language Adaptation and Dark Mode
document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const userLanguage = navigator.language || navigator.userLanguage;

  if (userLanguage.toLowerCase() === 'pt-br') {
    console.log('Usuário está usando o idioma português (Brasil)');
  } else {
    console.log('Usuário está usando um idioma diferente do português (Brasil)');
  }

  function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const darkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkModeEnabled', darkModeEnabled);
  }

  const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
  if (darkModeEnabled) {
    body.classList.add('dark-mode');
  }
});


