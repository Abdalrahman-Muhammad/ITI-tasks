class Shape {
  constructor() {
    this.color = "red";
  }

  setColor(color) {
    this.color = color;
  }

  draw() {
    console.log(`Drawing a shape with color ${this.color}`);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}
