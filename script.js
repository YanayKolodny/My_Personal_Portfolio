/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(function () {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1300); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

// Change the speed to whatever you want
// Personally i think 1000 is too much
// Try 800 or below, it seems not too much but it will make a difference


$('document').ready(function () {
  $('input[type="text"], input[type="email"], textarea').focus(function () {
    var background = $(this).attr('id');
    $('#' + background + '-form').addClass('formgroup-active');
    $('#' + background + '-form').removeClass('formgroup-error');
  });
  $('input[type="text"], input[type="email"], textarea').blur(function () {
    var background = $(this).attr('id');
    $('#' + background + '-form').removeClass('formgroup-active');
  });

  function errorfield(field) {
    $(field).addClass('formgroup-error');
    console.log(field);
  }

  $("#waterform").submit(function () {
    var stopsubmit = false;

    if ($('#name').val() == "") {
      errorfield('#name-form');
      stopsubmit = true;
    }
    if ($('#email').val() == "") {
      errorfield('#email-form');
      stopsubmit = true;
    }
    if (stopsubmit) return false;
  });

  $("#fullpage").fullpage({
    scrollBar: true,
    fitToSection: false,
  });
});

