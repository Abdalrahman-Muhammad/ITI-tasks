$('#container').hover(function () {

  $(this).animate({
    'left': '0'
  }, 1000)
}, function () {

  $(this).animate({
    'left': '-500px'
  }, 1000)
}
);
$('h2').click(function (e) {
  $('ul').slideUp(1000);
  $(this).next('ul').slideToggle(1000);

});