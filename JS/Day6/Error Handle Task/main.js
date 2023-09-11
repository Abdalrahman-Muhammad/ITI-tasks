try {
  console.log("hi");
  console.logg("hello");

} catch (error) {
  console.log("hi from catch");

} finally {

  console.log("finally")
}

console.log("out there")






// =====================Task1=========================

function show(a, b) {
  if (arguments.length != 2) {
    throw "Error"
  } else {
    console.log(arguments);

  }

}

show("mona", "Abdalrhman");

// =======================Task2==============================
var add = function (...num) {
  console.log(arguments)
  if (arguments.length == 0) {
    throw "erro"
  } else {
    for (var i = 0; i < arguments.length; i++) {
      if (typeof (arguments[i]) != "number") throw "error";
    }
    var addition = 0;
    for (var i = 0; i < num.length; i++) {
      addition += num[i]
    }
    return addition;
  }
}


var x = add(2, 5, 6);
console.log(x);

// ==========================Task3====================================


var reverse = function (...num) {
  return num.reverse();
}

var reversed = reverse(1, 5, 3, 8);
console.log(reversed)

// ============================================================================

function reverseNum(a, b, c) {
  var x = a + "" + b + "" + c;
  var arr = x.split("").reverse();
  console.log(arr)
}
reverseNum(1, 2, 3);














