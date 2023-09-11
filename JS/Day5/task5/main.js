var img = document.images;
console.log(img);



function play() {
  img[i].setAttribute("src", "./images/marble2.jpg");
  if (i == 0) img[img.length - 1].setAttribute("src", "./images/marble1.jpg");
  if (i != 0) {
    img[i - 1].setAttribute("src", "./images/marble1.jpg");
  }
  i++;
  if (i == img.length) {
    i = 0;
  }

  // img[i].setAttribute("src", "./images/marble1.jpg");
  // i++


}
var i = 0;
var myInterval = setInterval(play, 500)

function stopFun() {
  clearInterval(myInterval)
}

function startAgain() {
  setInterval(play, 500);
}

