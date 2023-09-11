var canv = document.querySelector("canvas");
var ctx = canv.getContext("2d");



function play() {
  var clr = document.getElementById("myColor").value;
  ctx.strokeStyle = clr
  ctx.clearRect(0, 0, 1000, 500)
  for (var i = 0; i < 50; i++) {
    var x = parseInt(Math.random() * 1000);
    var y = parseInt(Math.random() * 500);
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}