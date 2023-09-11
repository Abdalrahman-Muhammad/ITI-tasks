var arr = [1, 5, 6, 8, 7, 9, 3, 4, 2, 20, 18];

var findTheSecondGreatestLowest = function (ar) {
  ar.sort(function (a, b) {
    return a - b;
  });
  return document.writeln("Output : " + ar[1] + " , " + ar[ar.length - 2])
  console.log(ar);
}

findTheSecondGreatestLowest(arr);