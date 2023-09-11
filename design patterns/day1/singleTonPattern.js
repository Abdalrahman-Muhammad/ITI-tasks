let instance = null;

class Printer {
  constructor(printerName, printerColor) {
    if (instance == null) {
      this.printerName = printerName;
      this.printerColor = printerColor;
      instance = this;
    } else {
      return instance;
    }
  }
}

let printerOne = new Printer("hp", "green");
let printerTwo = new Printer("hp", "red");

// printerTwo.printerName = "dell";
console.log(printerOne);
console.log(printerTwo);
