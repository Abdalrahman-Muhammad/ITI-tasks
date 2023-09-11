var input = prompt("Please Enter string");
while (!isNaN(input)) {
  alert("please enter a string");
  input = prompt("Please Enter string");
}
var character = prompt("please enter acharacter to search for");
while (character.length != 1 || !isNaN(character)) {
  alert("Please enter ONE VALID character");
  character = prompt("please enter acharacter to search for");
}
var result = [];
var getLetter = function () {
  for (var i = 0; i < input.length; i++) {
    (input.charAt(i).toLowerCase() == character.toLowerCase()) ? result.push(i) : result;
  }
  return document.writeln("[" + result + "]");
}
getLetter();