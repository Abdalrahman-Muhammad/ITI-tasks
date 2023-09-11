var input = prompt("Enter any thing you like!"); /*---------------my input-----------------*/
var result = 0;
/*-------loop through the input string-----*/
for (var i = 0; i < input.length; i++) {
  (input[i].toLowerCase() === "e") ? result++ : result;  /*----------if any letter is 'e' increment the result----------*/
}

alert("Number of the letter e is : " + result);          