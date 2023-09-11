var imges = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg", "./images/4.jpg", "./images/5.jpg", "./images/6.jpg"];
var imgesIndex = 0;
var imgTag = document.getElementById("pic");

function goNext() {
  if (imgesIndex < imges.length - 1) {
    imgesIndex++;
  } else {
    imgesIndex = 0;
  }
  imgTag.src = imges[imgesIndex];
}
function goBack() {
  if (imgesIndex > 0) {
    imgesIndex--;
  } else {
    imgesIndex = imges.length - 1;
  }
  imgTag.src = imges[imgesIndex];
}