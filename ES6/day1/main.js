let firstValue = 5;
let secondValue = 10;

let myArray = [firstValue, secondValue];
console.log(myArray);

[secondValue, firstValue] = myArray;

console.log(firstValue);
console.log(secondValue);

//=====================================================================
// let getMaxValue = (...arr) => Math.max(...arr);


// let result = getMaxValue(10, 2, 50, 30, 7);
// console.log(result)

//==============================================
let getMaxMinValue = function (...arr) {
  let minValue = Math.min(...arr);
  let maxValue = Math.max(...arr);
  return `minmum value is: ${minValue}, maxmum value is: ${maxValue}`
};
let result = getMaxMinValue(10, 5, 3, 50, 37, 5, 9);
console.log(result)









//======================================================
let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let isAllString = fruits.every(fruit => typeof fruit === "string");
console.log(isAllString);

let elementStartwithA = fruits.some(fruit => fruit.startsWith("a"));
console.log(elementStartwithA);


let startsWithBS = fruits.filter(fruit => fruit.startsWith('b') || fruit.startsWith('s'));
console.log(startsWithBS);

let newArray = fruits.map(fruit => `I love ${fruit} very much`);
console.log(newArray);

newArray.forEach(fruit => console.log(fruit))