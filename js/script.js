var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  $(document).ready(function(){
    $('.counter').counterUp({
        delay: 1.7,
        time: 1000
    });
});
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
(function ($) {
  // USE STRICT
  "use strict";

  $(".form-radio .radio-item").click(function(){
      //Spot switcher:
      $(this).parent().find(".radio-item").removeClass("active");
      $(this).addClass("active");
  });

  $('#time').parent().append('<ul class="list-item" id="newtime" name="time"></ul>');
  $('#time option').each(function(){
      $('#newtime').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
  });
  $('#time').remove();
  $('#newtime').attr('id', 'time');
  $('#time li').first().addClass('init');
  $("#time").on("click", ".init", function() {
      $(this).closest("#time").children('li:not(.init)').toggle();
  });

  $('#food').parent().append('<ul class="list-item" id="newfood" name="food"></ul>');
  $('#food option').each(function(){
      $('#newfood').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
  });
  $('#food').remove();
  $('#newfood').attr('id', 'food');
  $('#food li').first().addClass('init');
  $("#food").on("click", ".init", function() {
      $(this).closest("#food").children('li:not(.init)').toggle();
  });
  
  var allOptions = $("#time").children('li:not(.init)');
  $("#time").on("click", "li:not(.init)", function() {
      allOptions.removeClass('selected');
      $(this).addClass('selected');
      $("#time").children('.init').html($(this).html());
      allOptions.toggle();
  });

  var FoodOptions = $("#food").children('li:not(.init)');
  $("#food").on("click", "li:not(.init)", function() {
      FoodOptions.removeClass('selected');
      $(this).addClass('selected');
      $("#food").children('.init').html($(this).html());
      FoodOptions.toggle();
  });
})(jQuery);

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

