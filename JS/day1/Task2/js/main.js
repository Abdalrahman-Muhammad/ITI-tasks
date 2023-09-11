var value;
var sum = 0;

while (value != 0 && sum < 100) {
  value = Number(prompt("Please Enter a number"));

  while (isNaN(value)) {
    alert("Please enter a valid Number");
    value = Number(prompt("Please Enter a number"));
  }
  sum = sum + value;

}

alert("Total sum is " + sum);