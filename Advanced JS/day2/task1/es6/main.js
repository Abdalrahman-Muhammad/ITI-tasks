export class Shape {
  constructor(length, dia, l1, l2, l3) {
    if (this.constructor == Shape) {
      throw 'cant take instant of this';
    }
    this.length = length || 0;
    this.dia = dia || 0;
    this.l1 = l1 || 0;
    this.l2 = l2 || 0;
    this.l3 = l3 || 0;
  }
  calcArea() {
    throw 'you must over ride it';
  }
  calcPreimeter() {
    throw 'you must over ride it';
  }
  toString() {
    return `the area is: ${this.calcArea()}, the preimeter is: ${this.calcPreimeter()} `;
  }
}

export class Circle extends Shape {
  static count = 0;
  constructor(dia) {
    super(0, dia, 0, 0, 0)
    Circle.count++;
  }
  calcArea() {
    var area = Math.pow(this.dia, 2) * Math.PI;
    return area;
  }
  calcPreimeter() {
    var pre = this.dia * 2 * Math.PI;
    return pre;

  }
  static circleCount() {
    return `${this.count} circle created`;
  }
}

export class Triangle extends Shape {
  constructor(l1, l2, l3) {
    super(0, 0, l1, l2, l3)
  }
  calcArea() {

    var h = 0.5 * (this.l1 + this.l2 + this.l3);
    var doubleArea = h * (h - this.l1) * (h - this.l2) * (h - this.l3);
    var area = Math.sqrt(doubleArea);
    return area;
  }
  calcPreimeter() {
    var pre = this.l1 + this.l2 + this.l3;
    return pre;
  }
}

export class Square extends Shape {
  constructor(length) {
    super(length, 0, 0, 0, 0)
  }
  calcArea() {
    var area = Math.pow(this.length, 2);
    return area;
  }
  calcPreimeter() {
    var pre = (this.length) * 4;
    return pre;
  }
}



















