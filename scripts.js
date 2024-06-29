$(document).ready(function() {
  // Navbar Opacity on Scroll
  $(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop();
    var opacity = scrollPosition / 100; // Adjust as needed
    $('.navbar').css('background-color', 'rgba(0, 0, 0, ' + opacity + ')');
  });

  // Balloon Gallery Slider
  $('#balloonGallery').slick({
    slidesToShow: 2, // Shows 2 slides at a time on desktop
    slidesToScroll: 1, // Advances 1 slide at a time
    dots: false, // Disables navigation dots
    arrows: true, // Enables navigation arrows
    responsive: [
      {
        breakpoint: 767, // Settings for devices with a maximum width of 767px (mobile devices)
        settings: {
          slidesToShow: 1, // Shows 1 slide at a time on mobile
          slidesToScroll: 1, // Advances 1 slide at a time on mobile
          arrows: true, // Enables navigation arrows on mobile
        }
      }
    ]
  });

  // Animation on Element Visibility
  function animateIfVisible(element, animationClass) {
    var elem = $(element);
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = elem.offset().top;
    var elemBottom = elemTop + elem.height();

    if (elemBottom <= docViewBottom && elemTop >= docViewTop && elem.css('opacity') === '0') {
      elem.addClass(animationClass);
    }
  }

  $(window).scroll(function() {
    animateIfVisible('.div2title', 'slideInLeft');
  });

  animateIfVisible('.div2title', 'slideInLeft'); // Check initially when the page loads

  // Slick Slider for Gallery
  $('.Galeriabalao').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// Slide Show
document.addEventListener('DOMContentLoaded', function () {
  const slidesList = document.querySelector(".slides-list");
  let currentIndex = 0;

  function showSlide(index) {
    slidesList.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slidesList.children.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slidesList.children.length) % slidesList.children.length;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 4000); // Adjust interval as needed
});

// Scroll to Section
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.buttons-container button').forEach(function (button) {
    button.addEventListener('click', function () {
      var targetId = button.getAttribute('data-target');
      var targetSection = document.getElementById(targetId);
      var targetPosition = targetSection.offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
});

// Cookie Popup
document.addEventListener('DOMContentLoaded', function () {
  const cookiePopup = document.getElementById('cookie-popup');
  const acceptCookiesButton = document.getElementById('accept-cookies');

  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  if (!cookiesAccepted) {
    cookiePopup.style.display = 'block';
  }

  acceptCookiesButton.addEventListener('click', function () {
    cookiePopup.style.display = 'none';
    localStorage.setItem('cookiesAccepted', true);
  });
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

// Show/Hide Sections
document.querySelector('.btn-secondary').addEventListener('click', function() {
  var target = this.getAttribute('data-target');
  
  document.querySelectorAll('.section').forEach(function(section) {
    section.style.display = 'none';
  });

  var targetElement = document.getElementById(target);
  if (targetElement) {
    targetElement.style.display = 'block';
  } else {
    console.error("Elemento com o ID " + target + " não encontrado.");
  }
});

// Faixas Slider
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.faixas-slider');
  const items = document.querySelectorAll('.faixa-item');
  let index = 0;

  if (!slider || items.length === 0) {
    console.error('Slider or items not found');
    return;
  }

  function showNextItem() {
    index = (index + 1) % items.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(showNextItem, 3000);
});

$(document).ready(function() {
  // Função para animação ao rolar
  function animateIfVisible(element, animationClass) {
    var elem = $(element);
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = elem.offset().top;
    var elemBottom = elemTop + elem.height();

    if (elemBottom <= docViewBottom && elemTop >= docViewTop && elem.css('opacity') === '0') {
      elem.addClass(animationClass);
    }
  }

  $(window).scroll(function() {
    animateIfVisible('.div2title', 'slideInLeft');
  });

  animateIfVisible('.div2title', 'slideInLeft'); // Verificação inicial ao carregar a página

  // Slick Slider para Galeria de Balões
  $('.Galeriabalao').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// Faixas Slider
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.faixas-slider');
  const items = document.querySelectorAll('.faixa-item');
  let index = 0;

  if (!slider || items.length === 0) {
    console.error('Slider or items not found');
    return;
  }

  function showNextItem() {
    index = (index + 1) % items.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(showNextItem, 3000);
});

// JavaScript para a Galeria de Slides
document.addEventListener('DOMContentLoaded', function () {
  const slidesList = document.querySelector(".slides-list");
  let currentIndex = 0;

  function showSlide(index) {
    slidesList.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slidesList.children.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slidesList.children.length) % slidesList.children.length;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 4000); // Ajustar intervalo conforme necessário
});

