function outer() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function (x) {
      console.log(x);
    }(i))
  }

  return arr;
}

var result = outer();
console.log(result)


result[0];
result[1];
result[2];

//==============================
// function outer() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     (function(x) {
//       arr.push(function () {
//         console.log(x);
//       });
//     })(i);
//   }

//   return arr;
// }

// var result = outer();
// console.log(result)


// result[0]();
// result[1]();
// result[2]();








// function outer() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push((function (j) {
//       return function () {
//         console.log(j);
//       }
//     })(i))
//   }

//   return arr;
// }

// var result = outer();
// console.log(result)


// result[0]();
// result[1]();
// result[2]();
