//------my container-------------
var container = [];
//------loop on the array-------
for (var i = 0; i < 3; i++) {
  //---------the pused input--------
  var input = Number(prompt("please enter an number"));
  //---------validation to accept numbers only-------
  while (isNaN(input)) {
    alert("Please Enter A Vaild Number");
    input = Number(prompt("please enter an number"));
  }
  container.push(input)
}

var add = function () {
  var addResult = 0;
  for (var i = 0; i < container.length; i++) {
    addResult += container[i];
  }
  return document.writeln("<div><p>Sum of three Values <span>" + container.join(" + ") + " = " + addResult + "</span></p>");
}

var multiply = function () {
  var multiplyResult = 1;
  for (var i = 0; i < container.length; i++) {
    multiplyResult *= container[i];
  }
  return document.writeln("<p>Multiplication of three Values <span>" + container.join(" * ") + " = " + multiplyResult + "</span></p>");
}

var division = function () {
  var divisonResult = container[0];
  for (var i = 1; i < container.length; i++) {
    divisonResult = divisonResult / container[i];
  }
  return document.writeln("<p>division of the 3 values <span>" + container.join(" / ") + " = " + divisonResult + "</span></p></div>");
}
document.writeln("<h1>Adding--Multiplying--and dividing 3 values</h1> <hr>")
add();
multiply();
division();


