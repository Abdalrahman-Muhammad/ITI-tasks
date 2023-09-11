//
// let instance = null;
// class CEO {
//   constructor(name, age, adress) {
//     if (instance == null) {
//       this.name = name;
//       this.age = age;
//       this.adress = adress;
//       instance = this;
//     } else {
//       return instance;
//     }
//   }
// }
//single ton pattern
let instance = null;
class CEO {
  constructor(name, age, adress) {
    if (instance == null) {
      let _name = name;
      let _age = age;
      let _adress = adress;
      // getter
      this.getName = () => _name;
      this.getAge = () => _age;
      this.getAdress = () => _adress;
      //setter
      this.setName = (name) => {
        _name = name;
      };
      this.setAge = (age) => {
        _age = age;
      };
      this.setAdress = (adress) => {
        _adress = adress;
      };
      instance = this;
    } else {
      return instance;
    }
  }
}

let ceo = new CEO("Abdalrhman", 25, "Menoufia");
console.log(ceo.getName());
console.log(ceo.getAge());
console.log(ceo.getAdress());
console.log(`---------------------------------------`);

let ceo2 = new CEO("mahmoud", 33, "cairo");

console.log(ceo2.getName());
console.log(ceo2.getAge());
console.log(ceo2.getAdress());
console.log(`---------------------------------------`);

ceo2.setName("Mahmoud");
console.log(ceo.getName());
console.log(ceo2.getName());

// constructor design pattern

class Veshical {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}
class Car extends Veshical {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }
}
class VeshicalFactory {
  insertCar(make, model, year, numDoors) {
    return new Car(make, model, year, numDoors);
  }
}
const factory = new VeshicalFactory();
factory.insertCar("Toyta", "camary", 2023, 4);

//--------------------Sratgegy Pattern------------------------------

class AttackPlan {
  changePlan(plan) {
    console.log(`attack plan applied`);
  }
}
class DeffensivePlan {
  changePlan(plan) {
    console.log(`defensive plan applied`);
  }
}
class MeduimPlan {
  changePlan(plan) {
    console.log(`meduim plan applied`);
  }
}

class Game {
  setStrategy(plan) {
    this.plan = plan;
  }
  getAppliedPlan(plan) {
    return this.plan.changePlan(plan);
  }
}

var plan = {
  top: 3,
  middle: 4,
  deffense: 3,
};
const attackPlan = new AttackPlan();
const deffensivePlan = new DeffensivePlan();
const meduimPlan = new MeduimPlan();
const game = new Game();

game.setStrategy(attackPlan);
game.getAppliedPlan(plan);

//--------------------------------------------------------------

// Component interface
class Coffee {
  getCost() {}

  getDescription() {}
}

// Concrete component
class SimpleCoffee extends Coffee {
  getCost() {
    return 1;
  }

  getDescription() {
    return "Simple Coffee";
  }
}

// Decorator class
class CoffeeDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost();
  }

  getDescription() {
    return this.coffee.getDescription();
  }
}

// Concrete decorators
class MilkDecorator extends CoffeeDecorator {
  getCost() {
    return this.coffee.getCost() + 0.5;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, Milk`;
  }
}

class VanillaDecorator extends CoffeeDecorator {
  getCost() {
    return this.coffee.getCost() + 0.75;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, Vanilla`;
  }
}

// Example usage:

// Create a simple coffee
const simpleCoffee = new SimpleCoffee();
console.log(simpleCoffee.getDescription()); // Output: Simple Coffee
console.log(simpleCoffee.getCost()); // Output: 1

// Add milk to the simple coffee
const coffeeWithMilk = new MilkDecorator(simpleCoffee);
console.log(coffeeWithMilk.getDescription()); // Output: Simple Coffee, Milk
console.log(coffeeWithMilk.getCost()); // Output: 1.5

// Add vanilla to the simple coffee with milk
const coffeeWithMilkAndVanilla = new VanillaDecorator(coffeeWithMilk);
console.log(coffeeWithMilkAndVanilla.getDescription()); // Output: Simple Coffee, Milk, Vanilla
console.log(coffeeWithMilkAndVanilla.getCost()); // Output: 2.25
