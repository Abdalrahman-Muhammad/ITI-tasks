var text = document.getElementById("text");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
console.log(text);



function changeColor() {
  text.style.color = `rgb(${red.value},${green.value},${blue.value})`
}