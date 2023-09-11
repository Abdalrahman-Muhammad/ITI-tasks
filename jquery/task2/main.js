// $.fn.gallary = function () {
//   $(this).click(function () {
//     $("[class = 'img']").fadeOut();
//     $(this).children('img').css({
//       'width': "1000px"
//     }).end().fadeIn(1000);

//     $(this).append('<input type="button" value="next" class="next">');
//     $("[class = 'img']").removeClass('img')



//   })
// }








$.fn.gallary = function () {
  $(this).click(function () {
    $("[class = 'img']").fadeOut();
    $(this).children('img').css({
      'width': "1000px"
    }).end().fadeIn(1000);
  })





}
$('.img').gallary();