arr = [20, 20, 50, 4, 6, 8, 30, 3, 1, 1, 1, 2, 2, 2, 2, 5, 50];
var wantedFunc = function (Array) {
  var sortedArray = Array.sort(function (a, b) {
    return a - b;
  });
  var notDublicated = [];
  for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] !== sortedArray[i - 1]) {
      notDublicated.push(sortedArray[i]);
    } else {
      notDublicated;
    }
  }
  return document.writeln("output : " + notDublicated[0] + " , " + notDublicated[notDublicated.length - 2]);
}
wantedFunc(arr);