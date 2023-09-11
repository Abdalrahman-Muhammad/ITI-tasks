class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  displayName() {
    console.log(this.name);
  }
}
class AccountantEmployee extends Employee {
  calculateEmployeSalary() {
    //calculate salary
    return 10000;
  }
}
class HrEmoployee extends Employee {
  generateReports() {
    console.log(`report generated`);
  }
}

class TechnicalEmployee extends Employee {
  fixBug() {
    //fix bug
    console.log(`big fixed`);
  }
}
