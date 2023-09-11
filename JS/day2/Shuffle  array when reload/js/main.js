var suffleArray = function (array) {
  var suffeledArray = [];
  var usedIndex = [];
  var i = 0;
  while (i < array.length) {
    var randomNum = Math.floor(Math.random() * array.length);

    while (i == randomNum || usedIndex.includes(randomNum)) {
      randomNum = Math.floor(Math.random() * array.length);
    }

    usedIndex.push(randomNum);
    suffeledArray.push(array[randomNum]);
    i++
  }
  suffeledArray.splice(1, 2);
  return document.writeln("Reload the page and see what will happens [ " + suffeledArray + " ]");
}


var x = ["Mona", "Soad", "Abdelrhman", "Mohamed"];
suffleArray(x);
