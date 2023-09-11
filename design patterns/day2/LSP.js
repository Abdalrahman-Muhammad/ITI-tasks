class Bird {
  eat() {
    console.log(`i can eat`);
  }
}
class FlyableBird extends Bird {
  fly() {
    console.log(`i can fly`);
  }
}
class Eagle extends FlyableBird {}
class Duck extends Bird {}
