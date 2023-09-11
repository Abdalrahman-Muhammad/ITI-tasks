var myText = "hello from the other side, how are you doing tonight";

var myArray = myText.split("");



// var loopTimer;


// function frameLooper() {
//   if (myArray.length > 0) {
//     document.getElementById("paragraph").innerHTML += myArray.shift();
//   } else {
//     // clearTimeout(loopTimer);
//     setTimeout(function () {
//       window.close()
//     }, 1000)
//     // return false;
//   }
//   setTimeout(frameLooper, 70);
// }
// frameLooper();


function frameLooper() {

  setInterval(function () {
    if (myArray.length > 0) {
      document.getElementById("paragraph").innerHTML += myArray.shift();
    } else {
      // clearTimeout(loopTimer);
      setTimeout(function () {
        window.close()
      }, 1000)
      // return false;
    }
  }, 70)

}
frameLooper();