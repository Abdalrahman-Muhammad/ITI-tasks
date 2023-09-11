


function* fibonacci(n) {
  let previous = 0;
  let current = 1;
  yield previous;
  yield current;
  while (n > current) {
    yield next = previous + current;
    previous = current;
    current = next;
  }
}

let myFn = fibonacci(10);

console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());
console.log(myFn.next());


























// let person = {
//   fname: "ahmed",
//   lname: "muhammad"
// }

// person[Symbol.iterator] = iterate;


// function iterate() {
//   let that = this;
//   let keys = Object.keys(this);
//   let count = 0;
//   return {
//     next: function () {
//       if (count == keys.length) {
//         return {
//           value: undefined,
//           done: true
//         }
//       } else {
//         return {
//           value: that[keys[count++]],
//           done: false
//         }
//       }
//     }
//   }

// }


// for (let keys of person) {
//   console.log(keys);
// }









