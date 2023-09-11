class Kia {
  constructor(engine, price) {
    this.engine = engine;
    this.price = price;
  }

  getDetails() {
    console.log(`car is KIA and price is ${this.price}`);
  }
}
class Fiat {
  constructor(engine, price) {
    this.engine = engine;
    this.price = price;
  }

  getDetails() {
    console.log(`car is KIA and price is ${this.price}`);
  }
}

class CarFactory {
  constructor(type) {
    this.type = type;
  }

  getCar() {
    switch (this.type) {
      case "Kia":
        return new Kia(2020, 100000);
      case "Fiat":
        return new Fiat(2020, 99999);
    }
  }
}

let myKia = new CarFactory("Kia");

console.log(myKia.getCar().getDetails());
