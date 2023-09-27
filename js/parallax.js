var app = document.getElementById('typed');

var typewriter = new Typewriter(app, {
    strings: ['Hello There :)', 'I am Aditya.', 'Lets Get Started!!'],
    autoStart: true,
    loop: true,
    delay: 100
});

$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
});
