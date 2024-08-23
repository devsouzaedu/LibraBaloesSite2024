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

  // Inicialização do Slick Slider para Special Shapes
  $('.special-shapes-slider').slick({
    dots: true,  // Mostra os pontos de navegação
    infinite: true,  // Loop infinito
    speed: 500,  // Velocidade da transição
    slidesToShow: 1,  // Quantidade de slides mostrados por vez
    slidesToScroll: 1,  // Quantidade de slides que se movem por vez
    autoplay: true,  // Auto-play dos slides
    autoplaySpeed: 2000,  // Velocidade do auto-play
    adaptiveHeight: true  // Adapta a altura ao conteúdo do slide
  });
});


$(document).ready(function() {
  // Inicializar o slider para a seção de "Special Shapes"
  $('.special-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>'
  });
});

$(document).ready(function() {
  // Inicialização do slider para Voo em Grupo
  $('.gallery-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

$(document).ready(function() {
  // Inicialização do slider para Banners Para Balão
  $('.gallery-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
