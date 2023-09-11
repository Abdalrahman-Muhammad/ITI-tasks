var Rectaingle = function (width, height) {
  this.width = width;
  this.height = height;
}
Rectaingle.prototype.Area = function () {
  return this.width * this.height;
};
Rectaingle.prototype.Perimeter = function () {
  return this.width * this.height;
}

Rectaingle.prototype.toString = function () {
  return `Rectaingle Area: ${this.Area()}, Rectaingle Perimeter: ${this.Perimeter()} `
}
var rec01 = new Rectaingle(100, 200);