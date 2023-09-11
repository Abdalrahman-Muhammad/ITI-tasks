var theValues = [];
for (var i = 0; i < 5; i++) {
  var input = Number(prompt("please enter some numbers"));
  while (isNaN(input)) {
    alert("Please enter VAILD number");
    var input = Number(prompt("please enter some numbers"));
  }
  theValues.push(input);
}
document.writeln("<p>u've entered values of  <span>" + theValues + "</span></p>");

var sortArrayAsc = function (array) {
  return document.writeln("<p>values after being sorted ascending <span>" + array.sort(function (a, b) { return a - b; }) + "</span></p>");
}
var sortArrayDes = function (array) {
  return document.writeln("<p>values after being sorted descending  <span>" + array.sort(function (a, b) { return b - a }) + "</span></p>");
}

sortArrayAsc(theValues);
sortArrayDes(theValues);
