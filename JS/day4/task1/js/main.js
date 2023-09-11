var input = document.getElementById("in-put");
var green = document.getElementById("p1");
var yellow = document.getElementById("p2");
var red = document.getElementById("p3");
var go = document.getElementById("go");
var steady = document.getElementById("steady");
var stopp = document.getElementById("stopp");






function changeColor() {
  if (input.value == 1) {
    green.className = "active1";
    go.style.color = "green";
    steady.style.color = "transparent";
    stopp.style.color = "transparent";

  } else if (input.value == 2) {
    yellow.className = "active2"

    go.style.color = "transparent";
    steady.style.color = "yellow";
    stopp.style.color = "transparent";

  } else if (input.value == 3) {
    red.className = "active3"
    go.style.color = "transparent";
    steady.style.color = "transparent";
    stopp.style.color = "red";
  } else {
    go.style.color = "transparent";
    steady.style.color = "transparent";
    stopp.style.color = "transparent";
    yellow.className = "";
    red.className = "";
    green.className = "";


  }
}




