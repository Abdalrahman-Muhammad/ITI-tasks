var upperCase = function () {
  var input = prompt("Enter a string ");
  var arr = input.split(" "); // convert string to aaray



  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  var output = arr.join(" ");

  return alert(output);

}

upperCase();