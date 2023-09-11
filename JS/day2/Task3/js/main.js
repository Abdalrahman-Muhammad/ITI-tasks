var circleCircumference, circleArea, sqrRootValue, cosResult;
var Area = function () {
  var raduis = Number(prompt("what the value of your circle raduis for Area?!"));
  while (isNaN(raduis)) {
    alert("Please Enter Vaild Number to continue");
    raduis = Number(prompt("what the value of your circle raduis for Area?!"));
  }
  circleArea = Math.PI * (raduis ** 2);
  return alert("total area of the circle is " + circleArea);
}
var circumference = function () {
  var raduis = Number(prompt("what the value of your circle raduis for circumference?!"));
  while (isNaN(raduis)) {
    alert("Please Enter Vaild Number to continue");
    raduis = Number(prompt("what the value of your circle raduis for circumference?!"));
  }
  circleCircumference = 2 * Math.PI * raduis;
  return alert("total circumference of the circle is " + circleCircumference);
}
var getSqrRoot = function () {
  var sqrRoot = Number(prompt("what is he value you want its square root?"));
  while (isNaN(sqrRoot)) {
    alert("Please Enter Vaild Number to continue");
    sqrRoot = Number(prompt("what is he value you want its square root?"));
  }
  sqrRootValue = Math.sqrt(sqrRoot);
  alert("Square root of " + sqrRoot + " is " + sqrRootValue);
}
var getCos = function () {
  var angle = Number(prompt("what is the angle you wan to calculate it's cos ?"));
  while (isNaN(angle)) {
    alert("Please enter a valid angle");
    angle = Number(prompt("what is the angle you wan to calculate it's cos ?"));
  }
  cosResult = Math.cos(angle * Math.PI / 180);
  alert("cos " + angle + " is " + cosResult);
}
Area();
circumference();
getSqrRoot();
getCos();



















