function Shape(length, dia, l1, l2, l3) {
  if (this.constructor === Shape.prototype.constructor) {
    throw 'cant take instant of this'
  }
  this.length = length || 0;
  this.dia = dia || 0;
  this.l1 = l1 || 0;
  this.l2 = l2 || 0;
  this.l3 = l3 || 0;
}
Shape.prototype.calcArea = function () {
  throw 'you must over ride it';
}
Shape.prototype.calcPreimeter = function () {
  throw 'you must over ride it';
}
Shape.prototype.toString = function () {
  return `the area is: ${this.calcArea()}, the preimeter is: ${this.calcPreimeter()} `
}



var count = 0;
function Circle(dia) {
  Shape.call(this, 0, dia, 0, 0, 0);
  count++;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;

Circle.prototype.calcArea = function () {
  var area = Math.pow(this.dia, 2) * Math.PI;
  return area;
}

Circle.prototype.calcPreimeter = function () {
  var pre = this.dia * 2 * Math.PI;
  return pre;

}
Circle.circleCount = function () {
  return count;
}

console.log(Circle.prototype);

var circle0 = new Circle(10);
var circle1 = new Circle(10);
var circle2 = new Circle(10);
var circle3 = new Circle(10);
var circle4 = new Circle(10);
console.log(Circle.circleCount());
// var area = circle.calcPreimeter();
// console.log(area)



function Triangle(l1, l2, l3) {
  Shape.call(this, 0, 0, l1, l2, l3);
}
Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;
Triangle.prototype.calcArea = function () {

  var h = 0.5 * (this.l1 + this.l2 + this.l3);
  var doubleArea = h * (h - this.l1) * (h - this.l2) * (h - this.l3)
  var area = Math.sqrt(doubleArea);
  return area;
}
Triangle.prototype.calcPreimeter = function () {
  var pre = this.l1 + this.l2 + this.l3;
  return pre;
}

var tr = new Triangle(3, 4, 5);
var pre = tr.calcArea();
console.log(tr.toString())





function Square(length) {
  Shape.call(this, length, 0, 0, 0, 0);
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.calcArea = function () {
  var area = Math.pow(this.length, 2);
  return area;
}
Square.prototype.calcPreimeter = function () {
  var pre = (this.length) * 4;
  return pre;
}




