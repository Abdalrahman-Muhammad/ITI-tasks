var num = Number(prompt("Waiting for u to enter an Number")); //-----------user input---------------------------------
while (isNaN(num)) {                               //---------validation to make sure the input is number ------------
  alert("Enter a NUMBER....");
  num = Number(prompt("Waiting for u to enter an Number"));
}

var fizzBuzzGame = function (input) {
  (input % 3 == 0 && input % 5 == 0) ? alert("fizz buzz") :    //------------- iam using ternary operator--------------
    (input % 3 == 0) ? alert("fizz") :
      (input % 5 == 0) ? alert("buzz") : alert("none");
}

fizzBuzzGame(num); //----------------calling my function--------------------