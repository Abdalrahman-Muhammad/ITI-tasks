var uppercase = function () {
  var inputStr = prompt("please enter ur string ");
  var toArray = inputStr.split(" ");
  for (var i = 0; i < toArray.length; i++) {
    toArray[i] = toArray[i].charAt(0).toUpperCase() + toArray[i].slice(1);
  }
  var outputstr = toArray.join(" ");
  console.log(outputstr);
}

uppercase();