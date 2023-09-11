class Car {
  constructor(doors, color, wheels) {
    (this.doors = doors), (this.color = color), (this.wheels = wheels);
  }

  getCarColor() {
    console.log(`the car color is ${this.color}`);
  }
}

class Tipo extends Car {
  constructor(doors, color, wheels, year) {
    super(doors, color, wheels);
    this.years = year;
  }
}

const tipoOne = new Tipo(4, "red", 4, 2021);
console.log(tipoOne);
