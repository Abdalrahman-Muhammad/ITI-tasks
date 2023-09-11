let person = {
  pname: "ahmed",
  address: "cairo",
  age: 30
}

//handler
let target = {
  get: function (obj, prop) {
    if (!obj[prop]) throw "Not existing property"
    return obj[prop];
  },
  set: function (obj, prop, val) {
    if (prop === "pname" && val.length !== 7) throw "name must be string of 7 characters";
    if (prop === "address" && typeof val !== "string") throw "address must be string";
    if (prop === "age" && typeof val !== "number" || val < 25 || val > 60) throw "error"
    obj[prop] = val;
  }
};


let personProxy = new Proxy(person, target);

personProxy.age = 24;
console.log(personProxy.age);

