$.fn.gallery = function () {
  $('img').click(function () {
    //first  create a new layer and append it to the body taking the hole screen size
    var myGallery = $('<div class = "gallery"></div>').css({
      'position': 'absolute',
      'top': '50%',
      'left': '50%',
      'background-color': 'rgba(0,0,0,0.9)',
      'width': '100vw',
      'height': '100vh',
      'transform': 'translate(-50%, -50%)',
    });
    $('body').append(myGallery);
    // creating the three buttons and appending them to the layer
    $('<input type="button" value = "&#8250;">').css({
      'position': 'relative',
      'top': '50%',
      'left': '80%',
      'width': '40px',
      "height": '40px',
      'background-color': '#04AA6D',
      'color': 'white',
      'border': "none",
      'border-radius': '50px',
      'cursor': 'pointer',
      'font-size': '20px',
      'transition': '0.5s'
    }).appendTo('.gallery').click(next).hover(function () {
      // over
      $(this).css({
        'background-color': '#ddd',
        'color': 'black'
      })
    }, function () {
      // out
      $(this).css({
        'background-color': '#04AA6D',
        'color': 'white'
      })
    }
    );


    $('<input type="button" value = "&#8249;">').css({
      'position': 'relative',
      'top': '50%',
      'left': '14%',
      'width': '40px',
      "height": '40px',
      'background-color': '#04AA6D',
      'color': 'white',
      'border': "none",
      'border-radius': '50px',
      'cursor': 'pointer',
      'font-size': '20px',
      'transition': '0.5s'

    }).appendTo('.gallery').click(back).hover(function () {
      // over
      $(this).css({
        'background-color': '#ddd',
        'color': 'black'
      })
    }, function () {
      // out
      $(this).css({
        'background-color': '#04AA6D',
        'color': 'white'
      })
    }
    );


    $('<input type="button" value = "close">').css({
      'position': 'relative',
      'top': '2%',
      'left': '10%',
      'width': '80px',
      "height": '40px',
      'background-color': '#04AA6D',
      'color': 'white',
      'border': "none",
      'border-radius': '50px',
      'cursor': 'pointer',
      'opacity': '0.3',
      'transition': '0.5s'
    }).appendTo('.gallery').click(exitImg).hover(function () {
      // over
      $(this).css({
        'background-color': '#ddd',
        'color': 'black',
        'opacity': '1'
      })
    }, function () {
      // out
      $(this).css({
        'background-color': '#04AA6D',
        'color': 'white',
        'opacity': '0.3'
      })
    }
    );
    //========================================================================================
    $('img').each(function () {
      // console.log($(this).attr('src'));
      $('<img>').attr('src', $(this).attr('src')).css({
        position: 'absolute',
        top: '50%',
        left: "50%",
        display: 'none',
        width: "800px",
        transform: 'translate(-50%,-50%)',
        'object-fit': 'cover'
      }).appendTo(".gallery")
    })
    $('.gallery').find('[src="' + $(this).attr('src') + '"]').slideDown(500).addClass("active");


    function next() {
      var activeImage = myGallery.find('.active');
      if (activeImage.next('img').length) {
        var nextImg = activeImage.next('img');
      } else {
        var nextImg = myGallery.find('img:eq(0)');
      }
      activeImage.removeClass('active').fadeOut(1000);
      nextImg.addClass('active').fadeIn(1000);

    }
    function back() {
      var activeImage = myGallery.find('.active');
      if (activeImage.prev('img').length) {
        var prevImg = activeImage.prev('img');
      } else {
        var prevImg = myGallery.find('img:last-child');
      }
      activeImage.removeClass('active').fadeOut(1000);
      prevImg.addClass('active').fadeIn(1000);

    }

    function exitImg() {
      myGallery.slideUp(500);

    }
  })
}



$('img').gallery();















