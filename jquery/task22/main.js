$.fn.hamada = function () {
  $('img').click(function () {


    var newLayer = $('<div class="layer"></div>').css({
      width: '100vw',
      height: '100vh',
      'background-color': 'rgba(0,0,0,0.5)',
      position: 'absolute',
      top: '0'
    }).appendTo('body');


    $('<input type="button" value="next" class="nxtBtn">').css({
      position: 'absolute',
      top: '90%',
      left: '60%',
      width: '100px',
      height: '25px',
      transform: 'translate(-50%,-50%)',
      outline: 'none',
      border: "none",
      "background-color": 'black',
      color: 'white',
      transition: '0.5s'
    }).appendTo('.layer').hover(function () {
      // over
      $(this).css({
        "background-color": '#EEE',
        color: 'black'
      })
    }, function () {
      // out
      $(this).css({
        "background-color": 'black',
        color: 'white'
      })
    }
    ).click(next);

    $('<input type="button" value="Previous" class="preBtn">').css({
      position: 'absolute',
      top: '90%',
      left: '40%',
      width: '100px',
      height: '25px',
      transform: 'translate(-50%,-50%)',
      outline: 'none',
      border: "none",
      "background-color": 'black',
      color: 'white',
      transition: '0.5s'
    }).appendTo('.layer').hover(function () {
      // over
      $(this).css({
        "background-color": '#EEE',
        color: 'black'
      })
    }, function () {
      // out
      $(this).css({
        "background-color": 'black',
        color: 'white'
      })
    }
    ).click(back);

    $('<input type="button" value="close" class="close">').css({
      position: 'absolute',
      top: '90%',
      left: '50%',
      width: '100px',
      height: '25px',
      transform: 'translate(-50%,-50%)',
      outline: 'none',
      border: "none",
      "background-color": 'black',
      color: 'white',
      transition: '0.5s'
    }).appendTo('.layer').hover(function () {
      // over
      $(this).css({
        "background-color": '#EEE',
        color: 'black'
      })
    }, function () {
      // out
      $(this).css({
        "background-color": 'black',
        color: 'white'
      })
    }
    ).click(exit);


    console.log(this);
    console.log($('img'))

    // console.log($('img').attr('src'));
    $('img').each(function () {
      console.log($(this).attr('src'));
      $('<img>').attr('src', $(this).attr('src')).appendTo('.layer').css({
        position: 'absolute',
        left: '50%',
        top: '44%',
        transform: 'translate(-50%,-50%)',
        width: '800px',
        height: 'auto',
        display: "none"
      })
    });

    $('.layer').find('[src="' + $(this).attr('src') + '"]').fadeIn().addClass('active');


    function exit() {
      $('.layer').slideUp();
    }


    function next() {

      var active = $('.layer').find('.active');
      if (active.next('img').length) {
        var nxtImg = active.next('img');
      } else {
        var nxtImg = $('.layer').find('img:eq(0)');
      }
      active.fadeOut().removeClass('active');
      nxtImg.fadeIn().addClass('active');
    }

    function back() {

      var active = $('.layer').find('.active');
      if (active.prev('img').length) {
        var preImg = active.prev('img');
      } else {
        var preImg = $('.layer').find('img:last-child');
      }
      active.fadeOut().removeClass('active');
      preImg.fadeIn().addClass('active');
    }
  })
}

$('img').hamada();