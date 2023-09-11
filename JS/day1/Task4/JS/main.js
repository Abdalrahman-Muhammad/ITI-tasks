var input = prompt("Enter a string Please");                           // my input
var isCaseSensitive = confirm("Consider case Sensitivity?!");          // variable for condition check
var reversedInput = input.split("").reverse().join("");                // I am reversing my input by turning it into array

if (isCaseSensitive) {
  (input === reversedInput) ? alert(input + " is palindrome") : alert(input + " is NOT palindrome");
} else {
  (input.toUpperCase() === reversedInput.toUpperCase()) ? alert(input + " is palindrome") : alert(input + " is NOT palindrome");
}

